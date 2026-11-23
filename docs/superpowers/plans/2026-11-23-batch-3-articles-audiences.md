# Batch 3 Implementation Plan: Artikel dan Halaman Audiens

Tanggal: 2026-11-23
Status: Implemented 2026-11-23
Spec: `docs/superpowers/specs/2026-11-23-seo-page-architecture-design.md` (§11 Batch 3)
Ruang lingkup: situs v2 di repo ini

## 1. Hasil yang diharapkan

Batch 3 menambahkan konten editorial dan jalur solusi per audiens:

- Hub artikel dan empat artikel panjang.
- Hub solusi dan tiga halaman audiens yang sudah punya program, produk, dan cerita relevan.
- Internal link antara artikel, program, produk, cerita, dan audiens.
- Schema, sitemap, search, footer, dan teaser artikel di beranda.

## 2. Implementasi

### Data

- `src/data/articles.ts`: empat artikel dengan `seoTitle`, deskripsi, penulis organisasi, tanggal, waktu baca, blok konten, gambar, dan referensi program/produk/cerita.
- `src/data/audiences.ts`: data `sekolah`, `desa`, `umkm`, dan `pesantren`. Tiga audiens pertama `published: true`; `pesantren` `published: false`.
- `src/data/routes.ts`: menambah `/artikel`, empat detail artikel, `/untuk`, dan tiga detail audiens. Total 38 URL.
- `src/data/search.ts`: menambah grup Artikel dan Solusi.

### Halaman

- `src/routes/artikel/index.tsx`: artikel unggulan, daftar topik, dan daftar artikel.
- `src/routes/artikel/$slug.tsx`: hero, metadata penulis dan tanggal, daftar isi, isi artikel, program/produk/cerita terkait, artikel lain, dan schema `Article`.
- `src/routes/untuk/index.tsx`: hub jalur solusi untuk audiens yang sudah terbit.
- `src/routes/untuk/$slug.tsx`: masalah khas, pendekatan, program, produk, cerita, FAQ, dan schema `WebPage` serta `Service`.
- `src/components/site/ArticleBody.tsx`: renderer blok artikel dan daftar isi dengan anchor.
- `src/components/landing/Articles.tsx`: teaser tiga artikel di beranda.

### Integrasi

- Footer menambah tautan Artikel dan Solusi.
- SearchDialog menampilkan hasil Artikel dan Solusi.
- Sitemap hanya memuat audiens yang `published`.
- Route `/untuk/pesantren` mengembalikan 404 selama belum ada cerita pesantren yang nyata.

## 3. Keputusan konten

- Byline memakai `Tim Kampung IT Solo` dengan peran `Tim editorial` karena nama penulis perorangan dan review faktual belum tersedia.
- Artikel tidak memuat statistik, harga, atau klaim hasil yang belum dikonfirmasi.
- `pesantren` sengaja belum terbit karena belum ada cerita pesantren dengan izin publikasi. Halaman tetap disiapkan untuk dipakai setelah bukti tersedia.
- Artikel memakai gambar yang sudah ada di proyek. Tidak ada fotografer, narasumber, atau studi kasus baru yang dikarang.
- Tidak ada analytics atau CMS baru.

## 4. Verifikasi

- `bun run test`: 6 file, 77 test lolos.
- `bunx tsc --noEmit`: bersih.
- `bun run lint`: 0 error, 6 warning lama dari komponen UI.
- `bun run build`: lolos.
- Sitemap runtime: 38 URL unik, seluruhnya merespons 200.
- `/untuk/pesantren` merespons 404.
- Sembilan halaman artikel dan solusi diperiksa: ada `h1`, JSON-LD valid, daftar isi artikel, dan tidak ada tautan ke pesantren.
- 41 internal link unik dari halaman baru merespons 200.
- Tidak ada `href="#"` di halaman baru.
- Word count artikel: 872, 809, 805, dan 808 kata.

## 5. Masih menunggu data

- Nama penulis perorangan, profil penulis, dan review faktual artikel.
- Cerita pesantren dengan izin publikasi agar `/untuk/pesantren` bisa diterbitkan.
- Data final program selain bootcamp, fasilitas eduwisata, dan biaya.
- Review manusia untuk halaman legal, tentang, dan kontak.
- Google Business Profile, Search Console, dan cutover domain.
- Instrumentasi metrik north-star.
