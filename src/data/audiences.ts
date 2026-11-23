import classImg from "@/assets/about-class.jpg";
import communityImg from "@/assets/impact-team.jpg";
import umkmImg from "@/assets/impact-umkm.jpg";
import buildingImg from "@/assets/hero-building.jpg";

export type AudienceFaq = { q: string; a: string };

export type Audience = {
  slug: "pesantren" | "sekolah" | "desa" | "umkm";
  name: string;
  headline: string;
  summary: string;
  description: string[];
  painPoints: string[];
  recommendedProgramSlugs: string[];
  recommendedProductSlugs: string[];
  storySlugs: string[];
  faqs: AudienceFaq[];
  image: string;
  published: boolean;
};

export const audiences: Audience[] = [
  {
    slug: "sekolah",
    name: "Sekolah",
    headline: "Teknologi yang masuk akal untuk sekolah.",
    summary:
      "Solusi untuk sekolah yang ingin memperkuat literasi digital, kelas coding, dan pengelolaan pembelajaran tanpa menambah beban administratif guru.",
    description: [
      "Sekolah menghadapi banyak tuntutan sekaligus: mutu pembelajaran, administrasi, laporan, komunikasi dengan orang tua, dan pengenalan teknologi. Teknologi sering ditawarkan sebagai jawaban, tetapi kalau tidak dipilih dengan hati-hati, alat baru justru menambah pekerjaan.",
      "Kami mulai dari kebutuhan yang paling dekat dengan guru dan siswa. Untuk siswa, kelas coding dan literasi digital bisa menjadi ruang praktik yang melengkapi pembelajaran. Untuk guru, platform administrasi dan perpustakaan digital dapat membantu pekerjaan berulang tanpa mengambil alih keputusan pedagogis.",
      "Sekolah tidak harus memulai dari sistem besar. Satu kelas pilot, satu mata pelajaran, atau satu alur administrasi bisa menjadi titik awal. Setelah berjalan, baru pertimbangkan produk dan program lain yang relevan.",
    ],
    painPoints: [
      "Waktu guru habis untuk pekerjaan administratif yang berulang.",
      "Siswa butuh pengalaman teknologi yang terarah, bukan sekadar memakai gawai.",
      "Perpustakaan dan bahan belajar belum mudah diakses dari rumah.",
      "Sekolah belum punya alur yang jelas untuk merawat sistem digital.",
    ],
    recommendedProgramSlugs: [
      "kelas-coding",
      "bootcamp-ai-vibe-coding",
      "implementasi-elfan-system",
    ],
    recommendedProductSlugs: ["elfan-ai-academy", "elfan-system", "bookless-library"],
    storySlugs: ["komunitas-pelajar-smk"],
    faqs: [
      {
        q: "Apakah sekolah harus punya laboratorium komputer?",
        a: "Tidak harus langsung. Kelas bisa dimulai dengan perangkat yang tersedia, lalu disesuaikan dengan kondisi laboratorium atau laptop siswa.",
      },
      {
        q: "Bisakah mulai dari satu kelas atau satu guru dulu?",
        a: "Bisa. Pilot kecil sering lebih aman. Setelah alurnya jelas, sekolah dapat memperluas ke kelas atau mata pelajaran lain.",
      },
      {
        q: "Apakah guru juga mendapat pelatihan?",
        a: "Bisa. Untuk implementasi sistem, pelatihan pengguna dan pendampingan awal menjadi bagian dari ruang lingkup yang disepakati.",
      },
    ],
    image: classImg,
    published: true,
  },
  {
    slug: "desa",
    name: "Desa",
    headline: "Layanan desa yang lebih tertata.",
    summary:
      "Pendampingan untuk perangkat desa dan komunitas yang ingin merapikan administrasi, publikasi, dan literasi digital tanpa memulai dari sistem yang rumit.",
    description: [
      "Pekerjaan desa berjalan dari banyak sumber: surat, arsip, data warga, pengumuman, dan kegiatan komunitas. Ketika semuanya tersebar, informasi mudah hilang dan pekerjaan menumpuk pada satu atau dua orang.",
      "Digitalisasi desa yang berhasil biasanya dimulai dari satu alur yang paling mengganggu. Kami membantu memetakan pekerjaan, merapikan data, dan melatih staf memakai perangkat yang tersedia. Tidak semua masalah harus diselesaikan dengan aplikasi baru.",
      "Karang taruna dan komunitas juga bisa dilibatkan. Literasi digital dan kebiasaan publikasi yang rapi membantu desa menyampaikan informasi tanpa menambah beban perangkat desa.",
    ],
    painPoints: [
      "Surat dan arsip sulit ditemukan saat dibutuhkan.",
      "Data warga tersebar di beberapa buku dan berkas digital.",
      "Publikasi kegiatan desa sering dikerjakan mendadak.",
      "Karang taruna butuh arahan tentang informasi yang aman dibagikan.",
    ],
    recommendedProgramSlugs: ["desa-digital", "literasi-digital"],
    recommendedProductSlugs: ["elfan-system", "bookless-library"],
    storySlugs: ["desa-grogol-weru", "karang-taruna-pemuda-desa"],
    faqs: [
      {
        q: "Apakah desa harus membeli sistem baru?",
        a: "Tidak selalu. Pendampingan bisa dimulai dari perbaikan alur dan kebiasaan kerja. Kalau sistem dibutuhkan, pilihannya disesuaikan dengan kondisi desa.",
      },
      {
        q: "Siapa yang perlu ikut pelatihan?",
        a: "Sebaiknya perangkat desa yang memakai alur tersebut setiap hari. Karang taruna bisa ikut pada bagian publikasi dan literasi digital.",
      },
      {
        q: "Berapa lama pendampingannya?",
        a: "Durasi menyesuaikan ruang lingkup, jumlah peserta, dan alur yang ingin dibenahi. Jadwal disepakati bersama.",
      },
    ],
    image: communityImg,
    published: true,
  },
  {
    slug: "umkm",
    name: "UMKM",
    headline: "Produk bagus layak terlihat bagus.",
    summary:
      "Workshop praktik untuk pelaku UMKM yang ingin membuat foto dan video produk lebih rapi dengan ponsel, tanpa studio dan peralatan mahal.",
    description: [
      "Banyak UMKM sudah punya produk yang layak dijual, tetapi tampilannya di marketplace belum meyakinkan. Foto gelap, latar berantakan, dan sudut pengambilan yang monoton membuat produk sulit dibedakan dari penjual lain.",
      "Workshop kami berfokus pada hal yang bisa segera dipraktikkan: memakai cahaya alami, menata latar sederhana, mengambil beberapa sudut foto, dan merekam video pendek. Peserta membawa produknya sendiri dan langsung mencoba.",
      "Setelah workshop, pelaku UMKM bisa melanjutkan dengan pendampingan konten atau belajar literasi digital dasar. Tujuannya bukan membuat semua orang menjadi fotografer, tetapi memberi bekal yang cukup untuk tampil lebih baik secara konsisten.",
    ],
    painPoints: [
      "Foto produk gelap atau tidak menunjukkan detail yang dicari pembeli.",
      "Pelaku usaha belum punya panduan mengambil foto dengan ponsel.",
      "Video produk terasa sulit karena dianggap butuh peralatan mahal.",
      "Konten katalog dan media sosial belum konsisten.",
    ],
    recommendedProgramSlugs: ["workshop-umkm"],
    recommendedProductSlugs: ["elfan-ai-academy"],
    storySlugs: ["umkm-pasar-solo-raya"],
    faqs: [
      {
        q: "Apakah harus punya kamera profesional?",
        a: "Tidak. Workshop dirancang untuk ponsel. Yang dilatih adalah cahaya, latar, dan sudut pengambilan, bukan membeli peralatan baru.",
      },
      {
        q: "Apakah peserta perlu bisa editing?",
        a: "Tidak wajib. Peserta mengenal pengaturan dasar dan pemotongan video sederhana. Materi bisa disesuaikan dengan aplikasi yang biasa dipakai.",
      },
      {
        q: "Bisakah workshop diadakan di lokasi kami?",
        a: "Bisa, selama lokasi dan jadwal disepakati. Workshop juga bisa berlangsung di Cemani, Grogol, Sukoharjo.",
      },
    ],
    image: umkmImg,
    published: true,
  },
  {
    slug: "pesantren",
    name: "Pesantren",
    headline: "Digitalisasi yang menjaga adab.",
    summary:
      "Pendampingan untuk pesantren yang ingin menata administrasi, pembelajaran, perpustakaan, dan literasi digital tanpa kehilangan nilai pendidikan.",
    description: [
      "Pesantren punya kebutuhan digital yang tidak selalu sama dengan sekolah umum. Administrasi, pembelajaran, perpustakaan, komunikasi wali santri, dan kegiatan keagamaan berjalan dalam satu lingkungan yang padat.",
      "Kami memandang teknologi sebagai alat bantu, bukan pengganti guru atau pengasuh. Implementasi dimulai dari satu masalah yang disepakati, lalu disertai aturan penggunaan, pelatihan, dan pendampingan agar staf bisa merawatnya sendiri.",
      "Halaman ini masih disiapkan karena kami belum memiliki cerita pesantren yang boleh dipublikasikan sebagai bukti. Kami tidak ingin menampilkan studi kasus yang tidak nyata. Silakan hubungi tim untuk mendiskusikan kebutuhan pesantren Anda.",
    ],
    painPoints: [
      "Administrasi dan data santri tersebar di banyak berkas.",
      "Guru dan pengasuh belum punya panduan memakai AI secara aman.",
      "Perpustakaan digital belum terhubung dengan kebiasaan belajar santri.",
      "Komunikasi dengan wali santri menumpuk pada satu kanal.",
    ],
    recommendedProgramSlugs: ["implementasi-elfan-system", "literasi-digital"],
    recommendedProductSlugs: ["elfan-system", "bookless-library", "smart-school"],
    storySlugs: [],
    faqs: [
      {
        q: "Apakah pesantren harus memakai semua modul?",
        a: "Tidak. Implementasi dimulai dari modul yang paling relevan dan siap dipakai, lalu ditambah bertahap.",
      },
      {
        q: "Bagaimana dengan data santri?",
        a: "Data pribadi harus dibatasi aksesnya. Penggunaan AI untuk data sensitif tidak disarankan tanpa aturan dan sistem yang jelas.",
      },
      {
        q: "Apakah bisa dimulai dari literasi AI untuk guru?",
        a: "Bisa. Sesi literasi AI untuk guru dan pengasuh dapat menjadi langkah awal sebelum implementasi sistem yang lebih besar.",
      },
    ],
    image: buildingImg,
    published: false,
  },
];

export const publishedAudiences = audiences.filter((audience) => audience.published);

export function getAudience(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}
