import { type FormEvent } from "react";
import { MapPin, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import building from "@/assets/hero-building.jpg";

const WHATSAPP = "6281235666665";

const needs = [
  "Kunjungan & studi banding",
  "Kolaborasi & kemitraan",
  "Konsultasi produk",
  "Pelatihan & workshop",
];

export function Reservation() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();

    const name = value("name");
    const org = value("org");
    const email = value("email");
    const wa = value("wa");
    const need = value("need");
    const message = value("message");

    const lines = [
      `Halo Kampung IT Solo, saya ${name}${org ? ` dari ${org}` : ""}.`,
      `Keperluan: ${need}`,
      `WhatsApp: ${wa}`,
      email ? `Email: ${email}` : "",
      message ? `Pesan: ${message}` : "",
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="reservasi" className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          data-reveal="up"
          className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-navy p-8 text-navy-foreground lg:p-10">
            {/* Foto gedung: memberi gambaran tempat yang akan dikunjungi */}
            <img
              src={building}
              alt=""
              aria-hidden="true"
              width={1280}
              height={960}
              loading="lazy"
              className="pointer-events-none absolute inset-0 size-full object-cover object-[72%_center] opacity-30"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
            <div className="relative">
              <p className="text-[0.7rem] font-extrabold uppercase tracking-wide text-lime">
                Reservasi Tamu
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight lg:text-[1.8rem]">
                Buku Tamu
                <br />
                Kampung IT Solo.
              </h2>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-navy-foreground/85">
                Isi formulir untuk berkunjung, berdiskusi, atau bekerja sama dengan Kampung IT Solo.
                Kolom bertanda * wajib diisi.
              </p>

              <div className="mt-8">
                <p className="text-[0.68rem] font-bold uppercase tracking-wide text-lime">
                  Alamat Kami
                </p>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-navy-foreground/90">
                  RT 06 / RW 21, Surakarta
                  <br />
                  Jawa Tengah, Indonesia
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-[0.8rem]">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-lime" />
                  <a href="mailto:kampungitsolo@gmail.com" className="hover:underline">
                    kampungitsolo@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 shrink-0 text-lime" />
                  <a href={`https://wa.me/${WHATSAPP}`} className="hover:underline">
                    +62 812-3566-6665
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
                  <span className="text-navy-foreground/90">Solo Raya &amp; Sukoharjo</span>
                </li>
              </ul>

              <p className="mt-8 text-[0.68rem] leading-relaxed text-navy-foreground/60">
                Data yang dikirim hanya digunakan untuk koordinasi kunjungan.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
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
                  placeholder="Sekolah, desa, komunitas…"
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
                  placeholder="08xx xxxx xxxx"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="need" className="text-[0.75rem] font-semibold text-navy">
                  Keperluan *
                </Label>
                <select
                  id="need"
                  name="need"
                  required
                  defaultValue={needs[0]}
                  className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {needs.map((n) => (
                    <option key={n} value={n}>
                      {n}
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
                  placeholder="Ceritakan rencana kunjungan atau kolaborasi Anda…"
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
          </form>
        </div>
      </div>
    </section>
  );
}
