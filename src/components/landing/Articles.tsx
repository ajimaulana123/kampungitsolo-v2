import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";

import { publishedArticles } from "@/data/articles";

export function Articles() {
  const items = publishedArticles.slice(0, 3);

  return (
    <section id="artikel" className="bg-section-tint py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          data-reveal="up"
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <p className="eyebrow">Artikel & Panduan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2.3rem]">
              Bacaan sebelum memulai.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Panduan praktis tentang pendidikan, desa, UMKM, dan energi. Ditulis untuk membantu
              keputusan pertama, bukan menambah istilah yang membingungkan.
            </p>
          </div>
          <Link
            to="/artikel"
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-forest hover:underline"
          >
            Lihat semua artikel <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul data-reveal="stagger" className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((article) => (
            <li key={article.slug}>
              <Link
                to="/artikel/$slug"
                params={{ slug: article.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest hover:shadow-lift"
              >
                <span className="block aspect-[16/9] overflow-hidden bg-background">
                  <img
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    width={992}
                    height={672}
                    loading="lazy"
                    className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105"
                  />
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-forest">
                    {article.category}
                  </span>
                  <span className="mt-1.5 text-base font-bold leading-snug text-navy">
                    {article.title}
                  </span>
                  <span className="mt-2 text-[0.78rem] leading-relaxed text-ink">
                    {article.description}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-4 text-[0.68rem] text-muted-foreground">
                    <Clock3 className="size-3.5" />
                    {article.readingTime} baca
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
