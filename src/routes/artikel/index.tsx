import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { publishedArticles } from "@/data/articles";
import { formatDate } from "@/lib/date";
import { pageHead } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site";

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Artikel & Panduan Digital Kampung IT Solo",
  description:
    "Panduan praktis tentang pendidikan, desa, UMKM, energi, dan teknologi dari Kampung IT Solo.",
  url: canonicalUrl("/artikel"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: canonicalUrl(`/artikel/${article.slug}`),
    })),
  },
};

export const Route = createFileRoute("/artikel/")({
  head: () =>
    pageHead({
      title: "Artikel & Panduan Digital | Kampung IT Solo",
      description:
        "Panduan praktis tentang kursus coding, AI untuk pesantren, PLTS sekolah, dan digitalisasi desa dari Kampung IT Solo.",
      path: "/artikel",
    }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const featured = publishedArticles.find((article) => article.featured) ?? publishedArticles[0];
  const rest = publishedArticles.filter((article) => article.slug !== featured?.slug);
  const categories = Array.from(new Set(publishedArticles.map((article) => article.category)));

  if (!featured) return null;

  return (
    <PageShell>
      <PageHero
        eyebrow="Artikel & Panduan"
        title={
          <>
            Bacaan praktis
            <br />
            untuk keputusan digital.
          </>
        }
        description="Panduan tentang pendidikan, desa, UMKM, energi, dan teknologi. Ditulis dari pekerjaan yang kami lakukan, bukan dari daftar tren yang jauh dari lapangan."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Artikel" }]}
        actions={
          <Button variant="forest" size="pill" asChild>
            <Link to="/kontak">
              Diskusikan Kebutuhan <ArrowRight />
            </Link>
          </Button>
        }
        aside={
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              width={992}
              height={672}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5">
              <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                {featured.category}
              </p>
              <p className="mt-1 text-sm font-bold leading-snug text-navy-foreground">
                {featured.seoTitle}
              </p>
            </div>
          </div>
        }
      />
      <JsonLd data={ARTICLE_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Topik</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Mulai dari pertanyaan yang dekat.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Setiap artikel membahas satu keputusan yang sering dihadapi sekolah, desa, UMKM,
              pesantren, atau keluarga.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <li
                  key={category}
                  className="rounded-xl bg-surface px-3 py-2 text-[0.7rem] font-semibold text-navy"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div data-reveal="clip" className="relative min-h-72 bg-section-tint">
                <img
                  src={featured.heroImage.src}
                  alt={featured.heroImage.alt}
                  width={1280}
                  height={768}
                  fetchPriority="high"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div data-reveal="up" className="flex flex-col justify-center p-7 lg:p-10">
                <p className="eyebrow">
                  {featured.category} · {formatDate(featured.date)}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{featured.description}</p>
                <p className="mt-4 flex items-center gap-2 text-[0.72rem] text-muted-foreground">
                  <Clock3 className="size-3.5" />
                  {featured.readingTime} baca
                </p>
                <Link
                  to="/artikel/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-forest hover:underline"
                >
                  Baca artikel <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Semua artikel</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Pilih bacaan berikutnya.
            </h2>
          </div>

          <ul data-reveal="stagger" className="mt-8 border-t border-border">
            {rest.map((article) => (
              <li key={article.slug} className="border-b border-border">
                <Link
                  to="/artikel/$slug"
                  params={{ slug: article.slug }}
                  className="group grid gap-4 py-7 sm:grid-cols-[0.3fr_1fr_auto] sm:items-center sm:gap-8"
                >
                  <div>
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-wide text-forest">
                      {article.category}
                    </p>
                    <p className="mt-1 text-[0.72rem] text-ink">{formatDate(article.date)}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug text-navy group-hover:text-forest">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-ink">
                      {article.description}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-[0.68rem] text-muted-foreground">
                      <Clock3 className="size-3" />
                      {article.readingTime} baca
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-forest transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Butuh pendampingan?"
        title="Bacaan saja tidak cukup."
        description="Kalau artikel ini memunculkan pertanyaan tentang lembaga atau usaha Anda, tim Kampung IT Solo bisa membantu memetakan langkah pertama."
        primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
        secondary={{ label: "Lihat Program", href: "/program" }}
      />
    </PageShell>
  );
}
