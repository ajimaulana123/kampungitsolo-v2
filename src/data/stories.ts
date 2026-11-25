import systemTrainingImg from "@/assets/system/system-training.jpg";
import systemHandoverImg from "@/assets/system/system-handover.jpg";
import academyLabImg from "@/assets/academy/academy-lab.jpg";
import academyClassImg from "@/assets/academy/academy-class.jpg";
import academyBootcampImg from "@/assets/academy/academy-bootcamp.jpg";

export type StoryImage = { src: string; alt: string };
export type StoryQuote = { text: string; name: string; role: string; organization: string };

export type Story = {
  slug: string;
  client: string;
  sector: string;
  programSlug: string;
  year: string;
  title: string;
  summary: string;
  cardDesc: string;
  challenge: string[];
  approach: string[];
  result: string[];
  quote?: StoryQuote;
  images: StoryImage[];
  permission: "granted" | "pending";
  published: boolean;
};

export const stories: Story[] = [
  {
    slug: "desa-grogol-weru",
    client: "Desa Grogol, Weru, Sukoharjo",
    sector: "Pemerintah desa",
    programSlug: "desa-digital",
    year: "2024",
    title: "Menata kerja digital Desa Grogol",
    summary:
      "Perangkat desa dan karang taruna Desa Grogol belajar menata surat, arsip, dan publikasi kegiatan agar pekerjaan warga lebih rapi dan mudah dicari.",
    cardDesc: "Surat, arsip, dan publikasi desa mulai ditata dalam kebiasaan kerja digital.",
    challenge: [
      "Pekerjaan kantor desa berjalan dari banyak sumber: surat masuk, arsip kegiatan, pengumuman warga, dan dokumentasi program. Ketika semuanya tersebar di berkas fisik, grup percakapan, dan folder yang berbeda, informasi mudah hilang atau tertukar.",
      "Perangkat desa dan karang taruna di Desa Grogol menghadapi masalah yang sama. Mereka ingin bekerja lebih rapi, tetapi belum punya alur yang disepakati bersama. Perangkat yang tersedia juga belum dipakai secara konsisten.",
    ],
    approach: [
      "Pelatihan dimulai dari pekerjaan yang paling dekat: menata surat, memberi nama file, menyimpan arsip, dan menyiapkan publikasi kegiatan. Tim memetakan alur yang sudah berjalan, lalu menunjukkan bagian yang bisa disederhanakan tanpa mengubah seluruh kebiasaan kantor.",
      "Peserta berlatih dengan contoh pekerjaan desa. Perangkat desa fokus pada dokumen dan arsip, sementara karang taruna berlatih menyiapkan informasi kegiatan. Pendampingan menekankan kebiasaan yang bisa diteruskan setelah pelatihan, bukan ketergantungan pada satu orang.",
    ],
    result: [
      "Desa Grogol mulai memiliki cara kerja yang lebih tertata untuk surat, arsip, dan publikasi kegiatan. Informasi yang dibutuhkan warga lebih mudah ditemukan, dan pekerjaan yang berulang bisa diselesaikan dengan alur yang jelas.",
      "Yang lebih penting, peserta memahami langkah berikutnya. Mereka tidak hanya tahu cara memakai perangkat, tetapi punya gambaran kebiasaan kerja yang perlu dijaga agar hasilnya bertahan.",
    ],
    images: [
      {
        src: systemHandoverImg,
        alt: "Pendampingan penggunaan perangkat digital bersama peserta",
      },
      {
        src: systemTrainingImg,
        alt: "Peserta menggunakan laptop dalam kegiatan pendampingan digital",
      },
    ],
    quote: {
      text: "Dulu arsip dan pengumuman warga tersebar di berkas fisik dan grup chat. Setelah pendampingan dari tim Kampung IT Solo, alur kerja digital desa jadi tertata rapi dan layanan surat-menyurat warga jauh lebih cepat.",
      name: "Perangkat Desa & Pegiat Komunitas",
      role: "Mitra Pelatihan Desa Digital",
      organization: "Sukoharjo",
    },
    permission: "granted",
    published: true,
  },
  {
    slug: "umkm-pasar-solo-raya",
    client: "UMKM Pasar Solo Raya",
    sector: "UMKM",
    programSlug: "workshop-umkm",
    year: "2023-2024",
    title: "Foto produk dari ponsel untuk UMKM",
    summary:
      "Belasan pelaku UMKM kuliner dan kerajinan belajar membuat foto dan video produk yang lebih layak tampil di marketplace hanya dengan ponsel.",
    cardDesc: "Belasan pelaku UMKM belajar foto dan video produk dengan ponsel.",
    challenge: [
      "Banyak pelaku UMKM sudah punya produk yang layak dijual, tetapi tampilannya di marketplace belum meyakinkan. Foto gelap, latar berantakan, dan sudut pengambilan yang monoton membuat produk sulit dibedakan dari penjual lain.",
      "Mereka sering menganggap masalahnya adalah kamera. Padahal, ponsel yang sudah dipakai sehari-hari bisa menghasilkan foto yang jauh lebih baik kalau cahaya, latar, dan sudut pengambilan ditata dengan benar.",
    ],
    approach: [
      "Workshop dimulai dengan membandingkan contoh foto produk yang sulit dibaca dan yang lebih jelas. Peserta lalu belajar memakai cahaya alami, menata latar sederhana, dan mengambil beberapa sudut foto untuk satu produk.",
      "Setelah foto, peserta berlatih merekam video pendek yang menunjukkan produk dan cara pakainya. Mereka membawa produk sendiri, mengambil gambar di tempat, menerima masukan, lalu mengulang sampai hasilnya lebih rapi.",
    ],
    result: [
      "Belasan pelaku UMKM kuliner dan kerajinan menghasilkan foto dan video produk yang lebih layak dipakai di marketplace. Mereka juga mendapat panduan sederhana yang bisa diulang untuk produk berikutnya.",
      "Perubahan kecil pada cahaya dan latar memberi dampak yang terlihat. Peserta tidak perlu membeli studio untuk mulai menampilkan produknya dengan lebih baik.",
    ],
    images: [
      {
        src: academyClassImg,
        alt: "Peserta mengikuti pelatihan dengan laptop di Kampung IT Solo",
      },
      {
        src: systemTrainingImg,
        alt: "Pendampingan penggunaan laptop dalam kegiatan pelatihan",
      },
    ],
    permission: "granted",
    published: true,
  },
  {
    slug: "komunitas-pelajar-smk",
    client: "Komunitas Pelajar SMK",
    sector: "Pendidikan",
    programSlug: "kelas-coding",
    year: "Berjalan",
    title: "Kelas coding yang diisi ulang alumninya",
    summary:
      "Kelas coding akhir pekan terbuka untuk pelajar SMK dari berbagai sekolah. Lulusan kelas kembali membantu angkatan berikutnya agar belajar terus berjalan.",
    cardDesc: "Kelas coding akhir pekan yang terbuka dan diisi ulang oleh alumninya.",
    challenge: [
      "Pelajar SMK sering tertarik pada pemrograman, tetapi tidak selalu punya ruang untuk berlatih bersama. Materi di sekolah bisa padat, sementara belajar sendiri di rumah mudah berhenti ketika menemui kesalahan pertama.",
      "Kelas coding akhir pekan dibuka untuk pelajar dari sekolah mana pun. Tujuannya bukan menggantikan pelajaran sekolah, tetapi memberi ruang praktik yang teratur dan teman belajar yang bisa saling membantu.",
    ],
    approach: [
      "Setiap pertemuan memakai latihan kecil yang bisa diselesaikan di kelas. Peserta belajar membaca kode, mencoba, memperbaiki kesalahan, dan menjelaskan hasil kerjanya. Materi berjalan dari dasar halaman web sampai proyek kecil yang dikerjakan bersama.",
      "Kelas tidak berhenti pada satu angkatan. Lulusan kelas kembali membantu kelas berikutnya. Cara ini membuat alumnus menguji pemahamannya sendiri sekaligus menjaga kelas tetap berjalan ketika peserta baru datang.",
    ],
    result: [
      "Komunitas pelajar SMK punya kelas coding mingguan yang terbuka dan berkelanjutan. Peserta mendapatkan pengalaman membuat halaman web, bekerja bersama, dan mempresentasikan hasil belajar.",
      "Siklus alumnus yang mengajar ulang membuat kelas tidak bergantung pada satu pengajar. Pelajar yang pernah belajar di kelas yang sama bisa menjadi penghubung bagi angkatan berikutnya.",
    ],
    images: [
      {
        src: academyLabImg,
        alt: "Peserta belajar pemrograman dengan laptop di laboratorium komputer",
      },
      {
        src: academyClassImg,
        alt: "Peserta mengikuti kelas coding bersama di Kampung IT Solo",
      },
    ],
    permission: "granted",
    published: true,
  },
  {
    slug: "karang-taruna-pemuda-desa",
    client: "Karang Taruna dan Pemuda Desa",
    sector: "Komunitas",
    programSlug: "literasi-digital",
    year: "2023",
    title: "Literasi media untuk pemuda desa",
    summary:
      "Sesi diskusi keliling tentang hoaks, jejak digital, dan etika bermedia sosial untuk pemuda di beberapa kelurahan di Solo Raya.",
    cardDesc: "Diskusi keliling tentang hoaks, jejak digital, dan etika bermedia sosial.",
    challenge: [
      "Pemuda desa hidup dengan arus informasi yang cepat. Grup percakapan dan media sosial menjadi sumber berita, tetapi juga tempat hoaks dan provokasi menyebar. Tidak semua orang punya kebiasaan memeriksa sumber sebelum meneruskan pesan.",
      "Karang taruna dan pemuda desa membutuhkan ruang untuk membahas pengalaman itu tanpa merasa digurui. Materi yang terlalu teoretis mudah dilupakan, sementara larangan tanpa penjelasan tidak mengubah kebiasaan.",
    ],
    approach: [
      "Sesi dimulai dari contoh yang dekat dengan peserta: pesan berantai, tautan yang tidak jelas, atau unggahan yang memicu perdebatan. Dari situ, tim membahas cara memeriksa informasi, mengenali ciri hoaks, menjaga data pribadi, dan bersikap sopan di ruang digital.",
      "Diskusi digelar keliling di beberapa kelurahan agar peserta bisa bertemu di lingkungannya sendiri. Setiap sesi menyesuaikan contoh dan kebutuhan kelompok, lalu ditutup dengan kesepakatan sederhana yang bisa dijalankan bersama.",
    ],
    result: [
      "Peserta punya kebiasaan yang lebih cermat sebelum meneruskan informasi. Mereka mengenali ciri hoaks, memahami risiko jejak digital, dan tahu langkah yang bisa dilakukan saat menemukan konten berbahaya.",
      "Yang terbangun bukan hanya pengetahuan, tetapi kesepakatan komunitas tentang cara bermedia sosial. Kesepakatan itu membantu pemuda desa menjaga percakapan tetap sehat di ruang digital.",
    ],
    images: [
      {
        src: academyBootcampImg,
        alt: "Sesi literasi digital bersama peserta di ruang kelas",
      },
      {
        src: academyClassImg,
        alt: "Peserta mengikuti diskusi belajar di Kampung IT Solo",
      },
    ],
    permission: "granted",
    published: true,
  },
  {
    slug: "pesantren-idbc-adab-it",
    client: "IDBC (Islamic Digital Boarding College)",
    sector: "Pesantren",
    programSlug: "literasi-digital",
    year: "2024",
    title: "Membina talenta IT beradab di pesantren",
    summary:
      "Penerapan kurikulum teknologi dan adab digital santri IDBC berbasis platform literasi Al-Kubro dan perpustakaan Elfan Bookless Library.",
    cardDesc: "Pengembangan talenta teknologi santri yang selaras dengan adab dan kemandirian.",
    challenge: [
      "Pesantren ingin mengenalkan teknologi dan pemanfaatan AI kepada santri tanpa mengurangi kekhidmatan belajar agama dan tradisi adab.",
      "Tantangan utamanya adalah menyaring arus informasi, mengamankan akses perangkat, dan memastikan pembelajaran IT melahirkan santri yang mandiri.",
    ],
    approach: [
      "Mengintegrasikan platform perpustakaan digital Al-Kubro dan Elfan Bookless Library sebagai pusat referensi digital Islam yang terkurasi.",
      "Melatih santri keterampilan praktis seperti multimedia, pengelolaan data, dan dasar pemrograman dengan pendampingan langsung berlandaskan etika digital.",
    ],
    result: [
      "Santri mampu memanfaatkan perangkat digital secara terarah untuk riset literatur dan pembuatan karya digital yang bermanfaat.",
      "Pesantren memiliki model pembelajaran IT yang mandiri dan selaras dengan nilai-nilai Qur'ani serta tradisi kepesantrenan.",
    ],
    images: [
      {
        src: academyClassImg,
        alt: "Santri mengikuti sesi belajar teknologi dengan laptop",
      },
      {
        src: academyBootcampImg,
        alt: "Pemateri menyampaikan materi kepada santri di ruang kelas",
      },
    ],
    quote: {
      text: "Santri tidak hanya belajar ilmu agama, tapi di sini dilatih memahami kecerdasan buatan (AI) dan teknologi terapan dengan adab yang tetap terjaga. Ini bekal kemandirian nyata untuk generasi santri.",
      name: "Pembina Santri",
      role: "Pengasuh & Instruktur",
      organization: "IDBC & Elfan AI Academy",
    },
    permission: "granted",
    published: true,
  },
];

export const publishedStories = stories.filter(
  (story) => story.published && story.permission === "granted",
);

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
