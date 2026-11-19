import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { LeafSwoosh } from "./Decor";

const links = [
  {
    name: "Alwustho",
    desc: "Riset & sistem digital — bagian dari Bin Alfan Group",
    href: "https://kampungitsolo.com/#about",
  },
  { name: "Aflaha", desc: "Platform digital unggulan", href: "https://kampungitsolo.com" },
  {
    name: "Elfan Bookless Library",
    desc: "Perpustakaan digital tanpa buku fisik",
    href: "https://kampungitsolo.com/#services",
  },
  {
    name: "Ufuk Hijau Energi",
    desc: "Solusi energi terbarukan berkelanjutan",
    href: "https://ufukhijau.com",
  },
  {
    name: "Elfan AI Academy",
    desc: "Akademi kecerdasan buatan & inovasi digital",
    href: "https://elfanaiacademy.com",
  },
  {
    name: "Elfan System",
    desc: "16 modul Digital Islamic Education",
    href: "https://kampungitsolo.com/#services",
  },
  {
    name: "Ufuk Hijau Academy",
    desc: "Pusat pelatihan & pengembangan SDM",
    href: "https://ufukhijau.com",
  },
  {
    name: "Bootcamp IT",
    desc: "Pelatihan IT intensif untuk pemula & mahir",
    href: "https://kampungitsolo.com/bootcamp",
  },
  {
    name: "TUK",
    desc: "Tempat Uji Kompetensi — sertifikasi keahlian",
    href: "https://kampungitsolo.com/#about",
  },
  {
    name: "Smart Revolusioner Fundraising",
    desc: "Platform penggalangan dana revolusioner",
    href: "https://kampungitsolo.com",
  },
  {
    name: "Elfan Academy",
    desc: "Pusat edukasi & pengembangan bakat digital",
    href: "https://kampungitsolo.com",
  },
];

export function Network() {
  return (
    <section id="jejaring" className="relative overflow-hidden bg-section-tint py-16">
      <div className="pointer-events-none absolute right-6 top-16 hidden h-20 w-16 bg-dots opacity-60 lg:block" />
      {/* Motif daun di sudut, sama seperti Hero/Program/Footer */}
      <LeafSwoosh flip className="absolute -bottom-2 left-0 h-16 w-40 opacity-80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel lead="Jejaring" rest="& Referensi" />
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Tautan terpilih.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink">
            Sumber, mitra, dan inspirasi yang menemani perjalanan Kampung IT Solo.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ name, desc, href }, i) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-forest"
              >
                <span className="mt-0.5 text-[0.68rem] font-extrabold text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-[0.82rem] font-bold text-navy">
                    {name}
                    <ArrowUpRight className="size-3.5 shrink-0 text-forest transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-[0.72rem] leading-relaxed text-ink">{desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
