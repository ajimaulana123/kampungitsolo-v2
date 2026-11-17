import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Program } from "@/components/landing/Program";
import { Impact } from "@/components/landing/Impact";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kampung IT Solo — Membangun Peradaban Digital dari Kampung" },
      {
        name: "description",
        content:
          "Kampung IT Solo adalah pusat edukasi, inovasi, dan pemberdayaan masyarakat berbasis teknologi di Kota Solo.",
      },
      { property: "og:title", content: "Kampung IT Solo — Digital Innovation Village" },
      {
        property: "og:description",
        content: "Pusat edukasi, inovasi, dan pemberdayaan masyarakat berbasis teknologi di Kota Solo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Ecosystem />
      <Program />
      <Impact />
      <Cta />
      <Footer />
    </main>
  );
}
