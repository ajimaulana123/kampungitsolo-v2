import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const nav = ["Beranda", "Tentang", "Ekosistem", "Program"];
const info = ["Dampak", "Berita & Artikel", "Kolaborasi", "Kontak"];
const socials = [
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Globe, label: "Website" },
];

export function Footer() {
  return (
    <footer id="berita" className="relative overflow-hidden pt-12">
      <div className="pointer-events-none absolute -right-6 top-10 hidden h-28 w-24 -skew-x-[40deg] bg-gradient-swoosh md:block" />
      <div className="pointer-events-none absolute -bottom-4 -left-6 h-10 w-24 -skew-x-[40deg] bg-lime/60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1.2fr] lg:px-12">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[0.8rem] leading-relaxed text-ink">
            Pusat edukasi, inovasi, dan pemberdayaan masyarakat berbasis teknologi.
          </p>
          <div className="mt-6 flex gap-5 text-navy">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="transition-colors hover:text-forest">
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
            <li className="flex items-center gap-3"><MapPin className="size-4" /> Kota Surakarta, Jawa Tengah</li>
            <li className="flex items-center gap-3"><Mail className="size-4" /> info@kampungitsolo.id</li>
            <li className="flex items-center gap-3"><Globe className="size-4" /> www.kampungitsolo.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 border-t border-border py-6 text-[0.7rem] text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Kampung IT Solo. Bersama Membangun Peradaban Digital.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-forest">Kebijakan Privasi</a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="hover:text-forest">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[0.78rem] text-ink">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-forest">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
