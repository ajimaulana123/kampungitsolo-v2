import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArticleBody, ArticleToc } from "@/components/site/ArticleBody";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { getArticle, publishedArticles } from "@/data/articles";
import { getProduct } from "@/data/products";
import { getProgram } from "@/data/programs";
import { getStory } from "@/data/stories";
import { formatDate } from "@/lib/date";
import { pageHead } from "@/lib/seo";
import { absoluteUrl, canonicalUrl, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article || !article.published) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    return pageHead({
      title: article ? `${article.seoTitle} | Kampung IT Solo` : "Artikel | Kampung IT Solo",
      description: article
        ? article.description
        : "Artikel dan panduan digital dari Kampung IT Solo.",
      path: article ? `/artikel/${article.slug}` : "/artikel",
      ...(article ? { image: absoluteUrl(article.heroImage.src) } : {}),
      type: "article",
    });
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();

  const relatedPrograms = (article.relatedProgramSlugs ?? [])
    .map((slug) => getProgram(slug))
    .filter((program): program is NonNullable<typeof program> => Boolean(program?.published));

  const relatedProducts = (article.relatedProductSlugs ?? [])
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const relatedStories = (article.relatedStorySlugs ?? [])
    .map((slug) => getStory(slug))
    .filter((story): story is NonNullable<typeof story> =>
      Boolean(story?.published && story.permission === "granted"),
    );

  const otherArticles = publishedArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    inLanguage: "id-ID",
    url: canonicalUrl(`/artikel/${article.slug}`),
    image: absoluteUrl(article.heroImage.src),
    author: {
      "@type": "Organization",
      name: article.author.name,
      description: article.author.role,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Kampung IT Solo",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/kampung-it-solo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/artikel/${article.slug}`),
    },
  };

  return (
    <PageShell revealKey={article.slug}>
      <div key={article.slug}>
        <PageHero
          eyebrow={article.category}
          title={article.title}
          description={article.description}
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Artikel", href: "/artikel" },
            { label: article.seoTitle },
          ]}
          aside={
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={992}
                height={672}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5">
                <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                  {article.readingTime} baca
                </p>
                <p className="mt-1 text-sm font-bold leading-snug text-navy-foreground">
                  {article.author.name}
                </p>
              </div>
            </div>
          }
        />
        <JsonLd data={schema} />

        <section className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.28fr_1.72fr] lg:px-12">
            <aside data-reveal="up" className="h-fit lg:sticky lg:top-28">
              <ArticleToc blocks={article.blocks} />
            </aside>

            <div>
              <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-5 text-[0.74rem] text-ink">
                <span className="inline-flex items-center gap-2">
                  <UserRound className="size-3.5 text-forest" />
                  <strong className="font-bold text-navy">{article.author.name}</strong>
                  <span className="text-muted-foreground">· {article.author.role}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-3.5 text-forest" />
                  Terbit {formatDate(article.date)}
                </span>
                {article.updated && article.updated !== article.date && (
                  <span>Diperbarui {formatDate(article.updated)}</span>
                )}
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-3.5 text-forest" />
                  {article.readingTime} baca
                </span>
              </div>

              <ArticleBody blocks={article.blocks} />

              <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6">
                <Button variant="forest" size="pill" asChild>
                  <Link to="/kontak">
                    Diskusikan Kebutuhan <ArrowRight />
                  </Link>
                </Button>
                {relatedPrograms[0] && (
                  <Button variant="outlinePill" size="pill" asChild>
                    <Link to="/program/$slug" params={{ slug: relatedPrograms[0].slug }}>
                      Lihat Program Terkait
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {relatedPrograms.length > 0 && (
          <RelatedLinks
            eyebrow="Program terkait"
            title="Langkah berikutnya dari bacaan ini."
            className="bg-section-tint py-14"
            items={relatedPrograms.map((program) => ({
              href: `/program/${program.slug}`,
              title: program.name,
              description: program.cardDesc,
              meta: program.format,
              image: program.image,
            }))}
          />
        )}

        {relatedProducts.length > 0 && (
          <RelatedLinks
            eyebrow="Produk terkait"
            title="Produk yang relevan."
            items={relatedProducts.map((product) => ({
              href: `/products/${product.slug}`,
              title: product.name,
              description: product.cardDesc,
              meta: product.category,
              image: product.image,
            }))}
          />
        )}

        {relatedStories.length > 0 && (
          <RelatedLinks
            eyebrow="Cerita terkait"
            title="Lihat penerapannya di lapangan."
            className="bg-section-tint py-14"
            items={relatedStories.map((story) => ({
              href: `/cerita/${story.slug}`,
              title: story.title,
              description: story.cardDesc,
              meta: `${story.client} · ${story.year}`,
              image: story.images[0]?.src,
            }))}
          />
        )}

        <RelatedLinks
          eyebrow="Artikel lain"
          title="Bacaan berikutnya."
          items={otherArticles.map((item) => ({
            href: `/artikel/${item.slug}`,
            title: item.title,
            description: item.description,
            meta: item.category,
            image: item.heroImage.src,
          }))}
        />

        <CtaBand
          eyebrow="Diskusi"
          title="Butuh membahas konteks lembaga Anda?"
          description="Artikel memberi gambaran umum. Kebutuhan sekolah, desa, pesantren, atau usaha bisa berbeda. Tim Kampung IT Solo bisa membantu memetakan langkah yang lebih spesifik."
          primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
          secondary={{ label: "Lihat Program", href: "/program" }}
        />
      </div>
    </PageShell>
  );
}
