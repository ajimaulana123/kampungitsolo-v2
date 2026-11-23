import { publishedArticles } from "./articles";
import { publishedAudiences } from "./audiences";
import { products } from "./products";
import { publishedPrograms } from "./programs";
import { publishedStories } from "./stories";

export type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

export type SiteRoute = {
  path: string;
  lastmod: string;
  changefreq: ChangeFrequency;
  priority: number;
};

const LAST_MODIFIED = "2026-11-23";

const staticRoutes: SiteRoute[] = [
  { path: "/", lastmod: LAST_MODIFIED, changefreq: "weekly", priority: 1.0 },
  { path: "/products", lastmod: LAST_MODIFIED, changefreq: "weekly", priority: 0.9 },
  { path: "/program", lastmod: LAST_MODIFIED, changefreq: "weekly", priority: 0.9 },
  { path: "/eduwisata", lastmod: LAST_MODIFIED, changefreq: "monthly", priority: 0.9 },
  { path: "/cerita", lastmod: LAST_MODIFIED, changefreq: "weekly", priority: 0.8 },
  { path: "/untuk", lastmod: LAST_MODIFIED, changefreq: "monthly", priority: 0.8 },
  { path: "/artikel", lastmod: LAST_MODIFIED, changefreq: "weekly", priority: 0.8 },
  { path: "/tentang", lastmod: LAST_MODIFIED, changefreq: "monthly", priority: 0.7 },
  { path: "/kontak", lastmod: LAST_MODIFIED, changefreq: "monthly", priority: 0.7 },
  {
    path: "/kebijakan-privasi",
    lastmod: LAST_MODIFIED,
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/syarat-ketentuan",
    lastmod: LAST_MODIFIED,
    changefreq: "yearly",
    priority: 0.3,
  },
];

export const siteRoutes: SiteRoute[] = [
  ...staticRoutes,
  ...products.map((product) => ({
    path: `/products/${product.slug}`,
    lastmod: LAST_MODIFIED,
    changefreq: "monthly" as const,
    priority: 0.8,
  })),
  ...publishedPrograms.map((program) => ({
    path: `/program/${program.slug}`,
    lastmod: LAST_MODIFIED,
    changefreq: "monthly" as const,
    priority: 0.8,
  })),
  ...publishedStories.map((story) => ({
    path: `/cerita/${story.slug}`,
    lastmod: LAST_MODIFIED,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
  ...publishedAudiences.map((audience) => ({
    path: `/untuk/${audience.slug}`,
    lastmod: LAST_MODIFIED,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
  ...publishedArticles.map((article) => ({
    path: `/artikel/${article.slug}`,
    lastmod: article.updated ?? article.date,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
];
