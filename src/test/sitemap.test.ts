import { describe, expect, it } from "vitest";

import { siteRoutes } from "@/data/routes";
import { renderSitemap } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/site";

const xml = renderSitemap(siteRoutes);
const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1] ?? "");

describe("Sitemap", () => {
  it("renders XML with one URL per published route", () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect((xml.match(/<url>/g) ?? []).length).toBe(siteRoutes.length);
    expect(locations).toHaveLength(siteRoutes.length);
  });

  it("has no duplicate URLs", () => {
    expect(new Set(locations).size).toBe(locations.length);
  });

  it("uses absolute HTTPS URLs", () => {
    for (const location of locations) {
      expect(location.startsWith(SITE_URL)).toBe(true);
    }
  });

  it("includes Batch 3 routes including all published audiences", () => {
    expect(xml).toContain("/program");
    expect(xml).toContain("/eduwisata");
    expect(xml).toContain("/cerita");
    expect(xml).toContain("/artikel/kursus-coding-untuk-anak-di-solo");
    expect(xml).toContain("/untuk/sekolah");
    expect(xml).toContain("/untuk/pesantren");
  });
});
