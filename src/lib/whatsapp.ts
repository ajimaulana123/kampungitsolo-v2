import { WHATSAPP_URL } from "./site";

export type InquiryInput = {
  name: string;
  org: string;
  email: string;
  wa: string;
  need: string;
  message: string;
  source?: string | undefined;
};

export function normalizeWhatsapp(input: string) {
  const digits = input.replace(/[^\d]/g, "");
  const local = digits.startsWith("62") ? `0${digits.slice(2)}` : digits;
  return /^08\d{8,12}$/.test(local) ? local : null;
}

export function buildInquiryMessage({ name, org, email, wa, need, message, source }: InquiryInput) {
  return [
    `Halo Kampung IT Solo, saya ${name}${org ? ` dari ${org}` : ""}.`,
    `Keperluan: ${need}`,
    `WhatsApp: ${wa}`,
    email ? `Email: ${email}` : "",
    message ? `Pesan: ${message}` : "",
    source ? `Halaman: ${source}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export const WA_MESSAGES = {
  general:
    "Halo Kampung IT Solo, saya ingin mengetahui lebih lanjut tentang program dan layanan yang tersedia.",
  product: (name?: string) =>
    name
      ? `Halo Kampung IT Solo, saya tertarik dengan produk ${name} dan ingin konsultasi lebih lanjut.`
      : "Halo Kampung IT Solo, saya ingin konsultasi mengenai produk dan layanan teknologi yang tersedia.",
  program: (name?: string) =>
    name
      ? `Halo Kampung IT Solo, saya ingin mengetahui jadwal dan detail ${name}.`
      : "Halo Kampung IT Solo, saya ingin mengetahui jadwal dan detail program pelatihan yang tersedia.",
  eduwisata: "Halo Kampung IT Solo, saya ingin menjadwalkan eduwisata untuk lembaga kami.",
  cerita:
    "Halo Kampung IT Solo, saya ingin berdiskusi tentang program yang cocok untuk kebutuhan lembaga kami.",
  kontak: "Halo Kampung IT Solo, saya ingin menghubungi tim untuk berdiskusi lebih lanjut.",
  tentang:
    "Halo Kampung IT Solo, saya ingin mengetahui lebih lanjut tentang ekosistem Kampung IT Solo.",
  audience: (audienceName: string) =>
    `Halo Kampung IT Solo, saya ingin berdiskusi tentang solusi untuk ${audienceName}.`,
  legal:
    "Halo Kampung IT Solo, saya memiliki pertanyaan terkait kebijakan privasi atau syarat dan ketentuan.",
  faq: "Halo Kampung IT Solo, saya memiliki pertanyaan yang belum terjawab di halaman FAQ.",
};

export function buildWhatsAppUrl(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
