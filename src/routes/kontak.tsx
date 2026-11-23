import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { InquiryForm } from "@/components/forms/InquiryForm";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { canonicalUrl, CONTACT, SITE_URL, SOCIALS } from "@/lib/site";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const faqs = [
  {
    q: "Apakah harus reservasi sebelum datang?",
    a: "Ya. Kunjungan, studi banding, dan eduwisata sebaiknya dijadwalkan lewat formulir atau WhatsApp agar tim bisa menyiapkan pendampingan yang sesuai.",
  },
  {
    q: "Kapan jam kunjungan?",
    a: "Jam operasional Senin-Jumat 08.00-16.00 dan Sabtu 08.00-13.00. Untuk waktu di luar jam tersebut, konfirmasi lebih dulu lewat WhatsApp.",
  },
  {
    q: "Apakah formulir menyimpan data di server?",
    a: "Tidak. Formulir membuka WhatsApp dengan pesan yang sudah terisi. Data yang Anda kirim melalui WhatsApp tunduk pada kebijakan WhatsApp.",
  },
];

const ORGANIZATION_SCHEMA = {
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.geo.latitude,
    longitude: CONTACT.geo.longitude,
  },
  hasMap: CONTACT.mapUrl,
  openingHoursSpecification: CONTACT.hours.flatMap((hours) =>
    "opens" in hours
      ? [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hours.days,
            opens: hours.opens,
            closes: hours.closes,
          },
        ]
      : [],
  ),
  sameAs: SOCIALS.map((social) => social.href),
};

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontak & Lokasi Kampung IT Solo",
  description:
    "Alamat, jam operasional, WhatsApp, dan email Kampung IT Solo di Cemani, Grogol, Sukoharjo.",
  url: canonicalUrl("/kontak"),
  mainEntity: ORGANIZATION_SCHEMA,
};

export const Route = createFileRoute("/kontak")({
  head: () =>
    pageHead({
      title: "Kontak & Lokasi Kampung IT Solo | Sukoharjo",
      description:
        "Hubungi Kampung IT Solo di Cemani, Grogol, Sukoharjo. Lihat alamat, jam operasional, WhatsApp, email, dan formulir kunjungan.",
      path: "/kontak",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Kontak"
        title={
          <>
            Mari bicara
            <br />
            tentang rencana Anda.
          </>
        }
        description="Kunjungan, kolaborasi, konsultasi produk, atau pelatihan. Pilih kanal yang paling nyaman, tim kami akan menindaklanjuti."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
        actions={
          <Button variant="forest" size="pill" asChild>
            <a href={buildWhatsAppUrl(WA_MESSAGES.kontak)} target="_blank" rel="noreferrer">
              Chat WhatsApp <MessageCircle />
            </a>
          </Button>
        }
        aside={
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="eyebrow flex items-center gap-2">
              <Clock className="size-4" /> Jam operasional
            </p>
            <ul className="mt-3 space-y-1.5 text-[0.8rem] text-ink">
              {CONTACT.hours.map((hours) => (
                <li key={hours.label} className="flex items-center justify-between gap-4">
                  <span>{hours.label}</span>
                  <span className="font-semibold text-navy">{hours.time}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <JsonLd data={CONTACT_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="eyebrow">Kanal resmi</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Hubungi langsung.
            </h2>
            <ul className="mt-7 space-y-4">
              <li className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-wide text-forest">
                  <MessageCircle className="size-4" /> WhatsApp
                </p>
                <a
                  href={buildWhatsAppUrl(WA_MESSAGES.kontak)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-base font-bold text-navy hover:text-forest"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <p className="mt-1 text-[0.75rem] text-ink">
                  Paling cepat untuk pertanyaan singkat dan penjadwalan.
                </p>
              </li>
              <li className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-wide text-forest">
                  <Mail className="size-4" /> Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 block break-all text-base font-bold text-navy hover:text-forest"
                >
                  {CONTACT.email}
                </a>
                <p className="mt-1 text-[0.75rem] text-ink">
                  Untuk surat resmi, proposal, atau dokumen kerja sama.
                </p>
              </li>
              <li className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-wide text-forest">
                  <MapPin className="size-4" /> Alamat
                </p>
                <address className="mt-2 not-italic text-[0.82rem] font-semibold leading-relaxed text-navy">
                  {CONTACT.address.full}
                </address>
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
                >
                  Buka Google Maps <ArrowRight className="size-3.5" />
                </a>
              </li>
              <li className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-wide text-forest">
                  <Phone className="size-4" /> Telepon
                </p>
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="mt-2 block text-base font-bold text-navy hover:text-forest"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <p className="mt-1 text-[0.75rem] text-ink">
                  Nomor yang sama dengan WhatsApp. Kunjungan tetap dengan reservasi.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card lg:p-8">
            <p className="eyebrow">Formulir</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy">
              Ceritakan kebutuhan Anda.
            </h2>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">
              Isi formulir, lalu lanjutkan pengiriman lewat WhatsApp. Tidak ada data formulir yang
              disimpan di server situs.
            </p>
            <InquiryForm className="mt-6" source="Kontak" defaultNeed="Kunjungan & studi banding" />
          </div>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div data-reveal="up">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Sebelum berkunjung.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
              Tiga hal yang paling sering ditanyakan sebelum menjadwalkan kunjungan atau kolaborasi.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            data-reveal="up"
            className="rounded-2xl border border-border bg-card px-6 shadow-soft"
          >
            {faqs.map(({ q, a }, index) => (
              <AccordionItem key={q} value={`item-${index}`} className="last:border-b-0">
                <AccordionTrigger className="gap-4 text-[0.85rem] font-bold text-navy hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="text-[0.7rem] font-extrabold text-forest">
                      {String(index + 1).padStart(2, "0")}
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

      <CtaBand
        eyebrow="Kunjungan"
        title="Ingin melihat langsung suasana belajar?"
        description="Jadwalkan kunjungan atau studi banding. Tim akan menyiapkan alur yang sesuai dengan kebutuhan lembaga Anda."
        primary={{ label: "Reservasi Kunjungan", href: "/#reservasi" }}
        secondary={{
          label: "Tanya via WhatsApp",
          href: buildWhatsAppUrl(WA_MESSAGES.kontak),
          external: true,
        }}
      />
    </PageShell>
  );
}
