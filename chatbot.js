// Database pertanyaan dan jawaban tentang kebudayaan Bangka Belitung
const chatbotDatabase = {
    "pakaian adat": {
        keywords: ["pakaian", "baju", "adat", "tradisional", "kebaya", "batik", "sarung", "songkok", "epalet"],
        answer: "Pakaian adat Bangka Belitung menampilkan perpaduan indah antara pengaruh Melayu dan budaya lokal. Untuk pria menggunakan kain batik berwarna cerah, songkok, dan sarung. Untuk wanita mengenakan kebaya tradisional dengan kain songket atau batik. Warna dominan adalah merah, biru, emas, dan coklat yang mencerminkan kekayaan alam Bangka Belitung."
    },
    "rumah adat": {
        keywords: ["rumah", "adat", "tradisional", "arsitektur", "bangunan", "atap", "tiang", "kayu"],
        answer: "Rumah adat Bangka Belitung menunjukkan keahlian arsitektur tradisional yang unik. Dibangun menggunakan kayu tropis yang kokoh dengan atap tinggi bernada untuk mengatasi hujan deras. Rumah dibangun di atas tiang untuk memudahkan aliran udara dan melindungi dari banjir. Memiliki banyak jendela dan pintu untuk sirkulasi udara yang baik, dengan dekorasi ukiran khas Melayu."
    },
    "makanan khas": {
        keywords: ["makanan", "masakan", "khas", "lempah", "lumpia", "tahu", "kue", "makanan tradisional", "hidangan", "resep"],
        answer: "Bangka Belitung memiliki banyak makanan khas lezat:\n\n🍲 Lempah Kuning - Masakan ikan dengan santan, kunyit, dan rempah-rempah\n🥟 Lumpia Bangka - Kulit tipis renyah diisi rebung muda dan daging\n🍛 Tahu Goreng Ikan - Tahu goreng dengan ikan dalam kuah santan\n🍮 Kue Lompang - Kue manis dari tepung ketan dan santan"
    },
    "musik budaya": {
        keywords: ["musik", "alat musik", "tarian", "pertunjukan", "gong", "kompang", "rebab", "tari", "melodi", "instrumen"],
        answer: "Musik tradisional Bangka Belitung menggunakan alat-alat unik:\n\n🥁 Gong - Alat musik perkusi yang menghasilkan suara dalam dan bergema\n🥊 Kompang - Alat musik tepukan tradisional dari Melayu\n🎻 Rebab - Alat musik gesek tradisional dengan nada yang merdu\n💃 Tari dan Musik - Kombinasi musik dan tari menciptakan pertunjukan spektakuler"
    },
    "geografi": {
        keywords: ["geografi", "lokasi", "pulau", "letak", "peta", "wilayah", "bangka", "belitung", "pongok", "iklim", "luas"],
        answer: "🗺️ GEOGRAFI BANGKA BELITUNG:\n\n📍 Letak: Terletak di Selat Karimata, Laut Jawa, dan Laut Cina Selatan\n\n🏝️ Pulau Utama:\n• Pulau Bangka - Pulau terbesar, Ibukota Pangkalpinang\n• Pulau Belitung - Terkenal dengan pantai indah dan batu granit\n• Pulau Pongok - Pulau kecil yang menawan\n\n🌡️ Iklim: Tropis, suhu 25-28°C sepanjang tahun\n📏 Luas: 14.407 km² dengan populasi >1 juta penduduk"
    },
    "flora": {
        keywords: ["flora", "tumbuhan", "tanaman", "hutan", "mangrove", "karang", "ekosistem", "pohon", "rempah"],
        answer: "🌿 FLORA BANGKA BELITUNG:\n\n🌴 Vegetasi:\n• Hutan Hujan Tropis - Ribuan spesies tumbuhan\n• Hutan Bakau/Mangrove - Ekosistem pesisir penting\n• Terumbu Karang - Ekosistem laut produktif\n\n🌿 Tumbuhan Lokal:\n• Tumbuhan Obat tradisional\n• Rempah-Rempah: Kunyit, kayu manis, jahe\n• Tanaman Buah-buahan eksotis\n\nKayanya biodiversity membuat Bangka Belitung menjadi hotspot ekologi yang penting."
    },
    "fauna": {
        keywords: ["fauna", "hewan", "satwa", "burung", "ikan", "bekantan", "duyung", "orangutan", "reptil", "binatang", "liar"],
        answer: "🦁 FAUNA BANGKA BELITUNG:\n\n🐵 Hewan Endemik:\n• Bekantan - Monyet dengan hidung besar unik\n• Orangutan Borneo - Primata terancam punah\n• Ikan Duyung - Mamalia laut terlindungi\n\n🦅 Burung-burung Langka:\n• Burung Rangkong\n• Burung Elang Laut\n• Berbagai burung endemik\n\n🐍 Reptil: Ular dan kadal-kadal lokal\n🐠 Kehidupan Laut: Ikan beraneka ragam dan terumbu karang"
    },
    "festival": {
        keywords: ["festival", "perayaan", "rayaan", "upacara", "acara", "imlek", "ramadhan", "lebaran", "hari jadi"],
        answer: "🎉 FESTIVAL DAN PERAYAAN BANGKA BELITUNG:\n\n🧧 Tahun Baru Imlek:\n• Ritual sembahyang keluarga\n• Pemberian ang pao\n• Pertunjukan seni tradisional\n\n🌙 Ramadhan & Lebaran:\n• Berbuka puasa bersama\n• Kue tradisional\n• Pakaian adat\n\n🎪 Festival Wisata Belitung:\n• Pameran kerajinan\n• Pertunjukan musik\n• Kompetisi budaya\n\n🎊 Hari Jadi Bangka Belitung:\n• Parade budaya\n• Pertunjukan seni"
    },
    "sejarah": {
        keywords: ["sejarah", "asal", "latar belakang", "sebelum", "masa lalu", "penjajahan", "kolonial", "awal"],
        answer: "📚 SEJARAH BANGKA BELITUNG:\n\nBangka Belitung memiliki sejarah yang kaya dengan pengaruh budaya Melayu yang kuat. Wilayah ini memiliki:\n\n🏛️ Latar Belakang:\n• Pengaruh perdagangan sejak abad ke-7\n• Interaksi budaya Melayu, Cina, dan Arab\n• Masa penjajahan Belanda\n• Kekayaan mineral (timah) yang penting\n\n🎭 Warisan Budaya:\nTradisi-tradisi yang berkembang adalah hasil dari interaksi budaya selama berabad-abad. Kebudayaan ini masih dilestarikan hingga saat ini melalui upacara adat dan perayaan tradisional."
    },
    "pariwisata": {
        keywords: ["wisata", "pariwisata", "liburan", "tempat wisata", "pantai", "batu", "destinasi", "turis", "kunjung"],
        answer: "✈️ PARIWISATA BANGKA BELITUNG:\n\n🏖️ Pantai Populer:\n• Pantai Tanjung Tinggi - Pasir putih, batu granit megah\n• Pantai Tanjung Pendam - Pemandangan laut indah\n• Pantai Nyiur Melambai - Suasana santai dan asri\n\n🏝️ Atraksi Alam:\n• Pulau Pongok - Snorkeling terumbu karang\n• Danau Kaolin - Danau biru yang eksotis\n• Hutan Mangrove - Alam liar yang menakjubkan\n\n🎭 Atraksi Budaya:\n• Museum Pangkalpinang\n• Pertunjukan musik tradisional\n• Pameran kerajinan lokal\n\n🍴 Kuliner: Coba makanan khas lokal dan laut segar!"
    },
    "bahasa": {
        keywords: ["bahasa", "bahasa lokal", "dialek", "melayu", "ucapan", "kata", "komunikasi", "berbicara"],
        answer: "🗣️ BAHASA BANGKA BELITUNG:\n\nBahasa utama yang digunakan di Bangka Belitung:\n\n📢 Bahasa Indonesia - Bahasa nasional\n🗨️ Bahasa Melayu Bangka - Dialek lokal khas\n\n🎭 Karakteristik Dialek:\n• Pengaruh bahasa Melayu tradisional\n• Ucapan yang lembut dan halus\n• Banyak kata pinjaman dari bahasa Arab\n• Pengucapan yang unik dan khas\n\n💬 Ucapan Khas:\n• 'Halo!' atau 'Assalamualaikum' - Salam\n• 'Apa kabar?' - Sapaan hangat\n• 'Alhamdulillah' - Ungkapan syukur\n\nMasyarakat Bangka Belitung sangat ramah dan senang berbincang!"
    },
    "kerajinan": {
        keywords: ["kerajinan", "seni", "batik", "songket", "ukiran", "tenun", "kreatif", "karya seni", "produk"],
        answer: "🎨 KERAJINAN TRADISIONAL BANGKA BELITUNG:\n\n🧵 Kerajinan Tekstil:\n• Batik - Kain dengan motif unik dan warna tradisional\n• Songket - Kain tenun dengan benang emas\n• Kain Tradisional - Berbagai motif lokal\n\n🔨 Kerajinan Kayu:\n• Ukiran Kayu - Dekorasi rumah dan perabotan\n• Perabotan Tradisional - Meja, kursi, lemari\n• Patung-patung\n\n🏺 Kerajinan Lain:\n• Keramik Lokal - Berbagai produk keramik\n• Perhiasan Emas - Desain tradisional\n• Tikar dan Anyaman\n\nKerajinan ini dapat dibeli sebagai souvenir autentik untuk kenang-kenangan!"
    },
    "kuliner": {
        keywords: ["kuliner", "masakan", "resep", "hidangan", "santap", "pemasakan", "bahan", "cita rasa", "lezat", "sedap"],
        answer: "🍽️ KULINER BANGKA BELITUNG:\n\n🍲 Hidangan Utama:\n• Lempah Kuning - Ikan dalam santan kunyit\n• Gulai Ikan - Ikan dalam kuah kental\n• Otak-otak - Makanan laut berempah\n\n🥘 Masakan Lainnya:\n• Bubur Nasi Ikan - Sarapan lezat\n• Soto Bangka - Kuah tradisional\n• Ikan Bakar - Ikan segar yang dipanggang\n\n🍜 Mie dan Nasi:\n• Mie Celor - Mie dalam kuah santan\n• Nasi Kuning - Nasi dengan rempah-rempah\n\n🍮 Kue-kue Tradisional:\n• Kue Lompang - Kue ketan manis\n• Lepat - Kue dari tepung beras\n• Talam - Kue tradisional berlapis\n\n🥤 Minuman: Kopi lokal, teh tradisional, dan minuman herbal"
    },
    "upacara adat": {
        keywords: ["upacara", "adat", "ritual", "acara", "pernikahan", "pernikahan adat", "prosesi", "tradisi", "ceremony"],
        answer: "⚱️ UPACARA ADAT BANGKA BELITUNG:\n\n👰 Pernikahan Adat:\n• Lamaran - Permintaan resmi kepada keluarga\n• Akad Nikah - Ijab-qobul di hadapan saksi\n• Resepsi - Pesta meriah dengan keluarga besar\n• Pakaian Adat - Pengantin mengenakan busana tradisional\n\n🎊 Acara Keluarga:\n• Khitanan - Perayaan untuk anak laki-laki\n• Kelahiran - Ritual menyambut bayi\n• Kematian - Doa dan ziarah bersama\n\n🕌 Ritual Keagamaan:\n• Tahlilan - Doa untuk arwah leluhur\n• Kenduri - Makan-makanan bersama komunitas\n• Dzikir Bersama - Mengingat kebersamaan\n\n✨ Karakteristik:\n• Melibatkan seluruh keluarga besar\n• Menampilkan musik dan tarian tradisional\n• Menyajikan makanan khas\n• Mempererat hubungan komunitas"
    },
    "ekonomi": {
        keywords: ["ekonomi", "bisnis", "perdagangan", "industri", "pertambangan", "timah", "perikanan", "nelayan", "ekspor"],
        answer: "💼 EKONOMI BANGKA BELITUNG:\n\n⛏️ Pertambangan:\n• Timah - Komoditas utama dan terkenal dunia\n• Industri Pertambangan - Menyerap banyak tenaga kerja\n• Sektor Strategis - Penting bagi ekonomi nasional\n\n🐟 Perikanan:\n• Nelayan Tradisional - Menangkap ikan dengan cara tradisional\n• Hasil Laut - Ikan segar, udang, kepiting\n• Ekonomi Pesisir - Penting bagi masyarakat pantai\n\n🌾 Pertanian:\n• Perkebunan Kelapa - Minyak kelapa dan produk turunan\n• Pertanian Lokal - Hasil bumi berkualitas\n• Pertanian Organik - Semakin berkembang\n\n🏪 Perdagangan & Pariwisata:\n• Perdagangan Lokal - Pasar tradisional yang meriah\n• Pariwisata - Semakin berkembang\n• Kerajinan Lokal - Perdagangan souvenir"
    },
    "transportasi": {
        keywords: ["transportasi", "perjalanan", "kapal", "pesawat", "jalan", "naik", "bepergian", "rute"],
        answer: "🚢 TRANSPORTASI BANGKA BELITUNG:\n\n✈️ Transportasi Udara:\n• Bandara Internasional Rahadi Osman (Pangkalpinang)\n• Bandara Belufo (Belitung)\n• Penerbangan dari Jakarta, Surabaya, dan kota besar lain\n\n🚢 Transportasi Laut:\n• Kapal Penumpang - Rute ke Jawa, Sumatera\n• Speedboat - Menghubungkan pulau-pulau kecil\n• Nelayan Tradisional - Masih menggunakan perahu kayu\n\n🚗 Transportasi Darat:\n• Jalan Raya - Terhubung baik\n• Ojek/Taksi - Tersedia di kota besar\n• Mobil Sewaan - Untuk wisatawan\n• Bus Lokal - Transportasi umum\n\n🛣️ Aksesibilitas:\n• Jalan antar pulau terus dikembangkan\n• Infrastruktur modern berkembang\n• Kemudahan akses untuk wisatawan"
    },
    "pendidikan": {
        keywords: ["pendidikan", "sekolah", "universitas", "belajar", "pendidik", "siswa", "kampus", "akademik"],
        answer: "🎓 PENDIDIKAN BANGKA BELITUNG:\n\n🏫 Lembaga Pendidikan:\n• Sekolah Dasar - Banyak tersebar di berbagai daerah\n• Sekolah Menengah - Umum dan Kejuruan\n• Perguruan Tinggi - Universitas dan Akademi\n\n🎯 Fokus Pendidikan:\n• Pendidikan Formal - Kurikulum nasional\n• Pendidikan Keterampilan - Program vokasi\n• Pendidikan Budaya - Lestarikan warisan budaya\n\n📚 Institusi Terkenal:\n• Universitas Terbuka Cabang Pangkalpinang\n• Politeknik Negeri Bangka Belitung\n• Berbagai SMK dengan program unggulan\n\n👨‍🎓 Pengembangan SDM:\n• Beasiswa lokal dan nasional\n• Program pelatihan keterampilan\n• Kerjasama dengan institusi internasional"
    },
    "hello": {
        keywords: ["hi", "halo", "halo", "hai", "assalamualaikum", "pagi", "siang", "sore", "malam", "apa kabar", "helo"],
        answer: "Halo! 👋 Selamat datang di chatbot Kebudayaan Bangka Belitung. Saya di sini untuk membantu Anda mempelajari tentang:\n\n🏝️ Pakaian Adat, Rumah Adat, Makanan Khas\n🎵 Musik Budaya, Festival, Perayaan\n🗺️ Geografi, Flora & Fauna\n🎨 Kerajinan, Seni, Budaya Lokal\n💼 Ekonomi, Transportasi, Pendidikan\n\nAda yang ingin Anda tanyakan?"
    },
    "terimakasih": {
        keywords: ["terima kasih", "terimakasih", "makasih", "thanks", "terimas kasih", "suksus", "bantuan"],
        answer: "Sama-sama! 😊 Senang bisa membantu Anda mempelajari kebudayaan Bangka Belitung. Jika ada pertanyaan lain, jangan ragu untuk bertanya. Selamat menjelajahi kekayaan budaya Bangka Belitung! 🏝️"
    }
};

// Fungsi untuk toggle chatbot
function toggleChatbot() {
    const container = document.querySelector('.chatbot-container');
    container.classList.toggle('active');
    
    // Focus ke input jika chatbot dibuka
    if (container.classList.contains('active')) {
        setTimeout(() => {
            document.getElementById('userInput').focus();
        }, 100);
        
        // Tampilkan pesan sambutan jika belum ada pesan
        if (document.getElementById('chatMessages').children.length === 0) {
            addMessage('Halo! 👋 Saya adalah chatbot budaya Bangka Belitung. Tanyakan apa saja tentang pakaian adat, rumah adat, makanan khas, atau musik tradisional kami! 🏝️', 'bot');
        }
    }
}

// Fungsi untuk menambah pesan
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    messagesContainer.appendChild(messageDiv);
    
    // Scroll ke bawah
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Fungsi untuk mengirim pesan
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userText = userInput.value.trim();
    
    if (userText === '') return;
    
    // Tambahkan pesan pengguna
    addMessage(userText, 'user');
    userInput.value = '';
    
    // Proses dan berikan jawaban
    const response = getBotResponse(userText);
    
    // Tambahkan delay kecil agar terasa natural
    setTimeout(() => {
        addMessage(response, 'bot');
    }, 500);
}

// Fungsi untuk mendapatkan respons bot
function getBotResponse(userText) {
    const lowerText = userText.toLowerCase();
    
    // Cek setiap kategori pertanyaan
    for (const category in chatbotDatabase) {
        const item = chatbotDatabase[category];
        
        // Cek apakah ada keyword yang cocok
        for (const keyword of item.keywords) {
            if (lowerText.includes(keyword)) {
                return item.answer;
            }
        }
    }
    
    // Jika tidak ada yang cocok, berikan respons default
    return generateDefaultResponse(userText);
}

// Fungsi untuk respons default
function generateDefaultResponse(userText) {
    const responses = [
        "Pertanyaan menarik! Namun, saya tidak memiliki informasi spesifik tentang topik tersebut. Coba tanyakan tentang pakaian adat, rumah adat, makanan khas, atau musik budaya Bangka Belitung.",
        "Maaf, saya tidak terlalu mengerti. Coba tanyakan tentang budaya Bangka Belitung seperti tradisi, makanan, atau seni lokal. 🏝️",
        "Hmm, topik itu di luar pengetahuan saya. Tapi saya bisa membantu Anda tentang kebudayaan Bangka Belitung! Apa yang ingin Anda ketahui?",
        "Saya masih belajar tentang topik itu. Lebih baik tanya tentang aspek budaya Bangka Belitung yang saya tahu lebih baik.",
        "Mungkin Anda bisa rephrase pertanyaan Anda? Saya siap membantu tentang kebudayaan Bangka Belitung! 😊"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Tambahkan event listener untuk Enter key pada input
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
