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

export function buildWhatsAppUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
