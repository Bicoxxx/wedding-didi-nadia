// File konfigurasi terpusat untuk seluruh undangan pernikahan
  const weddingConfig = {
  
      couple: {
          bride: {
              firstName: "Didi",
              fullName: "Ali Hardin Balich S.Ak.", // Pastikan ini sesuai dengan nama di image profile
              father: "H. Abdul Wahid Balich",
              mother: "Hj. Siti Nursila Jakaria, S.Sos."
          },
          groom: {
              firstName: "Nadia",
              fullName: "Nadia Afri Maharani Tae Putri", // Pastikan ini sesuai dengan nama di image profile
              father: "Mashurin Adong",
              mother: "Habanong"
          }
          // names akan diisi otomatis dari firstName bride & groom jika tidak disetel
      },
      event: {
          introDate: "Minggu, 05 Juli 2026",
          countdownDate: new Date("Jul 5, 2026 00:00:00").getTime(), // Bulan dimulai dari 0 (Januari=0, Oktober=9)
          akad: {
              date: "Minggu, 05 Juli 2026",
              time: "Pukul 09:00 WITA",
              location: "Porobeban, Kel. Benteng Tengah, Kec. Riung, Kab. Ngada, Prov. NTT",
              googleCalendarLink: "https://calendar.app.google/1gtv4TnZHZa4X5XW8" // Ganti dengan link Google Calendar Akad
          },
          resepsi: {
              dateTime: "Minggu, 05 Juli 2026 | Pukul 18:00 WITA",
              locationName: "Porobeban, Kel. Benteng Tengah, Kec. Riung, Kab. Ngada, Prov. NTT",
              address: "Porobeban, Kel. Benteng Tengah, Kec. Riung, Kab. Ngada, Prov. NTT",
              googleMapsLink: "https://maps.app.goo.gl/xtxs2h2BrdYtKDXY9" // Ganti dengan link Google Maps Resepsi
          },
        ngunduhMantu: { // Bagian ini opsional, jika tidak ada, Anda bisa hapus section di HTML
            dateTime: "",
            locationName: "",
            address: "",
            googleMapsLink: "https://maps.app.goo.gl/xtxs2h2BrdYtKDXY9" // Ganti dengan link Google Maps Ngunduh Mantu
        }
    },
    story: [
    ],
    bank: {
          name: "",
          accountNumber: "", // Nomor rekening Anda
          accountName: "" // Atas nama rekening
      },
    whatsapp: {
          number: "6282359496240" // Ganti dengan nomor WhatsApp Anda (tanpa + atau 00, contoh: 6281234567890)
      },
      // --- KONFIGURASI GAMBAR --- 
      images: {
          coupleIntro: 'assets/couple.jpeg', // Foto pasangan di intro invitation.html
          brideProfile: 'assets/cowo.jpeg', // Foto profil pengantin wanita
          groomProfile: 'assets/cewe.jpeg', // Foto profil pengantin pria
          story: [ // Daftar foto story - TAMBAH/KURANGI FOTO DI SINI SAJA
        ],
          gallery: [ // Daftar foto galeri - TAMBAH/KURANGI FOTO DI SINI SAJA
        ],
          gallery: [ // Daftar foto galeri - TAMBAH/KURANGI FOTO DI SINI SAJA
            'assets/gallery1.jpeg',
            'assets/gallery2.jpeg',
            'assets/gallery3.jpeg',
            'assets/gallery4.jpeg',
            'assets/gallery5.jpeg',
            'assets/gallery6.jpeg',
            'assets/gallery7.jpeg',
            'assets/gallery8.jpeg',
            'assets/gallery9.jpeg',
            'assets/gallery10.jpeg'
        ],
          backgrounds: [ // Daftar foto background slideshow (untuk index.html dan invitation.html)
            'assets/bg1.jpeg',
            'assets/bg2.jpeg',
            'assets/bg3.jpeg'
        ],
          videoStoryUrl: "" // Ganti dengan link embed YouTube Anda, kosongkan jika tidak ada
      }
  };
  
  // Fungsi untuk menginisialisasi konfigurasi (termasuk mengisi nilai otomatis)
  function initializeConfig() {
      // Generate nama pasangan jika belum disetel
      if (!weddingConfig.couple.names) {
          weddingConfig.couple.names = `${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}`;
      }
  }
  
  // Ekspor konfigurasi agar bisa digunakan di file JavaScript lain
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = { weddingConfig, initializeConfig };
  } else {
      // Untuk browser, jadikan global
      window.weddingConfig = weddingConfig;
      window.initializeConfig = initializeConfig;
      
      // Panggil fungsi inisialisasi secara otomatis
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initializeConfig);
      } else {
          // Jika DOM sudah selesai dimuat, panggil langsung
          initializeConfig();
      }
  }