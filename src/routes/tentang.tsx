import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, MapPin, MessageCircle, Target, Users } from "lucide-react";

import academyClass from "@/assets/academy/academy-class.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { GOAL, GROUP_MEMBERS, MISSIONS, VISION } from "@/data/organization";
import { pageHead } from "@/lib/seo";
import { canonicalUrl, CONTACT, SITE_URL, SOCIALS } from "@/lib/site";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang Kampung IT Solo",
  description:
    "Kampung IT Solo adalah pusat riset dan pengembangan pendidikan berbasis adab dan IT di Sukoharjo, bagian dari Bin Alfan Group.",
  url: canonicalUrl("/tentang"),
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Kampung IT Solo",
    url: SITE_URL,
    logo: `${SITE_URL}/kampung-it-solo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    sameAs: SOCIALS.map((social) => social.href),
  },
};

export const Route = createFileRoute("/tentang")({
  head: () =>
    pageHead({
      title: "Tentang Kampung IT Solo & Bin Alfan Group",
      description:
        "Kenali Kampung IT Solo: pusat riset dan pengembangan pendidikan berbasis adab dan IT di Sukoharjo, bagian dari Bin Alfan Group.",
      path: "/tentang",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tentang Kami"
        title={
          <>
            Dari kampung,
            <br />
            untuk masa depan digital.
          </>
        }
        description="Kampung IT Solo adalah pusat riset dan pengembangan pendidikan berbasis adab dan IT di Cemani, Grogol, Sukoharjo. Kami menumbuhkan kampung sebagai laboratorium peradaban digital."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]}
        actions={
          <Button variant="forest" size="pill" asChild>
            <a href="/#reservasi">
              Jadwalkan Kunjungan <ArrowRight />
            </a>
          </Button>
        }
        aside={
          <address className="not-italic rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="size-4" /> Lokasi
            </p>
            <p className="mt-3 text-sm font-bold leading-relaxed text-navy">
              {CONTACT.address.full}
            </p>
            <p className="mt-3 text-[0.78rem] leading-relaxed text-ink">
              Senin-Jumat 08.00-16.00
              <br />
              Sabtu 08.00-13.00
            </p>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
            >
              Buka Google Maps <ArrowRight className="size-3.5" />
            </a>
          </address>
        }
      />
      <JsonLd data={ABOUT_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div data-reveal="up">
            <p className="eyebrow">Latar belakang</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Pendidikan, teknologi,
              <br />
              dan kehidupan kampung.
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink">
              <p>
                Kampung IT Solo lahir dari kebutuhan sederhana: membuat teknologi bisa diakses dan
                dipakai warga untuk belajar, bekerja, dan mengembangkan ekonomi. Kami memulai dari
                lingkungan sendiri, lalu membuka ruang belajar bagi sekolah, pesantren, desa, UMKM,
                dan komunitas.
              </p>
              <p>
                Kegiatan kami mencakup pelatihan digital, pendampingan lembaga, pengembangan produk
                teknologi pendidikan, dan eduwisata IT. Semua berjalan dalam ekosistem Bin Alfan
                Group bersama Elfan Bookless Library, Alwustho Technologies, TUK, dan Alkubro.
              </p>
            </div>
          </div>
          <div data-reveal="clip" className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={academyClass}
              alt="Peserta belajar dengan laptop di ruang kelas Kampung IT Solo"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Arah kami</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Visi, misi, dan goal.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div
                data-reveal="up"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="eyebrow flex items-center gap-2">
                  <Target className="size-4" /> Visi
                </span>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">{VISION}</p>
              </div>
              <div
                data-reveal="up"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="eyebrow flex items-center gap-2">
                  <Lightbulb className="size-4" /> Goal
                </span>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">{GOAL}</p>
              </div>
            </div>

            <div
              data-reveal="stagger"
              className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:p-8"
            >
              <span className="eyebrow">Misi</span>
              <ol className="mt-4 grid gap-5 sm:grid-cols-2">
                {MISSIONS.map(({ title, desc }, index) => (
                  <li key={title} className="flex gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lime/20 text-[0.7rem] font-extrabold text-forest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[0.82rem] font-bold leading-snug text-navy">{title}</h3>
                      <p className="mt-1 text-[0.75rem] leading-relaxed text-ink">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div data-reveal="up">
              <p className="eyebrow flex items-center gap-2">
                <Users className="size-4" /> Ekosistem
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Bin Alfan Group.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink">
                Lima entitas yang saling melengkapi dalam pendidikan, literasi, teknologi, dan
                pengembangan masyarakat.
              </p>
            </div>
            <ul data-reveal="stagger" className="divide-y divide-border border-t border-border">
              {GROUP_MEMBERS.map((member) => (
                <li
                  key={member.name}
                  className="grid gap-1 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6"
                >
                  <h3 className="text-base font-bold text-navy">{member.name}</h3>
                  <p className="text-[0.8rem] leading-relaxed text-ink">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
          <div data-reveal="clip" className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={heroBuilding}
              alt="Gedung kegiatan Kampung IT Solo"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div data-reveal="up">
            <p className="eyebrow">Lokasi dan aktivitas</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Belajar, berkarya,
              <br />
              dan berkunjung.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Kegiatan belajar, pelatihan, dan kunjungan berlangsung di Cemani, Grogol, Sukoharjo.
              Kunjungan eduwisata dan studi banding dijadwalkan lebih dulu agar tim bisa menyiapkan
              pendampingan yang sesuai.
            </p>
            <address className="mt-5 not-italic text-[0.8rem] leading-relaxed text-navy">
              {CONTACT.address.full}
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="forest" size="pill" asChild>
                <a href="/#reservasi">
                  Reservasi Kunjungan <ArrowRight />
                </a>
              </Button>
              <Button variant="outlinePill" size="pill" asChild>
                <a href={buildWhatsAppUrl(WA_MESSAGES.tentang)} target="_blank" rel="noreferrer">
                  <MessageCircle /> Tanya via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Kolaborasi"
        title="Ada rencana untuk lembaga atau kampung Anda?"
        description="Ceritakan kebutuhan Anda. Kami akan membantu memetakan langkah berikutnya, dari pelatihan hingga implementasi sistem."
        primary={{ label: "Hubungi Kami", href: "/kontak" }}
        secondary={{
          label: "Tanya via WhatsApp",
          href: buildWhatsAppUrl(WA_MESSAGES.tentang),
          external: true,
        }}
      />
    </PageShell>
  );
}
