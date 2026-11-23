# Batch 1 Implementation Plan: Fondasi P0

Tanggal: 2026-11-23
Status: Implemented 2026-11-23
Spec: `docs/superpowers/specs/2026-11-23-seo-page-architecture-design.md` (§11 Batch 1)
Ruang lingkup: situs v2 di repo ini

## 1. Hasil yang diharapkan

Batch 1 membangun fondasi yang membuat semua halaman berikutnya punya tempat bergantung:

- Katalog `/products` dan 10 detail produk yang sudah ada.
- `/tentang`, `/kontak`, `/kebijakan-privasi`, `/syarat-ketentuan`.
- Breadcrumb terlihat dan schema di semua halaman P0.
- Navbar, footer, dan search berbasis halaman, bukan anchor.
- Satu sumber data untuk identitas situs, route, dan sitemap.
- Sitemap dinamis yang hanya memuat route terbit.

Batch 1 tidak menerbitkan `/program`, `/eduwisata`, `/cerita`, `/artikel`, atau `/untuk`. Tidak ada tautan ke route tersebut sampai batch berikutnya.

## 2. Batas kerja

Di dalam lingkup:

- Route P0 dan update detail produk.
- Komponen bersama `src/components/site/`.
- Ekstraksi form reservasi ke `src/components/forms/InquiryForm.tsx`.
- Data `products.ts`, `organization.ts`, `routes.ts`, `search.ts`.
- Navbar, footer, search, sitemap, metadata, JSON-LD.
- Test route, data, sitemap, dan helper WhatsApp.
- Perbaikan NAP ke alamat Sukoharjo yang sudah diverifikasi.

Di luar lingkup:

- Program, eduwisata, cerita, artikel, halaman audiens.
- CMS, database, pembayaran, analytics, dependensi baru.
- Foto atau testimoni baru.
- Cutover domain dan redirect server. Itu tetap pekerjaan deployment setelah semua batch selesai.
- Review hukum oleh manusia. Itu gate sebelum terbit, bukan pekerjaan kode.

## 3. Keputusan yang sudah dikunci

- NAP memakai `Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552`, koordinat `-7.5862389, 110.8114676`, jam Senin-Jumat 08.00-16.00 dan Sabtu 08.00-13.00.
- Copy brand boleh memakai "Solo" atau "Solo Raya", tetapi alamat pos dan schema selalu Sukoharjo.
- Sosial resmi: YouTube, Instagram, TikTok, Facebook. Tidak ada ikon sosial tanpa URL.
- Navbar dan footer hanya menampilkan route yang sudah terbit. Daftar lengkap §5.2 spec berlaku setelah Batch 2 dan 3 selesai.
- Beranda adalah root. Breadcrumb visual dimulai dari halaman dalam. Beranda tetap punya `BreadcrumbList` satu item di JSON-LD.
- Halaman legal diimplementasikan sebagai draft dan tidak boleh dianggap selesai sebelum review manusia.
- Tidak menambah dependensi. Semua komponen memakai pola visual, token, dan `Button` yang sudah ada.

## 4. Urutan kerja

Urutan ini sengaja dibuat supaya setiap lapisan bisa diverifikasi sebelum lapisan berikutnya.

### Task 1: Sumber kebenaran identitas dan SEO

File:

- `src/lib/site.ts` (baru)
- `src/lib/seo.ts` (baru)
- `src/routes/__root.tsx`

Langkah:

1. `site.ts` mengekspor:
   - `SITE_URL` tanpa trailing slash.
   - `SITE_NAME`, `DEFAULT_OG_IMAGE`.
   - `WHATSAPP_NUMBER`, `WHATSAPP_URL`.
   - `CONTACT` berisi email, telepon tampil, telepon E.164, alamat terstruktur, alamat tampil, `geo`, jam, `mapUrl`.
   - `SOCIALS` berisi empat kanal dengan `label` dan `href`.
   - `canonicalUrl(path)` dan `absoluteUrl(path)`.
2. `seo.ts` mengekspor `pageHead({ title, description, path, image?, type? })` yang selalu menghasilkan:
   - title dan description.
   - robots `index, follow, max-image-preview:large`.
   - canonical absolut.
   - OG dan Twitter lengkap.
   - `og:url`, `og:site_name`, `og:locale`.
3. `__root.tsx` memakai deskripsi default yang sudah benar. Jangan menambahkan `og:image` di root.

Acceptance:

- `rg "https://kampungitsolo.com|6281235666665" src` hanya menemukan definisi di `src/lib/site.ts` setelah semua task selesai.
- Tidak ada route yang mendefinisikan `SITE_URL` atau nomor WhatsApp sendiri.

### Task 2: Route manifest, sitemap, dan flag katalog

File:

- `src/data/routes.ts` (baru)
- `src/lib/sitemap.ts` (baru)
- `src/routes/sitemap[.]xml.ts` (baru)
- `public/sitemap.xml` (hapus)
- `src/data/products.ts`

Langkah:

1. `routes.ts` menjadi satu sumber untuk sitemap dan test. Isi 16 URL P0:
   - `/`
   - `/products`
   - 10 `/products/{slug}`
   - `/tentang`
   - `/kontak`
   - `/kebijakan-privasi`
   - `/syarat-ketentuan`
2. Tipe route: `path`, `lastmod`, `changefreq`, `priority`. Semua `lastmod` Batch 1 memakai `2026-11-23`.
3. `sitemap.ts` mengekspor `renderSitemap(routes)` dengan XML declaration, escaping, URL absolut, dan tanpa duplikat.
4. `sitemap[.]xml.ts` memakai `server.handlers.GET` dan mengembalikan `application/xml; charset=utf-8`.
5. Hapus `public/sitemap.xml` supaya tidak ada dua sumber.
6. `products.ts` menambah `catalogFeatured?: boolean` dan hanya mengisi `true` untuk `elfan-system`. Flag `featured` yang lama tidak diubah.

Acceptance:

- `/sitemap.xml` mengembalikan 16 URL, tanpa duplikat.
- Tidak ada route Batch 2 atau 3 di sitemap.
- Hanya satu produk dengan `catalogFeatured: true`.
- `public/sitemap.xml` sudah tidak ada.

Checkpoint:

- Uji route sitemap di dev server dengan `curl -i http://localhost:3000/sitemap.xml`.
- Kalau `server.handlers` tidak didukung setup TanStack Start ini, pakai fallback script build yang menghasilkan `public/sitemap.xml` dari `routes.ts`. Jangan menyimpan dua sumber sekaligus.

### Task 3: Komponen bersama dan form

File:

- `src/components/site/JsonLd.tsx` (baru)
- `src/components/site/Breadcrumbs.tsx` (baru)
- `src/components/site/PageShell.tsx` (baru)
- `src/components/site/PageHero.tsx` (baru)
- `src/components/site/Prose.tsx` (baru)
- `src/components/site/CtaBand.tsx` (baru)
- `src/components/forms/InquiryForm.tsx` (baru)
- `src/lib/whatsapp.ts` (baru)

Langkah:

1. `JsonLd` merender satu script JSON-LD dan meng-escape `<` supaya aman.
2. `Breadcrumbs` menerima `items: { label, href? }[]`, merender breadcrumb terlihat dengan `@/components/ui/breadcrumb`, dan menghasilkan `BreadcrumbList` absolut.
3. `PageShell` merender skip link, `Navbar`, `<main id="konten">`, children, dan `Footer`, dengan `min-h-screen bg-background`. Panggil `useScrollReveal(revealKey)` sekali di sini supaya halaman tidak perlu memanggilnya sendiri.
4. `PageHero` menerima eyebrow, h1, description, breadcrumb, aksi, dan slot aside opsional. Beri padding atas yang cukup karena Navbar bersifat fixed. Navbar tidak lagi merender spacer 80px; padding atas ada di hero masing-masing halaman supaya background hero tetap penuh sampai tepi atas. Gunakan token dan pola yang ada.
5. `Prose` membungkus konten legal dengan tipografi yang konsisten.
6. `CtaBand` adalah CTA berulang dengan judul, deskripsi, CTA utama, dan CTA sekunder opsional.
7. `whatsapp.ts` mengekspor `normalizeWhatsapp`, `buildInquiryMessage`, dan `buildWhatsAppUrl` dengan perilaku yang sama seperti form sekarang.
8. `InquiryForm` diekstrak dari `Reservation.tsx` tanpa mengubah field, validasi, kelas, atau status. Tambah props `needs`, `defaultNeed`, dan `source` opsional. `source` hanya menambah satu baris konteks di pesan WhatsApp.

Acceptance:

- Form di beranda tetap membuka WhatsApp dengan pesan terisi.
- Nomor tidak valid tetap menampilkan error dan fokus ke field WhatsApp.
- Tidak ada data formulir yang disimpan di server situs.
- `Reservation.tsx` tidak lagi berisi logika form duplikat.

### Task 4: Data organisasi dan penyelarasan beranda

File:

- `src/data/organization.ts` (baru)
- `src/components/landing/About.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/Ecosystem.tsx`
- `src/components/landing/Faq.tsx`
- `src/components/landing/Reservation.tsx`

Langkah:

1. `organization.ts` mengekspor visi, misi, dan anggota Bin Alfan Group yang sudah dikonfirmasi. Jangan mengarang deskripsi untuk anggota yang belum punya deskripsi terverifikasi.
2. `About.tsx` memakai data organisasi. Ganti fakta lokasi menjadi `Sukoharjo` / `Solo Raya`. Ganti paragraf `RT 06/RW 21 Surakarta` dengan `Cemani, Grogol, Sukoharjo`. Tambah tautan ke `/tentang`.
3. `Hero.tsx` menghapus `<Navbar />` karena Navbar pindah ke `PageShell`. Ganti fakta `Aktif 24/7` dengan jam yang terverifikasi, dan ganti copy lokasi ke Sukoharjo.
4. `Ecosystem.tsx` menambah CTA "Lihat Semua Produk" ke `/products` tanpa menghapus konsultasi WhatsApp.
5. `Faq.tsx` memperbarui jawaban tentang lokasi dan kontak. Tambah CTA ke `/kontak` di section FAQ.
6. `Reservation.tsx` memakai `InquiryForm` dan alamat terverifikasi.

Acceptance:

- Tidak ada `RT 06/RW 21 Surakarta` di copy publik. Pengecualian hanya teks visi yang memang menyebut lingkungan RT/RW, dan itu tidak dipakai sebagai alamat pos.
- Tidak ada klaim `Aktif 24/7`.
- Form beranda tetap berfungsi.

### Task 5: Halaman katalog `/products`

File:

- `src/routes/products/index.tsx` (baru)

Langkah:

1. `PageShell` dan `PageHero`. H1: katalog produk dan layanan.
2. Featured card dari `catalogFeatured`, yaitu ELFAN System. Tampilkan gambar, ringkasan, highlight, CTA detail, dan konsultasi.
3. Kelompokkan produk per pilar dengan urutan kategori dari data. Setiap baris berisi gambar, nama, satu kalimat ringkasan, dan tautan detail.
4. Featured product tetap dihitung sebagai salah satu dari 10 tautan, tetapi tidak diulang di daftar pilar.
5. CTA konsultasi WhatsApp dan `CtaBand`.
6. Schema `CollectionPage` + `ItemList` 10 produk + `BreadcrumbList`.

Acceptance:

- Halaman menautkan ke 10 produk.
- Tidak ada grid kartu identik tanpa informasi.
- Title, description, canonical, dan breadcrumb ada.
- Schema valid dan tidak memakai `offers` atau rating palsu.

### Task 6: Halaman `/tentang`

File:

- `src/routes/tentang.tsx` (baru)

Langkah:

1. `PageShell`, `PageHero`, dan breadcrumb.
2. Cerita dan latar belakang yang sudah terverifikasi. Jangan menyebut tahun berdiri, penghargaan, jumlah siswa, atau nama tim.
3. Visi, misi, dan goal dari `organization.ts`.
4. Ekosistem Bin Alfan Group: Kampung IT Solo, Elfan Bookless Library, Alwustho Technologies, TUK, Alkubro. Tampilkan deskripsi hanya kalau sudah terverifikasi.
5. Lokasi dan jam memakai `CONTACT`. Tampilkan satu atau dua foto aktivitas yang sudah ada di repo dengan alt text faktual.
6. Bagian tim dihilangkan karena belum ada nama, peran, foto, dan izin.
7. CTA kunjungan ke `/#reservasi` dan kontak ke `/kontak`.
8. Schema `AboutPage` + `BreadcrumbList`.

Acceptance:

- Tidak ada anggota tim fiktif atau fasilitas yang tidak terverifikasi.
- Alamat dan jam konsisten dengan `/kontak` dan footer.
- Title, description, canonical, dan breadcrumb ada.

### Task 7: Halaman `/kontak`

File:

- `src/routes/kontak.tsx` (baru)

Langkah:

1. `PageShell`, `PageHero`, dan breadcrumb.
2. Kartu kontak: WhatsApp, email, telepon, alamat lengkap, jam operasional, dan tautan Google Maps.
3. Jangan memakai iframe peta. Tautan keluar saja.
4. `InquiryForm` dengan keperluan kunjungan, kolaborasi, konsultasi produk, dan pelatihan.
5. FAQ singkat tentang kunjungan, jam, dan reservasi.
6. CTA reservasi ke `/#reservasi`.
7. Schema `ContactPage` + `EducationalOrganization` dengan `address`, `geo`, `openingHoursSpecification`, `hasMap`, `telephone`, `email`, `url`, dan `sameAs`. Tambah `BreadcrumbList`.

Acceptance:

- Alamat persis sama dengan `site.ts`, footer, dan schema beranda.
- Tidak ada kode pos placeholder, email placeholder, atau nomor lama.
- Form membuka WhatsApp dan tidak menyimpan data di server.
- Title, description, canonical, dan breadcrumb ada.

### Task 8: Halaman legal

File:

- `src/routes/kebijakan-privasi.tsx` (baru)
- `src/routes/syarat-ketentuan.tsx` (baru)

Langkah:

1. `PageShell`, `PageHero`, breadcrumb, dan `Prose`.
2. Kebijakan privasi memuat:
   - Data yang diisi di form.
   - Form membuka WhatsApp, data dikirim lewat WhatsApp, bukan disimpan di server situs.
   - Penggunaan data untuk koordinasi kunjungan atau kolaborasi.
   - Tidak ada analytics pihak ketiga di kode saat ini.
   - Kontak untuk permintaan data.
   - Tanggal berlaku.
3. Syarat dan ketentuan memuat:
   - Penggunaan situs.
   - Batasan informasi dan penawaran.
   - Hak kekayaan intelektual.
   - Tautan pihak ketiga.
   - Batasan tanggung jawab.
   - Kontak.
4. Schema `WebPage` + `BreadcrumbList`.
5. Catat di laporan implementasi bahwa kedua halaman masih menunggu review manusia. Jangan mengklaim halaman ini sudah final secara hukum. Jangan memasang `noindex` karena kedua route tetap termasuk P0 dan masuk sitemap.

Acceptance:

- Tidak ada klaim hukum yang tidak bisa dipertanggungjawabkan.
- Tanggal berlaku jelas.
- Title, description, canonical, dan breadcrumb ada.
- Review manusia tercatat sebagai gate sebelum produksi.

### Task 9: Update detail produk

File:

- `src/routes/products/$slug.tsx`

Langkah:

1. Ganti outer shell dengan `PageShell` dan teruskan `revealKey={product.slug}`.
2. Beri hero detail produk padding atas yang cukup karena Navbar fixed dan tidak lagi merender spacer.
3. Ganti `SITE_URL` dan `WHATSAPP` lokal dengan `site.ts` dan `pageHead`.
4. Tambah breadcrumb terlihat dan `BreadcrumbList`.
5. Ubah tautan "Lihat semua produk" ke `/products`.
6. Schema `Product` memakai gambar absolut, `brand` konsisten, dan URL kanonis.
7. Pertahankan struktur visual utama, related products, dan CTA.
8. Bagian "Program terkait" dan "Cerita terkait" ditunda sampai datanya ada di Batch 2. Jangan merender link ke route yang belum terbit.
9. Smart Energy tetap menampilkan ringkasan dan CTA tanpa section kosong.

Acceptance:

- Detail produk menautkan balik ke katalog dan minimal satu produk terkait.
- Tidak ada section kosong.
- Schema `Product` valid dan gambar absolut.
- Title, description, canonical, dan breadcrumb ada.

### Task 10: Navbar, footer, search, dan beranda

File:

- `src/components/landing/Navbar.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/SearchDialog.tsx`
- `src/data/search.ts` (baru)
- `src/routes/index.tsx`

Langkah:

1. Navbar:
   - Link halaman yang sudah terbit: Beranda `/`, Produk `/products`, Tentang `/tentang`, Kontak `/kontak`.
   - Hapus scroll spy dan daftar anchor.
   - Active state dari pathname, bukan scroll.
   - Logo selalu ke `/`.
   - CTA "Reservasi Kunjungan" ke `/#reservasi`.
   - Search tetap tersedia.
   - Mobile menu memakai daftar yang sama.
   - Hapus prop `variant`.
2. Footer:
   - Empat kelompok: brand, Jelajahi, Informasi, Kontak.
   - Jelajahi Batch 1: Produk, FAQ `/#faq`, Reservasi `/#reservasi`.
   - Informasi: Tentang, Kontak, Kebijakan Privasi, Syarat dan Ketentuan.
   - Kontak: alamat lengkap, email, WhatsApp, jam.
   - Empat ikon sosial dengan URL nyata. Hapus LinkedIn dan ikon globe tanpa URL.
   - Hapus semua `href="#"`.
   - Hapus prop `variant`.
3. Search:
   - `src/data/search.ts` berisi halaman terbit dan 10 produk.
   - `SearchDialog` membaca data itu, bukan prop `sections`.
   - Hasil halaman memakai `Link`, hasil produk memakai `Link` ke `/products/$slug`.
4. Beranda:
   - Bungkus dengan `PageShell`, hapus Navbar dari Hero dan Footer dari index. Pertahankan `useScrollParallax` di index.
   - Tambah padding atas di Hero karena Navbar fixed tidak lagi merender spacer.
   - Pakai `pageHead` dan canonical dengan title `Kampung IT Solo: Lab Peradaban Digital di Solo Raya` dan description 120-160 karakter.
   - Tambah `BreadcrumbList` satu item untuk `/` di JSON-LD, tanpa breadcrumb visual.
   - Update structured data: alamat lengkap, `geo`, `openingHoursSpecification`, `hasMap`, `sameAs` dari empat sosial, `areaServed` Solo Raya.
   - Update copy yang masih menyebut Surakarta atau RT 06/RW 21 sebagai alamat.
   - FAQ section menautkan ke `/kontak`.
5. Jangan menambah tautan ke `/program`, `/eduwisata`, `/cerita`, `/artikel`, atau `/untuk`.

Acceptance:

- `rg 'href="#"' src/components/landing/Navbar.tsx src/components/landing/Footer.tsx` tidak menemukan hasil.
- Semua link navbar dan footer mengarah ke route atau anchor yang benar.
- Search mengembalikan halaman dan produk yang terbit.
- Tidak ada route Batch 2/3 yang dirender.

### Task 11: Test dan verifikasi

File:

- `src/test/app-routing.test.tsx`
- `src/test/site-data.test.ts` (baru)
- `src/test/sitemap.test.ts` (baru)
- `src/lib/whatsapp.test.ts` (baru)

Test yang ditulis:

1. Route matching untuk 16 route P0 dan `/sitemap.xml`.
2. Data produk:
   - 10 produk.
   - Slug unik.
   - Tepat satu `catalogFeatured`.
   - Semua produk punya nama, kategori, ringkasan, gambar.
3. Data route:
   - Path unik.
   - Semua absolut dan hanya route terbit.
   - Tidak ada route Batch 2/3.
4. Sitemap:
   - 16 URL.
   - Tidak ada duplikat.
   - XML declaration valid.
   - Semua URL absolut.
5. WhatsApp:
   - Normalisasi `08`, `628`, dan `+628`.
   - Nomor tidak valid menjadi `null`.
   - Pesan dan URL ter-encode dengan benar.

Perintah verifikasi:

```bash
bun run test
bun run lint
bun run build
bunx tsc --noEmit
rg 'href="#"' src/components/landing/Navbar.tsx src/components/landing/Footer.tsx
rg '/program|/eduwisata|/cerita|/artikel|/untuk' src/components/landing src/routes/index.tsx
```

Catatan:

- Jalankan `bun run build` setelah menambah route agar `src/routeTree.gen.ts` diperbarui. Jangan edit file generated itu.
- Kalau build gagal karena masalah yang sudah ada sebelumnya, catat sebagai keterbatasan. Jangan menutupi failure dengan menghapus test atau melemahkan assertion.

## 5. Urutan eksekusi yang disarankan

1. Task 1 dan 2, lalu cek sitemap di dev server.
2. Task 3 dan 4, lalu pastikan form beranda masih berjalan.
3. Task 5 sampai 8, halaman baru satu per satu.
4. Task 9, update detail produk.
5. Task 10, baru sambungkan navigasi dan beranda.
6. Task 11, jalankan semua verifikasi.

Alasannya: halaman baru bisa diuji sendiri sebelum Navbar dan Footer diarahkan ke sana. Ini mengurangi risiko link mati saat refactor navigasi.

## 6. Checklist acceptance Batch 1

| Requirement spec | Cara membuktikan |
| --- | --- |
| Semua route P0 cocok dan tidak 404 | Test route matching 16 path |
| Title, description, canonical, breadcrumb | Cek head tiap route dan test render |
| Tidak ada link `#` di navbar/footer | `rg 'href="#"'` |
| Tidak ada tautan ke route belum terbit | `rg` path Batch 2/3 di navbar, footer, search, beranda |
| Katalog menautkan 10 produk | Test jumlah link/entry produk |
| Detail produk menautkan balik ke katalog | Cek breadcrumb, related products, dan CTA |
| Sitemap memuat semua route terbit | Test `renderSitemap` dan curl `/sitemap.xml` |
| Build dan test lolos | `bun run test`, `bun run build`, `bunx tsc --noEmit` |
| Konten tentang, kontak, legal direview manusia | Gate eksternal sebelum produksi |
| Klaim publik P0 terkonfirmasi | Audit copy terhadap §12.1 spec |

## 7. Risiko dan fallback

- Sitemap route tidak terdukung setup saat ini. Fallback ke generator build yang menulis `public/sitemap.xml`. Jangan mempertahankan dua sumber.
- Sitemap route mengimpor `products.ts` yang juga mengimpor aset gambar. Kalau server bundle gagal karena aset, pisahkan slug dan metadata route ke modul ringan tanpa import gambar.
- Review legal belum ada. Halaman tetap draft dan tidak boleh dipromosikan sebagai final.
- Perubahan alamat dari Surakarta ke Sukoharjo menyentuh banyak komponen. Gunakan `site.ts` sebagai satu sumber dan audit dengan `rg "Surakarta|RT 06"`.
- Foto fasilitas terbatas. Pakai aset yang sudah ada dan jangan mengarang daftar fasilitas.
- Navbar Batch 1 hanya empat link. Ini disengaja. Jangan menambah link ke halaman yang belum ada hanya supaya terlihat lengkap.

## 8. Definition of done

- 16 route P0 merespons dan punya metadata lengkap.
- 10 produk bisa diakses dari katalog.
- Tidak ada link mati di navbar, footer, search, atau halaman P0.
- Sitemap dinamis hanya memuat route terbit.
- Form beranda dan kontak berfungsi tanpa menyimpan data di server.
- Test, lint, typecheck, dan build lolos.
- Halaman legal dan copy kontak/tentang ditandai untuk review manusia sebelum produksi.
- Tidak ada dependensi baru dan tidak ada file generated yang diedit manual.

## 9. Hasil implementasi

- Semua 16 route P0 dan `/sitemap.xml` merespons 200 saat dev server diuji.
- Sitemap berisi 16 URL unik dan valid sebagai XML.
- 41 test lolos, typecheck bersih, lint 0 error (6 warning lama dari komponen UI), build lolos.
- JSON-LD di tujuh halaman yang diperiksa valid.
- Title dan description P0 berada dalam rentang yang ditargetkan.
- Runtime produksi belum diuji lewat `vite preview` karena preview plugin mencari `dist/server/server.js`, sementara build ini memakai preset Cloudflare dengan output `.output/server`. Verifikasi runtime dilakukan lewat dev server.
- Review manusia untuk halaman legal, tentang, dan kontak masih pending sebelum produksi.
