import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { label: "Beranda", href: "#beranda", active: true },
  { label: "Tentang", href: "#tentang", dropdown: true },
  { label: "Ekosistem", href: "#ekosistem", dropdown: true },
  { label: "Program", href: "#program", dropdown: true },
  { label: "Dampak", href: "#dampak" },
  { label: "Berita & Artikel", href: "#berita" },
  { label: "Kolaborasi", href: "#kolaborasi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative flex items-center gap-1 py-2 text-[0.8rem] transition-colors hover:text-forest ${
                l.active ? "font-bold text-navy" : "font-medium text-ink"
              }`}
            >
              {l.label}
              {l.dropdown && <ChevronDown className="size-3.5" />}
              {l.active && <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-forest" />}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <button
            aria-label="Cari"
            className="grid size-10 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-surface"
          >
            <Search className="size-4" />
          </button>
          <Button variant="forest" size="pill">
            Kunjungi Kampung <ArrowRight />
          </Button>
        </div>
        <button className="lg:hidden text-navy" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-20 border-y border-border bg-background px-6 py-4 shadow-card lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-navy">
              {l.label}
            </a>
          ))}
          <Button variant="forest" size="pill" className="mt-3 w-full">
            Kunjungi Kampung <ArrowRight />
          </Button>
        </div>
      )}
    </header>
  );
}
