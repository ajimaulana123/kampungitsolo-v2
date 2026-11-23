import { publishedArticles } from "./articles";
import { publishedAudiences } from "./audiences";
import { products } from "./products";
import { publishedPrograms } from "./programs";
import { publishedStories } from "./stories";

export type SearchPagePath =
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

type PageSearchEntry = {
  group: "Halaman";
  label: string;
  description: string;
  path: SearchPagePath;
  keywords: string[];
};

type ProductSearchEntry = {
  group: "Produk";
  label: string;
  description: string;
  slug: string;
  path: string;
  keywords: string[];
};

type ProgramSearchEntry = {
  group: "Program";
  label: string;
  description: string;
  slug: string;
  path: string;
  keywords: string[];
};

type StorySearchEntry = {
  group: "Cerita";
  label: string;
  description: string;
  slug: string;
  path: string;
  keywords: string[];
};

type ArticleSearchEntry = {
  group: "Artikel";
  label: string;
  description: string;
  slug: string;
  path: string;
  keywords: string[];
};

type AudienceSearchEntry = {
  group: "Solusi";
  label: string;
  description: string;
  slug: string;
  path: string;
  keywords: string[];
};

export type SearchEntry =
  | PageSearchEntry
  | ProductSearchEntry
  | ProgramSearchEntry
  | StorySearchEntry
  | ArticleSearchEntry
  | AudienceSearchEntry;

const pages: PageSearchEntry[] = [
  {
    group: "Halaman",
    label: "Beranda",
    description: "Ringkasan Kampung IT Solo, program, ekosistem, dan reservasi.",
    path: "/",
    keywords: ["kampung it solo", "eduwisata", "solo raya"],
  },
  {
    group: "Halaman",
    label: "Produk & Layanan",
    description: "Katalog 10 produk teknologi pendidikan.",
    path: "/products",
    keywords: ["produk", "layanan", "katalog", "teknologi"],
  },
  {
    group: "Halaman",
    label: "Program",
    description: "Enam program pelatihan dan pendampingan digital.",
    path: "/program",
    keywords: ["program", "pelatihan", "workshop", "bootcamp", "pendampingan"],
  },
  {
    group: "Halaman",
    label: "Eduwisata IT",
    description: "Kunjungan belajar dan studi banding untuk lembaga.",
    path: "/eduwisata",
    keywords: ["eduwisata", "studi banding", "kunjungan", "sekolah"],
  },
  {
    group: "Halaman",
    label: "Cerita & Studi Kasus",
    description: "Cerita dari desa, UMKM, pelajar, dan komunitas.",
    path: "/cerita",
    keywords: ["cerita", "studi kasus", "testimoni", "dampak"],
  },
  {
    group: "Halaman",
    label: "Artikel & Panduan",
    description: "Panduan praktis tentang pendidikan, desa, UMKM, dan energi.",
    path: "/artikel",
    keywords: ["artikel", "panduan", "coding", "ai", "plts", "desa digital"],
  },
  {
    group: "Halaman",
    label: "Solusi per Audiens",
    description: "Jalur solusi untuk sekolah, desa, dan UMKM.",
    path: "/untuk",
    keywords: ["solusi", "sekolah", "desa", "umkm", "pesantren"],
  },
  {
    group: "Halaman",
    label: "Tentang",
    description: "Latar belakang, visi, misi, dan Bin Alfan Group.",
    path: "/tentang",
    keywords: ["tentang", "profil", "bin alfan group", "visi", "misi"],
  },
  {
    group: "Halaman",
    label: "Kontak",
    description: "Alamat, jam operasional, WhatsApp, email, dan formulir kunjungan.",
    path: "/kontak",
    keywords: ["kontak", "alamat", "lokasi", "whatsapp", "email"],
  },
  {
    group: "Halaman",
    label: "Kebijakan Privasi",
    description: "Cara Kampung IT Solo menangani data formulir.",
    path: "/kebijakan-privasi",
    keywords: ["privasi", "data", "formulir"],
  },
  {
    group: "Halaman",
    label: "Syarat & Ketentuan",
    description: "Aturan penggunaan situs dan batasan informasi.",
    path: "/syarat-ketentuan",
    keywords: ["syarat", "ketentuan", "legal"],
  },
];

const productEntries: ProductSearchEntry[] = products.map((product) => ({
  group: "Produk",
  label: product.name,
  description: product.cardDesc,
  slug: product.slug,
  path: `/products/${product.slug}`,
  keywords: [product.category, product.tagline],
}));

const programEntries: ProgramSearchEntry[] = publishedPrograms.map((program) => ({
  group: "Program",
  label: program.name,
  description: program.cardDesc,
  slug: program.slug,
  path: `/program/${program.slug}`,
  keywords: [...program.audience, program.format, program.shortName],
}));

const storyEntries: StorySearchEntry[] = publishedStories.map((story) => ({
  group: "Cerita",
  label: story.title,
  description: story.cardDesc,
  slug: story.slug,
  path: `/cerita/${story.slug}`,
  keywords: [story.client, story.sector, story.year],
}));

const articleEntries: ArticleSearchEntry[] = publishedArticles.map((article) => ({
  group: "Artikel",
  label: article.title,
  description: article.description,
  slug: article.slug,
  path: `/artikel/${article.slug}`,
  keywords: [article.category, article.seoTitle],
}));

const audienceEntries: AudienceSearchEntry[] = publishedAudiences.map((audience) => ({
  group: "Solusi",
  label: audience.name,
  description: audience.summary,
  slug: audience.slug,
  path: `/untuk/${audience.slug}`,
  keywords: [audience.headline, ...audience.painPoints],
}));

export const searchEntries: SearchEntry[] = [
  ...pages,
  ...productEntries,
  ...programEntries,
  ...storyEntries,
  ...articleEntries,
  ...audienceEntries,
];
