import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { publishedArticles } from "@/data/articles";
import { publishedAudiences } from "@/data/audiences";
import { products } from "@/data/products";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
const publishedPaths = [
  "/",
  "/products",
  "/program",
  "/eduwisata",
  "/cerita",
  "/artikel",
  "/untuk",
  "/tentang",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/sitemap.xml",
  ...products.map((product) => `/products/${product.slug}`),
  ...programs.map((program) => `/program/${program.slug}`),
  ...stories.map((story) => `/cerita/${story.slug}`),
  ...publishedArticles.map((article) => `/artikel/${article.slug}`),
  ...publishedAudiences.map((audience) => `/untuk/${audience.slug}`),
];

describe("App routing", () => {
  it.each(publishedPaths)("matches a page for %s instead of falling back to not found", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
