import { Fragment } from "react";
import { Link } from "@tanstack/react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { canonicalUrl } from "@/lib/site";

import { JsonLd } from "./JsonLd";

export type BreadcrumbHref =
  | "/"
  | "/products"
  | "/program"
  | "/eduwisata"
  | "/cerita"
  | "/artikel"
  | "/untuk"
  | "/tentang"
  | "/kontak"
  | "/kebijakan-privasi"
  | "/syarat-ketentuan";

export type BreadcrumbItemData = {
  label: string;
  href?: BreadcrumbHref;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItemData[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: canonicalUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <Breadcrumb className="text-[0.72rem]">
        <BreadcrumbList className="gap-1.5 sm:gap-2">
          {items.map((item, index) => (
            <Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.href}
                      className="font-semibold text-ink transition-colors hover:text-forest"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="font-bold text-navy">{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator className="text-forest/60" />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <JsonLd data={schema} />
    </>
  );
}
