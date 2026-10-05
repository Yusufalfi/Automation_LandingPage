export const whatsappUrl = 'https://wa.me/6289608095112?text=Halo%20Yusuf%2C%20saya%20ingin%20diskusi%20efisiensi%20proses%20bisnis%20melalui%20automasi.';

export const problems = [
  ['WEB DATA', 'Salin data web secara manual?', 'Membuka ribuan halaman web satu per satu, mengutip angka, lalu memindahkannya ke Excel secara manual.', 'Robot Playwright/Python mengambil data ribuan halaman otomatis dengan cepat, akurat, dan terstruktur.'],
  ['DOCUMENT', 'Validasi invoice & dokumen memakan waktu?', 'PDF menumpuk, angka dicocokkan manual, dan potensi kesalahan manusia (human error) sangat tinggi.', 'Ekstraksi data berbasis AI cerdas yang otomatis membaca, mevalidasi, dan menginput data dokumen.'],
  ['REPORTING', 'Laporan rutin bikin jam lembur membengkak?', 'Menggabungkan belasan file Excel dari berbagai divisi, menghitung rumus, lalu menyusun laporan berulang.', 'Alur kerja otomatis yang mengolah data, membuat laporan, dan mengirimkannya tepat waktu.'],
  ['EMAIL', 'Follow-up customer & tagihan sering terlewat?', 'Daftar invoice overdue semakin banyak, namun pesan pengingat masih dikirim manual satu demi satu.', 'Sistem pengingat otomatis berbasis kondisi, kriteria bisnis, dan jadwal yang presisi.'],
  ['DATA', 'Data tersebar di banyak sistem?', 'Informasi tersebar di Excel, ERP, database, email, dan portal web tanpa integrasi langsung.', 'Integrasi end-to-end yang mengumpulkan dan menyelaraskan seluruh data dalam satu alur terpusat.'],
  ['OTHER', 'Study case nya berbeda?', 'Bingung harus mulai dari mana? Ceritakan alur kerja operasional yang bikin tim Anda kewalahan.', 'kami menganalisis proses kerja, menentukan bagian yang bisa diotomatisasi, lalu merancang solusi yang sesuai.']
];

export const services = [
  { 
    n: "01", 
    title: "Otomatisasi Kerja & Sistem Bisnis", 
    desc: "Kurangi pekerjaan manual yang berulang dengan sistem otomatis, sehingga tim bisa menghemat waktu dan mengurangi kesalahan input.", 
    items: [ 
      "Isi data otomatis ke sistem atau aplikasi kantor", 
      "Cocokkan data laporan keuangan & Excel secara otomatis", 
      "Kirim email dan jalankan pekerjaan rutin secara otomatis" 
    ] 
  }, 
  { 
    n: "02", 
    title: "Baca Dokumen & Data dengan AI", 
    desc: "Gunakan AI untuk membaca informasi dari invoice, nota, surat, dan dokumen lainnya lalu mengubahnya menjadi data yang siap digunakan.", 
    items: [ 
      "Ambil data dari invoice, nota, & surat jalan", 
      "Ekstrak informasi dari dokumen foto atau PDF", 
      "Masukkan data dokumen langsung ke sistem perusahaan" 
    ] 
  }, 
  { 
    n: "03", 
    title: "Pengumpulan Data dari Website", 
    desc: "Kumpulkan data dari banyak halaman website secara otomatis dan rapi untuk membantu riset, pemantauan harga, atau analisis kompetitor.", 
    items: [ 
      "Ambil data produk dari toko online atau marketplace", 
      "Kumpulkan data dari banyak halaman secara otomatis", 
      "Kirim hasilnya ke Excel, JSON, atau Google Sheets" 
    ] 
  },
  { 
    n: "04", 
    title: "Website & Aplikasi Bisnis", 
    desc: "Buat website atau aplikasi khusus yang membantu bisnis tampil profesional, mempermudah operasional, dan mengurangi pekerjaan manual.", 
    items: [ 
      "Website promosi yang cepat dan mudah ditemukan di Google", 
      "Aplikasi web sesuai kebutuhan bisnis", 
      "Hubungkan website dengan pembayaran atau sistem internal" 
    ] 
  }
];


export const tools = ['RPA tools', 'Python', 'Playwright', 'SQL', 'AI / LLM', 'Javascript',];

// export const projects = [
//   {
//   n: "01",
//   tag: "AI + AUTOMATION",
//   title: "Invoice Processing",
//   desc: "Otomatisasi proses invoice dari PDF hingga masuk ke database.",
//   flow: "PDF → AI Extraction → Validation → Database",
//   impact: "Less manual data entry"
// },
// {
//   n: "02",
//   tag: "PYTHON + PLAYWRIGHT",
//   title: "Automated Web Scraper",
//   desc: "Mengambil data dari banyak halaman secara otomatis dan terstruktur.",
//   flow: "URL → Filter → Scraping → Clean Data → Excel / JSON",
//   impact: "Automated large-scale data collection"
// },
// {
//   n: "03",
//   tag: "RPA + DATABASE",
//   title: "Automated Billing",
//   desc: "Memantau invoice jatuh tempo dan mengirim reminder secara otomatis.",
//   flow: "Database → Due Date → Business Rules → Email",
//   impact: "Less manual follow-up"
// }
 
// ];

export const projects = [
  {
    id: "proj-01",
    n: "01",
    tag: "RPA + AI",
    title: "Invoice Processing System",
    desc: "Otomatisasi proses & Extract data invoice dari PDF hingga masuk ke system / report menggunakan AI OCR.",
    youtubeId: "dQw4w9WgXcQ", // Ganti dengan ID video YouTube lu
    beforeTime: "2-3 jam/hari entri data manual & rawan eror",
    afterTime: "< 2 menit ekstraksi otomatis berakurasi tinggi",
    goal: "Mengotomatiskan ekstraksi data dari PDF invoice multi-format ke Excel/Database secara terstruktur.",
    problem: "Invoice datang dengan format layout heterogen, pengetikan manual memakan waktu lama dan sering terjadi kesalahan input.",
    solution: "Membangun workflow otomatisasi end-to-end dengan UiPath + Intelligent Document Processing (IDP) / OpenAI API.",
    impact: "Menghemat waktu hingga 80% dan mempercepat approval pembayaran.",
    status: "LIVE",
    bannerColor: "#b2f5ea",
    flow: "PDF → AI Extraction → Validation → Database",
    techs: ["UiPath", "ChatGPT API", "IDP / OCR", "PostgreSQL"]
  },
  {
    id: "proj-02",
    n: "02",
    tag: "WEB SCRAPING",
    title: "Automated Web Scraper",
    desc: "Ekstraksi data lowongan kerja secara terstruktur dari ribuan halaman untuk analisis tren pasar tenaga kerja.",
    youtubeId: "dQw4w9WgXcQ", // Ganti dengan ID video YouTube lu
    beforeTime: "Copy-paste manual ratusan halaman web seharian",
    afterTime: "Proses crawling kilat secara otomatis via script",
    goal: "Mengumpulkan data publik dalam jumlah besar tanpa terblokir sistem anti-scraping.",
    problem: "Website target memiliki proteksi rate-limiting dan pagination yang rumit jika diambil secara manual.",
    solution: "Menggunakan Python Playwright dengan fitur multi-threading dan pembersihan data otomatis.",
    impact: "Pengambilan data skala besar 10x lebih cepat dibanding metode konvensional.",
    status: "LIVE",
    bannerColor: "#8ce8ff",
    flow: "URL → Filter → Scraping → Clean Data → Excel / JSON",
    techs: ["Python", "Playwright", "Pandas", "Excel / JSON"]
  },
  {
    id: "proj-03",
    n: "03",
    tag: "RPA",
    title: "Automated Billing & Escalation",
    desc: "Pemantauan jatuh tempo tagihan dan pengiriman email reminder berjenjang secara otomatis",
    youtubeId: "dQw4w9WgXcQ", // Ganti dengan ID video YouTube lu
    beforeTime: "Cek manual tanggal Excel satu per satu tiap pagi",
    afterTime: "Email pengingat terkirim otomatis tepat waktu",
    goal: "Memastikan tidak ada tagihan pembayaran yang terlewat atau terlambat di-follow up.",
    problem: "Keterlambatan follow-up tagihan mengganggu cash flow perusahaan.",
    solution: "Workflow RPA yang membaca database jadwal tagihan dan otomatis mengirim email laporan & reminder.",
    impact: "100% akurasi penagihan & memperlancar arus kas bisnis.",
    status: "LIVE",
    bannerColor: "#ffd3e0",
    flow: "Database → Due Date → Business Rules → Email",
    techs: ["UiPath", "SQL Database", "SMTP / Email Engine"]
  }
];


// const advantages = [
  //   {
  //     icon: <Clock size={28} />,
  //     badge: 'EFISIENSI WAKTU',
  //     title: 'Pangkas Beban Kerja Hingga 80%',
  //     description: 'Ucapkan selamat tinggal pada entri data dan tugas berulang yang menyita waktu. Bot menyelesaikan alur kerja rumit yang butuh berjam-jam hanya dalam beberapa detik.'
  //   },
  //   {
  //     icon: <ShieldCheck size={28} />,
  //     badge: 'AKURASI TINGGI',
  //     title: '0% Human Error & Sangat Konstan',
  //     description: 'Manusia bisa lelah, kurang fokus, dan salah ketik. Bot bekerja dengan presisi 100% mengikuti aturan bisnis Anda tanpa pernah salah input.'
  //   },
  //   {
  //     icon: <TrendingUp size={28} />,
  //     badge: 'PRODUKTIVITAS 24/7',
  //     title: 'Jalankan Tugas Kapan Saja & Di Mana Saja',
  //     description: 'Bot bisa dijadwalkan berjalan harian, mingguan, atau real-time. Operasional bisnis Anda tetap aktif dan memproses data bahkan saat tim sedang tidur.'
  //   },
  //   {
  //     icon: <Cpu size={28} />,
  //     badge: 'SKALABILITAS BISNIS',
  //     title: 'Fokus ke Strategi & Scaling Bisnis',
  //     description: 'Biarkan otomasi menangani pekerjaan kasar (scraping, input data, parsing PDF). Tim Anda bisa mengalihkan fokus ke keputusan strategis yang menaikkan omset.'
  //   }
  // ];

export const advantages = [
  {
    icon: 'Clock',
    badge: 'HEMAT WAKTU',
    title: 'Kurangi Pekerjaan Manual yang Berulang',
    description: 'Serahkan tugas seperti input data, scraping, pengecekan, dan pemindahan data ke sistem otomatis. Tim bisa menghemat waktu untuk pekerjaan yang lebih penting.'
  },
  {
    icon: 'ShieldCheck',
    badge: 'LEBIH KONSISTEN',
    title: 'Proses Kerja Lebih Rapi & Konsisten',
    description: 'Setiap proses dijalankan berdasarkan aturan yang sudah ditentukan. Risiko salah input dan langkah yang terlewat bisa dikurangi dibanding proses manual.'
  },
  {
    icon: 'TrendingUp',
    badge: 'BERJALAN OTOMATIS',
    title: 'Jalankan Proses Tanpa Harus Dipantau Terus',
    description: 'Automation bisa dijalankan berdasarkan jadwal atau kondisi tertentu. Setelah sistem berjalan, proses dapat terus bekerja tanpa perlu dilakukan satu per satu secara manual.'
  },
  {
    icon: 'Cpu',
    badge: 'MUDAH DIKEMBANGKAN',
    title: 'Bangun Sistem yang Bisa Ikut Bertumbuh',
    description: 'Mulai dari satu workflow sederhana, lalu kembangkan sesuai kebutuhan. Scraping, integrasi API, parsing dokumen, hingga proses internal bisa dibuat dalam satu alur kerja.'
  }
];


export const processSteps = [
  ['01','ANALYZE','Mapping & Analisis Kebutuhan','Menganalisis alur kerja saat ini, mengidentifikasi pemborosan waktu (bottleneck), dan mengukur potensi efisiensi.'],
  ['02','DESIGN','Perancangan Arsitektur Solusi','Merancang skema automasi terbaik menggunakan kombinasi RPA, Python, atau AI sesuai anggaran dan kebutuhan.'],
  ['03','BUILD','Pembangunan & Pengujian Akselerasi','Mengembangkan script/bot dan melakukan pengujian ketat terhadap skenario error.'],
  ['04','DEPLOY','Handover & Pemeliharaan','Implementasi sistem ke lingkungan kerja nyata, pelatihan singkat, serta dukungan teknis berkala.']
];

export const faqs = [
  ['Saya tidak paham teknis, apakah bisa tetap berkonsultasi?','Tentu saja. Anda tidak perlu tahu bahasa pemrograman apa yang digunakan. Cukup jelaskan masalah atau alur kerja harian Anda, dan saya yang akan menyusun solusinya.'],
  ['Apakah automasi ini hanya berbasis UiPath?','Tidak. Solusi dipilih berdasarkan efisiensi biaya dan performa. Saya menguasai UiPath, Python, Playwright, Power Automate, AI/OCR, hingga integrasi SQL/API.'],
  ['Apakah aman mengambil data dari web (Web Scraping)?','Sangat aman. Proses pengambilan data disesuaikan dengan etika batasan server, hak akses, dan ketentuan hukum yang berlaku.'],
  ['Bagaimana skema biaya dan estimasi waktu pengerjaan?','Biaya dan waktu disesuaikan dengan tingkat kompleksitas alur kerja. Sebelum pengerjaan dimulai, Anda akan menerima dokumen proposal berisi Scope of Work (SOW) dan Rincian Biaya yang transparan.']
];
