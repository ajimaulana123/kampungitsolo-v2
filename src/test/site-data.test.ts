import { describe, expect, it } from "vitest";

import { articles, publishedArticles } from "@/data/articles";
import { audiences, publishedAudiences } from "@/data/audiences";
import { products } from "@/data/products";
import { publishedPrograms, programs } from "@/data/programs";
import { siteRoutes } from "@/data/routes";
import { searchEntries } from "@/data/search";
import { publishedStories, stories } from "@/data/stories";

const publishedPaths = new Set(siteRoutes.map((route) => route.path));
const productSlugs = new Set(products.map((product) => product.slug));
const programSlugs = new Set(programs.map((program) => program.slug));
const storySlugs = new Set(stories.map((story) => story.slug));
const articleSlugs = new Set(articles.map((article) => article.slug));

function articleWordCount(article: (typeof articles)[number]) {
  return article.blocks
    .map((block) => {
      if (block.type === "list") return block.items.join(" ");
      if (block.type === "image") return block.caption ?? "";
      return block.text;
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

describe("Product data", () => {
  it("has ten products with unique slugs", () => {
    expect(products).toHaveLength(10);
    expect(productSlugs.size).toBe(products.length);
  });

  it("marks exactly one catalog featured product", () => {
    const featured = products.filter((product) => product.catalogFeatured);
    expect(featured).toHaveLength(1);
    expect(featured[0]?.slug).toBe("elfan-system");
  });

  it("keeps required catalog fields filled", () => {
    for (const product of products) {
      expect(product.name.length).toBeGreaterThan(0);
      expect(product.category.length).toBeGreaterThan(0);
      expect(product.cardDesc.length).toBeGreaterThan(0);
      expect(product.summary.length).toBeGreaterThan(0);
      expect(product.image.length).toBeGreaterThan(0);
    }
  });

  it("only references published programs and stories", () => {
    for (const product of products) {
      for (const slug of product.relatedProgramSlugs ?? []) {
        expect(programSlugs.has(slug)).toBe(true);
        expect(publishedPrograms.some((program) => program.slug === slug)).toBe(true);
      }
      for (const slug of product.relatedStorySlugs ?? []) {
        expect(storySlugs.has(slug)).toBe(true);
        expect(publishedStories.some((story) => story.slug === slug)).toBe(true);
      }
    }
  });
});

describe("Program data", () => {
  it("has six programs with unique slugs", () => {
    expect(programs).toHaveLength(6);
    expect(programSlugs.size).toBe(programs.length);
  });

  it("gives every published program enough outcomes and FAQs", () => {
    for (const program of publishedPrograms) {
      expect(program.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(program.faqs.length).toBeGreaterThanOrEqual(3);
      expect(program.description.length).toBeGreaterThanOrEqual(2);
      expect(program.curriculum.length).toBeGreaterThanOrEqual(3);
      expect(program.summary.length).toBeGreaterThanOrEqual(120);
      expect(program.summary.length).toBeLessThanOrEqual(160);
    }
  });

  it("keeps each published program between 400 and 700 words", () => {
    for (const program of publishedPrograms) {
      const content = [
        ...program.description,
        ...program.outcomes,
        ...program.curriculum.map((step) => `${step.title} ${step.desc}`),
        ...program.faqs.map((faq) => `${faq.q} ${faq.a}`),
      ].join(" ");
      const wordCount = content.split(/\s+/).filter(Boolean).length;
      expect(wordCount).toBeGreaterThanOrEqual(400);
      expect(wordCount).toBeLessThanOrEqual(700);
    }
  });

  it("only references existing products and stories", () => {
    for (const program of programs) {
      for (const slug of program.relatedProductSlugs) {
        expect(productSlugs.has(slug)).toBe(true);
      }
      for (const slug of program.relatedStorySlugs ?? []) {
        expect(storySlugs.has(slug)).toBe(true);
      }
    }
  });
});

describe("Story data", () => {
  it("has four published stories and all have permission", () => {
    expect(stories).toHaveLength(4);
    expect(publishedStories).toHaveLength(4);
    for (const story of publishedStories) {
      expect(story.permission).toBe("granted");
      expect(story.images.length).toBeGreaterThan(0);
      expect(story.summary.length).toBeGreaterThanOrEqual(120);
      expect(story.summary.length).toBeLessThanOrEqual(160);
      expect(story.title.length).toBeLessThanOrEqual(60);
    }
  });

  it("only references existing programs", () => {
    for (const story of stories) {
      expect(programSlugs.has(story.programSlug)).toBe(true);
    }
  });
});

describe("Article data", () => {
  it("has four published articles with unique slugs", () => {
    expect(articles).toHaveLength(4);
    expect(publishedArticles).toHaveLength(4);
    expect(articleSlugs.size).toBe(articles.length);
  });

  it("keeps every article between 800 and 1200 words", () => {
    for (const article of publishedArticles) {
      const wordCount = articleWordCount(article);
      expect(wordCount).toBeGreaterThanOrEqual(800);
      expect(wordCount).toBeLessThanOrEqual(1200);
    }
  });

  it("keeps metadata honest and within SEO limits", () => {
    for (const article of publishedArticles) {
      expect(article.description.length).toBeGreaterThanOrEqual(120);
      expect(article.description.length).toBeLessThanOrEqual(160);
      expect(article.author.name.length).toBeGreaterThan(0);
      expect(article.author.role.length).toBeGreaterThan(0);
      expect(article.heroImage.alt.length).toBeGreaterThan(0);
    }
  });

  it("only references existing programs, products, and published stories", () => {
    for (const article of articles) {
      for (const slug of article.relatedProgramSlugs ?? []) {
        expect(programSlugs.has(slug)).toBe(true);
        expect(publishedPrograms.some((program) => program.slug === slug)).toBe(true);
      }
      for (const slug of article.relatedProductSlugs ?? []) {
        expect(productSlugs.has(slug)).toBe(true);
      }
      for (const slug of article.relatedStorySlugs ?? []) {
        expect(storySlugs.has(slug)).toBe(true);
        expect(publishedStories.some((story) => story.slug === slug)).toBe(true);
      }
    }
  });
});

describe("Audience data", () => {
  it("publishes only audiences with a program, product, and story", () => {
    expect(publishedAudiences).toHaveLength(3);
    for (const audience of publishedAudiences) {
      expect(audience.recommendedProgramSlugs.length).toBeGreaterThan(0);
      expect(audience.recommendedProductSlugs.length).toBeGreaterThan(0);
      expect(audience.storySlugs.length).toBeGreaterThan(0);
      expect(audience.faqs.length).toBeGreaterThanOrEqual(3);
      expect(audience.painPoints.length).toBeGreaterThanOrEqual(3);
      expect(audience.description.length).toBeGreaterThanOrEqual(2);
      expect(audience.summary.length).toBeGreaterThanOrEqual(120);
      expect(audience.summary.length).toBeLessThanOrEqual(160);
    }
  });

  it("keeps pesantren unpublished until a real story exists", () => {
    const pesantren = audiences.find((audience) => audience.slug === "pesantren");
    expect(pesantren?.published).toBe(false);
    expect(pesantren?.storySlugs).toEqual([]);
  });

  it("only references existing and published content", () => {
    for (const audience of audiences) {
      for (const slug of audience.recommendedProgramSlugs) {
        expect(programSlugs.has(slug)).toBe(true);
        expect(publishedPrograms.some((program) => program.slug === slug)).toBe(true);
      }
      for (const slug of audience.recommendedProductSlugs) {
        expect(productSlugs.has(slug)).toBe(true);
      }
      for (const slug of audience.storySlugs) {
        expect(storySlugs.has(slug)).toBe(true);
        expect(publishedStories.some((story) => story.slug === slug)).toBe(true);
      }
    }
  });
});

describe("Route manifest", () => {
  it("contains every published page and no duplicates", () => {
    expect(siteRoutes).toHaveLength(38);
    expect(new Set(siteRoutes.map((route) => route.path)).size).toBe(siteRoutes.length);
  });

  it("contains Batch 3 pages and leaves unpublished audiences out", () => {
    for (const route of siteRoutes) {
      expect(route.path.startsWith("/")).toBe(true);
      expect(route.path).not.toBe("/untuk/pesantren");
    }
    expect(publishedPaths.has("/artikel")).toBe(true);
    for (const article of publishedArticles) {
      expect(publishedPaths.has(`/artikel/${article.slug}`)).toBe(true);
    }
    expect(publishedPaths.has("/untuk")).toBe(true);
    for (const audience of publishedAudiences) {
      expect(publishedPaths.has(`/untuk/${audience.slug}`)).toBe(true);
    }
  });

  it("uses absolute-friendly paths without a trailing slash", () => {
    for (const route of siteRoutes) {
      if (route.path !== "/") expect(route.path.endsWith("/")).toBe(false);
    }
  });
});

describe("Search entries", () => {
  it("only points to published routes", () => {
    for (const entry of searchEntries) {
      expect(publishedPaths.has(entry.path)).toBe(true);
    }
  });

  it("indexes products, programs, stories, articles, and audiences", () => {
    expect(searchEntries.filter((entry) => entry.group === "Produk")).toHaveLength(10);
    expect(searchEntries.filter((entry) => entry.group === "Program")).toHaveLength(6);
    expect(searchEntries.filter((entry) => entry.group === "Cerita")).toHaveLength(4);
    expect(searchEntries.filter((entry) => entry.group === "Artikel")).toHaveLength(4);
    expect(searchEntries.filter((entry) => entry.group === "Solusi")).toHaveLength(3);
  });
});
