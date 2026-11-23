import { createFileRoute } from "@tanstack/react-router";

import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Prose } from "@/components/site/Prose";
import { pageHead } from "@/lib/seo";
import { canonicalUrl, CONTACT, WHATSAPP_URL } from "@/lib/site";

const TERMS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Syarat dan Ketentuan Kampung IT Solo",
  description:
    "Syarat dan ketentuan penggunaan situs Kampung IT Solo, batasan informasi, hak kekayaan intelektual, dan kontak.",
  url: canonicalUrl("/syarat-ketentuan"),
};

export const Route = createFileRoute("/syarat-ketentuan")({
  head: () =>
    pageHead({
      title: "Syarat & Ketentuan | Kampung IT Solo",
      description:
        "Syarat dan ketentuan penggunaan situs Kampung IT Solo, termasuk batasan informasi, hak kekayaan intelektual, dan kontak.",
      path: "/syarat-ketentuan",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        description="Aturan dasar penggunaan situs Kampung IT Solo dan batasan informasi yang ditampilkan."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Syarat & Ketentuan" }]}
      />
      <JsonLd data={TERMS_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <aside className="h-fit rounded-2xl border border-border bg-surface p-5">
              <p className="eyebrow">Berlaku sejak</p>
              <p className="mt-2 text-sm font-bold text-navy">23 November 2026</p>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink">
                Pertanyaan tentang ketentuan ini bisa dikirim ke{" "}
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-forest underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </aside>

            <Prose>
              <p>
                Dengan menggunakan situs Kampung IT Solo, Anda setuju dengan ketentuan di halaman
                ini. Jika tidak setuju, mohon berhenti menggunakan situs.
              </p>

              <h2>Penggunaan situs</h2>
              <p>
                Situs ini boleh diakses untuk mencari informasi tentang Kampung IT Solo, produk,
                program, kunjungan, dan kolaborasi. Anda tidak boleh menggunakan situs untuk
                aktivitas yang melanggar hukum, mengganggu layanan, atau mencoba mengakses sistem
                tanpa izin.
              </p>

              <h2>Informasi dan penawaran</h2>
              <p>
                Informasi di situs ini disusun untuk memberi gambaran umum. Harga, jadwal,
                ketersediaan, dan ruang lingkup layanan dapat berubah. Informasi di situs bukan
                penawaran yang mengikat sampai ada kesepakatan tertulis atau konfirmasi resmi dari
                Kampung IT Solo.
              </p>

              <h2>Hak kekayaan intelektual</h2>
              <p>
                Nama, logo, tulisan, gambar, dan materi lain di situs ini dimiliki Kampung IT Solo
                atau pihak yang memberikannya. Anda tidak boleh menyalin atau memakai materi
                tersebut untuk kepentingan komersial tanpa izin.
              </p>

              <h2>Tautan pihak ketiga</h2>
              <p>
                Situs ini dapat memuat tautan ke WhatsApp, Google Maps, atau layanan lain. Kami
                tidak mengendalikan layanan tersebut dan tidak bertanggung jawab atas kebijakan atau
                isinya.
              </p>

              <h2>Batasan tanggung jawab</h2>
              <p>
                Kami berusaha menjaga informasi tetap akurat, tetapi tidak menjamin situs selalu
                bebas dari kesalahan atau gangguan. Keputusan yang Anda ambil berdasarkan informasi
                di situs ini sepenuhnya menjadi tanggung jawab Anda.
              </p>

              <h2>Kontak</h2>
              <p>
                Pertanyaan tentang ketentuan ini dapat dikirim ke{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> atau{" "}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp {CONTACT.phoneDisplay}
                </a>
                .
              </p>
            </Prose>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
