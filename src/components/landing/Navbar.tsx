import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Menu, MessageCircle, Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "Program", href: "#program" },
  { label: "Dampak", href: "#dampak" },
  { label: "FAQ", href: "#faq" },
  { label: "Kolaborasi", href: "#kolaborasi" },
];

type NavbarProps = {
  variant?: "landing" | "detail";
};

export function Navbar({ variant = "landing" }: NavbarProps) {
  const isDetail = variant === "detail";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (isDetail) return;

      // Sorot menu terakhir yang judul section-nya sudah melewati bawah navbar.
      const offset = 140;
      let current = "beranda";
      for (const l of links) {
        const id = l.href.slice(1);
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDetail]);

  return (
    <>
      <div className="h-20" aria-hidden="true" />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "px-3 pt-3 sm:px-6" : ""}`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "h-16 max-w-6xl rounded-full border border-border/70 bg-background/85 px-4 shadow-card backdrop-blur-md lg:px-6"
              : "h-20 max-w-[112rem] px-6 lg:px-12"
          }`}
        >
          <Logo href={isDetail ? "/" : "#beranda"} className={scrolled ? "h-10" : "h-14"} />

          {isDetail ? (
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="hidden items-center gap-1.5 text-[0.78rem] font-semibold text-ink transition-colors hover:text-forest sm:inline-flex"
              >
                <ArrowLeft className="size-4" /> Beranda
              </Link>
              <Button variant="forest" size="pillSm" asChild>
                <a href="https://wa.me/6281235666665" target="_blank" rel="noreferrer">
                  Hubungi Kami <MessageCircle />
                </a>
              </Button>
            </div>
          ) : (
            <>
              <nav className="hidden items-center gap-7 lg:flex">
                {links.map((l) => {
                  const isActive = l.href === `#${active}`;
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative flex items-center gap-1 py-2 text-[0.8rem] transition-colors hover:text-forest ${
                        isActive ? "font-bold text-navy" : "font-medium text-ink"
                      }`}
                    >
                      {l.label}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-forest" />
                      )}
                    </a>
                  );
                })}
              </nav>
              <div className="hidden items-center gap-4 lg:flex">
                <button
                  aria-label="Cari"
                  className="grid size-10 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-surface"
                >
                  <Search className="size-4" />
                </button>
                <Button variant="forest" size="pill" asChild>
                  <a href="https://wa.me/6281235666665" target="_blank" rel="noreferrer">
                    Kunjungi Kampung <ArrowRight />
                  </a>
                </Button>
              </div>
              <button
                className="lg:hidden text-navy"
                aria-label="Menu"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </button>
            </>
          )}
        </div>
        {!isDetail && open && (
          <div
            className={`absolute inset-x-0 border-y bg-background px-6 pb-5 pt-2 shadow-card ${scrolled ? "top-[5.25rem] mx-3 rounded-2xl border-x sm:mx-6" : "top-20"}`}
          >
            {links.map((l) => {
              const isActive = l.href === `#${active}`;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block py-2 text-sm ${
                    isActive ? "font-bold text-forest" : "font-semibold text-navy"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <Button variant="forest" size="pill" className="mt-3 w-full" asChild>
              <a href="https://wa.me/6281235666665" target="_blank" rel="noreferrer">
                Kunjungi Kampung <ArrowRight />
              </a>
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
