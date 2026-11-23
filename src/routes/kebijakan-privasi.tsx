import { createFileRoute } from "@tanstack/react-router";

import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Prose } from "@/components/site/Prose";
import { pageHead } from "@/lib/seo";
import { canonicalUrl, CONTACT, WHATSAPP_URL } from "@/lib/site";

const PRIVACY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kebijakan Privasi Kampung IT Solo",
  description:
    "Kebijakan privasi Kampung IT Solo tentang data formulir, pengiriman melalui WhatsApp, dan kontak permintaan data.",
  url: canonicalUrl("/kebijakan-privasi"),
};

export const Route = createFileRoute("/kebijakan-privasi")({
  head: () =>
    pageHead({
      title: "Kebijakan Privasi | Kampung IT Solo",
      description:
        "Kebijakan privasi Kampung IT Solo: data apa yang dikirim lewat formulir, bagaimana data digunakan, dan cara menghubungi kami.",
      path: "/kebijakan-privasi",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Penjelasan sederhana tentang data yang Anda kirim melalui situs ini dan bagaimana data itu digunakan."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Kebijakan Privasi" }]}
      />
      <JsonLd data={PRIVACY_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <aside className="h-fit rounded-2xl border border-border bg-surface p-5">
              <p className="eyebrow">Berlaku sejak</p>
              <p className="mt-2 text-sm font-bold text-navy">23 November 2026</p>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink">
                Pertanyaan tentang data Anda bisa dikirim ke{" "}
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-forest underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </aside>

            <Prose>
              <p>
                Kebijakan ini menjelaskan bagaimana Kampung IT Solo menangani data yang Anda
                kirimkan melalui situs ini. Kami berusaha menjelaskan praktik yang benar-benar
                berjalan, bukan janji yang tidak bisa dibuktikan.
              </p>

              <h2>Data yang Anda kirim</h2>
              <p>
                Formulir di situs ini meminta nama, asal atau instansi, alamat email, nomor
                WhatsApp, keperluan, dan pesan. Kolom bertanda bintang wajib diisi. Anda tidak perlu
                membuat akun untuk menghubungi kami.
              </p>

              <h2>Bagaimana data dikirim</h2>
              <p>
                Formulir tidak menyimpan data di server situs. Saat Anda mengirim formulir, situs
                membuka WhatsApp dengan pesan yang sudah terisi. Anda tetap harus menekan tombol
                kirim di aplikasi WhatsApp. Setelah itu, data berada di percakapan WhatsApp dan
                tunduk pada kebijakan privasi WhatsApp.
              </p>

              <h2>Penggunaan data</h2>
              <ul>
                <li>Membalas pertanyaan tentang kunjungan, program, produk, atau kolaborasi.</li>
                <li>Menjadwalkan dan mengoordinasikan kunjungan atau studi banding.</li>
                <li>Menindaklanjuti permintaan kerja sama yang Anda kirimkan.</li>
              </ul>

              <h2>Analytics dan cookie</h2>
              <p>
                Situs ini tidak memasang analytics pihak ketiga. Kami tidak memakai cookie iklan
                atau pelacak lintas situs. Penyedia hosting dapat menyimpan log teknis untuk
                keamanan dan ketersediaan layanan.
              </p>

              <h2>Permintaan data</h2>
              <p>
                Anda dapat meminta informasi, koreksi, atau penghapusan data yang Anda kirim dengan
                menghubungi <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> atau{" "}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp {CONTACT.phoneDisplay}
                </a>
                . Kami akan menindaklanjuti sesuai data yang tersedia di percakapan kami.
              </p>

              <h2>Perubahan kebijakan</h2>
              <p>
                Kebijakan ini dapat diperbarui jika cara kerja situs berubah. Tanggal berlaku di
                halaman ini akan diperbarui saat ada perubahan.
              </p>
            </Prose>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
