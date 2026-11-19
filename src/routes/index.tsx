import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Program } from "@/components/landing/Program";
import { Impact } from "@/components/landing/Impact";
import { Network } from "@/components/landing/Network";
import { Faq } from "@/components/landing/Faq";
import { Reservation } from "@/components/landing/Reservation";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kampung IT Solo — Pusat Eduwisata IT & Lab. Peradaban Digital di Surakarta",
      },
      {
        name: "description",
        content:
          "Kampung IT Solo adalah Pusat Eduwisata IT & Laboratorium Peradaban Digital di RT 06/21 Surakarta. Bagian dari Bin Alfan Group, menghadirkan 10 produk dan 16 modul Elfan System untuk pendidikan, UMKM, desa, dan pelajar.",
      },
      {
        property: "og:title",
        content: "Kampung IT Solo — Lab. Peradaban Berbasis IT",
      },
      {
        property: "og:description",
        content:
          "Pusat Eduwisata IT dan Laboratorium Peradaban Digital di RT 06/RW 21 Surakarta, bagian dari Bin Alfan Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Ecosystem />
      <Program />
      <Impact />
      <Network />
      <Faq />
      <Cta />
      <Reservation />
      <Footer />
    </main>
  );
}
