import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          data-reveal="up"
          className="flex flex-col gap-6 rounded-3xl bg-navy p-8 text-navy-foreground shadow-card md:flex-row md:items-center lg:p-10"
        >
          <div>
            {eyebrow && (
              <p className="text-[0.7rem] font-extrabold uppercase tracking-wide text-lime">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-2xl font-extrabold">{title}</h2>
            <p className="mt-2 max-w-xl text-[0.8rem] leading-relaxed text-navy-foreground/85">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:ml-auto">
            <Button variant="lime" size="pill" asChild>
              <a
                href={primary.href}
                {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {primary.label} <ArrowRight />
              </a>
            </Button>
            {secondary && (
              <Button variant="outlinePill" size="pill" asChild>
                <a
                  href={secondary.href}
                  {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {secondary.label}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
