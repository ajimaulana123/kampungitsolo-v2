import type { ReactNode } from "react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function PageShell({ children, revealKey }: { children: ReactNode; revealKey?: string }) {
  useScrollReveal(revealKey);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-navy-foreground"
      >
        Langsung ke konten
      </a>
      <Navbar />
      <main id="konten" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
