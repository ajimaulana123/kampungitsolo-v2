import { absoluteUrl, canonicalUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "./site";

type PageHeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function fitDescription(text: string, suffix = "", max = 160) {
  const base = text.trim();
  const combined = suffix ? `${base} ${suffix.trim()}` : base;
  if (combined.length <= max) return combined;
  return `${combined.slice(0, max - 3).replace(/\s+\S*$/, "")}...`;
}

export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: PageHeadInput) {
  const url = canonicalUrl(path);
  const fullImage = absoluteUrl(image);
  const imageType = fullImage.endsWith(".png") ? "image/png" : "image/jpeg";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "id_ID" },
      { property: "og:image", content: fullImage },
      { property: "og:image:secure_url", content: fullImage },
      { property: "og:image:type", content: imageType },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: fullImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
