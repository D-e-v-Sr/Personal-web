"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

const locations = [
  { name: "Malappuram, Kerala, India", lat: 11.04, lng: 76.08 },
  { name: "Dubai, UAE", lat: 25.2, lng: 55.27 },
];

const WIDTH = 480;
const DOTS = 150;
const LAT_RANGE: [number, number] = [-56, 73];

function project(lat: number, lng: number, north: number, span: number, height: number) {
  const y = ((north - lat) / span) * height;
  const x = ((lng + 180) / 360) * WIDTH;
  return { x, y };
}

function getLandPath(dots: number, width: number, height: number, spacing: number) {
  const map = new DottedMap({ height: dots, grid: "diagonal", projection: { name: "equirectangular" } });
  const points = map.getPoints();
  const scaleX = width / 360;
  const scaleY = height / 129;
  let d = "";
  for (const p of points) {
    d += `M${(p.x * scaleX).toFixed(1)} ${(p.y * scaleY).toFixed(1)}h0`;
  }
  return d;
}

export function WorldMap() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const { height, spacing, north, span } = useMemo(() => {
    const span = LAT_RANGE[1] - LAT_RANGE[0];
    const height = (WIDTH * span) / 360;
    const spacing = WIDTH / DOTS;
    return { height, spacing, north: LAT_RANGE[1], span };
  }, []);

  const landPath = useMemo(() => getLandPath(DOTS, WIDTH, height, spacing), [DOTS, WIDTH, height, spacing]);

  const places = useMemo(() => {
    return locations.map((loc) => ({ ...loc, ...project(loc.lat, loc.lng, north, span, height) }));
  }, [north, span, height]);

  const route = useMemo(() => {
    const p = project(locations[0].lat, locations[0].lng, north, span, height);
    const q = project(locations[1].lat, locations[1].lng, north, span, height);
    const lift = Math.hypot(q.x - p.x, q.y - p.y) * 0.32;
    return {
      d: `M${p.x.toFixed(1)} ${p.y.toFixed(1)} Q${((p.x + q.x) / 2).toFixed(1)} ${(((p.y + q.y) / 2) - lift).toFixed(1)} ${q.x.toFixed(1)} ${q.y.toFixed(1)}`,
    };
  }, [north, span, height]);

  return (
    <div className="relative w-full max-w-md mx-auto" role="img" aria-label="World map showing work locations in Kerala, India and Dubai, UAE">
      <div className="soft-orb absolute -inset-10 rounded-full opacity-60" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/60 shadow-xl shadow-foreground/5 backdrop-blur-xl">
        <div className="absolute inset-0 site-grid opacity-70" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="h-40 w-40 rounded-full border border-border/70" />
          <span className="h-56 w-56 rounded-full border border-dashed border-border/50 spin-slow" />
        </div>

        <svg
          viewBox={`0 0 ${WIDTH} ${height.toFixed(1)}`}
          className="relative h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <path
            d={landPath}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.28}
            strokeWidth={spacing * 0.58}
            strokeLinecap="round"
            className="text-brand-accent"
          />

          <g style={{ color: "var(--brand-accent)" }}>
            <path
              d={route.d}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.22}
              strokeWidth="1.5"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />
            <motion.path
              d={route.d}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={reduce ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
              animate={reduce ? undefined : { pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8, times: [0, 0.6, 1] }}
            />
          </g>

          {places.map((p, i) => (
            <g key={p.name} style={{ color: "var(--brand-accent)" }}>
              {!reduce && (
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  fill="currentColor"
                  initial={{ r: spacing * 0.9, opacity: 0.5 }}
                  animate={{ r: [spacing * 0.9, spacing * 3.4], opacity: [0.5, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.35 }}
                />
              )}
              <circle
                cx={p.x}
                cy={p.y}
                r={spacing * 0.95}
                fill="currentColor"
                stroke="var(--background)"
                strokeWidth="2"
              />
              <text
                x={p.x}
                y={p.y - spacing * 1.5}
                textAnchor="middle"
                className="fill-muted-foreground dark:fill-foreground/70 text-[8px] font-medium"
              >
                {p.name}
              </text>
            </g>
          ))}
        </svg>

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <span>India</span>
          <span className="text-brand-accent">Live connection</span>
          <span>UAE</span>
        </div>
      </div>
    </div>
  );
}