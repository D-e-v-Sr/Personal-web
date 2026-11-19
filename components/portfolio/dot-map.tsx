"use client";

import { motion } from "framer-motion";

const locations = [
  { name: "Malappuram, Kerala, India", lat: 11.04, lng: 76.08 },
  { name: "Dubai, UAE", lat: 25.2, lng: 55.27 },
];

function latLngToXY(lat: number, lng: number) {
  return {
    x: (lng + 180) * (100 / 360),
    y: (90 - lat) * (100 / 180),
  };
}

function pointInPolygon(point: [number, number], polygon: [number, number][]) {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    if (
      yi !== yj &&
      x < (xj - xi) * (y - yi) / (yj - yi) + xi
    ) {
      inside = !inside;
    }
  }

  return inside;
}

const northAmerica: [number, number][] = [
  [-130, 55], [-125, 58], [-120, 60], [-115, 62], [-110, 65], [-105, 68], [-100, 70], [-95, 72], [-90, 73], [-85, 74], [-80, 73], [-75, 72], [-70, 70], [-65, 68], [-60, 65], [-58, 62], [-60, 58], [-62, 55], [-65, 52], [-68, 48], [-70, 45], [-72, 42], [-75, 38], [-78, 35], [-80, 32], [-82, 30], [-84, 28], [-86, 26], [-88, 25], [-90, 26], [-92, 28], [-94, 30], [-96, 28], [-98, 26], [-100, 24], [-102, 22], [-104, 20], [-106, 22], [-108, 24], [-110, 26], [-112, 28], [-114, 30], [-116, 32], [-118, 34], [-120, 36], [-122, 38], [-124, 42], [-126, 46], [-128, 50], [-130, 54],
];

const southAmerica: [number, number][] = [
  [-80, 12], [-78, 10], [-76, 8], [-74, 6], [-72, 4], [-70, 2], [-68, 0], [-66, -2], [-64, -4], [-62, -6], [-60, -8], [-58, -10], [-56, -12], [-54, -14], [-52, -16], [-50, -18], [-48, -20], [-46, -22], [-44, -24], [-42, -26], [-40, -28], [-38, -30], [-36, -32], [-34, -34], [-32, -36], [-36, -38], [-40, -40], [-44, -42], [-48, -44], [-52, -46], [-56, -48], [-60, -50], [-64, -52], [-66, -54], [-68, -56], [-70, -54], [-72, -52], [-74, -50], [-76, -48], [-74, -44], [-72, -40], [-70, -36], [-68, -32], [-66, -28], [-64, -24], [-62, -20], [-60, -16], [-58, -12], [-56, -8], [-54, -4], [-52, 0], [-50, 2], [-48, 4], [-46, 6], [-44, 8], [-42, 10], [-40, 12], [-38, 12], [-36, 10], [-34, 8], [-32, 6], [-30, 4], [-28, 2], [-26, 0], [-24, -2], [-22, -4], [-20, -6], [-18, -8], [-16, -10], [-14, -12], [-12, -14], [-10, -16], [-10, -12], [-12, -8], [-14, -4], [-16, 0], [-18, 4], [-20, 8], [-22, 10], [-24, 12], [-26, 12], [-28, 10], [-30, 8], [-32, 6], [-34, 4], [-36, 2], [-38, 0], [-40, -2], [-42, -4], [-44, -6], [-46, -8], [-48, -10], [-50, -10], [-52, -8], [-54, -6], [-56, -4], [-58, -2], [-60, 0], [-62, 2], [-64, 4], [-66, 6], [-68, 8], [-70, 10], [-72, 10], [-74, 10], [-76, 10], [-78, 10], [-80, 12],
];

const europe: [number, number][] = [
  [-10, 36], [-8, 38], [-6, 40], [-4, 42], [-2, 44], [0, 46], [2, 48], [4, 50], [6, 52], [8, 54], [10, 56], [12, 58], [14, 60], [16, 62], [18, 64], [20, 66], [22, 68], [24, 70], [26, 72], [28, 74], [30, 72], [32, 70], [34, 68], [36, 66], [38, 64], [40, 62], [42, 60], [44, 58], [46, 56], [48, 54], [50, 52], [52, 50], [54, 48], [56, 46], [58, 44], [60, 42], [62, 40], [64, 38], [66, 36], [68, 34], [70, 32], [72, 30], [74, 28], [76, 26], [78, 24], [80, 22], [82, 20], [84, 18], [86, 16], [88, 14], [90, 12], [92, 10], [94, 8], [96, 6], [98, 4], [100, 2], [102, 0], [104, -2], [106, -4], [108, -6], [110, -8], [112, -10], [114, -12], [116, -14], [118, -16], [120, -18], [122, -20], [124, -22], [126, -24], [128, -26], [130, -28], [132, -30], [134, -32], [136, -34], [138, -36], [140, -38], [142, -40], [144, -42], [146, -44], [148, -46], [150, -48], [152, -50], [154, -52], [156, -54], [158, -56], [160, -58], [162, -60], [164, -62], [166, -64], [168, -66], [170, -68], [172, -70], [174, -72], [176, -74], [178, -76], [180, -78],
];

const africa: [number, number][] = [
  [-15, 35], [-16, 32], [-17, 28], [-18, 24], [-18, 20], [-17, 16], [-16, 12], [-14, 8], [-12, 4], [-10, 0], [-8, -4], [-8, -8], [-10, -12], [-12, -16], [-14, -20], [-16, -24], [-18, -28], [-20, -32], [-22, -34], [-24, -36], [-26, -34], [-28, -32], [-30, -30], [-32, -28], [-34, -26], [-36, -24], [-38, -22], [-40, -20], [-42, -18], [-44, -16], [-46, -14], [-48, -12], [-50, -10], [-52, -8], [-54, -6], [-56, -4], [-58, -2], [-60, 0], [-58, 2], [-56, 4], [-54, 6], [-52, 8], [-50, 10], [-48, 12], [-46, 14], [-44, 16], [-42, 18], [-40, 20], [-38, 22], [-36, 24], [-34, 26], [-32, 28], [-30, 30], [-28, 32], [-26, 34], [-24, 35], [-22, 36], [-20, 36], [-18, 36], [-16, 36], [-15, 35],
];

const asia: [number, number][] = [
  [26, 42], [28, 40], [30, 38], [32, 36], [34, 34], [36, 32], [38, 30], [40, 28], [42, 26], [44, 24], [46, 22], [48, 20], [50, 18], [52, 16], [54, 14], [56, 12], [58, 10], [60, 8], [62, 6], [64, 4], [66, 2], [68, 0], [70, -2], [72, -4], [74, -6], [76, -8], [78, -10], [80, -12], [82, -14], [84, -16], [86, -18], [88, -20], [90, -22], [92, -24], [94, -26], [96, -28], [98, -30], [100, -32], [102, -34], [104, -36], [106, -38], [108, -40], [110, -42], [112, -44], [114, -46], [116, -48], [118, -50], [120, -52], [122, -54], [124, -56], [126, -58], [128, -60], [130, -62], [132, -64], [134, -66], [136, -68], [138, -70], [140, -72], [142, -74], [144, -76], [146, -78], [148, -80], [150, -82], [152, -84], [154, -86], [156, -88], [158, -90], [160, -92], [162, -94], [164, -96], [166, -98], [168, -100], [170, -102], [172, -104], [174, -106], [176, -108], [178, -110], [180, -112],
];

const australia: [number, number][] = [
  [114, -22], [116, -20], [118, -18], [120, -16], [122, -14], [124, -14], [126, -16], [128, -18], [130, -20], [132, -22], [134, -24], [136, -26], [138, -28], [140, -30], [142, -32], [144, -34], [146, -36], [148, -38], [150, -40], [152, -42], [154, -44], [156, -46], [158, -48], [160, -50], [162, -52], [164, -54], [166, -56], [168, -58], [170, -60], [172, -62], [174, -64], [176, -66], [178, -68], [180, -70],
];

const continents: [number, number][][] = [
  northAmerica,
  southAmerica,
  europe,
  africa,
  asia,
  australia,
];

function generateDots(count: number) {
  const dots: [number, number][] = [];
  let seed = 42;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  let attempts = 0;
  while (dots.length < count && attempts < count * 10) {
    const point: [number, number] = [random() * 360 - 180, random() * 140 - 70];

    if (continents.some((polygon) => pointInPolygon(point, polygon))) {
      dots.push(point);
    }

    attempts++;
  }

  return dots;
}

const mapDots = generateDots(600);
const [homeLocation, currentLocation] = locations;
const home = latLngToXY(homeLocation.lat, homeLocation.lng);
const current = latLngToXY(currentLocation.lat, currentLocation.lng);

export function DotMap() {
  return (
    <div className="relative w-full max-w-sm mx-auto" role="img" aria-label="Map showing work locations in Kerala, India and Dubai, UAE">
      <div className="soft-orb absolute -inset-10 rounded-full opacity-60" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/60 shadow-xl shadow-foreground/5 backdrop-blur-xl">
        <div className="absolute inset-0 site-grid opacity-70" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="h-40 w-40 rounded-full border border-border/70" />
          <span className="h-56 w-56 rounded-full border border-dashed border-border/50 spin-slow" />
        </div>

        <svg viewBox="0 0 100 100" className="relative h-full w-full" aria-hidden="true">
          <motion.path
            d={`M ${home.x} ${home.y} Q ${(home.x + current.x) / 2} ${Math.min(home.y, current.y) - 12} ${current.x} ${current.y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            className="text-brand-accent/70"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
          />

          {mapDots.map(([lng, lat], index) => {
            const x = (lng + 180) * (100 / 360);
            const y = (90 - lat) * (100 / 180);

            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="0.28"
                className="fill-muted-foreground/45 dark:fill-foreground/35"
              />
            );
          })}

          {locations.map((location, index) => {
            const { x, y } = latLngToXY(location.lat, location.lng);

            return (
              <g key={location.name}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="2.6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.35"
                  className="text-brand-accent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 2.2, 1], opacity: [0, 0.7, 0] }}
                  transition={{
                    delay: 1 + index * 0.35,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.2,
                    ease: "easeOut",
                  }}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r="0.95"
                  className="fill-brand-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.35, duration: 0.45, ease: "backOut" }}
                />
                <motion.text
                  x={x}
                  y={y - 3.2}
                  textAnchor="middle"
                  className="fill-muted-foreground dark:fill-foreground/70 text-[2.2px] font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.25 + index * 0.35, duration: 0.35 }}
                >
                  {location.name}
                </motion.text>
              </g>
            );
          })}
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
