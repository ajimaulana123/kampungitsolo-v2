import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import hands from "@/assets/cta-hands.jpg";

const CTA_WHATSAPP_URL = buildWhatsAppUrl(
  "Halo Kampung IT Solo, saya ingin berdiskusi tentang rencana kolaborasi atau kunjungan.",
);

export function Cta() {
  return (
    <section id="kolaborasi" className="relative overflow-hidden bg-navy">
      <img
        src={hands}
        alt=""
        loading="lazy"
        width={1280}
        height={640}
        className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-70 md:w-2/3"
      />
      <div className="absolute inset-0 bg-gradient-cta" />
      <div
        data-reveal="up"
        className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row lg:py-14 md:items-center lg:px-12"
      >
        <div className="flex items-center gap-8">
          <svg
            viewBox="0 0 40 40"
            className="hidden h-14 w-14 shrink-0 drop-shadow-lg sm:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cta-z" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--lime)" />
                <stop offset="1" stopColor="var(--forest)" />
              </linearGradient>
            </defs>
            <path
              d="M8 3 H34 Q38 3 36 7 L22 20 H32 Q36 20 34 24 L30 34 Q29 37 26 37 H6 Q2 37 4 33 L18 20 H8 Q4 20 5 16 L8 6 Q9 3 12 3 Z"
              fill="url(#cta-z)"
            />
          </svg>
          <div>
            <h2 className="text-xl font-extrabold text-navy-foreground lg:text-2xl">
              Punya rencana untuk kampung Anda?
            </h2>
            <p className="mt-1 max-w-xl text-[0.8rem] leading-snug text-navy-foreground/85">
              Sekolah, komunitas, pemerintah desa, dan mitra industri. Mari rancang program digital
              yang tepat sasaran, dari pelatihan hingga implementasi sistem.
            </p>
            <p className="mt-3 text-[0.7rem] font-semibold text-lime">
              Ceritakan kebutuhan Anda · Tim kami akan membantu memetakan langkah berikutnya
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:ml-auto">
          <Button variant="lime" size="pill" asChild>
            <a href="#reservasi">
              Jadwalkan Kunjungan <ArrowRight />
            </a>
          </Button>
          <Button variant="outlinePill" size="pill" asChild>
            <a href={CTA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Tanya via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
