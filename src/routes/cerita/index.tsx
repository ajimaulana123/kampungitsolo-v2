import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { getProgram } from "@/data/programs";
import { publishedStories } from "@/data/stories";
import { pageHead } from "@/lib/seo";
import { canonicalUrl, WHATSAPP_URL } from "@/lib/site";

const STORY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cerita & Studi Kasus Kampung IT Solo",
  description:
    "Empat cerita dari desa, UMKM, pelajar, dan komunitas yang bekerja bersama Kampung IT Solo.",
  url: canonicalUrl("/cerita"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedStories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: story.title,
      url: canonicalUrl(`/cerita/${story.slug}`),
    })),
  },
};

export const Route = createFileRoute("/cerita/")({
  head: () =>
    pageHead({
      title: "Cerita & Studi Kasus Kampung IT Solo",
      description:
        "Cerita dari desa, UMKM, pelajar, dan komunitas yang bekerja bersama Kampung IT Solo. Lihat konteks, pendekatan, dan hasil yang tercatat.",
      path: "/cerita",
    }),
  component: StoriesPage,
});

function StoriesPage() {
  const featured = publishedStories[0];
  const rest = publishedStories.slice(1);

  if (!featured) return null;

  const featuredProgram = getProgram(featured.programSlug);

  return (
    <PageShell>
      <PageHero
        eyebrow="Cerita & Studi Kasus"
        title={
          <>
            Pekerjaan yang
            <br />
            tercatat oleh warga.
          </>
        }
        description="Empat cerita dari desa, UMKM, pelajar, dan komunitas. Setiap cerita mencatat konteks awal, pendekatan yang dipakai, dan hasil yang bisa diceritakan tanpa membesar-besarkan."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Cerita" }]}
        actions={
          <>
            <Button variant="forest" size="pill" asChild>
              <Link to="/kontak">
                Diskusikan Kebutuhan <ArrowRight />
              </Link>
            </Button>
            <Button variant="outlinePill" size="pill" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle /> Tanya via WhatsApp
              </a>
            </Button>
          </>
        }
      />
      <JsonLd data={STORY_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Cerita unggulan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Mulai dari pekerjaan yang paling dekat.
            </h2>
          </div>

          <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div data-reveal="clip" className="relative min-h-72 bg-section-tint">
                <img
                  src={featured.images[0]?.src}
                  alt={featured.images[0]?.alt ?? ""}
                  width={992}
                  height={672}
                  fetchPriority="high"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div data-reveal="up" className="flex flex-col justify-center p-7 lg:p-10">
                <p className="eyebrow">
                  {featured.client} · {featured.year}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{featured.summary}</p>
                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] text-ink">
                  <div>
                    <dt className="font-extrabold uppercase tracking-wide text-forest">Program</dt>
                    <dd className="mt-0.5 font-semibold text-navy">
                      {featuredProgram?.name ?? "Program Kampung IT Solo"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-extrabold uppercase tracking-wide text-forest">Sektor</dt>
                    <dd className="mt-0.5 font-semibold text-navy">{featured.sector}</dd>
                  </div>
                </dl>
                <Link
                  to="/cerita/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-forest hover:underline"
                >
                  Baca cerita lengkap <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Semua cerita</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Dari desa, UMKM, pelajar, dan komunitas.
            </h2>
          </div>

          <ul data-reveal="stagger" className="mt-8 border-t border-border">
            {rest.map((story) => {
              const program = getProgram(story.programSlug);
              return (
                <li key={story.slug} className="border-b border-border">
                  <Link
                    to="/cerita/$slug"
                    params={{ slug: story.slug }}
                    className="group grid gap-4 py-7 sm:grid-cols-[0.28fr_1fr_auto] sm:items-center sm:gap-8"
                  >
                    <div>
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-wide text-forest">
                        {story.sector}
                      </p>
                      <p className="mt-1 text-[0.72rem] text-ink">{story.year}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold leading-snug text-navy group-hover:text-forest">
                        {story.title}
                      </h3>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-ink">
                        {story.cardDesc}
                      </p>
                      <p className="mt-2 text-[0.68rem] font-semibold text-muted-foreground">
                        {story.client} · {program?.name ?? "Program Kampung IT Solo"}
                      </p>
                    </div>
                    <ArrowRight className="size-5 text-forest transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Cerita berikutnya"
        title="Bagaimana dengan lembaga Anda?"
        description="Setiap kolaborasi dimulai dari kebutuhan yang jelas. Ceritakan kondisi lembaga, komunitas, atau usaha Anda, lalu tim akan membantu memetakan langkah pertama."
        primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
        secondary={{ label: "Tanya via WhatsApp", href: WHATSAPP_URL, external: true }}
      />
    </PageShell>
  );
}
