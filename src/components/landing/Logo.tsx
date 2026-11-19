import { cn } from "@/lib/utils";

export function Logo({ className, href = "#beranda" }: { className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={cn("flex h-12 shrink-0 items-center", className)}
      aria-label="Kampung IT Solo"
    >
      <img
        src="/kampung-it-solo.png"
        alt="Kampung IT Solo"
        width={225}
        height={225}
        className="h-full w-auto object-contain"
      />
    </a>
  );
}
