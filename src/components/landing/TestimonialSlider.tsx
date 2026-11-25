import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Quote, Star } from "lucide-react";

export type TestimonialItem = {
  quote: string;
  summary?: string;
  name: string;
  role: string;
  organization?: string;
  client: string;
  rating?: number;
  image?: string;
  imageAlt?: string;
  avatar?: string;
  instagramUrl?: string;
};

function instagramEmbedUrl(url: string) {
  return `${url.replace(/\/+$/, "")}/embed/`;
}

export function TestimonialSlider({ items }: { items: TestimonialItem[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = items.length;
  const hasVideo = items.some((item) => Boolean(item.instagramUrl));

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (hasVideo || isPaused || total <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasVideo, isPaused, total]);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  if (!items.length) return null;
  const active = items[current]!;

  return (
    <div
      data-reveal="up"
      role="region"
      aria-label="Testimoni mitra dan pengunjung"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Sisi Kiri: Video Testimoni atau Foto Dokumentasi */}
        <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden bg-navy px-4 py-5 sm:min-h-[320px] sm:px-6 lg:min-h-[380px]">
          {active.instagramUrl ? (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(190,242,100,0.16),transparent_46%)]" />
              <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/20">
                <div className="relative w-full" style={{ paddingBottom: "calc(125% + 54px)" }}>
                  <iframe
                    key={active.instagramUrl}
                    src={instagramEmbedUrl(active.instagramUrl)}
                    title={`Video testimoni dari ${active.name}`}
                    className="absolute inset-0 size-full border-0"
                    loading="lazy"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 z-10 h-[55px] w-[33%] bg-white"
                />
              </div>
            </>
          ) : active.image ? (
            <>
              <img
                key={active.image}
                src={active.image}
                alt={active.imageAlt ?? active.name}
                width={992}
                height={672}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-opacity duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/40" />

              <div className="absolute left-5 top-5 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-[0.7rem] font-bold text-lime backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-lime animate-pulse" />
                  {active.client}
                </span>
              </div>

              {active.imageAlt && (
                <div className="absolute bottom-5 left-5 right-5 z-10 text-[0.72rem] text-navy-foreground/90 lg:hidden">
                  <p className="font-semibold line-clamp-1">{active.imageAlt}</p>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* Sisi Kanan: Konten Kutipan & Profil Pembicara */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[0.7rem] font-bold text-forest">
                {active.instagramUrl ? (
                  <Play className="size-3.5 fill-forest text-forest" />
                ) : (
                  <Quote className="size-3.5 fill-forest text-forest" />
                )}
                {active.instagramUrl ? "Video Testimoni" : "Suara Nyata"}
              </span>
              {active.rating && (
                <div
                  className="flex items-center gap-1 text-forest"
                  aria-label={`Rating ${active.rating} dari 5 bintang`}
                >
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-forest text-forest" />
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-forest">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-ink/50">/</span>
              <span className="font-mono text-xs text-ink/70">
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center py-7 sm:py-9">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-forest">
              {active.client}
            </p>

            {/* Kutipan Utama */}
            <blockquote className="pt-2">
              <p className="text-base font-bold leading-relaxed text-navy sm:text-lg lg:text-[1.15rem]">
                "{active.quote}"
              </p>
            </blockquote>

            {active.summary && (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink">{active.summary}</p>
            )}
          </div>

          {/* Profil Pembicara & Tombol Navigasi Slider */}
          <div className="border-t border-border/60 pt-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {active.avatar ? (
                  <img
                    src={active.avatar}
                    alt={active.name}
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover ring-2 ring-lime/60 shadow-soft"
                  />
                ) : (
                  <div className="grid size-11 shrink-0 place-items-center rounded-full bg-forest text-sm font-bold text-forest-foreground">
                    {active.instagramUrl ? (
                      <Play className="size-4 fill-current" />
                    ) : (
                      active.name.charAt(0)
                    )}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-extrabold leading-snug text-navy">{active.name}</h4>
                  <p className="text-[0.75rem] font-medium text-ink">
                    {active.role}
                    {active.organization ? ` · ${active.organization}` : ""}
                  </p>
                </div>
              </div>

              {/* Kontrol Panah & Titik */}
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <div
                  className="flex flex-wrap items-center gap-1.5"
                  role="tablist"
                  aria-label="Navigasi slide"
                >
                  {items.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={index === current}
                      aria-label={`Lihat testimoni ke-${index + 1}`}
                      onClick={() => setCurrent(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === current ? "w-6 bg-forest" : "w-2 bg-border hover:bg-forest/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Testimoni sebelumnya"
                    onClick={prev}
                    className="grid size-9 place-items-center rounded-full border border-border bg-surface text-navy transition-colors hover:border-forest hover:bg-forest hover:text-forest-foreground"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Testimoni berikutnya"
                    onClick={next}
                    className="grid size-9 place-items-center rounded-full border border-border bg-surface text-navy transition-colors hover:border-forest hover:bg-forest hover:text-forest-foreground"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
