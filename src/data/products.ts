import academyBootcampImg from "@/assets/academy/academy-bootcamp.jpg";
import academyClassImg from "@/assets/academy/academy-class.jpg";
import academyLabImg from "@/assets/academy/academy-lab.jpg";
import academyPodcastImg from "@/assets/academy/academy-podcast.jpg";

import booklessAppImg from "@/assets/bookless/bookless-app.jpg";
import booklessInstallImg from "@/assets/bookless/bookless-install.jpg";
import booklessReadingImg from "@/assets/bookless/bookless-reading.jpg";

import solarPanelsImg from "@/assets/solar/solar-panels.jpg";
import solarInverterImg from "@/assets/solar/solar-inverter.jpg";
import solarMonitoringImg from "@/assets/solar/solar-monitoring.jpg";
import solarComponentsImg from "@/assets/solar/solar-components.jpg";

import systemModulesImg from "@/assets/system/system-modules.jpg";
import systemInstallationImg from "@/assets/system/system-installation.jpg";
import systemTrainingImg from "@/assets/system/system-training.jpg";
import systemHandoverImg from "@/assets/system/system-handover.jpg";

import smartEnergyVisual from "@/assets/products/smart-energy.png";
import smartSchoolVisual from "@/assets/products/smart-school.png";
import smartSafetyVisual from "@/assets/products/smart-safety.png";
import smartFiguraVisual from "@/assets/products/smart-figura.png";
import smartGardenVisual from "@/assets/products/smart-garden.png";

export type ProductBlock = { title: string; desc: string };
export type ProductSpec = { label: string; value: string };

export type ProductVideo = {
  youtubeId: string;
  title: string;
  caption?: string;
  uploadDate?: string;
};

export type ProductGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  cardDesc: string;
  highlights: string[];
  relatedProgramSlugs?: string[];
  relatedStorySlugs?: string[];
  image: string;
  imageAlt?: string;
  featured?: boolean;
  catalogFeatured?: boolean;
  description: string[];
  features: ProductBlock[];
  steps: ProductBlock[];
  specs: ProductSpec[];
  video?: ProductVideo;
  gallery?: ProductGalleryItem[];
  website?: { label: string; url: string };
};

export const products: Product[] = [
  {
    slug: "elfan-ai-academy",
    name: "ELFAN AI Academy",
    category: "Pendidikan & Kaderisasi",
    tagline: "Kaderisasi SDM IT masa depan.",
    summary:
      "Platform pendidikan AI, coding, data, dan teknologi masa depan. Mencetak talenta berkarakter yang siap bersaing global.",
    cardDesc: "Kaderisasi SDM IT: AI, coding, data, dan teknologi masa depan.",
    highlights: ["Metode 3M", "AI & Coding", "Vokasi Digital"],
    relatedProgramSlugs: ["kelas-coding", "bootcamp-ai-vibe-coding", "workshop-umkm"],
    relatedStorySlugs: ["komunitas-pelajar-smk", "umkm-pasar-solo-raya"],
    image: academyClassImg,
    imageAlt: "Peserta ELFAN AI Academy belajar dengan laptop di ruang kelas",
    featured: true,
    description: [
      "Elfan AI Academy adalah lembaga pendidikan vokasi digital berbasis AI yang dirancang untuk mencetak kader SDM IT berkarakter Islami. Menggunakan metode akselerasi 3M (Minat, Manut atau taat pada proses, Mandiri), akademi ini membekali siswa dengan keterampilan teknologi terkini sambil menanamkan nilai-nilai adab dan karakter.",
      "Elfan AI Academy bukan sekadar kursus coding biasa. Kami membangun ekosistem pembelajaran yang mengintegrasikan kecerdasan buatan di setiap tahap: rekomendasi materi, evaluasi adaptif, hingga proyek akhir berbasis AI. Siswa tidak hanya belajar menggunakan AI, tetapi juga memahami cara kerja dan etika di baliknya.",
      "Metode 3M adalah pendekatan berjenjang yang memastikan setiap siswa benar-benar menguasai materi sebelum melangkah ke tahap berikutnya. Tahap Minat membangkitkan rasa ingin tahu, Manut membangun disiplin mengikuti alur belajar yang terstruktur, dan Mandiri memampukan siswa mengerjakan proyek nyata tanpa ketergantungan.",
    ],
    features: [
      {
        title: "Pembelajaran Berbasis AI",
        desc: "Kurikulum diintegrasikan dengan AI untuk personalisasi belajar, umpan balik real-time, dan adaptasi materi sesuai kemampuan siswa.",
      },
      {
        title: "Metode 3M",
        desc: "Minat menumbuhkan ketertarikan, Manut menegakkan disiplin mengikuti proses, dan Mandiri memampukan siswa belajar serta berkarya sendiri.",
      },
      {
        title: "Vokasi Digital",
        desc: "Fokus pada keterampilan praktis: coding, data science, AI engineering, dan teknologi digital yang langsung aplikatif di industri.",
      },
    ],
    steps: [
      {
        title: "Pendidikan Vokasi Berbasis AI",
        desc: "Ekosistem pembelajaran mengintegrasikan AI pada rekomendasi materi, evaluasi adaptif, dan proyek akhir, sehingga siswa juga memahami etika di balik teknologi.",
      },
      {
        title: "Metode Akselerasi 3M",
        desc: "Siswa menguasai materi secara berjenjang: membangkitkan minat, mengikuti alur belajar yang terstruktur, lalu mandiri mengerjakan proyek nyata.",
      },
      {
        title: "Kaderisasi Berkarakter Islami",
        desc: "Setiap program dibalut nilai integritas, tanggung jawab, dan kebermanfaatan. Lulusan tidak hanya cakap teknis, tetapi juga berakhlak mulia.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Lembaga Pendidikan Vokasi Digital" },
      { label: "Metode", value: "3M (Minat, Manut, Mandiri)" },
      { label: "Fokus", value: "AI, Coding, Data, Teknologi Digital" },
      { label: "Karakter", value: "Islami & Beradab" },
      { label: "Target", value: "Kader SDM IT Masa Depan" },
      { label: "Pilar", value: "Pendidikan & Kaderisasi" },
    ],
    video: {
      youtubeId: "SMNiHt1ewB4",
      title: "Video Company Profil Elfan AI Academy 2025 | Angkatan 1",
      caption:
        "Mengenal ekosistem belajar, lab teknologi vokasi, dan kaderisasi santri digital berbasis adab di Elfan AI Academy.",
      uploadDate: "2025-01-01",
    },
    gallery: [
      {
        src: academyBootcampImg,
        alt: "Suasana bootcamp IT dan pemrograman web AI di Elfan AI Academy Solo",
        caption:
          "Bootcamp IT intensif dengan fokus pemrograman web, data, dan implementasi AI praktis",
        category: "Bootcamp & Kelas",
      },
      {
        src: academyLabImg,
        alt: "Praktik langsung di lab komputer Elfan AI Academy Solo Raya",
        caption: "Praktik lab komputer terstruktur dengan pendampingan mentor langkah demi langkah",
        category: "Fasilitas Lab",
      },
      {
        src: academyPodcastImg,
        alt: "Studio podcast dan literasi penyiaran digital Elfan AI Academy",
        caption: "Studio live podcast untuk latihan public speaking dan literasi digital santri",
        category: "Studio & Media",
      },
      {
        src: academyClassImg,
        alt: "Suasana kelas kaderisasi santri berkarakter Islami di Elfan AI Academy",
        caption: "Pembekalan adab, karakter kepemimpinan, dan etika kecerdasan buatan",
        category: "Kaderisasi Santri",
      },
    ],
  },
  {
    slug: "bookless-library",
    name: "ELFAN Bookless Library",
    category: "Literasi & Pengetahuan",
    tagline: "Perpustakaan digital cerdas tanpa batas.",
    summary:
      "Sistem perpustakaan digital personal dengan rekomendasi bacaan berbasis AI. Diakses oleh 228+ institusi sejak 2016.",
    cardDesc: "Perpustakaan digital dengan rekomendasi buku berbasis AI.",
    highlights: ["Sejak 2016", "228+ Institusi", "Akses 24/7"],
    relatedProgramSlugs: ["literasi-digital"],
    relatedStorySlugs: ["pesantren-idbc-adab-it"],
    image: booklessReadingImg,
    featured: true,
    description: [
      "Elfan Bookless Library adalah sistem perpustakaan digital personal yang mengubah cara mengakses ilmu. Dengan rekomendasi bacaan yang dipersonalisasi sesuai minat pengguna, sistem ini telah dipercaya oleh lebih dari 228 institusi sejak tahun 2016. Tidak perlu rak fisik, tidak perlu antre: semua bahan bacaan tersedia dalam genggaman.",
      "Bookless Library mengubah konsep perpustakaan tradisional menjadi pengalaman digital yang personal dan imersif. Setiap pengguna memiliki rak virtual sendiri, dengan rekomendasi yang terus belajar dari preferensi baca mereka. Sistem ini mendukung berbagai format: e-book, jurnal, artikel, audiobook, dan multimedia.",
      "Kecerdasan buatan Bookless Library mempelajari minat pengguna dari interaksi pertama dan menyajikan rekomendasi yang semakin akurat seiring waktu. Fitur ini membantu institusi pendidikan mendorong budaya literasi di kalangan siswa dan tenaga pengajar.",
    ],
    features: [
      {
        title: "Rekomendasi Personal",
        desc: "AI menganalisis minat dan riwayat baca untuk merekomendasikan buku, jurnal, dan referensi yang paling relevan bagi setiap pengguna.",
      },
      {
        title: "228+ Institusi",
        desc: "Telah diadopsi oleh lebih dari 228 institusi pendidikan dan perpustakaan sejak 2016.",
      },
      {
        title: "Digital First",
        desc: "Tanpa buku fisik dan tanpa batas ruang. Ribuan judul tersedia kapan saja, di mana saja, dari perangkat apa pun.",
      },
    ],
    steps: [
      {
        title: "Perpustakaan Digital Generasi Baru",
        desc: "Setiap pengguna punya rak virtual sendiri. Sistem mendukung e-book, jurnal, artikel, audiobook, dan multimedia.",
      },
      {
        title: "Rekomendasi Berbasis AI",
        desc: "Sistem mempelajari preferensi pembaca dan menyajikan rekomendasi yang makin akurat seiring waktu.",
      },
      {
        title: "Ekosistem yang Terbukti",
        desc: "Dipakai pesantren, universitas, sekolah, dan komunitas sejak 2016 untuk membuka akses ilmu tanpa batas.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Sistem Perpustakaan Digital Personal" },
      { label: "Tahun Berdiri", value: "2016" },
      { label: "Institusi Pengguna", value: "228+" },
      { label: "Format", value: "E-book, jurnal, artikel, audiobook, multimedia" },
      { label: "Pilar", value: "Literasi & Pengetahuan" },
    ],
    video: {
      youtubeId: "zManXSTIbgY",
      title: "ELFAN Bookless Library Karya Anak Bangsa Indonesia",
      caption:
        "Solusi perpustakaan digital yang lengkap, mudah, dan efisien untuk pembelajaran serta eksplorasi data.",
      uploadDate: "2020-09-21",
    },
    gallery: [
      {
        src: booklessAppImg,
        alt: "Aplikasi pembaca Elfan Bookless Library di ponsel",
        caption: "Akses koleksi digital lewat aplikasi pembaca di ponsel",
        category: "Aplikasi",
      },
      {
        src: booklessReadingImg,
        alt: "Pemindaian QR Code koleksi buku digital Elfan Bookless Library",
        caption: "Pindai QR Code di rak untuk membuka buku digital",
        category: "QR Code",
      },
      {
        src: booklessInstallImg,
        alt: "Pemasangan rak dan materi Elfan Bookless Library",
        caption: "Pemasangan rak dan materi Bookless Library di lokasi mitra",
        category: "Implementasi",
      },
    ],
  },
  {
    slug: "solar-energi",
    name: "ELFAN Solar Energi H",
    category: "Kemandirian Energi",
    tagline: "Energi surya untuk operasional lembaga.",
    summary:
      "Solusi PLTS untuk lembaga pendidikan bersama PT Ufuk Hijau Energi, dari survei dan desain hingga instalasi serta perawatan.",
    cardDesc: "Panel surya untuk operasional lembaga, dari survei hingga perawatan.",
    highlights: ["EPC End-to-End", "Monitoring IoT", "Layanan Seluruh Jawa"],
    image: solarPanelsImg,
    featured: true,
    description: [
      "ELFAN Solar Energi H adalah solusi PLTS untuk lembaga pendidikan yang dikerjakan bersama PT Ufuk Hijau Energi. Sebagai kontraktor EPC, Ufuk Hijau menangani survei lokasi, analisis beban listrik, desain sistem, pengadaan komponen, instalasi, pengujian, hingga perawatan.",
      "Kapasitas dan konfigurasi sistem disusun dari kebutuhan listrik serta kondisi lokasi. Pilihan sistem mencakup on-grid, hybrid, dan off-grid, sehingga desain dapat disesuaikan dengan pola pemakaian lembaga dan ketersediaan jaringan listrik.",
      "Sistem PLTS dapat dilengkapi pemantauan berbasis IoT untuk melihat kondisi sistem secara real time melalui aplikasi. Setelah instalasi, perawatan berkala menjaga komponen tetap bekerja aman dan kinerja sistem tetap terukur.",
    ],
    features: [
      {
        title: "Desain Berbasis Data",
        desc: "Kapasitas sistem dihitung dari pola konsumsi listrik dan kondisi atap, bukan memakai paket seragam.",
      },
      {
        title: "Tiga Model Sistem",
        desc: "Pilihan on-grid, hybrid, dan off-grid disesuaikan dengan kebutuhan cadangan daya serta ketersediaan jaringan PLN.",
      },
      {
        title: "Monitoring dan Perawatan",
        desc: "Pemantauan berbasis IoT dan perawatan berkala membantu menjaga kinerja sistem setelah instalasi.",
      },
    ],
    steps: [
      {
        title: "Survei dan Perencanaan",
        desc: "Tim teknis menilai potensi energi surya, struktur bangunan, dan arah matahari. Hasil survei dipakai untuk merancang sistem yang efisien dan aman.",
      },
      {
        title: "Instalasi dan Pengujian",
        desc: "Pengadaan komponen, pemasangan, dan pengujian dikerjakan tim berpengalaman dengan fokus keselamatan.",
      },
      {
        title: "Monitoring dan Perawatan",
        desc: "Kondisi sistem dipantau melalui aplikasi, lalu dirawat berkala agar kinerjanya tetap terjaga.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Pembangkit Listrik Tenaga Surya" },
      { label: "Model", value: "On-grid, hybrid, off-grid" },
      { label: "Partner", value: "PT Ufuk Hijau Energi" },
      { label: "Layanan", value: "Survei, desain, instalasi, pengujian, perawatan" },
      { label: "Area Layanan", value: "Seluruh Pulau Jawa" },
      { label: "Pilar", value: "Kemandirian Energi" },
    ],
    video: {
      youtubeId: "K54d1Wywhzs",
      title: "Hidden Gem Energi Surya di Solo",
      caption:
        "Menelusuri Open Lab Ufuk Hijau Energi: panel surya, inverter, baterai, dan pemantauan sistem secara langsung.",
      uploadDate: "2026-06-24",
    },
    gallery: [
      {
        src: solarInverterImg,
        alt: "Inverter PLTS dengan logo Ufuk Hijau Energi",
        caption: "Inverter 11 kW pada instalasi PLTS berkapasitas 12,4 kWp.",
        category: "Komponen",
      },
      {
        src: solarMonitoringImg,
        alt: "Pemantauan sistem PLTS melalui aplikasi ponsel",
        caption: "Pemantauan kondisi sistem secara real time melalui aplikasi.",
        category: "Monitoring",
      },
      {
        src: solarComponentsImg,
        alt: "Rangkaian inverter, proteksi, dan baterai pada sistem PLTS",
        caption: "Inverter, proteksi, dan baterai penyimpanan di Open Lab Ufuk Hijau Energi.",
        category: "Instalasi",
      },
    ],
    website: { label: "Situs Ufuk Hijau Energi", url: "https://ufukhijau.com/" },
  },
  {
    slug: "elfan-system",
    name: "ELFAN System",
    category: "Teknologi & Inovasi",
    tagline: "Platform digital untuk lembaga pendidikan Islam.",
    summary:
      "Platform 16 modul untuk administrasi, pembelajaran, pustaka, dan layanan lembaga, dengan server yang dikelola sendiri.",
    cardDesc: "Platform 16 modul dengan server mandiri untuk lembaga pendidikan.",
    highlights: ["16 Modul", "Server Mandiri", "Pendampingan Implementasi"],
    relatedProgramSlugs: ["implementasi-elfan-system", "desa-digital"],
    relatedStorySlugs: ["desa-grogol-weru"],
    image: systemModulesImg,
    catalogFeatured: true,
    description: [
      "ELFAN System adalah platform digital untuk mengelola lembaga pendidikan Islam dalam satu ekosistem. Platform ini dikembangkan Alwustho Technologies dan mencakup 16 modul, dari Data Center dan Bookless Library hingga Akademik System, Smart Village, dan E-Masjid.",
      "Berbeda dari layanan awan yang seragam, ELFAN System dipasang pada server mandiri milik lembaga. Data dan konten dikelola sendiri, akses dapat disesuaikan dengan kebutuhan, dan lingkungan belajar dapat dibatasi dari konten yang tidak relevan.",
      "Platform ini dipakai pesantren, madrasah, sekolah, kampus, masjid, dan pemerintah desa. Implementasi dilakukan bertahap: pemetaan kebutuhan, penyiapan server dan data, lalu pelatihan staf agar modul yang dipilih benar-benar masuk ke pekerjaan sehari-hari.",
    ],
    features: [
      {
        title: "16 Modul Terintegrasi",
        desc: "Mulai dari Data Center, Bookless Library, dan Akademik System hingga E-Masjid, modul berbagi data dalam satu platform.",
      },
      {
        title: "Server Mandiri",
        desc: "Data dan konten berada di server lembaga, sehingga akses dan batasan konten dapat diatur sesuai kebutuhan pendidikan.",
      },
      {
        title: "Pendampingan Implementasi",
        desc: "Instalasi, pelatihan staf, dan pendampingan penggunaan dilakukan bersama tim Kampung IT Solo.",
      },
    ],
    steps: [
      {
        title: "Pemetaan Kebutuhan",
        desc: "Tim meninjau pekerjaan administrasi, pembelajaran, dan layanan yang akan dipindahkan ke platform.",
      },
      {
        title: "Instalasi dan Penyiapan Data",
        desc: "Server dan perangkat pendukung dipasang, lalu data awal serta hak akses pengguna disiapkan.",
      },
      {
        title: "Pelatihan dan Pendampingan",
        desc: "Staf dilatih memakai modul yang dipilih melalui pekerjaan nyata, lalu didampingi saat pemakaian awal.",
      },
    ],
    specs: [
      { label: "Jumlah Modul", value: "16 Modul" },
      { label: "Jenis", value: "Platform Integrasi Terpadu" },
      { label: "Model", value: "Server Mandiri" },
      { label: "Pengembang", value: "Alwustho Technologies" },
      { label: "Target", value: "Pesantren, sekolah, kampus, masjid, pemerintah desa" },
      { label: "Pilar", value: "Teknologi & Inovasi" },
    ],
    video: {
      youtubeId: "AA6sbCPaSQc",
      title: "Instalasi & Training ELFAN System di MTS Fisabilillah Bekasi",
      caption:
        "Tim Kampung IT Solo memasang server dan melatih staf MTS Fisabilillah Bekasi pada Juli 2024.",
      uploadDate: "2024-08-03",
    },
    gallery: [
      {
        src: systemInstallationImg,
        alt: "Pemasangan jaringan ELFAN System di lorong sekolah",
        caption: "Pemasangan jaringan dan perangkat pendukung ELFAN System di sekolah mitra.",
        category: "Instalasi",
      },
      {
        src: systemTrainingImg,
        alt: "Tim mendampingi staf sekolah menggunakan laptop",
        caption: "Pelatihan staf sekolah untuk memakai modul ELFAN System.",
        category: "Pelatihan",
      },
      {
        src: systemHandoverImg,
        alt: "Staf sekolah melihat perangkat bersama tim pendamping",
        caption: "Penyiapan perangkat dan pendampingan awal di MTS Fisabilillah Bekasi.",
        category: "Pendampingan",
      },
    ],
    website: {
      label: "Instagram Alwustho",
      url: "https://www.instagram.com/alwustho_tech/",
    },
  },
  {
    slug: "elfan-ai-lab",
    name: "ELFAN AI Lab",
    category: "Teknologi & Inovasi",
    tagline: "Laboratorium eksplorasi AI lintas disiplin.",
    summary:
      "Tempat eksperimen AI untuk sains, bahasa, matematika, sosial, dan berbagai bidang ilmu lainnya.",
    cardDesc: "Laboratorium eksperimen AI lintas bidang ilmu.",
    highlights: ["Multi Disiplin", "Terbuka untuk Umum", "Fokus Literasi AI"],
    relatedProgramSlugs: ["kelas-coding", "bootcamp-ai-vibe-coding"],
    image: academyLabImg,
    imageAlt: "Ruang laboratorium komputer untuk eksperimen AI",
    description: [
      "Elfan AI Lab adalah laboratorium berbasis AI yang dirancang untuk eksplorasi lintas disiplin ilmu, dari sains, bahasa, matematika, hingga ilmu sosial. Laboratorium ini bertujuan mendemokratisasi literasi AI dengan memberi akses kepada siswa, peneliti, dan masyarakat umum untuk bereksperimen dalam lingkungan yang aman dan terbimbing.",
      "Elfan AI Lab dibangun dengan visi bahwa kecerdasan buatan bukan hanya untuk insinyur dan ilmuwan komputer. Laboratorium ini membuka pintu bagi siapa pun yang ingin memahami, bereksperimen, dan berinovasi dengan AI, mulai dari pelajar SMA yang baru belajar Python hingga peneliti yang ingin menerapkan machine learning di bidang sosial dan humaniora.",
      "Di Elfan AI Lab, pengguna dapat bereksperimen dengan model bahasa, computer vision, analisis data, dan berbagai teknik AI lainnya. Laboratorium ini mendukung proyek interdisipliner seperti analisis sentimen teks bahasa daerah, klasifikasi citra medis, prediksi cuaca lokal, dan simulasi fisika kuantum.",
    ],
    features: [
      {
        title: "Lintas Disiplin Ilmu",
        desc: "Eksplorasi AI diterapkan di sains, bahasa, matematika, sosial, seni, dan bidang lain untuk membuka wawasan interdisipliner.",
      },
      {
        title: "Demokratisasi AI",
        desc: "Literasi AI dibuka untuk semua kalangan, bukan hanya engineer, tetapi juga pelajar, guru, peneliti, dan masyarakat umum.",
      },
      {
        title: "Lingkungan Terbimbing",
        desc: "Eksperimen berjalan dalam lingkungan aman dan terstruktur, dengan bimbingan mentor serta materi pembelajaran bertahap.",
      },
    ],
    steps: [
      {
        title: "Laboratorium AI untuk Semua",
        desc: "Akses terbuka bagi pelajar, peneliti, dan masyarakat, dengan pendampingan agar pemula tetap bisa memulai.",
      },
      {
        title: "Eksplorasi Tanpa Batas",
        desc: "Model bahasa, computer vision, dan analisis data dipakai untuk proyek lintas bidang, dari bahasa daerah hingga cuaca lokal.",
      },
      {
        title: "Mendemokratisasi Literasi AI",
        desc: "Akses ke perangkat, data, dan pengetahuan AI tanpa biaya tinggi, sebagai jembatan bagi talenta muda Indonesia.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Laboratorium Riset & Eksperimen AI" },
      { label: "Disiplin Ilmu", value: "Sains, Bahasa, Matematika, Sosial" },
      { label: "Fokus", value: "Demokratisasi Literasi AI" },
      { label: "Akses", value: "Terbimbing & Terstruktur" },
      { label: "Target", value: "Siswa, Peneliti, Masyarakat Umum" },
      { label: "Pilar", value: "Teknologi & Inovasi" },
    ],
  },
  {
    slug: "smart-energy",
    name: "ELFAN Smart Energy",
    category: "Efisiensi & Keberlanjutan",
    tagline: "Monitoring energi berbasis AI & IoT.",
    summary:
      "Pantau konsumsi listrik, hemat biaya energi, dan dukung keberlanjutan lingkungan dengan sistem cerdas.",
    cardDesc: "Monitoring konsumsi energi berbasis AI & IoT.",
    highlights: [],
    image: smartEnergyVisual,
    imageAlt: "Ilustrasi konsep ELFAN Smart Energy dengan meteran dan data konsumsi listrik",
    description: [
      "Elfan Smart Energy memantau konsumsi listrik lembaga secara cerdas dengan AI dan IoT, membantu menghemat biaya energi sekaligus mendukung keberlanjutan lingkungan.",
    ],
    features: [],
    steps: [],
    specs: [],
  },
  {
    slug: "smart-school",
    name: "Smart School / Boarding",
    category: "Teknologi & Inovasi",
    tagline: "Pembelajaran berbasis suara untuk asrama.",
    summary:
      "Voice assistant dan kontrol perangkat via perintah suara. Didesain untuk mengurangi ketergantungan pada layar.",
    cardDesc: "Pembelajaran berbasis suara dan voice assistant.",
    highlights: ["Input Suara", "Untuk Pesantren", "Voice + IoT"],
    relatedProgramSlugs: ["implementasi-elfan-system"],
    image: smartSchoolVisual,
    imageAlt: "Ilustrasi konsep Smart School dengan buku dan perintah suara",
    description: [
      "Smart School / Boarding adalah media pembelajaran berbasis suara (voice bot) yang memungkinkan kontrol perangkat ruangan dan akses materi interaktif melalui perintah suara. Produk ini didesain khusus untuk mengurangi ketergantungan pada layar, menjadikannya solusi untuk lingkungan asrama, pesantren, dan boarding school.",
      "Dengan voice bot, siswa cukup berbicara untuk mengakses materi pelajaran, mengerjakan kuis, atau mendengarkan penjelasan. Ini mengurangi ketergantungan pada smartphone dan laptop sekaligus menciptakan lingkungan belajar yang lebih sehat.",
      "Smart School juga berfungsi sebagai pusat kontrol ruangan. Siswa atau pengurus asrama dapat mengatur pencahayaan, suhu AC, jadwal bel otomatis, dan sistem keamanan melalui perintah suara.",
    ],
    features: [
      {
        title: "Voice Bot Interaktif",
        desc: "Siswa dapat berinteraksi dengan materi, bertanya, dan mendapatkan penjelasan hanya dengan suara, tanpa menyentuh layar.",
      },
      {
        title: "Kontrol Perangkat Suara",
        desc: "Atur pencahayaan, suhu ruangan, jadwal belajar, dan perangkat elektronik lain cukup dengan perintah suara.",
      },
      {
        title: "Ramah Layar",
        desc: "Didesain untuk mengurangi paparan layar, cocok untuk pesantren dan asrama yang membatasi penggunaan gadget.",
      },
    ],
    steps: [
      {
        title: "Pembelajaran Tanpa Layar",
        desc: "Materi, kuis, dan penjelasan diakses lewat suara, sehingga belajar tidak bergantung pada ponsel atau laptop.",
      },
      {
        title: "Kontrol Ruangan Cerdas",
        desc: "Pencahayaan, suhu, bel otomatis, dan keamanan ruangan diatur lewat satu antarmuka suara.",
      },
      {
        title: "Solusi untuk Pesantren",
        desc: "Materi kajian, hafalan, dan jadwal harian tetap diakses tanpa membuat santri terus menatap layar.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Media Pembelajaran Berbasis Suara" },
      { label: "Teknologi", value: "Voice bot & IoT" },
      { label: "Target", value: "Pesantren, asrama, boarding school" },
      { label: "Pilar", value: "Teknologi & Inovasi" },
    ],
  },
  {
    slug: "smart-safety",
    name: "Smart Safety",
    category: "Efisiensi & Keberlanjutan",
    tagline: "Sistem keamanan AI yang preventif.",
    summary:
      "CCTV AI dengan deteksi anomali real-time dan notifikasi cerdas. Bukan sekadar merekam, tapi mencegah.",
    cardDesc: "CCTV AI dengan deteksi bahaya dan notifikasi real-time.",
    highlights: ["Analisis Real-time", "Mode Preventif", "Notifikasi Multi-channel"],
    image: smartSafetyVisual,
    imageAlt: "Ilustrasi konsep Smart Safety dengan kamera, analisis, dan notifikasi",
    description: [
      "Smart Safety adalah sistem keamanan berbasis CCTV AI yang bersifat preventif, bukan sekadar merekam kejadian. Dengan kemampuan mendeteksi anomali secara real-time dan memberikan notifikasi cerdas, Smart Safety memungkinkan respon cepat sebelum insiden berkembang. Sistem ini cocok untuk lingkungan pendidikan, pesantren, dan perumahan.",
      "Smart Safety mengubah paradigma keamanan dari reaktif menjadi preventif. Sistem tidak hanya merekam, tetapi secara aktif menganalisis aliran video untuk mendeteksi potensi ancaman: orang yang berkeliaran di area terlarang, kendaraan mencurigakan, atau situasi darurat seperti kebakaran.",
      "Ketika anomali terdeteksi, Smart Safety langsung mengirim notifikasi lengkap dengan cuplikan video ke petugas keamanan. Tidak perlu memantau layar 24/7: sistem yang bekerja, manusia yang mengambil keputusan.",
    ],
    features: [
      {
        title: "Deteksi Anomali Real-time",
        desc: "AI menganalisis video secara langsung dan mendeteksi perilaku mencurigakan, objek tak dikenal, atau situasi darurat dalam hitungan detik.",
      },
      {
        title: "Notifikasi Cerdas",
        desc: "Peringatan dikirim otomatis ke petugas melalui WhatsApp, Telegram, atau aplikasi, lengkap dengan cuplikan kejadian.",
      },
      {
        title: "Preventif, Bukan Reaktif",
        desc: "Peringatan dini memungkinkan tindakan pencegahan dilakukan sebelum terjadi kerugian.",
      },
    ],
    steps: [
      {
        title: "Keamanan Preventif dengan AI",
        desc: "Aliran video dianalisis untuk mengenali potensi ancaman, bukan hanya menyimpan rekaman.",
      },
      {
        title: "Respon Cepat dengan Notifikasi",
        desc: "Petugas menerima peringatan beserta cuplikan video, sehingga keputusan bisa diambil lebih cepat.",
      },
      {
        title: "Solusi untuk Lingkungan Pendidikan",
        desc: "Sistem membedakan aktivitas belajar normal dari situasi yang perlu perhatian, dengan enkripsi data dan kebijakan akses.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Sistem Keamanan CCTV AI Preventif" },
      { label: "Teknologi", value: "AI Computer Vision" },
      { label: "Deteksi", value: "Anomali real-time" },
      { label: "Notifikasi", value: "WhatsApp, Telegram, aplikasi" },
      { label: "Target", value: "Pendidikan, pesantren, perumahan" },
      { label: "Pilar", value: "Efisiensi & Keberlanjutan" },
    ],
  },
  {
    slug: "smart-figura",
    name: "Smart Figura",
    category: "Teknologi & Inovasi",
    tagline: "Figura edukasi interaktif berbasis audio.",
    summary:
      "Tokoh virtual yang dapat berbicara dan menjelaskan materi sesuai tema. Media pembelajaran yang lebih hidup.",
    cardDesc: "Figura edukasi interaktif yang menjelaskan materi.",
    highlights: ["Audio AI", "Multi Tema", "Online & Offline"],
    relatedProgramSlugs: ["kelas-coding"],
    image: smartFiguraVisual,
    imageAlt: "Ilustrasi konsep Smart Figura dengan tokoh dan gelombang audio",
    description: [
      "Smart Figura adalah figura atau patung edukasi interaktif berbasis audio yang dapat berbicara sesuai tema. Figur pahlawan nasional dapat menceritakan kisah perjuangannya, atau figur ilmuwan menjelaskan teori fisika dengan suara alami dan interaktif.",
      "Smart Figura mengubah cara siswa berinteraksi dengan materi pelajaran. Dengan menempatkan figura tematik di ruang kelas atau museum, siswa dapat berdialog dengan tokoh sejarah, ilmuwan, atau figur agama. Pengalaman ini menciptakan koneksi emosional yang memperkuat retensi materi.",
      "Di balik Smart Figura terdapat sistem audio cerdas yang mampu merespons pertanyaan dan memberikan penjelasan kontekstual. Sistem ini dapat beroperasi secara offline, cocok untuk daerah dengan keterbatasan koneksi internet.",
    ],
    features: [
      {
        title: "Figura Interaktif",
        desc: "Patung edukasi yang dapat berbicara, menceritakan kisah, menjelaskan konsep, dan berinteraksi sesuai tema.",
      },
      {
        title: "Berbasis Audio",
        desc: "Menggunakan teknologi audio cerdas untuk menyampaikan materi secara alami, cocok untuk pembelajaran auditori.",
      },
      {
        title: "Multi-Tema",
        desc: "Dapat diprogram untuk sejarah, sains, agama, bahasa, dan budaya, sehingga satu figura jadi media serbaguna.",
      },
    ],
    steps: [
      {
        title: "Belajar dengan Tokoh Virtual",
        desc: "Figura tematik di kelas atau museum membuat siswa bisa berdialog dengan tokoh sejarah, ilmuwan, atau figur agama.",
      },
      {
        title: "Teknologi Audio Cerdas",
        desc: "Sistem audio merespons pertanyaan dan memberi penjelasan kontekstual, termasuk saat beroperasi offline.",
      },
      {
        title: "Media Edukasi Serbaguna",
        desc: "Satu figura bisa menyajikan materi sejarah, sains, dan Al-Qur'an pada waktu berbeda dengan tema yang diganti.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Figura Edukasi Interaktif Audio" },
      { label: "Teknologi", value: "Audio cerdas, dapat berjalan offline" },
      { label: "Tema", value: "Sejarah, sains, agama, bahasa, budaya" },
      { label: "Target", value: "Sekolah, museum, pesantren" },
      { label: "Pilar", value: "Teknologi & Inovasi" },
    ],
  },
  {
    slug: "smart-garden",
    name: "Smart Garden",
    category: "Efisiensi & Keberlanjutan",
    tagline: "Otomasi pertanian cerdas berbasis IoT & AI.",
    summary:
      "Sensor kelembapan tanah, kontrol irigasi otomatis, dan monitoring tanaman secara real-time.",
    cardDesc: "Otomasi kebun, sensor kelembapan, dan irigasi berbasis IoT.",
    highlights: ["Hemat Air 40%", "IoT + AI", "Untuk Urban Farming"],
    image: smartGardenVisual,
    imageAlt: "Ilustrasi konsep Smart Garden dengan sensor tanah dan irigasi",
    description: [
      "Smart Garden adalah sistem otomasi pertanian cerdas yang menggunakan IoT dan AI untuk penyiraman serta pemeliharaan tanah secara efisien. Dengan sensor kelembapan tanah, kontrol irigasi otomatis, dan monitoring tanaman real-time, Smart Garden memudahkan urban farming, pertanian sekolah, dan kebun komunitas.",
      "Sensor IoT yang tertanam di tanah memantau kelembapan, suhu, dan nutrisi tanah secara real-time. Data ini dipakai untuk mengatur irigasi otomatis yang presisi, menyiram tanaman tepat saat dibutuhkan dalam jumlah yang tepat.",
      "Smart Garden dapat menghemat penggunaan air hingga 40% dibandingkan penyiraman manual. Sistem belajar dari pola cuaca, jenis tanaman, dan kondisi tanah untuk menentukan jadwal irigasi paling efisien.",
    ],
    features: [
      {
        title: "Sensor Kelembapan Tanah",
        desc: "Memantau kelembapan tanah secara real-time dan mengatur irigasi hanya saat diperlukan, menghemat air hingga 40%.",
      },
      {
        title: "Kontrol Irigasi Otomatis",
        desc: "Penyiraman berjalan otomatis berdasarkan data sensor dan prakiraan cuaca, tanpa campur tangan manual.",
      },
      {
        title: "Monitoring Real-time",
        desc: "Kondisi tanaman, suhu, dan kelembapan dipantau dari mana saja melalui dashboard aplikasi.",
      },
    ],
    steps: [
      {
        title: "Bertani di Era Digital",
        desc: "Sensor di tanah mengirim data kelembapan, suhu, dan nutrisi, lalu irigasi menyesuaikan kebutuhan tanaman.",
      },
      {
        title: "Efisiensi Air & Energi",
        desc: "Jadwal irigasi mengikuti pola cuaca, jenis tanaman, dan kondisi tanah, sehingga pemborosan air berkurang.",
      },
      {
        title: "Urban Farming & Edukasi",
        desc: "Cocok untuk kebun perkotaan, pertanian sekolah, dan kebun komunitas sebagai pengenalan teknologi pertanian modern.",
      },
    ],
    specs: [
      { label: "Jenis", value: "Sistem Otomasi Pertanian Cerdas" },
      { label: "Teknologi", value: "IoT & AI" },
      { label: "Fitur Utama", value: "Irigasi otomatis, monitoring" },
      { label: "Hemat Air", value: "Hingga 40%" },
      { label: "Target", value: "Urban farm, sekolah, komunitas" },
      { label: "Pilar", value: "Efisiensi & Keberlanjutan" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
