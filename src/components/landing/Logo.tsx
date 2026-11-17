import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={cn("h-10 w-auto", className)} aria-hidden="true">
      <defs>
        <linearGradient id="kits-roof" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--forest)" />
          <stop offset="1" stopColor="var(--lime)" />
        </linearGradient>
      </defs>
      <path d="M2 20 L24 2 L46 20 L46 42 L37 42 L37 24 L24 13 L11 24 L11 42 L2 42 Z" fill="url(#kits-roof)" />
      <path d="M16 42 L16 27 L24 21 L32 27 L32 42 L27 42 L27 32 L21 32 L21 42 Z" fill="var(--navy)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#beranda" className={cn("flex items-center gap-2", className)} aria-label="Kampung IT Solo">
      <LogoMark />
      <span className="flex flex-col text-[1.05rem] font-extrabold leading-[1.05] tracking-tight text-navy">
        <span>Kampung</span>
        <span>IT Solo</span>
      </span>
    </a>
  );
}
