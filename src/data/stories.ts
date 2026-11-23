import communityImg from "@/assets/impact-team.jpg";
import umkmImg from "@/assets/impact-umkm.jpg";
import classroomImg from "@/assets/about-class.jpg";
import seminarImg from "@/assets/impact-seminar.jpg";
import workshopImg from "@/assets/program-workshop.jpg";

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
      { src: communityImg, alt: "Kegiatan pelatihan bersama warga desa" },
      { src: classroomImg, alt: "Peserta mengikuti sesi belajar di Kampung IT Solo" },
    ],
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
      { src: umkmImg, alt: "Pendampingan foto produk untuk UMKM Solo Raya" },
      { src: workshopImg, alt: "Peserta workshop mempraktikkan pengambilan gambar produk" },
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
      { src: classroomImg, alt: "Kelas pemrograman untuk pelajar SMK" },
      { src: communityImg, alt: "Peserta belajar bersama di Kampung IT Solo" },
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
      { src: seminarImg, alt: "Kegiatan literasi digital bersama warga" },
      { src: communityImg, alt: "Diskusi komunitas pemuda di Kampung IT Solo" },
    ],
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
