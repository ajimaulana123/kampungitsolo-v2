import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SearchDialog } from "./SearchDialog";

const links = [
  { label: "Beranda", to: "/" },
  { label: "Produk", to: "/products" },
  { label: "Program", to: "/program" },
  { label: "Eduwisata", to: "/eduwisata" },
  { label: "Cerita", to: "/cerita" },
  { label: "Tentang", to: "/tentang" },
  { label: "Kontak", to: "/kontak" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  // Menu mobile menutup saat Escape ditekan atau klik di luar header.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-brand transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "px-3 pt-3 sm:px-6" : ""}`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "h-16 max-w-6xl rounded-full border border-border/70 bg-background/85 px-4 shadow-card backdrop-blur-md lg:px-6"
              : "h-20 max-w-[112rem] px-6 lg:px-12"
          }`}
        >
          <Logo href="/" className={scrolled ? "h-10" : "h-14"} />

          <nav aria-label="Navigasi utama" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center gap-1 py-2 text-[0.8rem] transition-colors duration-300 hover:text-forest ${
                    active ? "font-bold text-navy" : "font-medium text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-[3px] w-full origin-left rounded-full bg-forest transition-[scale] duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              aria-label="Cari"
              onClick={() => setSearchOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-surface"
            >
              <Search className="size-4" />
            </button>
            <Button variant="forest" size="pill" asChild>
              <Link to="/" hash="reservasi">
                Reservasi <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              aria-label="Cari"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
              className="grid size-10 place-items-center rounded-full text-navy transition-colors hover:bg-surface"
            >
              <Search className="size-5" />
            </button>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full text-navy transition-colors hover:bg-surface"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          inert={!open}
          className={`absolute inset-x-0 origin-top border-y bg-background px-6 pb-5 pt-2 shadow-card transition-[opacity,translate,scale,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
            open
              ? "visible translate-y-0 scale-y-100 opacity-100"
              : "invisible -translate-y-2 scale-y-95 opacity-0"
          } ${scrolled ? "top-[5.25rem] mx-3 rounded-2xl border-x sm:mx-6" : "top-20"}`}
        >
          {links.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block py-2 text-sm ${
                  active ? "font-bold text-forest" : "font-semibold text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button variant="forest" size="pill" className="mt-3 w-full" asChild>
            <Link to="/" hash="reservasi" onClick={() => setOpen(false)}>
              Reservasi Kunjungan <ArrowRight />
            </Link>
          </Button>
        </div>
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
