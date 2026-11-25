"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "import { NextResponse } from 'next/server'",
  "import { z } from 'zod'",
  "import { db } from '@/lib/db'",
  "import { auth } from '@/auth'",
  "",
  "export async function GET(req: Request) {",
  "  const session = await auth()",
  "  const data = await db.user.findMany()",
  "  return NextResponse.json({ ok: true, data })",
  "}",
];

export function MacBookCode() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let current = "";
    const full = lines.join("\n");
    const id = setInterval(() => {
      if (i < full.length) {
        current += full[i];
        setTyped(current);
        i++;
      } else {
        setTimeout(() => {
          current = "";
          setTyped("");
          i = 0;
        }, 1200);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-sm md:max-w-md mx-auto"
    >
      <div className="rounded-2xl border border-border bg-card/80 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">page.tsx</span>
        </div>
        <pre className="p-4 text-sm font-mono text-foreground min-h-[220px] whitespace-pre-wrap">
          {typed}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </motion.div>
  );
}
