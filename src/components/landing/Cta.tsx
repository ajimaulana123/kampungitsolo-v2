import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hands from "@/assets/cta-hands.jpg";

export function Cta() {
  return (
    <section id="kolaborasi" className="relative overflow-hidden bg-navy">
      <img src={hands} alt="" loading="lazy" width={1280} height={640} className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-70 md:w-2/3" />
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center lg:px-12">
        <div className="flex items-center gap-8">
          <svg viewBox="0 0 40 40" className="hidden h-14 w-14 shrink-0 drop-shadow-lg sm:block" aria-hidden="true">
            <defs>
              <linearGradient id="cta-z" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--lime)" />
                <stop offset="1" stopColor="var(--forest)" />
              </linearGradient>
            </defs>
            <path d="M8 3 H34 Q38 3 36 7 L22 20 H32 Q36 20 34 24 L30 34 Q29 37 26 37 H6 Q2 37 4 33 L18 20 H8 Q4 20 5 16 L8 6 Q9 3 12 3 Z" fill="url(#cta-z)" />
          </svg>
          <div>
            <h2 className="text-xl font-extrabold text-navy-foreground lg:text-2xl">Mari Bangun Masa Depan Digital Bersama.</h2>
            <p className="mt-1 max-w-xl text-[0.8rem] leading-snug text-navy-foreground/85">
              Ajak sekolah, komunitas, pemerintah, dan mitra industri untuk berkolaborasi membangun
              ekosistem inovasi teknologi yang bermanfaat bagi masyarakat.
            </p>
          </div>
        </div>
        <Button variant="lime" size="pill" className="md:ml-auto">
          Mulai Kolaborasi <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
