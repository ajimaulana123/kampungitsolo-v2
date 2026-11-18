import { useId } from "react";
import { cn } from "@/lib/utils";

/** Curved green leaf blades used at section corners. */
export function LeafSwoosh({ className, flip }: { className?: string; flip?: boolean }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 200 120"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", flip && "-scale-x-100", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--lime)" />
          <stop offset="1" stopColor="var(--forest)" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--lime)" stopOpacity="0.15" />
          <stop offset="1" stopColor="var(--lime)" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d="M0 120 C 70 112, 150 70, 200 0 L 200 30 C 160 85, 100 116, 40 120 Z" fill={`url(#${id}-b)`} />
      <path d="M50 120 C 120 110, 175 75, 200 40 L 200 120 Z" fill={`url(#${id}-a)`} />
    </svg>
  );
}

/** Faint silhouette of the city of Solo behind the about section. */
export function Skyline({ className }: { className?: string }) {
  // Lattice tower bracing levels (left/right leg x at each height)
  const levels: [number, number, number][] = [
    [360, 790, 890],
    [300, 800, 880],
    [240, 810, 870],
    [180, 820, 860],
    [120, 830, 850],
  ];
  const windows: [number, number][] = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 3; c++) windows.push([662 + c * 13, 212 + r * 19]);
  for (let r = 0; r < 5; r++) for (let c = 0; c < 2; c++) windows.push([617 + c * 14, 255 + r * 19]);
  return (
    <svg
      viewBox="0 0 900 360"
      preserveAspectRatio="xMaxYMax meet"
      className={cn("pointer-events-none fill-current", className)}
      aria-hidden="true"
    >
      <rect x="0" y="352" width="900" height="8" />
      {/* low houses */}
      <rect x="0" y="300" width="50" height="60" />
      <rect x="55" y="280" width="35" height="80" />
      <rect x="95" y="310" width="45" height="50" />
      <path d="M145 360 V320 L175 298 L205 320 V360 Z" />
      {/* joglo / keraton roof */}
      <rect x="215" y="325" width="110" height="35" />
      <path d="M200 328 L240 300 L250 285 L290 285 L300 300 L340 328 Z" />
      <path d="M250 285 L262 268 L278 268 L290 285 Z" />
      {/* mosque with minarets */}
      <rect x="335" y="240" width="10" height="120" />
      <path d="M333 240 L340 222 L347 240 Z" />
      <rect x="350" y="300" width="100" height="60" />
      <path d="M365 300 Q365 255 400 245 Q435 255 435 300 Z" />
      <rect x="399" y="228" width="2" height="18" />
      <circle cx="400" cy="226" r="3" />
      <rect x="455" y="215" width="14" height="145" />
      <rect x="450" y="250" width="24" height="5" />
      <path d="M452 215 L462 190 L472 215 Z" />
      {/* balai kota clock tower */}
      <rect x="480" y="300" width="120" height="60" />
      <path d="M476 302 L540 284 L604 302 Z" />
      <rect x="520" y="220" width="40" height="80" />
      <path d="M515 222 L540 190 L565 222 Z" />
      <rect x="539" y="170" width="2" height="22" />
      {/* office blocks */}
      <rect x="610" y="240" width="40" height="120" />
      <rect x="655" y="200" width="45" height="160" />
      <rect x="705" y="270" width="50" height="90" />
      <rect x="758" y="318" width="28" height="42" />
      {/* lattice tower */}
      <path d="M790 360 L830 120 L836 40 L840 10 L844 40 L850 120 L890 360 L876 360 L843 150 L837 150 L804 360 Z" />
      <rect x="820" y="114" width="40" height="7" />
      <rect x="828" y="62" width="24" height="5" />
      <g stroke="currentColor" strokeWidth="2.5" fill="none">
        {levels.slice(0, -1).map(([y, l, r], i) => {
          const [y2, l2, r2] = levels[i + 1]!;
          return (
            <g key={y}>
              <line x1={l} y1={y} x2={r2} y2={y2} />
              <line x1={r} y1={y} x2={l2} y2={y2} />
              <line x1={l2} y1={y2} x2={r2} y2={y2} />
            </g>
          );
        })}
      </g>
      {/* windows and clock face punched out in the page color */}
      <g className="fill-background">
        <circle cx="540" cy="245" r="8" />
        {windows.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="8" height="10" />
        ))}
        {[490, 506, 574, 590].map((x) => (
          <rect key={x} x={x} y="316" width="8" height="22" />
        ))}
      </g>
    </svg>
  );
}
