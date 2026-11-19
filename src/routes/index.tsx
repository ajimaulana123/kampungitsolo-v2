import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
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
import { useScrollParallax } from "@/hooks/use-scroll-parallax";

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
  useScrollReveal();
  useScrollParallax();
  return (
    <main className="bg-background">
      <Hero />
      <Ticker />
      <About />
      <Ecosystem />
      <Program />
      <Impact />
      <Network />
      <Faq />
      <Cta />
      <Reservation />
      <Footer />
      <BackToTop />
    </main>
  );
}
