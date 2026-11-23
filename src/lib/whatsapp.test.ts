import { describe, expect, it } from "vitest";

import { buildInquiryMessage, buildWhatsAppUrl, normalizeWhatsapp } from "./whatsapp";

describe("normalizeWhatsapp", () => {
  it("normalizes local, 62, and +62 numbers", () => {
    expect(normalizeWhatsapp("0812 3456 7890")).toBe("081234567890");
    expect(normalizeWhatsapp("6281235666665")).toBe("081235666665");
    expect(normalizeWhatsapp("+62 812-3566-6665")).toBe("081235666665");
  });

  it("rejects invalid numbers", () => {
    expect(normalizeWhatsapp("123")).toBeNull();
    expect(normalizeWhatsapp("")).toBeNull();
  });
});

describe("buildInquiryMessage", () => {
  it("includes filled fields and skips empty optional fields", () => {
    const message = buildInquiryMessage({
      name: "Ayu",
      org: "SMK Contoh",
      email: "",
      wa: "081234567890",
      need: "Kunjungan & studi banding",
      message: "Ingin berkunjung.",
      source: "Halaman Kontak",
    });

    expect(message).toContain("Halo Kampung IT Solo, saya Ayu dari SMK Contoh.");
    expect(message).toContain("Keperluan: Kunjungan & studi banding");
    expect(message).toContain("WhatsApp: 081234567890");
    expect(message).toContain("Pesan: Ingin berkunjung.");
    expect(message).toContain("Halaman: Halaman Kontak");
    expect(message).not.toContain("Email:");
  });
});

describe("buildWhatsAppUrl", () => {
  it("encodes the message into the official number URL", () => {
    const url = buildWhatsAppUrl("Halo & selamat datang");

    expect(url.startsWith("https://wa.me/6281235666665?text=")).toBe(true);
    expect(url).toContain("Halo%20%26%20selamat%20datang");
  });
});
