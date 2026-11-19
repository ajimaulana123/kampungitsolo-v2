import type React from "react";
import { SectionLabel } from "./SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apa itu Kampung IT Solo?",
    a: "Kampung IT Solo adalah Pusat Eduwisata IT dan Laboratorium Peradaban Digital di RT 06/RW 21, Surakarta. Kami bagian dari Bin Alfan Group dan menjadi pusat riset, pelatihan, serta pengembangan pendidikan berbasis adab dan teknologi informasi.",
  },
  {
    q: "Di mana lokasi Kampung IT Solo?",
    a: "Kampung IT Solo berada di RT 06/RW 21, Kota Surakarta (Solo), Jawa Tengah. Aktivitas eduwisata dan pelatihan dilayani di area Solo Raya, termasuk Sukoharjo dan sekitarnya.",
  },
  {
    q: "Apa itu Elfan System?",
    a: "Elfan System adalah platform Digital Islamic Education yang dikembangkan Kampung IT Solo dan terdiri dari 16 modul: Data Center, Visitor Data Record, Search Engine, Bookless Library, Lesson Modul, El-Tube, Elfan MP3, Elfanpedia, Akademik System, Produktivitas, Asset & Inventaris, Cleaning Control, Smart Village, Smart Control, Elfan SmartHub, dan E-Masjid.",
  },
  {
    q: "Layanan apa saja yang ditawarkan?",
    a: "Pelatihan desa digital, workshop foto dan video produk untuk UMKM, kelas coding akhir pekan untuk pelajar SMK, literasi media dan keamanan digital untuk karang taruna, serta implementasi 16 modul Elfan System untuk lembaga, masjid, dan pemerintah desa.",
  },
  {
    q: "Apa itu Bin Alfan Group?",
    a: "Bin Alfan Group adalah organisasi induk yang menaungi Kampung IT Solo, Elfan Bookless Library, Alwustho Technologies, TUK (Tempat Uji Kompetensi), dan Alkubro — fokus pada pendidikan berbasis adab dan teknologi.",
  },
  {
    q: "Apa itu Bookless Library?",
    a: "Bookless Library adalah perpustakaan digital tanpa buku fisik yang dikembangkan dalam Elfan System. Pengguna dapat mengakses pustaka kapan saja dan dari mana saja melalui platform digital Kampung IT Solo.",
  },
  {
    q: "Apa itu Smart Village dalam Elfan System?",
    a: "Smart Village adalah modul tata kelola desa cerdas yang mencakup administrasi, layanan warga, dan informasi desa secara digital, sehingga membantu perangkat desa bekerja lebih efisien dan transparan.",
  },
  {
    q: "Apa itu E-Masjid?",
    a: "E-Masjid adalah modul Elfan System untuk manajemen kegiatan masjid, jamaah, kas, dan layanan masjid secara digital — memudahkan takmir mengelola operasional masjid sehari-hari.",
  },
  {
    q: "Bagaimana cara berkunjung atau berkolaborasi?",
    a: "Kunjungan, studi banding, atau kolaborasi dapat dilakukan melalui formulir reservasi tamu di halaman ini, atau menghubungi tim lewat email kampungitsolo@gmail.com dan WhatsApp +62 812-3566-6665.",
  },
  {
    q: "Apakah pelatihan di Kampung IT Solo berbayar?",
    a: "Sebagian besar kelas reguler seperti kelas coding akhir pekan dan literasi digital untuk karang taruna bersifat terbuka. Untuk pendampingan desa digital, workshop UMKM, dan implementasi modul Elfan System, biaya disesuaikan dengan ruang lingkup dan dapat didiskusikan langsung dengan tim.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
        <div data-reveal="left">
          <SectionLabel lead="FAQ" rest="Pertanyaan Umum" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Tanya jawab
            <br />
            seputar kami.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            Ringkasan informasi penting tentang Kampung IT Solo — lokasi, layanan, modul Elfan
            System, hingga cara berkunjung.
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
            <p className="text-[0.78rem] font-semibold text-navy">
              Pertanyaan lain? Hubungi tim langsung.
            </p>
            <a
              href="https://wa.me/6281235666665"
              className="mt-2 inline-flex items-center gap-2 text-[0.78rem] font-bold text-forest hover:underline"
            >
              WhatsApp +62 812-3566-6665
            </a>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          data-reveal="right"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="rounded-2xl border border-border bg-card px-6 shadow-soft"
        >
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`} className="last:border-b-0">
              <AccordionTrigger className="gap-4 text-[0.85rem] font-bold text-navy hover:no-underline">
                <span className="flex items-start gap-3">
                  <span className="text-[0.7rem] font-extrabold text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-8 text-[0.8rem] leading-relaxed text-ink">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
