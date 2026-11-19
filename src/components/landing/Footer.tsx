import { Globe, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { LeafSwoosh } from "./Decor";

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
function LinkedinFilled({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3.5 8.8h3.7V21H3.5V8.8ZM5.3 3a2.1 2.1 0 1 1 0 4.3 2.1 2.1 0 0 1 0-4.3Zm4.2 5.8h3.5v1.7h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v6H9.5V8.8Z" />
    </svg>
  );
}
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const nav = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "Program", href: "#program" },
];
const info = [
  { label: "Dampak", href: "#dampak" },
  { label: "Jejaring", href: "#jejaring" },
  { label: "FAQ", href: "#faq" },
  { label: "Reservasi", href: "#reservasi" },
];
const socials = [
  { icon: YoutubeFilled, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: FacebookFilled, label: "Facebook" },
  { icon: LinkedinFilled, label: "LinkedIn" },
  { icon: Globe, label: "Website" },
];

export function Footer({ variant = "landing" }: { variant?: "landing" | "detail" }) {
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
        className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1.2fr] lg:px-12">
        <div>
          <Logo href={variant === "detail" ? "/" : "#beranda"} />
          <p className="mt-4 max-w-xs text-[0.8rem] leading-relaxed text-ink">
            Pusat Eduwisata IT & Laboratorium Peradaban Digital di RT 06/RW 21 Surakarta, bagian
            dari Bin Alfan Group.
          </p>
          <div className="mt-6 flex gap-5 text-navy">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors hover:text-forest"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Navigasi" items={nav} />
        <FooterCol title="Informasi" items={info} />
        <div>
          <h3 className="text-sm font-bold text-navy">Kontak Kami</h3>
          <ul className="mt-4 space-y-3 text-[0.78rem] text-ink">
            <li className="flex items-center gap-3">
              <MapPin className="size-4" /> RT 06 / RW 21, Surakarta, Jawa Tengah
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4" />{" "}
              <a href="mailto:kampungitsolo@gmail.com" className="hover:text-forest">
                kampungitsolo@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="size-4" />{" "}
              <a href="https://wa.me/6281235666665" className="hover:text-forest">
                +62 812-3566-6665
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4" />{" "}
              <a href="https://kampungitsolo.com" className="hover:text-forest">
                www.kampungitsolo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 border-t border-border py-6 text-[0.7rem] text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kampung IT Solo. Bersama Membangun Peradaban Digital.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-forest">
              Kebijakan Privasi
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="hover:text-forest">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[0.78rem] text-ink">
        {items.map((item) => (
          <li key={item.label}>
            <Link to="/" hash={item.href.slice(1)} className="hover:text-forest">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
