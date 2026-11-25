import codingClassImg from "@/assets/academy/academy-lab.jpg";
import pesantrenClassImg from "@/assets/academy/academy-bootcamp.jpg";
import solarPanelsImg from "@/assets/solar/solar-panels.jpg";
import digitalisasiDesaImg from "@/assets/system/system-training.jpg";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type ArticleAuthor = { name: string; role: string };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  updated?: string;
  author: ArticleAuthor;
  category: string;
  readingTime: string;
  heroImage: { src: string; alt: string };
  blocks: ArticleBlock[];
  relatedProductSlugs?: string[];
  relatedProgramSlugs?: string[];
  relatedStorySlugs?: string[];
  featured?: boolean;
  published: boolean;
};

export const articles: Article[] = [
  {
    slug: "kursus-coding-untuk-anak-di-solo",
    title: "Kursus coding untuk anak di Solo: mulai dari mana?",
    seoTitle: "Kursus Coding Anak di Solo",
    description:
      "Panduan memilih kursus coding untuk anak di Solo: mengenali minat, memilih proyek kecil, dan menilai kelas yang sehat tanpa memaksakan target.",
    date: "2026-11-23",
    updated: "2026-11-23",
    author: { name: "Tim Kampung IT Solo", role: "Tim editorial" },
    category: "Pendidikan",
    readingTime: "7 menit",
    heroImage: {
      src: codingClassImg,
      alt: "Peserta kelas menggunakan laptop di laboratorium komputer Kampung IT Solo",
    },
    blocks: [
      {
        type: "paragraph",
        text: "Banyak orang tua di Solo mulai mencari kursus coding ketika melihat teknologi masuk ke hampir semua pekerjaan. Pertanyaannya kemudian bukan lagi apakah anak perlu mengenal coding, tetapi kapan dan bagaimana memulainya. Jawabannya tidak selalu dimulai dari bahasa pemrograman yang rumit.",
      },
      {
        type: "paragraph",
        text: "Anak yang baru mengenal coding lebih mudah bertahan kalau rasa ingin tahunya dijaga. Kelas yang baik membuat anak mencoba, salah, memperbaiki, dan melihat hasil kerjanya sendiri. Nilai utamanya bukan hafalan sintaks, melainkan kebiasaan berpikir runtut dan keberanian mencoba.",
      },
      { type: "heading", text: "Mulai dari minat, bukan dari daftar bahasa" },
      {
        type: "paragraph",
        text: "Sebelum memilih kelas, perhatikan hal yang sudah membuat anak penasaran. Ada anak yang suka membuat cerita, ada yang suka permainan, ada yang suka menggambar, dan ada yang suka membongkar cara kerja sesuatu. Minat itu bisa menjadi pintu masuk yang jauh lebih kuat daripada memilih bahasa pemrograman yang sedang populer.",
      },
      {
        type: "list",
        items: [
          "Anak yang suka bercerita bisa mulai dari animasi atau permainan sederhana.",
          "Anak yang suka menggambar bisa mulai dari membuat halaman web dengan warna dan tata letak sendiri.",
          "Anak yang suka teka-teki bisa mulai dari logika, pola, dan permainan berbasis aturan.",
        ],
      },
      {
        type: "paragraph",
        text: "Tujuannya bukan mengejar proyek besar, tetapi membuat anak merasakan bahwa ide yang ada di kepalanya bisa diwujudkan sedikit demi sedikit. Kalau minatnya sudah terlihat, barulah orang tua mempertimbangkan bahasa dan alat yang sesuai.",
      },
      { type: "heading", text: "Pilih proyek kecil yang bisa diselesaikan" },
      {
        type: "paragraph",
        text: "Proyek pertama tidak perlu berupa aplikasi lengkap. Proyek yang terlalu besar sering membuat anak berhenti di tengah jalan karena hasilnya belum terlihat. Lebih baik memilih satu halaman sederhana, satu permainan kecil, atau satu animasi pendek yang bisa selesai dalam beberapa pertemuan.",
      },
      {
        type: "list",
        items: [
          "Halaman profil dengan foto, teks, dan tombol sederhana.",
          "Permainan tebak angka atau kuis dengan beberapa pertanyaan.",
          "Animasi cerita pendek yang menampilkan gambar dan teks bergantian.",
        ],
      },
      {
        type: "paragraph",
        text: "Setelah proyek pertama selesai, anak punya bukti bahwa ia bisa membuat sesuatu. Pengalaman itu lebih penting daripada sertifikat. Dari situ, proyek berikutnya bisa sedikit lebih besar tanpa membuat anak merasa kewalahan.",
      },
      { type: "heading", text: "Kenali format belajar yang cocok" },
      {
        type: "paragraph",
        text: "Kelas coding tersedia dalam berbagai format: kelompok, privat, online, offline, atau campuran. Tidak ada format yang selalu paling baik. Yang menentukan adalah kebutuhan anak, jarak rumah, waktu orang tua, dan kenyamanan anak belajar bersama orang lain.",
      },
      {
        type: "list",
        items: [
          "Kelas kelompok cocok untuk anak yang senang berdiskusi dan belajar dari teman.",
          "Kelas privat cocok untuk anak yang butuh perhatian lebih atau jadwal yang fleksibel.",
          "Kelas online cocok kalau perjalanan menjadi hambatan, tetapi tetap perlu pendampingan orang tua.",
        ],
      },
      {
        type: "paragraph",
        text: "Untuk anak yang baru mulai, kelas dengan kelompok kecil biasanya lebih nyaman. Anak masih bisa bertanya tanpa merasa tenggelam, dan pengajar masih sempat melihat kesalahan yang perlu dibenahi.",
      },
      { type: "heading", text: "Bahasa pemrograman bukan tujuan utama" },
      {
        type: "paragraph",
        text: "Orang tua sering bertanya apakah anak harus mulai dari Scratch, Python, atau JavaScript. Pertanyaan itu terlalu awal. Yang lebih penting adalah apakah alat yang dipakai membuat anak bisa melihat hasil dengan cepat dan memahami alasan di balik setiap langkah.",
      },
      {
        type: "paragraph",
        text: "Untuk pemula, alat visual bisa membantu memahami urutan dan logika tanpa harus menghafal banyak aturan penulisan. Setelah anak nyaman, teks kode bisa diperkenalkan sedikit demi sedikit. Perpindahan bahasa akan lebih mudah kalau fondasi berpikirnya sudah terbentuk.",
      },
      { type: "heading", text: "Ciri kelas coding yang sehat" },
      {
        type: "paragraph",
        text: "Orang tua tidak perlu memahami semua kode untuk menilai sebuah kelas. Ada tanda-tanda sederhana yang bisa dilihat dari cerita anak setelah kelas, hasil karya, dan cara pengajar berkomunikasi.",
      },
      {
        type: "list",
        items: [
          "Anak bisa menjelaskan apa yang dibuatnya, bukan hanya menunjukkan layar.",
          "Pengajar memberi waktu untuk mencoba dan memperbaiki kesalahan.",
          "Materi berjalan bertahap, tanpa melompat ke proyek yang terlalu rumit.",
          "Anak punya hasil karya yang bisa dibuka dan diceritakan kembali di rumah.",
          "Kelas tidak hanya menyalin kode dari contoh tanpa penjelasan.",
        ],
      },
      {
        type: "paragraph",
        text: "Kalau anak hanya menghafal langkah tanpa memahami alasannya, hasilnya mudah hilang. Kelas yang sehat membuat anak bisa mengulang proses serupa dengan ide yang berbeda.",
      },
      { type: "heading", text: "Peran orang tua di rumah" },
      {
        type: "paragraph",
        text: "Orang tua tidak harus menguasai coding. Yang lebih membantu adalah menyediakan waktu, ruang, dan rasa aman untuk mencoba. Tanyakan apa yang sedang dibuat, bagian mana yang sulit, dan apa yang ingin dicoba berikutnya.",
      },
      {
        type: "list",
        items: [
          "Beri waktu latihan yang cukup, tetapi jangan memaksakan target setiap hari.",
          "Hargai proses mencoba, bukan hanya hasil akhir yang rapi.",
          "Hindari membandingkan kecepatan anak dengan teman atau saudaranya.",
          "Batasi waktu layar dan pastikan anak tetap bergerak, membaca, dan bermain.",
        ],
      },
      {
        type: "paragraph",
        text: "Anak yang merasa boleh salah biasanya lebih berani bereksperimen. Sebaliknya, anak yang takut dimarahi karena kodenya error bisa berhenti mencoba dan hanya menunggu jawaban.",
      },
      { type: "heading", text: "Kapan sebaiknya mulai?" },
      {
        type: "paragraph",
        text: "Tidak ada satu usia yang berlaku untuk semua anak. Sebagian anak sudah nyaman membaca instruksi sederhana dan mengetik saat usia sekolah dasar. Sebagian lain lebih siap setelah lebih besar karena kemampuan membaca dan fokusnya sudah lebih matang.",
      },
      {
        type: "paragraph",
        text: "Yang lebih penting adalah kesiapan belajar: anak bisa mengikuti beberapa langkah, mau mencoba, dan tidak mudah menyerah saat hasilnya belum sesuai. Kalau anak belum siap, mulailah dari permainan logika atau kegiatan membuat cerita digital sebelum masuk ke kelas coding formal.",
      },
      { type: "heading", text: "Langkah pertama di Solo" },
      {
        type: "paragraph",
        text: "Mulai dari satu kelas percobaan atau satu proyek kecil. Lihat apakah anak nyaman dengan pengajarnya, apakah materinya bisa diikuti, dan apakah ia ingin kembali. Setelah itu, baru tentukan jadwal yang realistis untuk beberapa bulan ke depan.",
      },
      {
        type: "paragraph",
        text: "Kampung IT Solo membuka Kelas Coding Akhir Pekan untuk pelajar yang ingin mengenal pemrograman web dari dasar. Kelas berjalan pada akhir pekan, memakai latihan kecil, dan diarahkan pada proyek yang bisa diselesaikan. Kalau Anda ingin melihat kesesuaiannya, mulailah dari halaman program dan diskusikan kebutuhan anak Anda dengan tim.",
      },
    ],
    relatedProgramSlugs: ["kelas-coding"],
    relatedProductSlugs: ["elfan-ai-academy", "elfan-ai-lab"],
    relatedStorySlugs: ["komunitas-pelajar-smk"],
    featured: true,
    published: true,
  },
  {
    slug: "ai-untuk-pesantren",
    title: "AI untuk pesantren: lima cara yang realistis",
    seoTitle: "AI untuk Pesantren",
    description:
      "Lima cara realistis memakai AI di pesantren, dari administrasi dan materi ajar sampai literasi santri, tanpa menggantikan peran guru.",
    date: "2026-11-23",
    updated: "2026-11-23",
    author: { name: "Tim Kampung IT Solo", role: "Tim editorial" },
    category: "Teknologi",
    readingTime: "8 menit",
    heroImage: {
      src: pesantrenClassImg,
      alt: "Pemateri menyampaikan materi kepada santri di ruang kelas",
    },
    blocks: [
      {
        type: "paragraph",
        text: "AI sering masuk ke percakapan pesantren lewat dua cara: sebagai janji efisiensi yang besar, atau sebagai ancaman yang harus dijauhi. Keduanya terlalu cepat. Yang lebih berguna adalah melihat pekerjaan sehari-hari di pesantren dan menanyakan bagian mana yang benar-benar bisa dibantu tanpa mengubah nilai dasar pendidikan.",
      },
      {
        type: "paragraph",
        text: "AI bukan pengganti guru, pengasuh, atau pimpinan pesantren. Posisinya lebih tepat sebagai alat bantu untuk pekerjaan yang berulang, pencarian referensi, dan penyusunan bahan. Keputusan akhir tetap berada pada manusia yang memahami konteks santri dan kebijakan pesantren.",
      },
      { type: "heading", text: "Satu: merapikan administrasi dan surat" },
      {
        type: "paragraph",
        text: "Pekerjaan administrasi sering menghabiskan waktu: menyusun surat, membuat rekap, menata jadwal, dan merangkum catatan rapat. AI bisa membantu membuat draf awal, merapikan bahasa, atau mengubah catatan acak menjadi poin yang lebih teratur. Staf tetap perlu memeriksa nama, tanggal, nomor surat, dan data yang dipakai.",
      },
      {
        type: "paragraph",
        text: "Mulailah dari satu jenis dokumen yang paling sering dibuat. Buat contoh format yang baku, lalu gunakan AI untuk mengisi bagian yang berulang. Simpan hasilnya di tempat yang bisa diakses staf lain agar tidak terjadi duplikasi. Kebiasaan kecil ini lebih berguna daripada mencoba mengotomatiskan seluruh administrasi sekaligus.",
      },
      { type: "heading", text: "Dua: membantu guru menyiapkan materi" },
      {
        type: "paragraph",
        text: "Guru bisa memakai AI untuk membuat variasi soal, menyusun kerangka materi, atau mencari analogi yang lebih dekat dengan kehidupan santri. Namun materi tetap harus diperiksa. AI bisa menghasilkan penjelasan yang terdengar meyakinkan tetapi keliru, terutama untuk materi keagamaan, sejarah, dan hukum.",
      },
      {
        type: "paragraph",
        text: "Cara yang aman adalah menjadikan AI sebagai pembuat draf, bukan sumber akhir. Guru menuliskan tujuan pembelajaran, meminta beberapa alternatif, lalu memilih dan memperbaiki sendiri. Semua referensi harus dicek ke sumber yang jelas. Kalau tidak ada waktu untuk memeriksa, lebih baik tidak memakai hasilnya.",
      },
      { type: "heading", text: "Tiga: memperluas akses perpustakaan dan referensi" },
      {
        type: "paragraph",
        text: "Pesantren sering punya koleksi buku yang berharga, tetapi aksesnya terbatas pada jam tertentu atau katalog yang belum rapi. Sistem perpustakaan digital bisa membantu santri menemukan bahan bacaan, sementara AI dapat dipakai untuk memberi rekomendasi awal berdasarkan minat dan topik.",
      },
      {
        type: "paragraph",
        text: "Yang perlu dijaga adalah kualitas sumber. Rekomendasi AI tidak boleh dianggap sebagai rujukan kitab atau buku tertentu tanpa pengecekan. Pilih sistem yang memungkinkan pengelola pesantren mengatur koleksi, hak akses, dan deskripsi bahan. Teknologi seharusnya memperkuat koleksi yang sudah dimiliki, bukan menggantinya dengan jawaban instan yang tidak jelas asalnya.",
      },
      { type: "heading", text: "Empat: membangun literasi AI untuk santri" },
      {
        type: "paragraph",
        text: "Santri akan memakai AI, baik di pesantren maupun setelah pulang. Karena itu, literasi AI lebih penting daripada sekadar melarang. Santri perlu tahu cara memeriksa jawaban, mengenali sumber yang lemah, menjaga data pribadi, dan memahami batas penggunaan AI dalam tugas.",
      },
      {
        type: "list",
        items: [
          "Ajarkan santri menuliskan pertanyaan yang jelas dan memeriksa ulang jawabannya.",
          "Biasakan membandingkan jawaban AI dengan buku, guru, atau sumber resmi.",
          "Bahas dampak berbagi data pribadi ke layanan AI.",
          "Buat aturan bersama tentang penggunaan AI dalam tugas dan karya tulis.",
        ],
      },
      {
        type: "paragraph",
        text: "Pendekatan ini tidak membutuhkan laboratorium mahal. Yang dibutuhkan adalah contoh nyata, diskusi, dan kesepakatan yang dijalankan konsisten oleh guru dan pengasuh.",
      },
      { type: "heading", text: "Lima: memperbaiki komunikasi dengan wali santri" },
      {
        type: "paragraph",
        text: "Pertanyaan wali santri sering berulang: jadwal, izin, kegiatan, dan informasi pembayaran. AI bisa membantu menyusun draf jawaban yang lebih rapi atau merangkum pertanyaan yang sering muncul. Namun data pribadi santri tidak boleh dimasukkan ke layanan publik sembarangan.",
      },
      {
        type: "paragraph",
        text: "Lebih aman memakai AI untuk membuat template komunikasi, bukan untuk memproses data sensitif. Pesantren tetap perlu punya kanal resmi, penanggung jawab, dan arsip percakapan. Kalau volume komunikasi sudah besar, pertimbangkan sistem yang memang dirancang untuk mengelola data lembaga, bukan sekadar chatbot umum.",
      },
      {
        type: "paragraph",
        text: "Sebelum memilih layanan AI, pesantren perlu menuliskan aturan sederhana: data apa yang tidak boleh diunggah, siapa yang boleh memakai akun, dan bagaimana hasil diperiksa. Aturan ini tidak harus panjang. Yang penting disepakati, mudah diingat, dan dijalankan oleh pengguna. Tanpa aturan, percobaan kecil bisa membuka risiko yang tidak disadari. Aturan yang jelas membuat percobaan tetap terkendali dan mudah dihentikan jika ada masalah.",
      },
      { type: "heading", text: "Contoh alur percobaan yang aman" },
      {
        type: "paragraph",
        text: "Pilih satu unit atau satu bagian kerja, misalnya pembuatan surat undangan kegiatan. Tetapkan satu orang penanggung jawab, satu contoh format, dan satu cara memeriksa hasil. Batasi percobaan pada pekerjaan yang tidak memuat data pribadi sensitif.",
      },
      {
        type: "list",
        items: [
          "Tuliskan jenis dokumen dan data yang boleh dipakai.",
          "Buat draf dengan AI, lalu periksa nama, tanggal, dan nomor surat.",
          "Simpan hasil akhir di tempat yang disepakati.",
          "Catat masalah yang muncul agar bisa diperbaiki pada percobaan berikutnya.",
        ],
      },
      {
        type: "paragraph",
        text: "Setelah satu alur berjalan, baru tambahkan pekerjaan lain. Pesantren bisa memulai dari administrasi, lalu materi ajar, lalu literasi santri. Urutan ini tidak harus sama untuk semua lembaga. Yang penting, setiap langkah punya penanggung jawab dan batas penggunaan yang jelas.",
      },
      { type: "heading", text: "Mulai dari satu masalah, bukan dari daftar fitur" },
      {
        type: "paragraph",
        text: "Jangan mulai dengan pertanyaan “AI apa yang bisa dipakai”. Mulailah dari pekerjaan yang paling sering menyita waktu dan paling jelas hasilnya. Setelah satu alur berjalan, baru tambahkan penggunaan lain. Cara ini lebih mudah dirawat dan lebih kecil risikonya.",
      },
      {
        type: "paragraph",
        text: "Kampung IT Solo mendampingi lembaga yang ingin menata langkah ini lewat program Implementasi Elfan System dan Literasi Media serta Keamanan Digital. Fokusnya bukan mengejar teknologi terbaru, tetapi memilih alat, aturan, dan kebiasaan yang bisa dijalankan oleh tim pesantren sendiri.",
      },
    ],
    relatedProgramSlugs: ["implementasi-elfan-system", "literasi-digital"],
    relatedProductSlugs: ["elfan-system", "bookless-library"],
    published: true,
  },
  {
    slug: "plts-untuk-sekolah",
    title: "PLTS untuk sekolah: menghitung kebutuhan dan penghematan",
    seoTitle: "PLTS untuk Sekolah",
    description:
      "Panduan menghitung kebutuhan PLTS untuk sekolah: membaca tagihan listrik, profil beban siang, komponen sistem, dan penghematan secara konservatif.",
    date: "2026-11-23",
    updated: "2026-11-23",
    author: { name: "Tim Kampung IT Solo", role: "Tim editorial" },
    category: "Energi",
    readingTime: "9 menit",
    heroImage: {
      src: solarPanelsImg,
      alt: "Panel surya terpasang di atas atap gedung",
    },
    blocks: [
      {
        type: "paragraph",
        text: "Pembangkit listrik tenaga surya untuk sekolah bukan pembelian alat yang bisa diputuskan hanya dari brosur. Ukuran sistem, biaya, dan penghematan bergantung pada pola pemakaian listrik sekolah. Sekolah yang memakai listrik terutama pada siang hari punya pola berbeda dari sekolah yang banyak memakai listrik pada malam hari.",
      },
      {
        type: "paragraph",
        text: "Panduan ini membahas langkah awal yang bisa dilakukan pengelola sekolah sebelum meminta penawaran. Tujuannya bukan memberi angka pasti, tetapi membantu sekolah membaca data sendiri dan mengajukan pertanyaan yang lebih baik kepada penyedia.",
      },
      { type: "heading", text: "Mulai dari tagihan listrik, bukan dari harga panel" },
      {
        type: "paragraph",
        text: "Kumpulkan tagihan listrik beberapa bulan terakhir. Lihat pemakaian dalam kWh, bukan hanya jumlah rupiah yang dibayar. Tagihan yang naik turun bisa menunjukkan musim atau kegiatan tertentu, misalnya ujian, libur, atau penggunaan ruang ber-AC.",
      },
      {
        type: "paragraph",
        text: "Catat juga peralatan yang paling banyak memakai listrik: pendingin ruangan, lampu, komputer, pompa air, atau peralatan laboratorium. Tanpa data ini, ukuran sistem mudah terlalu besar atau terlalu kecil. Sistem yang terlalu besar berarti biaya awal berlebih, sedangkan sistem yang terlalu kecil tidak memberi manfaat sesuai harapan.",
      },
      { type: "heading", text: "Hitung kebutuhan dasar" },
      {
        type: "paragraph",
        text: "Cara paling sederhana adalah menghitung energi harian dari peralatan utama. Kalikan daya peralatan dalam watt dengan perkiraan jam pemakaian, lalu bagi dengan seribu untuk mendapatkan kWh. Ulangi untuk beberapa peralatan penting, lalu jumlahkan.",
      },
      {
        type: "list",
        items: [
          "Daya alat dalam watt dikali jam pemakaian menghasilkan watt-jam.",
          "Bagi hasilnya dengan 1.000 untuk mendapatkan kWh.",
          "Jumlahkan kWh peralatan yang benar-benar ingin dibantu oleh PLTS.",
          "Sisakan ruang untuk variasi cuaca dan kebutuhan cadangan.",
        ],
      },
      {
        type: "paragraph",
        text: "Perhitungan ini belum menggantikan kajian teknis. Namun angka awal tersebut membantu sekolah memahami skala sistem yang dibicarakan. Jangan langsung menerima klaim “cukup untuk seluruh sekolah” tanpa melihat data pemakaian dan profil beban.",
      },
      { type: "heading", text: "Perhatikan profil beban siang" },
      {
        type: "paragraph",
        text: "Panel surya menghasilkan listrik saat ada cahaya matahari. Karena itu, sekolah perlu melihat berapa besar pemakaian listrik pada siang hari. Kalau kegiatan utama sekolah berlangsung pagi sampai sore, energi surya bisa dipakai langsung untuk mengurangi pembelian listrik pada periode tersebut.",
      },
      {
        type: "paragraph",
        text: "Kalau pemakaian terbesar justru malam hari, sistem perlu baterai atau strategi lain yang menambah biaya. Diskusikan pola ini dengan penyedia. Jangan menganggap semua kWh yang dihasilkan panel otomatis mengurangi tagihan pada jam yang sama.",
      },
      { type: "heading", text: "Kenali komponen dan batas sistem" },
      {
        type: "paragraph",
        text: "Sistem PLTS biasanya terdiri dari panel, inverter, struktur pemasangan, kabel, proteksi, dan monitoring. Setiap komponen punya batas kemampuan. Atap yang teduh, ruang pemasangan yang terbatas, atau kondisi jaringan listrik sekolah bisa memengaruhi desain.",
      },
      {
        type: "list",
        items: [
          "Pastikan struktur atap kuat dan aman untuk pemasangan.",
          "Tanyakan jenis inverter, proteksi, dan prosedur pemeliharaan.",
          "Minta penjelasan tentang garansi komponen dan layanan purna jual.",
          "Pastikan instalasi dilakukan oleh pihak yang memahami keselamatan kelistrikan.",
        ],
      },
      {
        type: "paragraph",
        text: "Harga murah tanpa kejelasan komponen dan garansi bisa menjadi mahal dalam jangka panjang. Sekolah perlu melihat rekam jejak penyedia, bukan hanya angka penawaran.",
      },
      { type: "heading", text: "Hitung penghematan secara konservatif" },
      {
        type: "paragraph",
        text: "Penghematan tidak sama dengan seluruh tagihan listrik. Hitung hanya bagian pemakaian yang benar-benar bisa digantikan oleh produksi PLTS. Pertimbangkan juga biaya pemeliharaan, penggantian komponen, dan penurunan produksi saat cuaca buruk.",
      },
      {
        type: "paragraph",
        text: "Buat tiga skenario: konservatif, sedang, dan optimistis. Gunakan skenario konservatif untuk mengambil keputusan. Kalau penawaran hanya menampilkan skenario terbaik tanpa menjelaskan asumsinya, mintalah rincian. Penghematan yang dijanjikan tanpa data pemakaian sekolah sebaiknya tidak dijadikan dasar keputusan.",
      },
      { type: "heading", text: "Contoh lembar kerja sederhana" },
      {
        type: "paragraph",
        text: "Buat tabel dengan kolom nama alat, daya dalam watt, jumlah unit, jam pemakaian per hari, dan kWh per hari. Isi hanya peralatan yang ingin dibantu PLTS. Contohnya, jika satu ruang memakai beberapa lampu, jumlahkan daya seluruh lampu di ruang itu sebelum dikalikan jam pemakaian.",
      },
      {
        type: "list",
        items: [
          "Nama peralatan dan jumlah unit.",
          "Daya per unit dalam watt.",
          "Perkiraan jam pemakaian pada siang hari.",
          "Hasil kWh harian dan totalnya.",
        ],
      },
      {
        type: "paragraph",
        text: "Lembar kerja ini membantu sekolah melihat asumsi yang dipakai. Kalau angka berubah, hasilnya bisa dihitung ulang. Jangan mencampur pemakaian siang dan malam dalam satu angka tanpa penjelasan, karena keduanya punya arti berbeda untuk desain PLTS.",
      },
      {
        type: "paragraph",
        text: "Mintalah penyedia menunjukkan asumsi yang mereka pakai dan bagian mana yang belum dihitung. Sekolah yang memahami lembar kerjanya sendiri lebih sulit dipengaruhi oleh klaim penghematan yang tidak jelas dasarnya.",
      },
      {
        type: "paragraph",
        text: "Jangan lupa memasukkan biaya pembersihan panel, pemeriksaan kabel, dan penggantian komponen ke dalam perhitungan. Biaya ini tidak sebesar tagihan listrik, tetapi tetap memengaruhi manfaat jangka panjang. Sekolah juga perlu menyiapkan orang yang bertanggung jawab melihat monitoring dan mencatat gangguan. Kalau tidak ada penanggung jawab, masalah kecil bisa terlambat diketahui. Mintalah contoh laporan monitoring dan jelaskan siapa yang akan membacanya setiap bulan. Laporan sederhana ini membantu sekolah melihat apakah sistem benar-benar bekerja sesuai perkiraan, tanpa harus menunggu tagihan listrik berikutnya. Laporan itu juga menjadi bahan evaluasi.",
      },
      { type: "heading", text: "Langkah pengadaan yang lebih aman" },
      {
        type: "paragraph",
        text: "Setelah data terkumpul, minta beberapa penawaran dengan ruang lingkup yang sama. Bandingkan kapasitas, komponen, garansi, waktu pemasangan, dan layanan setelah pemasangan. Libatkan pihak yang bertanggung jawab atas gedung dan kelistrikan sekolah sejak awal.",
      },
      {
        type: "paragraph",
        text: "Kampung IT Solo menyediakan solusi ELFAN Solar Energi H melalui kerja sama dengan PT Ufuk Hijau Energi. Untuk sekolah yang ingin mengevaluasi kebutuhan, mulailah dari data tagihan dan profil pemakaian. Diskusi yang baik akan membahas batas sistem, bukan hanya janji penghematan.",
      },
    ],
    relatedProductSlugs: ["solar-energi"],
    published: true,
  },
  {
    slug: "digitalisasi-desa",
    title: "Digitalisasi desa: langkah awal untuk perangkat desa",
    seoTitle: "Digitalisasi Desa",
    description:
      "Langkah awal digitalisasi desa untuk perangkat desa: memilih pekerjaan prioritas, merapikan data, menentukan peran, dan menjaga keamanan.",
    date: "2026-11-23",
    updated: "2026-11-23",
    author: { name: "Tim Kampung IT Solo", role: "Tim editorial" },
    category: "Desa",
    readingTime: "8 menit",
    heroImage: {
      src: digitalisasiDesaImg,
      alt: "Pendampingan penggunaan laptop dalam kegiatan digitalisasi desa",
    },
    blocks: [
      {
        type: "paragraph",
        text: "Digitalisasi desa sering dimulai dari pembelian aplikasi atau pembuatan website. Padahal masalah yang paling sering dirasakan perangkat desa bukan kekurangan alat, melainkan pekerjaan yang tersebar, data yang sulit dicari, dan kebiasaan kerja yang belum disepakati.",
      },
      {
        type: "paragraph",
        text: "Langkah awal yang lebih aman adalah membenahi satu alur kerja yang paling mengganggu. Setelah alur itu berjalan, kebiasaan lain bisa menyusul. Pendekatan bertahap ini lebih mudah dirawat daripada mengganti seluruh cara kerja kantor desa sekaligus.",
      },
      { type: "heading", text: "Pilih satu pekerjaan yang paling mengganggu" },
      {
        type: "paragraph",
        text: "Kumpulkan keluhan yang paling sering muncul di kantor desa. Mungkin surat sulit dicari, data warga tersebar di beberapa buku, jadwal kegiatan sering berubah, atau publikasi desa selalu dikerjakan mendadak. Pilih satu masalah yang dampaknya terasa dan bisa diselesaikan dalam waktu yang masuk akal.",
      },
      {
        type: "paragraph",
        text: "Jangan memilih masalah karena tampilannya paling menarik. Pilih yang benar-benar menghambat pekerjaan. Kalau surat menyurat adalah masalah utama, mulailah dari penomoran, arsip, dan pencarian surat. Kalau publikasi yang paling sering tertunda, mulailah dari alur pengumpulan foto dan informasi kegiatan.",
      },
      { type: "heading", text: "Rapikan data sebelum memilih aplikasi" },
      {
        type: "paragraph",
        text: "Aplikasi tidak bisa memperbaiki data yang berantakan. Sebelum memilih alat, sepakati nama file, format tanggal, dan tempat penyimpanan. Tentukan data mana yang boleh diakses semua staf dan data mana yang hanya boleh diakses penanggung jawab.",
      },
      {
        type: "list",
        items: [
          "Gunakan nama file yang konsisten dan mudah dicari.",
          "Pisahkan dokumen aktif, arsip, dan berkas sementara.",
          "Tentukan satu tempat penyimpanan utama agar tidak ada versi ganda.",
          "Catat siapa yang bertanggung jawab memperbarui setiap data.",
        ],
      },
      {
        type: "paragraph",
        text: "Pekerjaan ini terlihat sederhana, tetapi sering menjadi fondasi yang menentukan. Tanpa data yang rapi, sistem baru hanya memindahkan kekacauan ke layar yang lebih modern.",
      },
      { type: "heading", text: "Tentukan peran dan alur persetujuan" },
      {
        type: "paragraph",
        text: "Digitalisasi bukan hanya soal perangkat. Setiap alur perlu punya pemilik, batas waktu, dan aturan persetujuan. Misalnya, siapa yang menyiapkan draf surat, siapa yang memeriksa, dan siapa yang menandatangani. Tanpa pembagian peran, pekerjaan digital mudah menumpuk pada satu orang.",
      },
      {
        type: "paragraph",
        text: "Buat alur sederhana yang bisa dijelaskan dalam satu halaman. Uji alur itu dengan satu jenis surat atau satu kegiatan. Setelah berjalan, baru perluas ke jenis pekerjaan lain. Alur yang terlalu rumit sejak awal biasanya ditinggalkan setelah beberapa minggu.",
      },
      { type: "heading", text: "Pilih alat yang sederhana dan bisa dirawat" },
      {
        type: "paragraph",
        text: "Alat yang baik adalah alat yang bisa dipakai staf setiap hari, bukan yang fiturnya paling banyak. Pertimbangkan kemampuan perangkat, kualitas internet, dan waktu pelatihan yang tersedia. Kalau staf belum terbiasa memakai komputer, aplikasi dengan banyak menu akan menambah beban.",
      },
      {
        type: "paragraph",
        text: "Tanyakan juga siapa yang akan merawat sistem setelah pelatihan. Apakah ada staf yang ditunjuk, atau desa akan bergantung pada pihak luar untuk perubahan kecil? Sistem yang tidak bisa dirawat akan berhenti dipakai ketika masalah pertama muncul.",
      },
      { type: "heading", text: "Latih staf dan dampingi setelah pelatihan" },
      {
        type: "paragraph",
        text: "Pelatihan satu hari tidak cukup untuk mengubah kebiasaan. Setelah pelatihan, perlu ada pendampingan singkat untuk melihat hambatan nyata. Staf mungkin lupa langkah tertentu, menemukan data yang tidak cocok, atau menghadapi pekerjaan yang belum masuk dalam contoh pelatihan.",
      },
      {
        type: "paragraph",
        text: "Sediakan satu orang yang bisa dihubungi untuk pertanyaan sehari-hari. Buat catatan masalah dan solusinya agar tidak dijelaskan berulang. Kalau perlu, adakan sesi tinjauan setelah beberapa minggu untuk memperbaiki alur yang belum nyaman.",
      },
      { type: "heading", text: "Contoh urutan 30 hari" },
      {
        type: "paragraph",
        text: "Bayangkan desa ingin membenahi arsip surat. Dalam minggu pertama, kumpulkan contoh surat, catat alur yang berjalan, dan tentukan satu tempat penyimpanan. Jangan langsung membeli aplikasi baru.",
      },
      {
        type: "list",
        items: [
          "Minggu 1: memetakan pekerjaan dan memilih satu alur prioritas.",
          "Minggu 2: merapikan nama file, format, dan pembagian akses.",
          "Minggu 3: melatih staf dengan contoh surat nyata.",
          "Minggu 4: meninjau hambatan dan menetapkan kebiasaan yang dilanjutkan.",
        ],
      },
      {
        type: "paragraph",
        text: "Urutan ini bukan jadwal wajib. Desa dengan tim kecil bisa memerlukan waktu lebih panjang, sedangkan desa yang sudah punya kebiasaan digital bisa lebih cepat. Yang penting adalah ada titik awal, penanggung jawab, dan waktu untuk meninjau hasil.",
      },
      {
        type: "paragraph",
        text: "Setelah 30 hari, jangan langsung menambah pekerjaan baru. Tinjau dulu apakah alur yang dipilih benar-benar dipakai, bagian mana yang masih membingungkan, dan apakah data tetap rapi. Kalau hasilnya belum stabil, perbaiki dulu. Menambah aplikasi sebelum kebiasaan dasarnya kuat hanya akan menambah beban.",
      },
      { type: "heading", text: "Jaga keamanan dan cadangan data" },
      {
        type: "paragraph",
        text: "Data desa mencakup informasi warga yang harus dilindungi. Batasi akses sesuai kebutuhan, gunakan kata sandi yang tidak dibagikan sembarangan, dan hindari mengirim data sensitif lewat kanal yang tidak jelas. Buat cadangan secara berkala dan pastikan ada orang yang tahu cara memulihkannya.",
      },
      {
        type: "paragraph",
        text: "Keamanan bukan tugas satu orang. Sepakati aturan sederhana tentang perangkat, akun, dan berbagi file. Aturan yang jelas lebih berguna daripada aplikasi mahal yang tidak dipakai dengan disiplin.",
      },
      { type: "heading", text: "Ukur kebiasaan, bukan jumlah aplikasi" },
      {
        type: "paragraph",
        text: "Keberhasilan digitalisasi desa tidak diukur dari berapa banyak aplikasi yang dibeli. Ukurlah apakah surat lebih cepat ditemukan, apakah data warga lebih mudah diperbarui, dan apakah pekerjaan tidak lagi menumpuk pada satu orang. Tanda-tanda kecil ini lebih jujur daripada laporan proyek yang hanya melihat serah terima alat.",
      },
      {
        type: "paragraph",
        text: "Kampung IT Solo mendampingi desa melalui program Pelatihan Desa Digital. Pendampingan dimulai dari pekerjaan yang paling dekat dengan peserta, lalu disesuaikan dengan sistem dan kebiasaan yang sudah ada. Kalau desa Anda sedang memilih langkah pertama, mulailah dari satu alur yang paling mengganggu dan diskusikan kebutuhan bersama tim.",
      },
    ],
    relatedProgramSlugs: ["desa-digital", "literasi-digital"],
    relatedProductSlugs: ["elfan-system", "bookless-library"],
    relatedStorySlugs: ["desa-grogol-weru"],
    published: true,
  },
];

export const publishedArticles = articles.filter((article) => article.published);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
