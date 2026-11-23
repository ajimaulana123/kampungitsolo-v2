import type { ReactNode } from "react";

import { Breadcrumbs, type BreadcrumbItemData } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs: BreadcrumbItemData[];
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-section-tint pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-streaks opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div data-reveal="up">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink">{description}</p>
            {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div data-reveal="up">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
