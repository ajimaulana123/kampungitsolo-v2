# Kampung IT Solo: Arsitektur Halaman SEO dan Konten

Tanggal: 2026-11-23
Status: Disetujui 2026-11-23 untuk implementasi Batch 1
Ruang lingkup: situs v2 di repo `kampungitsolo-v2`

## 1. Intent dan alasan

Tujuan pekerjaan ini bukan sekadar menambah halaman. Tujuannya membuat situs Kampung IT Solo mudah dipahami mesin pencari, punya halaman yang menjawab niat pencarian yang berbeda, dan mengubah kunjungan menjadi percakapan yang relevan.

Audiens utama yang disepakati:

- Lembaga: sekolah, pesantren, pemerintah desa.
- Pengunjung eduwisata: studi banding, field trip, kunjungan komunitas.
- Sekunder: UMKM dan komunitas.
- Pelajar dan orang tua tetap dilayani lewat halaman kelas coding, tetapi bukan fokus utama batch pertama.

Alasan memilih audiens lembaga dan eduwisata: nilai kerja samanya lebih besar, siklus keputusannya lebih panjang, dan halaman program serta eduwisata bisa menjadi pintu masuk yang jelas. Konten untuk pelajar dan orang tua tetap dibuat, tetapi menyusul.

Kondisi situs saat ini:

- Halaman yang benar-benar ada: `/` dan `/products/[slug]` untuk 10 produk.
- Fondasi teknis SEO sudah ada: title dan description per halaman, canonical, OG/Twitter, JSON-LD Organization/WebSite/FAQ/Product, `sitemap.xml`, `robots.txt`.
- Belum ada katalog produk, halaman tentang, kontak, program, cerita, dan artikel.
- Navbar masih anchor-only. Footer punya link sosial dan legal yang masih `#`.
- Produk Smart Energy isinya masih satu paragraf, tanpa fitur, langkah, atau spesifikasi.
- Domain live `kampungitsolo.com` dan repo ini belum sinkron. Live punya `/bootcamp` dan sitemap berisi URL `#anchor`, sementara repo dan preview punya struktur produk yang berbeda.

Masalah utamanya adalah struktur. Sepuluh halaman produk tidak punya halaman induk, tidak ada breadcrumb, dan tidak ada jalur internal yang konsisten. Menambah artikel sebelum fondasi ini dibereskan akan membuat halaman baru ikut menjadi yatim.

## 2. Goals, non-goals, anti-goals

### Goals

- Membangun hierarki halaman yang bisa dirayapi: beranda, hub, lalu detail.
- Membuat setiap halaman punya satu niat pencarian yang jelas.
- Menargetkan kata kunci lokal dan komersial untuk lembaga serta eduwisata.
- Menambah bukti kepercayaan: tentang, kontak, cerita klien, legal.
- Menyiapkan mesin konten jangka panjang lewat artikel.
- Menjaga konsistensi brand, aksesibilitas, dan performa.
- Tidak menambah dependensi berat.

### Non-goals

- Tidak membangun CMS, database, akun pengguna, atau pembayaran.
- Tidak membuat halaman kota programmatic yang isinya tipis dan duplikat.
- Tidak membuat testimoni, statistik, logo klien, atau nama tim fiktif.
- Tidak mendesain ulang seluruh beranda. Perubahan beranda dibatasi pada navigasi, footer, internal link, dan perbaikan konten.
- Tidak membuat versi bahasa Inggris.
- Tidak mengubah URL produk yang sudah ada tanpa redirect.

### Anti-goals

- Menerbitkan 20 halaman tipis hanya demi jumlah halaman.
- Mengejar bintang review dengan schema review untuk bisnis sendiri.
- Meninggalkan link `#` atau tombol yang tidak punya tujuan.
- Menulis ulang git history atau menyentuh migration database yang dikelola Lovable.

## 3. Constraints

- TanStack Start dengan file-based routing. `src/routeTree.gen.ts` dibuat otomatis dan tidak diedit manual.
- React 19, Tailwind v4, komponen UI yang sudah ada, token brand di `src/styles.css`.
- Konten disimpan sebagai data TypeScript statis. Tidak ada CMS.
- Aturan Lovable di `AGENTS.md`: jangan menulis ulang history, jangan mengubah migration, jangan menaruh secret di repo.
- Repo punya perubahan yang belum di-commit. Pekerjaan baru harus di atas perubahan itu, bukan reset.
- Bahasa Indonesia dengan tone formal-friendly yang sudah dipakai situs. Gunakan "Anda" di form dan "kami" untuk organisasi.
- Tidak ada konten karangan. Kalau data belum ada, halaman ditunda atau bagian itu dihilangkan.
- Tidak menambah library animasi, carousel, atau markdown yang berat.

## 4. Approaches yang dipertimbangkan

### A. Fondasi dulu, lalu komersial, lalu konten (dipilih)

Batch 1 membangun katalog, tentang, kontak, legal, breadcrumb, navigasi, dan internal link. Batch 2 mengisi program, eduwisata, dan cerita. Batch 3 baru artikel dan halaman audiens.

Kelebihan: memperbaiki masalah crawl dan struktur lebih dulu. Semua halaman baru punya tempat bergantung. Risiko konten tertunda lebih kecil karena batch 1 tidak bergantung pada testimoni atau artikel.

Kekurangan: halaman yang mendatangkan lead langsung baru muncul di batch 2.

### B. Konten dulu

Mulai dari artikel dan cerita, lalu halaman komersial.

Kelebihan: membangun topical authority lebih cepat.

Kekurangan: halaman produk tetap tanpa hub dan internal link lemah. Artikel akan kesulitan mengarahkan pembaca ke halaman komersial yang belum ada.

### C. Konversi dulu

Mulai dari eduwisata, program, dan cerita, lalu fondasi.

Kelebihan: lead bisa masuk lebih cepat.

Kekurangan: masalah utama situs ini adalah struktur. Tanpa katalog dan breadcrumb, halaman produk tetap sulit ditemukan dan dirayapi.

Keputusan: **A**, karena masalah utama saat ini adalah struktur, bukan kurangnya artikel.

## 5. Information architecture

### 5.1 Peta halaman

#### P0: Fondasi

| URL | Halaman | Niat pencarian utama | CTA utama | Schema |
| --- | --- | --- | --- | --- |
| `/` | Beranda (update) | brand dan ringkasan | Reservasi, WhatsApp | EducationalOrganization, WebSite, FAQPage |
| `/products` | Katalog produk | katalog produk teknologi pendidikan | Lihat detail, konsultasi | CollectionPage, ItemList, BreadcrumbList |
| `/products/[slug]` | Detail produk (10, update) | nama produk dan kategori | WhatsApp, program terkait | Product, BreadcrumbList |
| `/tentang` | Tentang | Kampung IT Solo, Bin Alfan Group | Kunjungan, kontak | AboutPage |
| `/kontak` | Kontak | alamat dan kontak Kampung IT Solo | WhatsApp, form | ContactPage, EducationalOrganization |
| `/kebijakan-privasi` | Kebijakan privasi | trust | - | WebPage |
| `/syarat-ketentuan` | Syarat dan ketentuan | trust | - | WebPage |

#### P1: Komersial dan lokal

| URL | Halaman | Niat pencarian utama | CTA utama | Schema |
| --- | --- | --- | --- | --- |
| `/program` | Hub program | program pelatihan IT Solo | Lihat program | CollectionPage, ItemList |
| `/program/desa-digital` | Pelatihan Desa Digital | pelatihan desa digital Solo, digitalisasi desa | WhatsApp | Service |
| `/program/workshop-umkm` | Workshop Foto dan Video Produk UMKM | workshop foto produk UMKM Solo | WhatsApp | Service |
| `/program/kelas-coding` | Kelas Coding Akhir Pekan | kelas coding Solo, les coding anak Solo | WhatsApp | Course |
| `/program/literasi-digital` | Literasi Media dan Keamanan Digital | literasi digital karang taruna | WhatsApp | Service |
| `/program/bootcamp-ai-vibe-coding` | Bootcamp AI Vibe Coding | bootcamp AI Solo, vibe coding | WhatsApp | Course |
| `/program/implementasi-elfan-system` | Implementasi Elfan System | implementasi Elfan System, pendampingan digitalisasi lembaga | WhatsApp | Service |
| `/eduwisata` | Eduwisata IT | eduwisata IT Solo, studi banding sekolah Solo | Reservasi | Service |
| `/cerita` | Hub cerita | testimoni dan studi kasus | Baca cerita | CollectionPage, ItemList |
| `/cerita/[slug]` | Detail cerita | nama klien dan program | WhatsApp | Article, BreadcrumbList |

#### P2: Mesin konten

| URL | Halaman | Niat pencarian utama | CTA utama | Schema |
| --- | --- | --- | --- | --- |
| `/artikel` | Hub artikel | pertanyaan seputar IT, pendidikan, desa, UMKM | Baca artikel | CollectionPage, ItemList |
| `/artikel/[slug]` | Detail artikel | long-tail question | CTA terkait | Article, BreadcrumbList |
| `/untuk` | Hub solusi per audiens | solusi IT untuk lembaga | Lihat audiens | CollectionPage, ItemList |
| `/untuk/pesantren` | Landing audiens pesantren | solusi IT pesantren | Konsultasi | WebPage, Service |
| `/untuk/sekolah` | Landing audiens sekolah | solusi IT sekolah | Konsultasi | WebPage, Service |
| `/untuk/desa` | Landing audiens desa | digitalisasi desa | Konsultasi | WebPage, Service |
| `/untuk/umkm` | Landing audiens UMKM | workshop dan literasi digital UMKM | Konsultasi | WebPage, Service |
| `/galeri` | Galeri (opsional) | foto kegiatan | - | CollectionPage |

Halaman `/untuk/*` hanya diterbitkan kalau isinya benar-benar berbeda dan cukup. Jangan membuat halaman kota seperti `/eduwisata-solo`, `/eduwisata-sukoharjo`, dan seterusnya dengan konten yang sama.

### 5.2 Navigasi

Navigasi utama menjadi berbasis halaman, bukan anchor:

- Beranda `/`
- Produk `/products`
- Program `/program`
- Eduwisata `/eduwisata`
- Cerita `/cerita`
- Tentang `/tentang`
- Kontak `/kontak`

CTA navigasi: "Reservasi Kunjungan" menuju `/#reservasi`. Tombol WhatsApp tetap tersedia di halaman detail dan footer.

Konsekuensi:

- Scroll spy dan daftar anchor lama di navbar dihapus.
- Link section tetap tersedia di footer dan di dalam halaman.
- Logo selalu menuju `/`.
- Di halaman dalam, item navigasi aktif ditandai berdasarkan pathname.
- Mobile menu memakai daftar halaman yang sama.
- Kalau batch dirilis bertahap, navbar hanya menampilkan tautan ke halaman yang sudah terbit. Daftar lengkap di atas berlaku setelah semua batch selesai. Jangan merender tautan ke route yang belum ada.

### 5.3 Footer

Footer memakai empat kelompok:

- Brand: logo, deskripsi singkat, sosial yang benar-benar ada.
- Jelajahi: Produk, Program, Eduwisata, Cerita, Artikel, Solusi untuk Lembaga (`/untuk`).
- Informasi: Tentang, Kontak, FAQ (`/#faq`), Reservasi (`/#reservasi`).
- Kontak: alamat, email, WhatsApp.

Baris bawah: copyright, Kebijakan Privasi, Syarat dan Ketentuan.

Aturan: tidak ada link `#`. Kalau URL sosial belum ada, ikonnya dihapus, bukan dibiarkan mati. Footer hanya menampilkan tautan ke halaman yang sudah terbit. Item yang belum ada tidak dirender.

### 5.4 Internal linking

- Beranda menautkan ke semua hub.
- Setiap hub menautkan ke semua detailnya.
- Detail produk menautkan ke program terkait, cerita terkait, dan produk lain.
- Detail program menautkan ke produk terkait, cerita terkait, dan program lain.
- Detail cerita menautkan ke program dan produk yang dipakai.
- Artikel menautkan ke minimal satu program atau produk terkait.
- Halaman audiens ditautkan dari `/untuk` hub, footer, dan halaman program/produk yang relevan.
- `/galeri`, kalau dibangun, ditautkan dari `/tentang`, `/eduwisata`, dan footer. Kalau belum ada arsip foto nyata, halaman ini tidak dibangun.
- Semua tautan terkait hanya dirender kalau halaman tujuannya sudah terbit. Ini berlaku lintas batch.
- Tidak boleh ada halaman yatim. Setiap halaman baru harus muncul di hub, footer, atau halaman terkait.

### 5.5 Breadcrumb

Semua halaman dalam punya breadcrumb yang terlihat dan `BreadcrumbList`:

- `/products` > nama produk
- `/program` > nama program
- `/cerita` > judul cerita
- `/artikel` > judul artikel
- `/tentang`, `/kontak`, legal: Beranda > nama halaman

### 5.6 Kepemilikan query (anti-kannibalisasi)

Satu cluster query hanya punya satu halaman utama. Halaman pendukung tidak boleh memakai title atau H1 yang sama, dan harus menautkan ke halaman utama dengan anchor yang deskriptif.

| Cluster query | Halaman utama | Angle | Halaman pendukung |
| --- | --- | --- | --- |
| Eduwisata IT Solo, studi banding sekolah | `/eduwisata` | Layanan kunjungan, alur, fasilitas, paket | Beranda (brand overview), `/program`, `/cerita` |
| Katalog produk teknologi pendidikan | `/products` | Katalog 10 produk dan pilar | Detail produk masing-masing |
| Platform sekolah Islam, platform pesantren | `/products/elfan-system` | Apa itu platform, 16 modul, fitur | `/program/implementasi-elfan-system`, `/untuk/pesantren`, `/untuk/sekolah` |
| Implementasi Elfan System, digitalisasi lembaga | `/program/implementasi-elfan-system` | Pendampingan, onboarding, pelatihan, timeline | `/products/elfan-system`, `/untuk/pesantren`, `/untuk/sekolah` |
| Solusi IT pesantren | `/untuk/pesantren` | Masalah dan solusi audiens, bundle program dan produk | `/products/elfan-system`, `/program/implementasi-elfan-system`, `/cerita` |
| Testimoni dan studi kasus | `/cerita` dan `/cerita/[slug]` | Cerita lengkap, bukti, kutipan | Beranda `#dampak` (teaser), halaman program dan produk |
| Kursus coding Solo | `/program/kelas-coding` | Kelas, jadwal, hasil | `/artikel`, `/untuk/sekolah` |
| Digitalisasi desa | `/program/desa-digital` | Pelatihan dan pendampingan desa | `/untuk/desa`, `/artikel` |

Aturan:

- Beranda adalah halaman brand, bukan halaman layanan. Title dan H1 beranda tidak boleh menargetkan "eduwisata IT Solo" secara eksplisit.
- Beranda `#dampak` hanya teaser. Detail cerita dan kutipan ada di `/cerita/[slug]`.
- `/products/elfan-system` menjual produknya. `/program/implementasi-elfan-system` menjual pendampingan implementasinya. Jangan menukar angle keduanya.

## 6. Kebutuhan tiap halaman

### 6.1 Beranda (update)

Yang diubah:

- Navigasi dan footer mengikuti struktur baru.
- Title dan description diperbarui agar menyebut Solo Raya dan audiens lembaga.
- H1 dan eyebrow beranda diubah agar fokus brand, bukan "Pusat Eduwisata IT". Kata eduwisata tetap muncul di deskripsi dan tautan ke `/eduwisata`, bukan di H1.
- Canonical menjadi `https://kampungitsolo.com/`.
- `sameAs` di schema memakai URL sosial yang benar.
- CTA di section yang ada diarahkan ke halaman baru:
  - Ekosistem: tambah "Lihat Semua Produk" ke `/products`.
  - Program: "Lihat Program Lengkap" ke `/program`, bukan WhatsApp.
  - Dampak: "Lihat Dampak Kami" ke `/cerita`.
  - FAQ: link kontak ke `/kontak`.
- Section dampak tetap menjadi teaser: satu ringkasan per kasus dan tautan ke `/cerita/[slug]`. Kutipan lengkap, konteks klien, dan angka hasil tidak diulang di beranda.
- Tambah tautan ke `/artikel` di footer dan satu teaser artikel di dekat bagian dampak atau FAQ. Teaser harus memakai artikel yang benar-benar ada.

Yang tidak diubah:

- Urutan section dan desain besar beranda.
- Form reservasi tetap di beranda.

### 6.2 Katalog produk `/products`

Isi:

- Hero singkat: apa itu ekosistem produk Kampung IT Solo.
- Featured product: ELFAN System, diambil dari flag `catalogFeatured` di data produk. Hanya satu produk yang boleh memakai flag ini.
- Daftar 10 produk dikelompokkan per pilar, bukan grid kartu identik.
- Setiap baris berisi gambar, nama, ringkasan satu kalimat, dan link detail.
- CTA konsultasi WhatsApp.
- Breadcrumb.

Schema: `CollectionPage` dengan `ItemList` berisi URL dan nama produk.

### 6.3 Detail produk `/products/[slug]`

Yang diubah:

- Breadcrumb terlihat dan `BreadcrumbList`.
- Link "Lihat semua produk" ke `/products`.
- Bagian "Program terkait" dan "Cerita terkait" kalau datanya ada dan halaman tujuannya sudah terbit.
- Schema `Product` memakai URL gambar absolut dan `brand` yang konsisten.
- Produk Smart Energy: lengkapi dengan data nyata. Kalau data belum ada, jangan tampilkan section kosong. Ringkasan tetap ada, dan CTA diarahkan ke kontak.

Yang tidak diubah:

- URL produk yang sudah ada.
- Struktur visual utama halaman detail.

### 6.4 Tentang `/tentang`

Isi:

- Hero: siapa Kampung IT Solo dan kenapa ada.
- Cerita dan latar belakang yang sudah terverifikasi.
- Visi, misi, dan goal. Boleh memakai konten yang sudah ada di beranda.
- Ekosistem Bin Alfan Group: Elfan Bookless Library, Alwustho Technologies, TUK, Alkubro, dan mitra lain yang relevan.
- Fasilitas dan lokasi, dengan foto nyata.
- Tim atau fasilitator hanya kalau nama, peran, foto, dan izinnya ada. Kalau tidak ada, bagian ini dihilangkan.
- CTA kunjungan dan kontak.

Schema: `AboutPage` dengan `mainEntity` organisasi.

Aturan: tidak boleh mengarang tahun berdiri, penghargaan, jumlah siswa, atau nama tim.

### 6.5 Kontak `/kontak`

Isi:

- Alamat terverifikasi dari listing Google Maps: `Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552`.
- Catatan lokasi: alamat ini di Kabupaten Sukoharjo (Solo Raya), bukan Kota Surakarta. Jangan menulis "Surakarta" sebagai alamat pos. Brand tetap "Kampung IT Solo".
- Link peta: `https://maps.app.goo.gl/dC7WRSL95h61TxJy6`.
- WhatsApp, email, dan telepon dari kanal yang sama dengan footer.
- Jam operasional dari listing: Senin-Jumat 08.00-16.00, Sabtu 08.00-13.00, Minggu tutup. Kunjungan eduwisata tetap dengan reservasi; konfirmasi untuk waktu di luar jam itu.
- Form kontak yang memakai pola form reservasi: membuka WhatsApp dengan pesan terisi, tanpa menyimpan data di server.
- Petunjuk arah dan transportasi umum kalau ada.
- FAQ singkat tentang kunjungan.
- CTA reservasi.

Schema: `ContactPage` dan `EducationalOrganization` dengan `address` (`streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry`), `geo`, `openingHoursSpecification`, `telephone`, `email`, `url`, dan `hasMap`.

Nilai schema: `streetAddress` "Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani", `addressLocality` "Grogol, Sukoharjo", `addressRegion` "Jawa Tengah", `postalCode` "57552", `addressCountry` "ID", `geo` -7.5862389, 110.8114676.

Dependensi: alamat, kode pos, koordinat, dan jam operasional sudah terverifikasi dari listing Google Maps. Halaman boleh terbit. Jangan memakai nilai placeholder dari situs lama seperti `57100`, `halo@kampungitsolo.com`, atau `+62 812-3456-7890`.

### 6.6 Legal

`/kebijakan-privasi`:

- Data apa yang dikumpulkan lewat form.
- Bahwa form membuka WhatsApp dan data dikirim lewat WhatsApp, bukan disimpan di server situs.
- Penggunaan data untuk koordinasi kunjungan atau kolaborasi.
- Kontak untuk permintaan data.
- Cookie dan analytics: sesuaikan dengan kenyataan. Saat ini tidak ada analytics pihak ketiga di kode.
- Tanggal berlaku.

`/syarat-ketentuan`:

- Penggunaan situs.
- Batasan informasi dan penawaran.
- Hak kekayaan intelektual.
- Tautan ke pihak ketiga.
- Batasan tanggung jawab.
- Kontak.

Keduanya harus direview manusia sebelum terbit. Ini bukan nasihat hukum.

### 6.7 Hub program `/program`

Isi:

- Intro: program untuk lembaga, UMKM, dan komunitas.
- Daftar 6 program dengan format, durasi, audiens, dan hasil yang diharapkan.
- Susunan editorial, bukan grid kartu identik.
- CTA konsultasi.

Schema: `CollectionPage` dan `ItemList`.

### 6.8 Detail program `/program/[slug]`

Setiap halaman wajib punya:

- Hero: nama program, audiens, ringkasan hasil.
- "Untuk siapa" dan masalah yang diselesaikan.
- Hasil yang diharapkan, tanpa janji berlebihan.
- Format, durasi, lokasi, dan jadwal. Kalau belum pasti, tulis "jadwal menyesuaikan" atau arahkan ke WhatsApp.
- Kurikulum atau alur kegiatan.
- Fasilitator, hanya kalau datanya nyata.
- 3-5 FAQ spesifik program.
- Program lain yang terkait.
- Produk terkait.
- Cerita terkait, kalau ada.
- CTA WhatsApp dengan pesan yang sudah terisi nama program.

Panjang konten: 400-700 kata unik per program. Tidak boleh menyalin isi program lain.

Schema: `Service` dengan `provider` organisasi dan `areaServed` Solo Raya. Untuk kelas coding dan bootcamp, `Course` boleh dipakai kalau memang berbentuk kursus terstruktur.

### 6.9 Eduwisata `/eduwisata`

Isi:

- Hero: eduwisata IT untuk sekolah, pesantren, dan komunitas.
- Apa yang akan dilihat dan dipelajari peserta.
- Alur kunjungan: durasi, aktivitas, jumlah peserta.
- Fasilitas: ruang kelas, lab, area kunjungan.
- Untuk siapa: SD, SMP, SMA, SMK, pesantren, komunitas.
- Dokumentasi foto nyata.
- FAQ kunjungan dan studi banding.
- CTA reservasi dan WhatsApp.

Schema: `Service`.

Dependensi: durasi, kapasitas, dan fasilitas harus dikonfirmasi. Jangan mengarang paket atau harga.

### 6.10 Hub cerita `/cerita`

Isi:

- Intro: kenapa cerita ini penting.
- Cerita unggulan.
- Daftar cerita dengan klien, program, tahun, dan hasil singkat.
- CTA konsultasi.

Schema: `CollectionPage` dan `ItemList`.

### 6.11 Detail cerita `/cerita/[slug]`

Isi:

- Konteks klien: siapa, di mana, masalah awal.
- Program yang dijalankan.
- Pendekatan dan aktivitas.
- Hasil yang terverifikasi.
- Kutipan, hanya kalau ada izin dan kutipan asli.
- Foto nyata.
- Program dan produk terkait.
- CTA.

Schema: `Article`.

Aturan:

- Hanya terbit kalau `permission: "granted"` dan `published: true`.
- Jangan mengarang kutipan, nama, jabatan, atau angka hasil.
- Kalau kutipan belum ada, halaman tetap bisa terbit sebagai studi kasus tanpa kutipan.
- Jangan memakai `AggregateRating` atau `Review` untuk organisasi sendiri. Google tidak memberi bintang untuk review bisnis sendiri di situsnya sendiri.

### 6.12 Hub artikel `/artikel`

Isi:

- Intro: topik yang dibahas.
- Kategori: pendidikan, desa, UMKM, energi, teknologi.
- Artikel unggulan dan daftar artikel.
- CTA ke program atau konsultasi.

Schema: `CollectionPage` dan `ItemList`.

### 6.13 Detail artikel `/artikel/[slug]`

Isi:

- Judul, deskripsi, penulis, tanggal terbit, tanggal update, estimasi baca.
- Hero image dengan alt yang deskriptif.
- Isi dengan heading yang jelas.
- Daftar isi untuk artikel panjang.
- Minimal satu tautan ke program atau produk terkait.
- CTA di akhir.
- Artikel terkait.

Schema: `Article` atau `BlogPosting` dengan `author`, `datePublished`, `dateModified`, `publisher`, `image`, dan `mainEntityOfPage`.

Empat topik pertama:

1. Kursus coding untuk anak di Solo: mulai dari mana?
2. AI untuk pesantren: lima cara yang realistis.
3. PLTS untuk sekolah: menghitung kebutuhan dan penghematan.
4. Digitalisasi desa: langkah awal untuk perangkat desa.

Setiap artikel 800-1.200 kata, memakai contoh nyata, tanpa statistik karangan.

### 6.14 Halaman audiens `/untuk/[slug]` (P2)

Hub `/untuk` berisi intro singkat dan daftar empat audiens dengan masalah utama serta tautan ke halaman masing-masing. Hub ini bukan halaman kota dan tidak menargetkan query "solusi IT [kota]".

Setiap halaman punya:

- Masalah khas audiens.
- Solusi yang relevan, ditautkan ke program dan produk.
- Bukti dari cerita nyata.
- FAQ.
- CTA konsultasi.

Hanya terbit kalau ada minimal satu program, satu produk, dan satu cerita yang benar-benar relevan. Kalau tidak, halaman ditunda.

## 7. Data model

### 7.0 `src/data/products.ts` (update)

Struktur yang ada dipertahankan. Tambahan:

- `catalogFeatured?: boolean`, hanya `true` untuk ELFAN System. Flag `featured` yang sudah ada tetap dipakai untuk badge di beranda dan tidak berubah.
- `relatedProgramSlugs?: string[]` untuk bagian "Program terkait" di detail produk.
- `relatedStorySlugs?: string[]` untuk bagian "Cerita terkait" di detail produk.

Test memastikan maksimal satu produk punya `catalogFeatured: true` dan semua slug referensi valid.

### 7.1 `src/lib/site.ts`

Satu sumber kebenaran untuk:

- `SITE_URL`
- `SITE_NAME`
- `DEFAULT_OG_IMAGE`
- `WHATSAPP_NUMBER`, `WHATSAPP_URL`
- `CONTACT`: email `kampungitsolo@gmail.com`, telepon/WhatsApp `+62 812-3566-6665`, alamat `Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552`, koordinat `-7.5862389, 110.8114676`, jam `Senin-Jumat 08.00-16.00, Sabtu 08.00-13.00`, peta `https://maps.app.goo.gl/dC7WRSL95h61TxJy6`.
- `SOCIALS`: YouTube `https://www.youtube.com/@AlwusthoTechnologies`, Instagram `https://www.instagram.com/kampungit.solo/`, TikTok `https://www.tiktok.com/@kampungitsolo`, Facebook `https://www.facebook.com/kampungitsolo/`. Semua ikon dirender karena URL-nya sudah ada.
- helper `canonicalUrl(path)`

Semua halaman memakai modul ini. Tidak boleh ada `SITE_URL` duplikat di route.

### 7.2 `src/data/programs.ts`

Tipe `Program`:

- `slug`
- `name`
- `shortName`
- `audience`: sekolah, pesantren, desa, umkm, pelajar, komunitas
- `summary`
- `cardDesc`
- `description`: array paragraf
- `outcomes`: array hasil
- `format`
- `duration`
- `location`
- `curriculum`: array `{ title, desc }`
- `facilitators?`: array `{ name, role, bio?, image? }`
- `faqs`: array `{ q, a }`
- `relatedProductSlugs`
- `relatedStorySlugs?`
- `image`
- `featured?`
- `published`

### 7.3 `src/data/stories.ts`

Tipe `Story`:

- `slug`
- `client`
- `sector`
- `programSlug`
- `year`
- `title`
- `summary`
- `challenge`: array paragraf
- `approach`: array paragraf
- `result`: array paragraf
- `quote?`: `{ text, name, role, organization }`
- `images`: array `{ src, alt }`
- `permission`: `"granted" | "pending"`
- `published`

### 7.4 `src/data/articles.ts`

Tipe `Article`:

- `slug`
- `title`
- `description`
- `date`
- `updated?`
- `author`: `{ name, role }`
- `category`
- `readingTime`
- `heroImage`: `{ src, alt }`
- `blocks`: array blok `paragraph`, `heading`, `list`, `quote`, `image`
- `relatedProductSlugs?`
- `relatedProgramSlugs?`
- `relatedStorySlugs?`
- `featured?`
- `published`

Blok terstruktur dipilih supaya tidak perlu menambah parser markdown atau MDX. Kalau volume artikel tumbuh besar, migrasi ke MDX bisa dipertimbangkan terpisah.

### 7.5 `src/data/audiences.ts` (P2)

Tipe `Audience`:

- `slug`: pesantren, sekolah, desa, umkm
- `name`
- `headline`
- `summary`
- `painPoints`
- `recommendedProgramSlugs`
- `recommendedProductSlugs`
- `storySlugs`
- `faqs`
- `image`
- `published`

### 7.6 `src/data/search.ts`

Indeks pencarian tunggal berisi:

- Halaman statis.
- Produk.
- Program.
- Cerita yang terbit.
- Artikel yang terbit.

Setiap item: `title`, `description?`, `href`, `group`, `keywords?`.

Hanya route yang sudah terbit yang masuk indeks. Search tidak boleh mengarah ke halaman 404.

Search dialog memakai indeks ini. Tidak ada lagi daftar section hardcoded di navbar.

### 7.7 `src/data/routes.ts`

Daftar route yang indexable, dipakai sitemap dan test. Setiap entri: `path`, `lastmod`, `changefreq`, `priority`. Hanya route yang sudah terbit yang masuk daftar.

## 8. SEO dan structured data

### 8.1 Title dan description

Pola:

- Beranda: `Kampung IT Solo: Lab Peradaban Digital di Solo Raya`
- Katalog: `Produk & Layanan Kampung IT Solo: AI, Literasi, Energi, IoT`
- Detail produk: `{Nama Produk}: {Kategori} | Kampung IT Solo`
- Tentang: `Tentang Kampung IT Solo: Lab Peradaban Digital & Bin Alfan Group`
- Kontak: `Kontak & Lokasi Kampung IT Solo | Sukoharjo, Solo Raya`
- Program hub: `Program Pelatihan IT & Digital untuk Lembaga | Kampung IT Solo`
- Detail program: `{Nama Program} di Solo | Kampung IT Solo`
- Eduwisata: `Eduwisata IT Solo: Kunjungan & Studi Banding | Kampung IT Solo`
- Cerita hub: `Cerita & Studi Kasus Kampung IT Solo`
- Detail cerita: `{Klien}: {Program} | Kampung IT Solo`
- Artikel hub: `Artikel & Panduan Digital | Kampung IT Solo`
- Detail artikel: `{Judul} | Kampung IT Solo`
- Legal: `Kebijakan Privasi | Kampung IT Solo`, `Syarat & Ketentuan | Kampung IT Solo`

Aturan:

- Title unik, natural, maksimal sekitar 60 karakter.
- Description unik, 120-160 karakter, menjelaskan isi dan manfaat.
- Tidak ada keyword stuffing.
- Tidak memakai em dash di copy UI.

### 8.2 Canonical dan OG

- Setiap halaman punya canonical absolut ke dirinya sendiri.
- Beranda memakai `https://kampungitsolo.com/`.
- Halaman lain tidak memakai trailing slash.
- OG dan Twitter memakai title, description, dan image yang relevan.
- Kalau gambar khusus belum ada, pakai `og-image.jpg` sebagai fallback. Jangan memakai gambar produk yang tidak relevan.

### 8.3 JSON-LD

- Beranda: `EducationalOrganization`, `WebSite`, `FAQPage`.
- Katalog: `CollectionPage`, `ItemList`, dan `BreadcrumbList`.
- Detail produk: `Product` dan `BreadcrumbList`. Tidak ada `offers` atau `aggregateRating` palsu.
- Hub program: `CollectionPage` dan `ItemList`.
- Detail program: `Service`, atau `Course` untuk kelas coding dan bootcamp.
- Eduwisata: `Service`.
- Hub cerita: `CollectionPage` dan `ItemList`.
- Detail cerita: `Article` dan `BreadcrumbList`.
- Hub artikel: `CollectionPage` dan `ItemList`.
- Detail artikel: `Article` atau `BlogPosting` dan `BreadcrumbList`.
- Hub audiens: `CollectionPage` dan `ItemList`.
- Detail audiens: `WebPage` dan `Service`.
- Tentang: `AboutPage`.
- Kontak: `ContactPage` dan `EducationalOrganization` dengan properti lokal.
- Legal: `WebPage`.

Aturan review:

- Testimoni dan studi kasus adalah konten kepercayaan, bukan alat mengejar bintang.
- Jangan memasang `AggregateRating` atau `Review` untuk Kampung IT Solo di situsnya sendiri.
- Kalau nanti ada review produk yang benar-benar dari pengguna, baru pertimbangkan schema produk yang sesuai, dengan bukti dan izin.

### 8.4 Sitemap

- Ganti `public/sitemap.xml` statis dengan route dinamis `src/routes/sitemap[.]xml.ts` yang menghasilkan XML dari `src/data/routes.ts`.
- Hanya URL indexable yang masuk. Halaman 404, halaman preview, dan halaman yang belum terbit tidak masuk.
- Sertakan `lastmod`, `changefreq`, dan `priority`.
- Tambah test yang memastikan semua route terbit ada di sitemap dan tidak ada duplikat.
- `robots.txt` tetap menunjuk ke `https://kampungitsolo.com/sitemap.xml`.

Kalau route dinamis ternyata tidak cocok dengan setup TanStack Start saat implementasi, fallback-nya adalah script build yang menghasilkan `public/sitemap.xml`, dengan test yang sama. Keputusan akhir ada di builder, tapi hasilnya wajib satu sumber data.

### 8.5 Local SEO

- NAP (nama, alamat, telepon) harus sama di situs, Google Business Profile, dan direktori.
- Google Business Profile: listing yang ada saat ini bernama "ALWUSTHO TECHNOLOGIES" dan memakai alamat, telepon, serta website yang sama. Putuskan apakah Kampung IT Solo memakai listing itu atau membuat listing terpisah; kalau Kampung IT Solo hanya nama brand, gunakan listing yang ada.
- Google Search Console: verifikasi, submit sitemap, pantau query.
- Jangan mengarang alamat atau jam. Gunakan alamat dan jam dari listing Google Maps yang sudah diverifikasi. Jangan memakai kode pos generik atau telepon placeholder dari situs lama.

## 9. Arah desain

### 9.1 Brand

Reuse tanpa mendesain ulang:

- Palet navy, forest, lime, surface.
- Plus Jakarta Sans.
- Tombol pill yang sudah ada.
- Section label, leaf swoosh, slanted photo frame.
- Reveal animation yang sudah ada, dipakai hemat.

### 9.2 Komposisi per tipe halaman

- Katalog produk: satu produk unggulan, lalu baris per pilar. Bukan grid kartu identik.
- Hub program: daftar editorial dengan nomor, audiens, format, dan hasil. Bukan enam kartu yang sama.
- Eduwisata: alur kunjungan dan fasilitas, seperti itinerary.
- Cerita: layout editorial dengan foto besar, konteks klien, dan kutipan.
- Artikel: lebar baca 65-75 karakter, heading jelas, daftar isi untuk artikel panjang.
- Halaman dalam: hero ringkas dengan breadcrumb, konten utama, sidebar CTA dan tautan terkait di desktop. Di mobile, sidebar menjadi CTA di bawah.

### 9.3 Motion dan aksesibilitas

- Satu reveal per section, bukan animasi di semua elemen.
- Tidak ada loop tak berujung.
- Hormati `prefers-reduced-motion`.
- Heading semantik, skip link, focus state, alt text, kontras WCAG AA.
- Form punya label, pesan error, dan status yang jelas.

### 9.4 Performa

- Tidak ada dependensi baru yang berat.
- Gambar punya width dan height.
- Hero image above-the-fold memakai `fetchpriority="high"` dan tidak lazy.
- Gambar bawah fold memakai `loading="lazy"`.
- Tidak ada script pihak ketiga yang memblokir render.
- Tidak melaporkan angka performa yang belum diukur.

### 9.5 Anti-slop

- Tidak ada testimoni, statistik, logo klien, atau nama tim fiktif.
- Tidak ada link mati.
- Tidak ada badge generik tanpa fungsi.
- Tidak ada section yang hanya mengisi template.
- Tidak ada em dash di copy UI.
- Setiap keputusan visual punya alasan yang bisa ditulis satu baris.

## 10. Rencana teknis

### 10.1 Route baru

- `src/routes/products/index.tsx`
- `src/routes/tentang.tsx`
- `src/routes/kontak.tsx`
- `src/routes/kebijakan-privasi.tsx`
- `src/routes/syarat-ketentuan.tsx`
- `src/routes/program/index.tsx`
- `src/routes/program/$slug.tsx`
- `src/routes/eduwisata.tsx`
- `src/routes/cerita/index.tsx`
- `src/routes/cerita/$slug.tsx`
- `src/routes/artikel/index.tsx`
- `src/routes/artikel/$slug.tsx`
- `src/routes/untuk/index.tsx`
- `src/routes/untuk/$slug.tsx`
- `src/routes/sitemap[.]xml.ts`

`src/routes/products/$slug.tsx` tetap ada dan diperbarui.

### 10.2 Komponen bersama

- `src/components/site/PageShell.tsx`: Navbar, main, Footer, skip link.
- `src/components/site/PageHero.tsx`: eyebrow, h1, description, CTA, breadcrumb.
- `src/components/site/Breadcrumbs.tsx`: breadcrumb terlihat dan schema.
- `src/components/site/JsonLd.tsx`: render JSON-LD.
- `src/components/site/CtaBand.tsx`: CTA berulang.
- `src/components/site/RelatedLinks.tsx`: daftar program, produk, cerita, artikel terkait.
- `src/components/site/Prose.tsx`: render blok artikel dan cerita.
- `src/components/forms/InquiryForm.tsx`: ekstrak form reservasi supaya bisa dipakai di beranda dan kontak.

Komponen baru mengikuti pola visual dan aksesibilitas yang sudah ada. Jangan membuat design system baru.

### 10.3 Navbar, footer, search

- `Navbar` diubah menjadi navigasi halaman dengan active state berbasis pathname.
- Scroll spy dan daftar anchor lama dihapus.
- `Footer` memakai link nyata dan struktur baru.
- `SearchDialog` memakai `src/data/search.ts`, bukan daftar section hardcoded.
- Form reservasi diekstrak, lalu dipakai di beranda dan `/kontak`.

### 10.4 Sitemap dan route manifest

- `src/data/routes.ts` menjadi sumber tunggal untuk sitemap dan test.
- Route dinamis `sitemap[.]xml.ts` menghasilkan XML.
- `public/sitemap.xml` dihapus supaya tidak konflik.
- Test memastikan semua halaman terbit ada di sitemap.

### 10.5 Test

- Route matching untuk semua route baru, mengikuti pola `src/test/app-routing.test.tsx`.
- Data integrity:
  - Slug unik untuk produk, program, cerita, artikel, audiens.
  - Semua referensi `relatedProductSlugs`, `relatedProgramSlugs`, dan `storySlugs` valid.
  - Cerita yang terbit punya `permission: "granted"`.
  - Artikel yang terbit punya metadata lengkap dan minimal tiga blok.
  - Program yang terbit punya minimal tiga outcome dan tiga FAQ.
- Sitemap: semua route terbit ada, tidak ada duplikat, URL absolut.
- Build: `bun run build` atau `npm run build` harus lolos.
- Verifikasi manual: klik semua navigasi, footer, search, CTA; cek mobile; cek tidak ada link `#`; cek schema dengan Rich Results Test.

### 10.6 Deployment dan redirect

Kalau v2 menggantikan `kampungitsolo.com`:

- Audit URL live sebelum cutover. Sitemap live per 2026-11-23 hanya berisi `/`, `/bootcamp`, dan URL hash `#about`, `#services`, `#usecases`, `#links`, `#faq`, `#contact`.
- Map URL lama ke URL baru, minimal:
  - `/bootcamp` ke `/program/bootcamp-ai-vibe-coding`
  - `/#about` ke `/tentang`
  - `/#services` ke `/products`
  - `/#usecases` ke `/cerita`
  - `/#links` ke `/tentang`
  - `/#faq` ke `/#faq`
  - `/#contact` ke `/kontak`
- Hash URL tidak butuh redirect server, tapi link internal lama harus diperbarui.
- Redirect 301 dipasang di hosting atau server.
- Jangan cutover domain sebelum redirect dan sitemap diuji.

## 11. Fase dan acceptance criteria

### Batch 1: Fondasi (P0)

Pekerjaan:

- `src/lib/site.ts`, `src/data/routes.ts`, komponen bersama.
- `/products`, `/tentang`, `/kontak`, legal.
- Breadcrumb dan update detail produk.
- Navbar, footer, search, sitemap.
- Test route, data, sitemap, dan build.

Acceptance:

- Semua route P0 cocok dan tidak jatuh ke 404.
- Semua halaman punya title, description, canonical, dan breadcrumb.
- Tidak ada link `#` di navbar atau footer.
- Tidak ada tautan ke route yang belum terbit.
- Katalog menautkan ke 10 produk.
- Detail produk menautkan balik ke katalog dan minimal satu halaman terkait.
- Sitemap memuat semua route terbit.
- Build dan test lolos.
- Konten tentang, kontak, dan legal sudah direview manusia.
- Setiap klaim publik yang dipakai di halaman P0 sudah dikonfirmasi pemilik situs. Klaim yang belum dikonfirmasi dihapus, bukan dibiarkan.

### Batch 2: Program, eduwisata, cerita (P1)

Pekerjaan:

- `/program` dan enam detail program.
- `/eduwisata`.
- `/cerita` dan 3-5 detail cerita.
- Internal link ke produk dan cerita.
- Test data dan route.

Acceptance:

- Setiap program punya 400-700 kata unik, minimal tiga outcome, tiga FAQ, dan CTA WhatsApp.
- Setiap cerita punya izin, data klien yang benar, dan minimal satu program terkait.
- Tidak ada kutipan atau angka hasil yang belum terverifikasi.
- Semua halaman masuk sitemap dan punya schema yang valid.
- Build dan test lolos.

### Batch 3: Artikel dan audiens (P2)

Pekerjaan:

- `/artikel` dan empat artikel pertama.
- `/untuk/pesantren`, `/untuk/sekolah`, `/untuk/desa`, `/untuk/umkm` kalau kontennya siap.
- Internal link dari artikel ke program dan produk.
- Test data dan route.

Acceptance:

- Empat artikel terbit dengan metadata, schema, dan minimal satu tautan komersial.
- Tidak ada statistik tanpa sumber.
- Halaman audiens punya konten unik, bukan salinan halaman lain.
- Build dan test lolos.

## 12. Dependensi dan pertanyaan untuk pemilik situs

### 12.1 Sudah dikonfirmasi pada 2026-11-23

- `228+ institusi sejak 2016`, `16 modul Elfan System`, `10 produk`, dan `6 program` akurat dan boleh dipakai ulang.
- Empat studi kasus beranda akurat dan boleh dipakai: Desa Grogol Weru Sukoharjo 2024; UMKM Pasar Solo Raya 2023-2024; Komunitas Pelajar SMK; Karang Taruna dan Pemuda Desa 2023.
- Kutipan "Kampung IT Solo adalah bukti nyata bahwa teknologi bisa memberdayakan masyarakat" boleh dipakai dengan atribusi "Mitra Kolaborasi". Atribusinya tetap anonim. Jangan mengarang nama, jabatan, atau organisasi untuk kutipan ini.

Empat studi kasus di atas boleh dijadikan cerita di `/cerita` tanpa menunggu izin tambahan, selama tidak menambahkan nama individu atau kutipan baru yang belum ada.

Verifikasi situs live dan kanal resmi pada 2026-11-23 juga mengonfirmasi:

- Kanal kontak yang konsisten di repo dan panel kontak situs live: email `kampungitsolo@gmail.com`, WhatsApp/telepon `+62 812-3566-6665`. FAQ dan JSON-LD situs live memakai `halo@kampungitsolo.com` dan `+62 812-3456-7890`; keduanya placeholder dan tidak boleh dipakai. Perbaiki teks FAQ live saat cutover.
- Alamat dari listing Google Maps: `Jl. Semenromo, Gg. Melon Jl. Waringinrejo No. 15, Ngruki, Cemani, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552`. Koordinat `-7.5862389, 110.8114676`. Jam operasional Senin-Jumat 08.00-16.00, Sabtu 08.00-13.00, Minggu tutup. Link peta `https://maps.app.goo.gl/dC7WRSL95h61TxJy6`.
- Listing Google Maps atas alamat ini bernama `ALWUSTHO TECHNOLOGIES`, dengan website `kampungitsolo.com` dan telepon yang sama. Alamat ini di Kabupaten Sukoharjo (Solo Raya), bukan Kota Surakarta. Repo dan situs live masih menulis `RT 06 / RW 21, Surakarta`; perbaiki saat implementasi. RT/RW tidak tercantum di listing, jadi jangan menambahkannya ke alamat resmi kecuali pemilik mengonfirmasi.
- Enam program: Pelatihan Desa Digital, Workshop Foto dan Video Produk UMKM, Kelas Coding Akhir Pekan, Literasi Media dan Keamanan Digital, Bootcamp AI Vibe Coding, dan Implementasi Elfan System.
- Kebijakan biaya: kelas reguler (kelas coding akhir pekan dan literasi digital karang taruna) terbuka; pendampingan desa digital, workshop UMKM, dan implementasi Elfan System menyesuaikan ruang lingkup.
- Bootcamp AI Vibe Coding: 6 hari, Rp 500.000, untuk pemula, hasilnya membangun dan mendeploy portal berita CRUD dengan pendekatan vibe coding. Ini bukan program sertifikasi TUK.
- URL sosial: YouTube `https://www.youtube.com/@AlwusthoTechnologies`, Instagram `https://www.instagram.com/kampungit.solo/`, TikTok `https://www.tiktok.com/@kampungitsolo`, Facebook `https://www.facebook.com/kampungitsolo/`. Instagram dan TikTok terverifikasi aktif; Facebook diberikan pemilik dan belum bisa dicek dari environment ini. Akun Instagram memakai nama tampilan Alwustho Technologiess dengan bio pendidikan dan teknologi.
- Bin Alfan Group: Kampung IT Solo, Elfan Bookless Library, Alwustho Technologies, TUK, dan Alkubro.
- Studi kasus live memuat konteks yang bisa dipakai: Desa Grogol, Weru, Sukoharjo 2024 (pelatihan desa digital); UMKM Pasar Solo Raya 2023-2024 (workshop foto dan video produk); Komunitas Pelajar SMK (kelas coding akhir pekan, berjalan); Karang Taruna dan Pemuda Desa 2023 (literasi media dan keamanan digital).

### 12.2 Masih terbuka, urut dari yang paling penting

1. Keputusan Google Business Profile: listing yang ada bernama `ALWUSTHO TECHNOLOGIES`. Tentukan apakah Kampung IT Solo memakai listing itu atau punya listing terpisah, lalu samakan NAP di situs, Maps, dan direktori.
2. Tiga sampai lima cerita atau testimoni baru dengan nama, peran, instansi, foto, dan izin publikasi. Ini terpisah dari empat studi kasus yang sudah dikonfirmasi.
3. Detail lima program selain bootcamp: durasi, jadwal, lokasi, fasilitator, dan kurikulum. Harga mengikuti kebijakan yang sudah dikonfirmasi. Data bootcamp sudah lengkap.
4. Akses dan konsistensi kanal sosial: samakan nama tampilan, bio, dan link situs di Instagram, TikTok, Facebook, dan YouTube. Instagram saat ini memakai nama tampilan Alwustho Technologiess.
5. Review manusia untuk kebijakan privasi dan syarat ketentuan, termasuk siapa pengendali data dan kontak permintaan data.
6. Konfirmasi bahwa v2 akan menggantikan `kampungitsolo.com`. Daftar URL live sudah diaudit: `/`, `/bootcamp`, dan URL hash. Redirect `/bootcamp` ke `/program/bootcamp-ai-vibe-coding` tetap perlu diuji saat cutover.
7. Nama penulis atau ahli yang bisa dicantumkan di artikel, dan review faktual untuk empat topik pertama.
8. Foto program dan fasilitas yang boleh dipublikasikan.
9. Akses Google Business Profile dan Google Search Console, atau metode verifikasi yang disetujui.

## 13. Yang diserahkan ke builder

- Detail komponen, styling, dan spacing.
- Mekanisme sitemap dinamis, dengan syarat satu sumber data dan test.
- Format render artikel, selama tetap memakai data terstruktur tanpa dependensi berat.
- Penulisan copy berdasarkan konten terverifikasi.
- Detail implementasi test.
- Konfigurasi redirect di hosting.

## 14. Keputusan yang sudah diambil

- Audiens utama: lembaga dan eduwisata. Sekunder: UMKM.
- Approach: fondasi dulu, lalu komersial, lalu konten.
- URL produk yang sudah ada dipertahankan.
- Testimoni hanya dari data asli dan izin.
- Tidak ada schema review untuk organisasi sendiri.
- Navigasi utama berbasis halaman.
- Tidak ada halaman kota programmatic.
- Satu cluster query punya satu halaman utama, sesuai matriks di §5.6.
- Beranda adalah halaman brand, bukan halaman layanan eduwisata.
- ELFAN System adalah satu-satunya produk unggulan di katalog.
- Klaim publik yang sudah tayang dikonfirmasi akurat pada 2026-11-23 dan boleh dipakai ulang. Klaim baru tetap harus diverifikasi sebelum terbit.
- `/kontak` memakai alamat, kode pos, koordinat, dan jam dari listing Google Maps. Alamatnya di Cemani, Grogol, Sukoharjo, bukan Kota Surakarta.
- Copy brand boleh memakai "Solo" untuk search intent, tetapi NAP dan schema selalu memakai alamat Sukoharjo yang terverifikasi.
- Empat kanal sosial dipakai: YouTube, Instagram, TikTok, dan Facebook. Tidak ada ikon sosial tanpa URL.
- Bootcamp yang dipromosikan adalah Bootcamp AI Vibe Coding, bukan sertifikasi TUK.
- Data kontak placeholder dari situs live (`halo@kampungitsolo.com`, `+62 812-3456-7890`, kode pos `57100`) tidak dipakai.
