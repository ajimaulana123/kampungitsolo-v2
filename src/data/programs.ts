import academyImg from "@/assets/about-class.jpg";
import communityImg from "@/assets/impact-team.jpg";
import seminarImg from "@/assets/impact-seminar.jpg";
import workshopImg from "@/assets/impact-umkm.jpg";
import bootcampImg from "@/assets/program-workshop.jpg";
import systemImg from "@/assets/hero-building.jpg";

export type ProgramBlock = { title: string; desc: string };
export type ProgramFaq = { q: string; a: string };

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  audience: string[];
  summary: string;
  cardDesc: string;
  description: string[];
  outcomes: string[];
  format: string;
  duration: string;
  location: string;
  schedule: string;
  price?: string;
  curriculum: ProgramBlock[];
  faqs: ProgramFaq[];
  relatedProductSlugs: string[];
  relatedStorySlugs?: string[];
  image: string;
  schemaType: "Service" | "Course";
  featured?: boolean;
  published: boolean;
};

export const programs: Program[] = [
  {
    slug: "desa-digital",
    name: "Pelatihan Desa Digital",
    shortName: "Desa Digital",
    audience: ["Pemerintah desa", "Karang taruna", "Pendamping desa"],
    summary:
      "Pendampingan untuk perangkat desa dan karang taruna agar administrasi, publikasi, dan layanan warga berjalan lebih tertata secara digital.",
    cardDesc: "Membangun kebiasaan kerja digital di kantor desa dan komunitas warga.",
    description: [
      "Pelatihan Desa Digital dirancang untuk perangkat desa dan karang taruna yang ingin memakai teknologi dalam pekerjaan sehari-hari. Fokusnya bukan sekadar mengenal aplikasi, tetapi membangun kebiasaan kerja yang lebih tertata: surat menyurat, arsip dokumen, pengumuman, dan publikasi kegiatan desa.",
      "Kami mulai dari pekerjaan yang paling dekat dengan peserta. Tim memetakan alur kerja yang sudah berjalan, menunjukkan bagian yang bisa disederhanakan, lalu melatih peserta memakai perangkat yang tersedia. Materi disesuaikan dengan kemampuan awal peserta, sehingga staf yang belum terbiasa memakai komputer tetap bisa mengikuti.",
      "Pelatihan dapat berlangsung di balai desa atau di Cemani, Grogol, Sukoharjo. Jumlah sesi, peserta, dan materi akhir disepakati bersama pemerintah desa. Kalau desa sudah punya sistem atau kebiasaan kerja tertentu, kami menyesuaikan pendampingan agar tidak memulai dari nol.",
      "Kami menyarankan desa memulai dari satu alur yang paling sering dipakai, misalnya penomoran surat atau arsip kegiatan. Setelah alur itu berjalan, kebiasaan lain bisa menyusul. Pendekatan bertahap ini lebih mudah dirawat daripada mengganti seluruh cara kerja sekaligus. Peserta juga diajak menyepakati siapa yang bertanggung jawab pada setiap langkah, agar pekerjaan tidak menumpuk pada satu orang. Kalau diperlukan, sesi lanjutan dapat dipakai untuk meninjau hasil dan memperbaiki alur yang belum nyaman dipakai.",
    ],
    outcomes: [
      "Peserta memahami alur kerja digital untuk surat, arsip, dan publikasi kegiatan.",
      "Perangkat desa punya kebiasaan menata dokumen dan informasi warga secara konsisten.",
      "Karang taruna mampu menyiapkan konten kegiatan desa dengan perangkat yang ada.",
      "Desa punya gambaran langkah digitalisasi berikutnya yang realistis.",
    ],
    format: "Pelatihan kelompok dan pendampingan",
    duration: "1 minggu",
    location: "Di lokasi desa atau Cemani, Grogol, Sukoharjo",
    schedule: "Jadwal disepakati bersama",
    curriculum: [
      {
        title: "Pemetaan pekerjaan desa",
        desc: "Melihat alur surat, arsip, pengumuman, dan publikasi yang sudah berjalan, lalu menentukan bagian yang paling perlu dibenahi.",
      },
      {
        title: "Dasar kerja digital",
        desc: "Latihan menata file, menulis dokumen, membuat arsip, dan menyiapkan informasi kegiatan dengan perangkat yang tersedia.",
      },
      {
        title: "Praktik bersama",
        desc: "Peserta mengerjakan contoh pekerjaan nyata dari kantor desa, bukan tugas simulasi yang jauh dari keseharian.",
      },
      {
        title: "Rencana tindak lanjut",
        desc: "Menutup pelatihan dengan daftar kebiasaan baru, pembagian peran, dan langkah berikutnya yang bisa dijalankan sendiri.",
      },
    ],
    faqs: [
      {
        q: "Apakah peserta harus punya komputer sendiri?",
        a: "Tidak. Pelatihan bisa memakai perangkat yang tersedia di kantor desa. Kalau peserta membawa laptop sendiri, materi praktik bisa disesuaikan dengan perangkat tersebut.",
      },
      {
        q: "Berapa lama pelatihannya?",
        a: "Durasi menyesuaikan ruang lingkup dan jumlah peserta. Tim akan menyusun jumlah sesi setelah memahami pekerjaan yang ingin dibenahi dan waktu yang tersedia di desa.",
      },
      {
        q: "Apakah bisa diikuti karang taruna saja?",
        a: "Bisa. Pelatihan dapat dirancang untuk perangkat desa, karang taruna, atau gabungan keduanya. Materi dan latihan akan disesuaikan dengan peran masing-masing kelompok.",
      },
      {
        q: "Apakah materi bisa menyesuaikan sistem desa?",
        a: "Ya. Kalau desa sudah memakai aplikasi atau format kerja tertentu, tim akan menyesuaikan pelatihan dengan sistem itu agar tidak terjadi duplikasi pekerjaan.",
      },
    ],
    relatedProductSlugs: ["elfan-system", "bookless-library"],
    relatedStorySlugs: ["desa-grogol-weru"],
    image: communityImg,
    schemaType: "Service",
    published: true,
  },
  {
    slug: "workshop-umkm",
    name: "Workshop Foto dan Video Produk UMKM",
    shortName: "Workshop UMKM",
    audience: ["UMKM", "Pelaku kuliner", "Pengrajin"],
    summary:
      "Workshop praktik untuk pelaku UMKM yang ingin membuat foto dan video produk lebih rapi dengan ponsel, tanpa studio dan peralatan mahal.",
    cardDesc: "Foto dan video produk yang layak tampil di marketplace, dibuat dengan ponsel.",
    description: [
      "Workshop Foto dan Video Produk UMKM membantu pelaku usaha kecil membuat visual produk yang lebih meyakinkan. Banyak UMKM sudah punya produk bagus, tetapi fotonya gelap, latarnya berantakan, atau tidak menunjukkan detail yang dicari pembeli. Workshop ini membenahi hal-hal sederhana yang memberi dampak besar.",
      "Peserta belajar memakai ponsel yang sudah dimiliki, memanfaatkan cahaya alami, menata latar sederhana, dan mengambil beberapa sudut foto yang diperlukan untuk katalog. Setelah foto, peserta berlatih merekam video pendek yang bisa dipakai untuk marketplace, media sosial, atau katalog WhatsApp.",
      "Materi disampaikan lewat praktik langsung. Peserta membawa produknya sendiri, lalu mengambil gambar, menerima masukan, dan mengulang pengambilan sampai hasilnya lebih rapi. Kalau diperlukan, workshop bisa dilanjutkan dengan pendampingan konten agar kebiasaan ini tetap berjalan setelah acara selesai.",
      "Workshop bisa diikuti perorangan maupun kelompok. Untuk kelompok, peserta didorong saling memberi masukan terhadap foto masing-masing, karena cara paling cepat memahami komposisi adalah melihat karya orang lain dan membandingkannya dengan brief yang sederhana. Setelah sesi, peserta dapat mengulang latihan dengan produk yang berbeda. Pendampingan lanjutan tersedia untuk kelompok yang ingin menjaga konsistensi foto dan video setelah workshop selesai.",
    ],
    outcomes: [
      "Peserta bisa mengambil foto produk yang terang, fokus, dan layak dipakai di katalog.",
      "Peserta memahami cara menata latar dan cahaya dengan alat sederhana.",
      "Peserta bisa merekam video pendek untuk memperkenalkan produk.",
      "Peserta tahu cara memilih foto utama dan menyusun urutan gambar agar produk mudah dipahami pembeli.",
      "Peserta punya daftar perlengkapan sederhana yang bisa disiapkan sebelum sesi foto berikutnya.",
    ],
    format: "Workshop praktik",
    duration: "1 minggu",
    location: "Cemani, Grogol, Sukoharjo atau lokasi mitra",
    schedule: "Menyesuaikan kebutuhan kelompok",
    curriculum: [
      {
        title: "Melihat foto produk",
        desc: "Membandingkan contoh foto yang sulit dibaca dengan foto yang jelas, lalu mengenali masalah sederhana yang sering muncul.",
      },
      {
        title: "Cahaya dan latar",
        desc: "Memanfaatkan cahaya alami dan bahan yang ada di sekitar untuk membuat produk terlihat lebih bersih dan terang.",
      },
      {
        title: "Praktik foto",
        desc: "Mengambil beberapa sudut foto untuk satu produk, memilih hasil terbaik, dan memberi masukan antar peserta.",
      },
      {
        title: "Video pendek",
        desc: "Merekam video singkat yang menunjukkan produk dan cara pakainya, lalu menyiapkan file agar mudah diunggah.",
      },
    ],
    faqs: [
      {
        q: "Apakah harus punya kamera profesional?",
        a: "Tidak. Workshop dirancang untuk ponsel. Yang dilatih adalah cara memakai cahaya, latar, dan sudut pengambilan, bukan membeli peralatan baru.",
      },
      {
        q: "Apakah peserta perlu bisa editing?",
        a: "Tidak wajib. Peserta akan mengenal pengaturan dasar dan pemotongan video sederhana. Kalau sudah punya aplikasi favorit, materi bisa disesuaikan.",
      },
      {
        q: "Berapa produk yang sebaiknya dibawa?",
        a: "Satu atau dua produk sudah cukup untuk praktik. Pilih produk yang paling sering dijual agar hasil latihan langsung bisa dipakai.",
      },
      {
        q: "Apakah bisa dilanjutkan dengan pendampingan?",
        a: "Bisa. Setelah workshop, kelompok dapat meminta pendampingan konten atau konsultasi kemasan visual sesuai kebutuhan usaha.",
      },
    ],
    relatedProductSlugs: ["elfan-ai-academy"],
    relatedStorySlugs: ["umkm-pasar-solo-raya"],
    image: workshopImg,
    schemaType: "Service",
    published: true,
  },
  {
    slug: "kelas-coding",
    name: "Kelas Coding Akhir Pekan",
    shortName: "Kelas Coding",
    audience: ["Pelajar SMK", "Pelajar", "Pemula"],
    summary:
      "Kelas coding akhir pekan untuk pelajar yang ingin belajar pemrograman web dari dasar, dengan latihan dan proyek kecil yang dikerjakan bersama.",
    cardDesc: "Belajar pemrograman web dari dasar lewat kelas mingguan yang terbuka untuk pelajar.",
    description: [
      "Kelas Coding Akhir Pekan adalah kelas mingguan untuk pelajar yang ingin mengenal pemrograman web. Peserta mulai dari dasar, memahami struktur halaman, menata tampilan, lalu menambahkan interaksi sederhana. Kelas ini terbuka untuk pelajar dari sekolah mana pun, bukan hanya dari satu institusi.",
      "Pendekatannya praktik. Setiap pertemuan memakai latihan kecil yang bisa diselesaikan di kelas, lalu dikembangkan menjadi proyek bersama. Peserta belajar membaca kode, mencoba, memperbaiki kesalahan, dan menjelaskan hasil kerjanya. Kemampuan itu lebih penting daripada menghafal sintaks.",
      "Kelas berjalan pada akhir pekan dengan jadwal per angkatan. Lulusan kelas dapat kembali membantu kelas berikutnya, sehingga belajar tidak berhenti saat materi selesai. Untuk peserta yang ingin melanjutkan ke topik yang lebih spesifik, tim dapat mengarahkan ke program atau produk belajar yang relevan.",
      "Kelas menjaga suasana belajar yang tidak menakutkan. Peserta boleh bertanya, salah, dan mengulang latihan tanpa harus merasa sudah tertinggal. Teman satu angkatan diajak saling memeriksa hasil, sehingga belajar coding juga melatih cara memberi dan menerima masukan. Kebiasaan ini berguna ketika peserta mengerjakan proyek yang lebih besar atau bekerja dalam tim.",
    ],
    outcomes: [
      "Peserta memahami dasar struktur halaman web dan cara menulis kode yang rapi.",
      "Peserta mampu membuat halaman sederhana dengan tampilan yang bisa dibaca di berbagai ukuran layar.",
      "Peserta terbiasa mencoba, membaca kesalahan, dan memperbaiki kode sendiri.",
      "Peserta punya kebiasaan mencatat langkah perbaikan saat kode tidak berjalan sesuai harapan.",
      "Peserta tahu cara mencari bantuan dan memeriksa jawaban sebelum menerapkannya.",
      "Peserta punya proyek kecil sebagai bukti belajar dan bahan untuk melanjutkan.",
      "Peserta berani mencoba proyek baru setelah kelas selesai.",
    ],
    format: "Kelas reguler",
    duration: "1 minggu intensif atau mingguan",
    location: "Cemani, Grogol, Sukoharjo",
    schedule: "Akhir pekan, jadwal per angkatan",
    curriculum: [
      {
        title: "Dasar halaman web",
        desc: "Mengenal struktur halaman, elemen teks, gambar, tautan, dan cara menyusun konten yang mudah dibaca.",
      },
      {
        title: "Tampilan dan tata letak",
        desc: "Berlatih menata warna, jarak, dan susunan elemen agar halaman nyaman dipakai di ponsel maupun desktop.",
      },
      {
        title: "Interaksi sederhana",
        desc: "Menambahkan respons terhadap klik atau input pengguna, lalu memahami alur logika di baliknya.",
      },
      {
        title: "Proyek akhir",
        desc: "Menggabungkan materi menjadi satu halaman atau aplikasi kecil, lalu mempresentasikan proses dan hasilnya.",
      },
    ],
    faqs: [
      {
        q: "Apakah harus sudah bisa coding?",
        a: "Tidak. Kelas dimulai dari dasar untuk pemula. Yang dibutuhkan adalah kemauan mencoba dan waktu untuk berlatih di antara pertemuan.",
      },
      {
        q: "Apakah perlu membawa laptop?",
        a: "Sebaiknya membawa laptop agar bisa langsung praktik. Kalau belum ada, tanyakan dulu ketersediaan perangkat saat mendaftar.",
      },
      {
        q: "Apakah kelas ini berbayar?",
        a: "Kelas coding akhir pekan termasuk kelas reguler yang terbuka. Ketentuan biaya dan kuota per angkatan dikonfirmasi saat pendaftaran.",
      },
      {
        q: "Apakah bisa diikuti pelajar dari sekolah lain?",
        a: "Bisa. Kelas ini terbuka untuk pelajar dari sekolah mana pun, selama mengikuti jadwal dan ketentuan angkatan yang sedang berjalan.",
      },
    ],
    relatedProductSlugs: ["elfan-ai-academy", "elfan-ai-lab"],
    relatedStorySlugs: ["komunitas-pelajar-smk"],
    image: academyImg,
    schemaType: "Course",
    published: true,
  },
  {
    slug: "literasi-digital",
    name: "Literasi Media dan Keamanan Digital",
    shortName: "Literasi Digital",
    audience: ["Karang taruna", "Pemuda desa", "Komunitas"],
    summary:
      "Sesi diskusi untuk pemuda dan komunitas tentang hoaks, jejak digital, etika bermedia sosial, dan kebiasaan aman memakai internet.",
    cardDesc: "Diskusi praktis tentang hoaks, jejak digital, dan etika bermedia sosial.",
    description: [
      "Literasi Media dan Keamanan Digital adalah sesi diskusi untuk pemuda, karang taruna, dan komunitas yang ingin lebih cermat memakai internet. Materi tidak berhenti pada daftar larangan. Peserta diajak membedah contoh nyata, memeriksa sumber, dan memikirkan dampak unggahan sebelum menekan tombol kirim.",
      "Sesi dimulai dari pengalaman peserta: grup WhatsApp yang ramai, tautan yang sulit dipastikan kebenarannya, atau komentar yang cepat menyebar. Dari situ, tim membahas cara memeriksa informasi, mengenali ciri hoaks, menjaga data pribadi, dan bersikap sopan di ruang digital.",
      "Formatnya bisa satu sesi diskusi atau beberapa pertemuan, tergantung kebutuhan kelompok. Untuk komunitas yang ingin melanjutkan, materi dapat diarahkan menjadi panduan internal atau kegiatan belajar bersama. Kami tidak memakai narasi menakut-nakuti, tetapi membangun kebiasaan yang bisa dijalankan sehari-hari.",
      "Diskusi dirancang sebagai ruang aman untuk bertanya. Peserta tidak diminta mengaku pernah menyebarkan hoaks, tetapi diajak memikirkan kebiasaan yang ingin diubah. Kalau kelompok sudah punya aturan komunikasi, sesi dapat memakai aturan itu sebagai bahan pembahasan. Pendekatan ini membuat materi lebih mudah diterima dan lebih mungkin diterapkan setelah sesi berakhir.",
    ],
    outcomes: [
      "Peserta bisa memeriksa sumber informasi sebelum meneruskan pesan.",
      "Peserta memahami risiko berbagi data pribadi dan jejak digital.",
      "Peserta punya kesepakatan sederhana tentang etika bermedia sosial.",
      "Peserta mampu menjelaskan alasan sebelum ikut menyebarkan informasi yang belum jelas sumbernya.",
      "Peserta tahu cara melaporkan atau menandai konten yang merugikan orang lain.",
      "Peserta tahu langkah yang bisa dilakukan saat menemukan hoaks atau konten berbahaya.",
      "Peserta punya rencana kebiasaan digital yang ingin dicoba setelah sesi.",
    ],
    format: "Sesi diskusi dan lokakarya",
    duration: "1 minggu",
    location: "Di lokasi mitra atau Cemani, Grogol, Sukoharjo",
    schedule: "Menyesuaikan kebutuhan kelompok",
    curriculum: [
      {
        title: "Mulai dari pengalaman",
        desc: "Mengumpulkan contoh pesan, unggahan, atau tautan yang pernah membuat peserta ragu, lalu membahasnya bersama.",
      },
      {
        title: "Memeriksa informasi",
        desc: "Membandingkan sumber, mengenali tanda hoaks, dan berlatih memeriksa sebelum meneruskan ke orang lain.",
      },
      {
        title: "Jejak dan data pribadi",
        desc: "Memahami informasi apa yang sebaiknya tidak dibagikan dan bagaimana jejak digital bisa bertahan lama.",
      },
      {
        title: "Kesepakatan komunitas",
        desc: "Menyusun aturan bersama yang sederhana untuk percakapan, unggahan, dan penyebaran informasi di komunitas.",
      },
    ],
    faqs: [
      {
        q: "Siapa yang bisa mengikuti sesi ini?",
        a: "Sesi dirancang untuk karang taruna, pemuda desa, komunitas, dan kelompok usia produktif. Materi dapat disesuaikan dengan latar belakang peserta.",
      },
      {
        q: "Apakah materinya agama atau politik?",
        a: "Bukan. Fokusnya keterampilan memeriksa informasi, menjaga data pribadi, dan beretika di ruang digital. Contoh yang dibahas dipilih agar relevan dengan kehidupan peserta.",
      },
      {
        q: "Apakah bisa digelar di desa kami?",
        a: "Bisa. Sesi dapat berlangsung di lokasi mitra atau di Cemani, Grogol, Sukoharjo. Waktu, jumlah peserta, dan kebutuhan ruang disepakati lebih dulu.",
      },
      {
        q: "Apakah ada tindak lanjut setelah sesi?",
        a: "Bisa disusun bersama. Kelompok dapat meminta panduan internal, sesi lanjutan, atau pendampingan untuk kegiatan literasi digital berikutnya.",
      },
    ],
    relatedProductSlugs: ["bookless-library", "elfan-ai-academy"],
    relatedStorySlugs: ["karang-taruna-pemuda-desa"],
    image: seminarImg,
    schemaType: "Service",
    published: true,
  },
  {
    slug: "bootcamp-ai-vibe-coding",
    name: "Bootcamp AI Vibe Coding",
    shortName: "Bootcamp AI",
    audience: ["Pemula", "Pelajar", "Umum"],
    summary:
      "Bootcamp 6 hari untuk pemula yang ingin membangun dan mendeploy portal berita CRUD dengan pendekatan vibe coding, dari dasar sampai proyek bisa diakses.",
    cardDesc: "Enam hari membangun dan mendeploy portal berita CRUD dengan bantuan AI.",
    description: [
      "Bootcamp AI Vibe Coding adalah program intensif enam hari untuk pemula yang ingin membuat aplikasi web nyata. Peserta membangun portal berita dengan operasi CRUD, yaitu membuat, membaca, memperbarui, dan menghapus konten. Pendekatan vibe coding memakai bantuan AI untuk mempercepat penulisan kode, tetapi tetap menuntut peserta memahami apa yang sedang dibangun.",
      "Materi dimulai dari gambaran aplikasi dan struktur data, lalu berlanjut ke halaman publik, pengelolaan konten, dan proses deploy. AI dipakai sebagai partner kerja: membantu menyusun potongan kode, menjelaskan kesalahan, dan menawarkan alternatif. Peserta dilatih memeriksa hasilnya, bukan menerima mentah-mentah.",
      "Bootcamp ini bukan program sertifikasi TUK. Fokusnya adalah hasil proyek yang bisa dilihat dan dipakai. Biaya program Rp 500.000, dengan jadwal per batch. Peserta yang belum punya pengalaman coding tetap bisa mengikuti karena alur dimulai dari dasar.",
      "Bootcamp cocok untuk peserta yang ingin melihat proses dari ide sampai aplikasi bisa diakses. Waktu belajar dipakai untuk membangun, mencoba, dan memperbaiki, bukan hanya menonton demonstrasi. Peserta perlu menyiapkan waktu untuk mengulang materi di luar sesi agar proyek akhir benar-benar selesai. AI membantu mempercepat pekerjaan, tetapi keputusan tentang isi dan kualitas aplikasi tetap berada di tangan peserta.",
    ],
    outcomes: [
      "Peserta memahami alur dasar aplikasi CRUD dan struktur data portal berita.",
      "Peserta membangun portal berita yang bisa menampilkan dan mengelola konten.",
      "Peserta bisa melakukan deploy aplikasi agar dapat diakses dari internet.",
      "Peserta memahami cara memakai AI secara kritis untuk menulis dan memeriksa kode.",
      "Peserta punya pengalaman mempresentasikan proyek dan menjelaskan keputusan teknis di dalamnya.",
      "Peserta tahu langkah memeriksa kode bantuan AI sebelum dipakai.",
    ],
    format: "Bootcamp intensif",
    duration: "1 minggu (6 hari)",
    location: "Lokasi dikonfirmasi saat pendaftaran",
    schedule: "Jadwal per batch",
    price: "Rp 500.000",
    curriculum: [
      {
        title: "Fondasi dan gambaran proyek",
        desc: "Mengenal aplikasi yang akan dibangun, menyiapkan alat kerja, dan memahami peran AI dalam alur vibe coding.",
      },
      {
        title: "Data dan CRUD",
        desc: "Merancang struktur berita, menghubungkan data, lalu membuat operasi untuk menambah, membaca, mengubah, dan menghapus konten.",
      },
      {
        title: "Halaman dan pengelolaan",
        desc: "Menyusun halaman publik serta area pengelolaan agar portal bisa dipakai dengan alur yang jelas.",
      },
      {
        title: "Deploy dan evaluasi",
        desc: "Menyiapkan aplikasi untuk diakses, menguji hasil, memperbaiki masalah, lalu mempresentasikan proyek akhir.",
      },
    ],
    faqs: [
      {
        q: "Apakah benar-benar untuk pemula?",
        a: "Ya. Alur dimulai dari dasar dan memakai AI untuk membantu memahami kode. Peserta tetap perlu mengikuti latihan dan memeriksa hasilnya.",
      },
      {
        q: "Apakah harus membawa laptop?",
        a: "Peserta perlu perangkat untuk praktik. Ketentuan perangkat dan persiapan lain akan diinformasikan saat pendaftaran.",
      },
      {
        q: "Apakah ini program sertifikasi TUK?",
        a: "Bukan. Bootcamp ini fokus pada pembangunan dan deploy proyek portal berita, bukan sertifikasi Tempat Uji Kompetensi.",
      },
      {
        q: "Berapa biaya dan bagaimana jadwalnya?",
        a: "Biaya program Rp 500.000. Bootcamp berjalan 6 hari dengan jadwal per batch. Tanggal dan lokasi batch berikutnya dikonfirmasi lewat WhatsApp.",
      },
    ],
    relatedProductSlugs: ["elfan-ai-academy", "elfan-system"],
    image: bootcampImg,
    schemaType: "Course",
    featured: true,
    published: true,
  },
  {
    slug: "implementasi-elfan-system",
    name: "Implementasi Elfan System",
    shortName: "Implementasi Elfan",
    audience: ["Pesantren", "Sekolah", "Masjid", "Pemerintah desa"],
    summary:
      "Pendampingan implementasi Elfan System, platform 16 modul untuk administrasi, pembelajaran, literasi, dan layanan lembaga.",
    cardDesc: "Pendampingan menata modul, data, dan kebiasaan kerja digital di lembaga.",
    description: [
      "Implementasi Elfan System membantu lembaga memakai platform 16 modul secara bertahap. Elfan System mencakup administrasi, pembelajaran, perpustakaan digital, komunikasi, dan layanan warga. Karena cakupannya luas, implementasi tidak dimulai dengan menyalakan semua modul sekaligus.",
      "Tim memetakan pekerjaan yang paling mendesak, memilih modul yang relevan, dan menyiapkan data awal bersama tim lembaga. Setelah itu, pengguna dilatih memakai alur kerja yang baru. Pendekatan ini membantu lembaga melihat manfaat lebih cepat tanpa membebani staf dengan terlalu banyak perubahan dalam satu waktu.",
      "Pendampingan dapat berlangsung di lembaga mitra dengan ruang lingkup yang disepakati. Kami tidak menjanjikan hasil instan. Keberhasilan implementasi bergantung pada kesiapan data, keterlibatan pengguna, dan kebiasaan kerja yang dibangun setelah pelatihan.",
      "Implementasi yang baik dimulai dari satu masalah yang disepakati, bukan dari daftar fitur. Setelah modul pertama dipakai, tim meninjau hambatan dan menyesuaikan pelatihan. Cara ini memberi ruang bagi lembaga untuk belajar tanpa harus menghentikan pekerjaan yang sedang berjalan. Kalau data belum siap, penyiapan data menjadi bagian dari ruang lingkup, bukan tugas tambahan yang dilepas begitu saja.",
    ],
    outcomes: [
      "Lembaga punya peta modul prioritas yang sesuai pekerjaan dan kesiapan tim.",
      "Data awal dan alur kerja utama disiapkan bersama pengguna.",
      "Staf memahami cara memakai modul yang dipilih dalam pekerjaan sehari-hari.",
      "Lembaga punya catatan hambatan dan keputusan yang bisa dipakai saat menambah modul berikutnya.",
      "Pengguna utama tahu ke mana harus bertanya ketika menemui masalah setelah pendampingan.",
      "Lembaga punya rencana lanjutan untuk menambah modul atau memperbaiki kebiasaan kerja.",
      "Lembaga punya titik awal yang jelas untuk implementasi berikutnya.",
    ],
    format: "Pendampingan implementasi",
    duration: "Pilot awal 1 minggu",
    location: "Di lembaga mitra",
    schedule: "Menyesuaikan kesiapan lembaga",
    curriculum: [
      {
        title: "Pemetaan kebutuhan",
        desc: "Melihat pekerjaan yang paling sering dilakukan, masalah yang ingin diselesaikan, dan modul yang paling relevan untuk tahap awal.",
      },
      {
        title: "Penyiapan data dan akses",
        desc: "Menata data awal, menentukan pengguna, dan menyiapkan hak akses agar pekerjaan berjalan dengan peran yang jelas.",
      },
      {
        title: "Pelatihan pengguna",
        desc: "Melatih staf memakai modul yang dipilih lewat contoh pekerjaan nyata, bukan hanya penjelasan fitur.",
      },
      {
        title: "Evaluasi dan lanjutan",
        desc: "Meninjau hambatan setelah pemakaian awal, memperbaiki alur, lalu menyusun rencana modul atau pelatihan berikutnya.",
      },
    ],
    faqs: [
      {
        q: "Apakah harus langsung memakai 16 modul?",
        a: "Tidak. Implementasi dimulai dari modul yang paling relevan dan siap dipakai lembaga. Modul lain dapat ditambahkan bertahap sesuai kebutuhan.",
      },
      {
        q: "Siapa yang perlu terlibat?",
        a: "Sebaiknya ada pemimpin lembaga, penanggung jawab data, dan pengguna utama dari bagian yang akan memakai modul. Keterlibatan mereka menentukan kelancaran implementasi.",
      },
      {
        q: "Berapa lama proses implementasinya?",
        a: "Durasi menyesuaikan jumlah modul, kesiapan data, dan jumlah pengguna. Ruang lingkup disepakati setelah pemetaan awal.",
      },
      {
        q: "Apakah bisa dimulai dari satu bagian saja?",
        a: "Bisa. Banyak lembaga memulai dari satu masalah utama, lalu menambah modul setelah alur dasarnya berjalan.",
      },
    ],
    relatedProductSlugs: ["elfan-system", "smart-school"],
    image: systemImg,
    schemaType: "Service",
    published: true,
  },
];

export const publishedPrograms = programs.filter((program) => program.published);

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
