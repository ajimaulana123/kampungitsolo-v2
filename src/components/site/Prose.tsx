import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-sm leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_h2]:pt-3 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-navy [&_h3]:pt-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-navy [&_li]:mt-1.5 [&_strong]:font-bold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
      {children}
    </div>
  );
}
