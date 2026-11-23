import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { About } from "@/components/landing/About";
import { Articles } from "@/components/landing/Articles";
import { Cta } from "@/components/landing/Cta";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Faq } from "@/components/landing/Faq";
import { Hero } from "@/components/landing/Hero";
import { Impact } from "@/components/landing/Impact";
import { Network } from "@/components/landing/Network";
import { Program } from "@/components/landing/Program";
import { Reservation } from "@/components/landing/Reservation";
import { Ticker } from "@/components/landing/Ticker";
import { JsonLd } from "@/components/site/JsonLd";
import { PageShell } from "@/components/site/PageShell";
import { useScrollParallax } from "@/hooks/use-scroll-parallax";
import { pageHead } from "@/lib/seo";
import { CONTACT, SITE_URL, SOCIALS } from "@/lib/site";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Kampung IT Solo",
      alternateName: "Kampung IT Solo, Pusat Eduwisata IT",
      url: SITE_URL,
      logo: `${SITE_URL}/kampung-it-solo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Pusat eduwisata IT dan laboratorium peradaban digital di Cemani, Grogol, Sukoharjo, bagian dari Bin Alfan Group.",
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
      areaServed: ["Sukoharjo", "Surakarta", "Solo Raya"],
      parentOrganization: { "@type": "Organization", name: "Bin Alfan Group" },
      sameAs: SOCIALS.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Kampung IT Solo",
      url: SITE_URL,
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: `${SITE_URL}/`,
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Kampung IT Solo: Lab Peradaban Digital di Solo Raya",
      description:
        "Pusat eduwisata IT dan laboratorium peradaban digital di Sukoharjo, Solo Raya. Program untuk lembaga, UMKM, dan komunitas.",
      path: "/",
    }),
  component: Index,
});

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full bg-forest text-forest-foreground shadow-card transition-[opacity,translate] duration-300 hover:brightness-110 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

function Index() {
  useScrollParallax();

  return (
    <PageShell>
      <JsonLd data={STRUCTURED_DATA} />
      <Hero />
      <Ticker />
      <About />
      <Ecosystem />
      <Program />
      <Impact />
      <Articles />
      <Network />
      <Faq />
      <Cta />
      <Reservation />
      <BackToTop />
    </PageShell>
  );
}
