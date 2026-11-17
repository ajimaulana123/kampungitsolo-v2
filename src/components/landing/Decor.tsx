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
  return (
    <svg viewBox="0 0 600 160" className={cn("pointer-events-none fill-current", className)} aria-hidden="true">
      {/* low buildings */}
      <rect x="0" y="120" width="40" height="40" />
      <rect x="45" y="100" width="28" height="60" />
      <rect x="78" y="112" width="34" height="48" />
      {/* mosque dome */}
      <path d="M120 160 V125 Q140 95 160 125 V160 Z" />
      <rect x="138" y="82" width="4" height="18" />
      <rect x="168" y="90" width="8" height="70" />
      <path d="M166 90 L172 76 L178 90 Z" />
      {/* clock tower (balai kota) */}
      <rect x="190" y="110" width="70" height="50" />
      <rect x="213" y="70" width="24" height="40" />
      <path d="M213 70 Q225 52 237 70 Z" />
      <rect x="224" y="42" width="2" height="14" />
      {/* office blocks */}
      <rect x="270" y="95" width="30" height="65" />
      <rect x="305" y="80" width="26" height="80" />
      <rect x="336" y="105" width="40" height="55" />
      <path d="M380 160 V120 L400 104 L420 120 V160 Z" />
      <rect x="425" y="90" width="22" height="70" />
      <rect x="452" y="115" width="36" height="45" />
      {/* lattice tower */}
      <path d="M540 160 L556 60 L560 10 L564 60 L580 160 L570 160 L560 100 L550 160 Z" />
      <rect x="548" y="110" width="24" height="4" />
      <rect x="552" y="80" width="16" height="3" />
      <rect x="495" y="125" width="40" height="35" />
      <rect x="585" y="130" width="15" height="30" />
    </svg>
  );
}
