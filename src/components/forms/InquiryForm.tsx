import { type FormEvent, useState } from "react";
import { CircleCheck, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildInquiryMessage, buildWhatsAppUrl, normalizeWhatsapp } from "@/lib/whatsapp";

export const INQUIRY_NEEDS = [
  "Kunjungan & studi banding",
  "Kolaborasi & kemitraan",
  "Konsultasi produk",
  "Pelatihan & workshop",
] as const;

type InquiryFormProps = {
  needs?: readonly string[];
  defaultNeed?: string;
  source?: string;
  className?: string;
};

export function InquiryForm({
  needs = INQUIRY_NEEDS,
  defaultNeed,
  source,
  className,
}: InquiryFormProps) {
  const [waError, setWaError] = useState("");
  const [sentUrl, setSentUrl] = useState("");
  const initialNeed = defaultNeed && needs.includes(defaultNeed) ? defaultNeed : needs[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();

    const name = value("name");
    const org = value("org");
    const email = value("email");
    const wa = normalizeWhatsapp(value("wa"));
    const need = value("need");
    const message = value("message");

    if (!wa) {
      setWaError("Masukkan nomor WhatsApp yang valid, contoh 0812 3456 7890.");
      setSentUrl("");
      e.currentTarget.querySelector<HTMLInputElement>("#wa")?.focus();
      return;
    }
    setWaError("");

    const url = buildWhatsAppUrl(
      buildInquiryMessage({ name, org, email, wa, need, message, source }),
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name" className="text-[0.75rem] font-semibold text-navy">
            Nama lengkap *
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Nama Anda"
            className="h-11 rounded-xl"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="org" className="text-[0.75rem] font-semibold text-navy">
            Asal / instansi
          </Label>
          <Input
            id="org"
            name="org"
            placeholder="Sekolah, desa, komunitas..."
            className="h-11 rounded-xl"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email" className="text-[0.75rem] font-semibold text-navy">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            className="h-11 rounded-xl"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="wa" className="text-[0.75rem] font-semibold text-navy">
            WhatsApp *
          </Label>
          <Input
            id="wa"
            name="wa"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="08xx xxxx xxxx"
            aria-invalid={waError ? true : undefined}
            aria-describedby={waError ? "wa-error" : undefined}
            onChange={() => waError && setWaError("")}
            className={`h-11 rounded-xl ${waError ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {waError && (
            <p id="wa-error" role="alert" className="text-[0.7rem] font-medium text-destructive">
              {waError}
            </p>
          )}
        </div>
        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="need" className="text-[0.75rem] font-semibold text-navy">
            Keperluan *
          </Label>
          <select
            id="need"
            name="need"
            required
            defaultValue={initialNeed}
            className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="message" className="text-[0.75rem] font-semibold text-navy">
            Pesan
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Ceritakan rencana kunjungan atau kolaborasi Anda..."
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="forest" size="pill">
          Kirim via WhatsApp <Send />
        </Button>
        <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
          Formulir akan membuka WhatsApp dengan pesan yang sudah terisi.
        </p>
      </div>

      {sentUrl && (
        <p
          role="status"
          className="mt-4 flex animate-rise items-start gap-2.5 rounded-xl border border-forest/20 bg-lime/10 p-3.5 text-[0.75rem] leading-relaxed text-navy"
        >
          <CircleCheck className="mt-0.5 size-4 shrink-0 text-forest" />
          <span>
            Pesan siap dikirim. Lanjutkan di tab WhatsApp yang terbuka. Tab tidak muncul?{" "}
            <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-forest underline underline-offset-2"
            >
              Buka WhatsApp
            </a>
            .
          </span>
        </p>
      )}
    </form>
  );
}
