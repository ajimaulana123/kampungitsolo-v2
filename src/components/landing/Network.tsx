import { ArrowUpRight, Clock, HandHeart, type LucideIcon } from "lucide-react";
import { useState } from "react";

import aflahaLogo from "@/assets/aflaha-mark.png";
import alwusthoLogo from "@/assets/alwustho-mark.png";
import elfanLogo from "@/assets/elfan-mark.png";
import ufukLogo from "@/assets/ufuk-mark.png";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { SectionLabel } from "./SectionLabel";

type Resource = {
  name: string;
  desc: string;
  href?: string;
  logo?: string;
  icon?: LucideIcon;
};

const cardClass =
  "group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-[#E4EAE5] bg-white p-4 text-left shadow-[0_1px_2px_rgba(19,48,90,0.04)] transition-[translate,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-forest/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9F7] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5";

const links: Resource[] = [
  {
    name: "Alwustho",
    desc: "Riset & sistem digital, bagian dari Bin Alfan Group",
    logo: alwusthoLogo,
  },
  {
    name: "Aflaha",
    desc: "Platform digital unggulan",
    logo: aflahaLogo,
  },
  {
    name: "Elfan Bookless Library",
    desc: "Perpustakaan digital tanpa buku fisik",
    href: "https://elfanaiacademy.com",
    logo: elfanLogo,
  },
  {
    name: "Ufuk Hijau Energi",
    desc: "Solusi energi terbarukan berkelanjutan",
    href: "https://ufukhijau.com",
    logo: ufukLogo,
  },
  {
    name: "Elfan AI Academy",
    desc: "Akademi kecerdasan buatan & inovasi digital",
    href: "https://elfanaiacademy.com",
    logo: elfanLogo,
  },
  {
    name: "Elfan System",
    desc: "16 modul Digital Islamic Education",
    href: "https://elfanaiacademy.com",
    logo: elfanLogo,
  },
  {
    name: "Ufuk Hijau Academy",
    desc: "Pusat pelatihan & pengembangan SDM",
    href: "https://ufukhijau.com",
    logo: ufukLogo,
  },
  {
    name: "Bootcamp IT",
    desc: "Pelatihan IT intensif untuk pemula & mahir",
    href: "https://elfanaiacademy.com",
    logo: elfanLogo,
  },
  {
    name: "TUK",
    desc: "Tempat Uji Kompetensi, sertifikasi keahlian",
    href: "https://ufukhijau.com",
    logo: ufukLogo,
  },
  {
    name: "Smart Revolusioner Fundraising",
    desc: "Platform penggalangan dana revolusioner",
    icon: HandHeart,
  },
  {
    name: "Elfan Academy",
    desc: "Pusat edukasi & pengembangan bakat digital",
    href: "https://elfanaiacademy.com",
    logo: elfanLogo,
  },
];

export function Network() {
  const [comingSoon, setComingSoon] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  // Dengan sisa 5 dari kelipatan 6, kartu pertama dilebarkan agar grid 2 dan 3 kolom terisi penuh.
  const wideFirst = links.length % 6 === 5;

  return (
    <section id="jejaring" className="scroll-mt-24 bg-[#F7F9F7] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          data-reveal="up"
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <SectionLabel lead="Jejaring" rest="& Referensi" />
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-navy lg:text-[2.15rem]">
              Tautan terpilih.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="flex items-center gap-3 text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-forest lg:justify-end">
              <span aria-hidden="true" className="h-px w-8 bg-[#C9D8CD]" />
              {links.length} RESOURCES
            </p>
            <p className="mt-4 text-[0.88rem] leading-relaxed text-ink">
              Sumber, mitra, dan inspirasi yang menemani perjalanan Kampung IT Solo.
            </p>
          </div>
        </div>

        <ul
          data-reveal="stagger"
          className="mt-9 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 lg:mt-10 lg:grid-cols-3"
        >
          {links.map(({ name, desc, href, logo, icon: Icon }, i) => {
            const body = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#E9EFEA] bg-[#F7F9F7] p-0.5 text-forest transition-colors duration-200 group-hover:border-forest/20 group-hover:bg-lime/15 motion-reduce:transition-none sm:size-12">
                  {logo ? (
                    <img
                      src={logo}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-9 w-auto object-contain sm:h-10"
                    />
                  ) : Icon ? (
                    <Icon
                      className="size-[1.15rem] sm:size-5"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  ) : null}
                </span>

                <h3 className="mt-4 text-[0.95rem] font-bold leading-snug tracking-tight text-navy sm:text-base">
                  {name}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-[1.65] text-ink">{desc}</p>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span
                    aria-hidden="true"
                    className="text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-7 place-items-center rounded-full border border-[#E4EAE5] text-forest transition-[border-color,background-color] duration-200 group-hover:border-forest/25 group-hover:bg-lime/10 motion-reduce:transition-none">
                    {href ? (
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      />
                    ) : (
                      <Clock aria-hidden="true" className="size-3.5" />
                    )}
                  </span>
                </div>
              </>
            );

            return (
              <li key={name} className={`h-full ${i === 0 && wideFirst ? "sm:col-span-2" : ""}`}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {body}
                    <span className="sr-only"> (buka di tab baru)</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setComingSoon(name);
                      setDialogOpen(true);
                    }}
                    className={cardClass}
                  >
                    {body}
                    <span className="sr-only"> (segera hadir)</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md gap-0 rounded-3xl border-[#E4EAE5] bg-white p-0 shadow-card sm:rounded-3xl">
          <div className="p-6 sm:p-8">
            <DialogHeader className="gap-3 text-left sm:text-left">
              <span className="flex items-center gap-3 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-forest">
                <span aria-hidden="true" className="h-px w-6 bg-[#C9D8CD]" />
                Coming soon
              </span>
              <DialogTitle className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-navy">
                Segera hadir.
              </DialogTitle>
              <DialogDescription className="text-[0.9rem] leading-relaxed text-ink">
                <span className="font-semibold text-navy">{comingSoon}</span> sedang kami siapkan.
                Halaman ini akan tersedia dalam waktu dekat.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button variant="forest" size="pillSm">
                  Tutup
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
