import { ArrowRight, BookOpenText, GraduationCap, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";

const items = [
  { icon: BookOpenText, title: "Bookless Library", desc: "Perpustakaan digital masa kini", tone: "text-navy" },
  { icon: MonitorSmartphone, title: "Elfan System", desc: "Solusi sistem berbasis teknologi", tone: "text-navy" },
  { icon: Zap, title: "Smart Energy", desc: "Energi cerdas untuk masa depan", tone: "text-lime" },
  { icon: ShieldCheck, title: "Smart Safety", desc: "Keamanan cerdas untuk masyarakat", tone: "text-forest" },
];

export function Ecosystem() {
  return (
    <section id="ekosistem" className="relative py-14">
      <div className="pointer-events-none absolute right-6 top-14 hidden h-20 w-16 bg-dots opacity-70 lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.6fr] lg:px-12">
        <div>
          <SectionLabel lead="Ekosistem" rest="& Inovasi" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Ekosistem Teknologi
            <br />
            untuk Masyarakat.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink">
            Kami menghadirkan berbagai solusi dan inovasi teknologi yang dapat dimanfaatkan oleh
            masyarakat, pendidikan, dan pemerintahan.
          </p>
          <Button variant="navy" size="pillSm" className="mt-6">
            Lihat Semua Ekosistem <ArrowRight />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <article className="flex flex-col items-center rounded-2xl bg-forest px-4 py-6 text-center text-forest-foreground shadow-card">
            <GraduationCap className="size-9" />
            <h3 className="mt-3 text-sm font-bold leading-tight">Elfan AI Academy</h3>
            <p className="mt-3 text-[0.7rem] leading-snug opacity-85">Pusat pelatihan AI & teknologi</p>
            <div className="mt-auto flex gap-3 pt-5">
              <span className="grid size-6 place-items-center rounded-full border border-forest-foreground/60">
                <ArrowRight className="size-3" />
              </span>
              <span className="grid size-6 place-items-center rounded-full bg-lime text-lime-foreground">
                <ArrowRight className="size-3" />
              </span>
            </div>
          </article>
          {items.map(({ icon: Icon, title, desc, tone }) => (
            <article key={title} className="group flex flex-col items-center rounded-2xl border border-border bg-surface px-4 py-6 text-center shadow-soft transition-transform hover:-translate-y-1">
              <Icon className={`size-9 ${tone}`} />
              <h3 className="mt-3 text-sm font-bold leading-tight text-navy">{title}</h3>
              <p className="mt-3 text-[0.7rem] leading-snug text-ink">{desc}</p>
              <div className="mt-auto self-start pt-5">
                <span className="grid size-6 place-items-center rounded-full border border-muted-foreground/40 text-muted-foreground transition-colors group-hover:border-forest group-hover:text-forest">
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
