import { Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { CONTACT, SOCIALS, WHATSAPP_URL } from "@/lib/site";
import { LeafSwoosh } from "./Decor";
import { Logo } from "./Logo";

function YoutubeFilled({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z" />
    </svg>
  );
}

function FacebookFilled({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
    </svg>
  );
}

function TikTokFilled({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.2 1.7 3.6 3.9 3.9v2.6c-1.4.1-2.7-.3-3.9-1.1v6.1c0 3.2-2.2 5.5-5.3 5.5-2.9 0-5.2-2.1-5.2-5 0-3 2.4-5.2 5.5-5v2.7c-.3 0-.6-.1-.9-.1-1.4 0-2.4 1-2.4 2.4 0 1.4 1 2.3 2.3 2.3 1.5 0 2.5-1 2.5-2.7V3h3.5Z" />
    </svg>
  );
}

function SocialIcon({ label, className }: { label: string; className?: string }) {
  if (label === "YouTube") return <YoutubeFilled className={className} />;
  if (label === "Facebook") return <FacebookFilled className={className} />;
  if (label === "TikTok") return <TikTokFilled className={className} />;
  return <Instagram className={className} />;
}

type FooterLink = {
  label: string;
  to?:
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
  href?: string;
};

const explore: FooterLink[] = [
  { label: "Produk", to: "/products" },
  { label: "Program", to: "/program" },
  { label: "Eduwisata", to: "/eduwisata" },
  { label: "Cerita", to: "/cerita" },
  { label: "Artikel", to: "/artikel" },
  { label: "Solusi", to: "/untuk" },
];

const info: FooterLink[] = [
  { label: "Tentang", to: "/tentang" },
  { label: "Kontak", to: "/kontak" },
  { label: "FAQ", href: "/#faq" },
  { label: "Reservasi", href: "/#reservasi" },
];

export function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden pt-12">
      <LeafSwoosh className="absolute bottom-16 right-0 hidden h-40 w-48 md:block" />
      <svg
        viewBox="0 0 160 60"
        className="pointer-events-none absolute bottom-16 right-24 hidden h-16 w-44 text-lime md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M0 58 L60 8 L120 58" />
        <path d="M30 58 L60 32 L90 58" opacity="0.6" />
      </svg>
      <LeafSwoosh flip className="absolute -bottom-1 left-0 h-12 w-40 opacity-70" />
      <div
        data-reveal="stagger"
        className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1.2fr] lg:px-12"
      >
        <div>
          <Logo href="/" />
          <p className="mt-4 max-w-xs text-[0.8rem] leading-relaxed text-ink">
            Pusat riset dan pengembangan pendidikan berbasis adab dan IT di Cemani, Grogol,
            Sukoharjo, bagian dari Bin Alfan Group.
          </p>
          <div className="mt-6 flex gap-5 text-navy">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors hover:text-forest"
              >
                <SocialIcon label={label} className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Jelajahi" items={explore} />
        <FooterCol title="Informasi" items={info} />

        <div>
          <h3 className="text-sm font-bold text-navy">Kontak Kami</h3>
          <ul className="mt-4 space-y-3 text-[0.78rem] text-ink">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <address className="not-italic leading-relaxed">
                {CONTACT.address.lines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < CONTACT.address.lines.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-forest">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="size-4 shrink-0" />
              <a href={WHATSAPP_URL} className="hover:text-forest">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" />
              <span className="leading-relaxed">
                Senin-Jumat 08.00-16.00
                <br />
                Sabtu 08.00-13.00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 border-t border-border py-6 text-[0.7rem] text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kampung IT Solo. Bersama Membangun Peradaban Digital.</p>
          <div className="flex items-center gap-3">
            <Link to="/kebijakan-privasi" className="hover:text-forest">
              Kebijakan Privasi
            </Link>
            <span className="h-3 w-px bg-border" />
            <Link to="/syarat-ketentuan" className="hover:text-forest">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[0.78rem] text-ink">
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className="hover:text-forest">
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className="hover:text-forest">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
