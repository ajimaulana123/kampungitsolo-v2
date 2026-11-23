# Batch 2 Implementation Plan: Program, Eduwisata, Cerita

Tanggal: 2026-11-23
Status: Implemented 2026-11-23
Spec: `docs/superpowers/specs/2026-11-23-seo-page-architecture-design.md` (§11 Batch 2)
Ruang lingkup: situs v2 di repo ini

## 1. Hasil yang diharapkan

Batch 2 menambahkan halaman komersial dan bukti kepercayaan di atas fondasi P0:

- Hub program dan enam detail program.
- Halaman eduwisata.
- Hub cerita dan empat studi kasus yang sudah dikonfirmasi.
- Internal link ke produk dan cerita terkait.
- Schema, sitemap, search, nav, footer, dan test.

## 2. Implementasi

### Data

- `src/data/programs.ts`: enam program dengan audiens, ringkasan, outcomes, format, durasi, lokasi, jadwal, alur kegiatan, FAQ, produk terkait, dan cerita terkait.
- `src/data/stories.ts`: empat cerita dari studi kasus yang sudah dikonfirmasi di spec §12.1. Semua memakai `permission: "granted"`.
- `src/data/products.ts`: menambah referensi `relatedProgramSlugs` dan `relatedStorySlugs`.
- `src/data/routes.ts`: menambah 3 hub dan 10 detail ke sitemap, total 29 URL.
- `src/data/search.ts`: indeks halaman, produk, program, dan cerita yang sudah terbit.

### Halaman

- `src/routes/program/index.tsx`: hub editorial dengan nomor, audiens, format, durasi, dan outcomes.
- `src/routes/program/$slug.tsx`: detail program, CTA WhatsApp berisi nama program, informasi format, outcomes, alur, FAQ, produk/cerita/program terkait, dan schema `Service` atau `Course`.
- `src/routes/eduwisata.tsx`: alur kunjungan, hal yang dipelajari, audiens, dokumentasi foto yang sudah ada, FAQ, dan schema `Service`.
- `src/routes/cerita/index.tsx`: cerita unggulan dan daftar empat studi kasus.
- `src/routes/cerita/$slug.tsx`: konteks, pendekatan, hasil, program terkait, produk relevan, cerita lain, dan schema `Article`.

### Integrasi

- `src/components/site/RelatedLinks.tsx`: kartu tautan terkait.
- `Navbar`, `Footer`, dan `SearchDialog` sekarang menampilkan Program, Eduwisata, dan Cerita.
- Beranda menaut ke `/program`, `/eduwisata`, `/cerita`, dan detail cerita.
- Detail produk menampilkan program dan cerita terkait.
- Sitemap dan test memakai satu route manifest.

## 3. Keputusan konten

- Empat studi kasus beranda dipakai sebagai cerita tanpa menambah kutipan, nama individu, atau angka hasil baru.
- Kutipan "Mitra Kolaborasi" di beranda dipertahankan karena sudah dikonfirmasi di spec §12.1.
- Detail operasional lima program selain bootcamp yang belum tersedia ditulis sebagai "menyesuaikan" atau "disepakati", bukan dikarang.
- Bootcamp memakai data terkonfirmasi: 6 hari, Rp 500.000, pemula, portal berita CRUD, dan deploy.
- Fasilitas eduwisata tidak dirinci sebagai daftar karena belum dikonfirmasi. Halaman menyatakan fasilitas dan jumlah peserta dikonfirmasi saat penjadwalan.
- Tidak ada harga program lain yang dicantumkan.

## 4. Verifikasi

- `bun run test`: 6 file, 61 test lolos.
- `bunx tsc --noEmit`: bersih.
- `bun run lint`: 0 error, 6 warning lama dari komponen UI.
- `bun run build`: lolos.
- Runtime dev: 20 route yang diperiksa merespons 200, termasuk 6 program, 4 cerita, dan `/sitemap.xml`.
- Sitemap: 29 URL unik, tanpa `/artikel` dan `/untuk`.
- JSON-LD: `Service`, `Course`, `Article`, `CollectionPage`, `BreadcrumbList`, `Product`, dan schema beranda valid.
- Semua internal link yang diperiksa merespons 200.
- Tidak ada `href="#"` atau tautan ke route Batch 3.

## 5. Masih menunggu data

- Durasi, jadwal, lokasi, fasilitator, dan kurikulum final untuk lima program selain bootcamp.
- Durasi, kapasitas, fasilitas, dan biaya eduwisata.
- Izin foto program/fasilitas baru.
- Tiga sampai lima cerita baru dengan nama, peran, instansi, foto, dan izin.
- Review manusia untuk halaman legal, tentang, dan kontak.
- Batch 3: artikel dan halaman audiens.
- Cutover domain, redirect `/bootcamp`, Google Business Profile, dan Search Console.
