import { MapPin, Mail, MessageCircle } from "lucide-react";

import building from "@/assets/hero-building.jpg";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

export function Reservation() {
  return (
    <section id="reservasi" className="relative overflow-hidden py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          data-reveal="up"
          className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-[0.85fr_1.15fr]"
        >
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
                <p className="mt-1.5 whitespace-pre-line text-[0.82rem] leading-relaxed text-navy-foreground/90">
                  {CONTACT.address.lines.join("\n")}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-[0.8rem]">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-lime" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 shrink-0 text-lime" />
                  <a href={WHATSAPP_URL} className="hover:underline">
                    {CONTACT.phoneDisplay}
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

          <InquiryForm className="p-6 sm:p-8 lg:p-10" />
        </div>
      </div>
    </section>
  );
}
