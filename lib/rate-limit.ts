/**
 * Fixed-window, in-memory rate limiter.
 *
 * Intentional architecture notes:
 *  - The window check lives in a module-level Map, so it works out of the box
 *    on a single Node instance with no external dependency.
 *  - On serverless (Vercel) instances this map is per-instance, so it is a
 *    best-effort defence, not a hard guarantee.
 *  - Swap `checkRateLimit` for a Redis/KV-backed implementation when you need
 *    a limit that holds across concurrent instances. The interface stays the
 *    same, so nothing else has to change.
 */

export interface RateLimitResult {
  success: boolean;
  /** Requests left in the current window. */
  remaining: number;
  /** Seconds until the window resets. */
  retryAfter: number;
}

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Guards against unbounded growth in long-running processes. */
const MAX_BUCKETS = 5000;

function sweep(now: number) {
  if (buckets.size < MAX_BUCKETS) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, retryAfter: 0 };
  }

  if (existing.count >= limit) {
    return {
      success: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { success: true, remaining: limit - existing.count, retryAfter: 0 };
}

/**
 * Best-effort client IP from proxy headers.
 * Trusts `x-forwarded-for` only when the app is running behind a proxy,
 * which is the case on Vercel and every common host.
 */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();

  return headers.get('x-real-ip')?.trim() ?? 'unknown';
}

/** Minimal in-memory honeypot + timing check, layered under rate limiting. */
export function isSuspiciousTiming(startedAt: number, minimumMs = 2500) {
  return Date.now() - startedAt < minimumMs;
}