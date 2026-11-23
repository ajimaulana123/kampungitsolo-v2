import { ArrowRight } from "lucide-react";

export type RelatedLinkItem = {
  href: string;
  title: string;
  description: string;
  meta?: string | undefined;
  image?: string | undefined;
};

export function RelatedLinks({
  eyebrow,
  title,
  description,
  items,
  className = "py-14",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: RelatedLinkItem[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-reveal="up" className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            {title}
          </h2>
          {description && <p className="mt-3 text-sm leading-relaxed text-ink">{description}</p>}
        </div>

        <ul data-reveal="stagger" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest hover:shadow-lift"
              >
                {item.image && (
                  <span className="block aspect-[16/9] overflow-hidden bg-section-tint">
                    <img
                      src={item.image}
                      alt=""
                      width={992}
                      height={672}
                      loading="lazy"
                      className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105"
                    />
                  </span>
                )}
                <span className="flex flex-1 flex-col p-5">
                  {item.meta && (
                    <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-forest">
                      {item.meta}
                    </span>
                  )}
                  <span className="mt-1 text-base font-bold leading-snug text-navy">
                    {item.title}
                  </span>
                  <span className="mt-2 text-[0.78rem] leading-relaxed text-ink">
                    {item.description}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.72rem] font-bold text-forest">
                    Lihat detail
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
