export const SITE_URL =
import.meta.env['VITE_SITE_URL'] || "https://kampungitsolo.com";
export const SITE_NAME = "Kampung IT Solo";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const WHATSAPP_NUMBER = "6281235666665";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTACT = {
  email: "kampungitsolo@gmail.com",
  phoneDisplay: "+62 812-3566-6665",
  phoneE164: "+6281235666665",
  whatsapp: WHATSAPP_NUMBER,
  address: {
    street: "Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani",
    locality: "Grogol, Sukoharjo",
    region: "Jawa Tengah",
    postalCode: "57552",
    country: "ID",
    full: "Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552",
    lines: [
      "Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15",
      "Ngruki, Cemani, Kec. Grogol",
      "Kabupaten Sukoharjo, Jawa Tengah 57552",
    ],
  },
  geo: {
    latitude: -7.5862389,
    longitude: 110.8114676,
  },
  hours: [
    {
      label: "Senin-Jumat",
      time: "08.00-16.00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    {
      label: "Sabtu",
      time: "08.00-13.00",
      days: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
    {
      label: "Minggu",
      time: "Tutup",
      days: [] as string[],
    },
  ],
  mapUrl: "https://maps.app.goo.gl/dC7WRSL95h61TxJy6",
} as const;

export const SOCIALS = [
  { label: "YouTube Alwustho", href: "https://www.youtube.com/@AlwusthoTechnologies" },
  { label: "YouTube Elfan AI", href: "https://www.youtube.com/@elfanaiacademy" },
  { label: "Instagram Elfan AI", href: "https://www.instagram.com/elfanaiacademy.official/" },
  { label: "Instagram Alwustho", href: "https://www.instagram.com/alwustho_tech/" },
  { label: "TikTok", href: "https://www.tiktok.com/@kampungitsolo" },
  { label: "Facebook", href: "https://www.facebook.com/kampungitsolo/" },
] as const;

export function canonicalUrl(path = "/") {
  if (path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`.replace(/\/+$/, "");
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
