import { ArrowRight, Award, HandHeart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import seminar from "@/assets/impact-seminar.jpg";
import umkm from "@/assets/impact-umkm.jpg";
import team from "@/assets/impact-team.jpg";
import city from "@/assets/impact-city.jpg";
import classroom from "@/assets/about-class.jpg";

const points = [
  { icon: Users, a: "Pendidikan", b: "untuk Semua" },
  { icon: HandHeart, a: "Inovasi untuk", b: "Masyarakat" },
  { icon: Award, a: "Kolaborasi", b: "untuk Negeri" },
];

function Photo({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return <img src={src} alt={alt} loading="lazy" width={w} height={h} className="h-full w-full rounded-lg object-cover" />;
}

export function Impact() {
  return (
    <section id="dampak" className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 lg:grid-cols-[0.85fr_1.45fr_0.62fr] lg:px-12">
        <div>
          <SectionLabel lead="Dampak" rest="& Kolaborasi" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Bersama, Menciptakan
            <br />
            Dampak Nyata.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            Melalui kolaborasi dengan berbagai pihak, Kampung IT Solo terus berkontribusi dalam
            membangun masyarakat digital yang inklusif dan berdaya saing.
          </p>
          <Button variant="lime" size="pillSm" className="mt-6">
            Lihat Dampak Kami <ArrowRight />
          </Button>
        </div>

        <div className="relative lg:ml-4">
          <div className="pointer-events-none absolute -bottom-2 -left-10 hidden h-24 w-12 bg-dots lg:block" />
          <div className="grid h-[300px] grid-cols-[1fr_1fr_0.9fr] grid-rows-2 gap-2">
            <Photo src={seminar} alt="Seminar teknologi" w={992} h={672} />
            <Photo src={umkm} alt="Pendampingan UMKM" w={992} h={672} />
            <div className="row-span-2">
              <Photo src={city} alt="Balai Kota Surakarta" w={752} h={896} />
            </div>
            <Photo src={team} alt="Gerakan literasi digital" w={992} h={672} />
            <Photo src={classroom} alt="Kelas pemrograman" w={1280} h={768} />
          </div>
        </div>

        <ul className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-card">
          {points.map(({ icon: Icon, a, b }) => (
            <li key={a} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lime/15">
                <Icon className="size-6 text-forest" strokeWidth={1.7} />
              </span>
              <p className="text-[0.78rem] font-semibold leading-snug text-navy">
                {a}
                <br />
                {b}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
