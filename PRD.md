# Product Requirement Document (PRD)
## Muadina Demak — Premium Makeup Artist Landing Page

---

## 1. Ikhtisar Produk & Informasi Bisnis

* **Nama Bisnis:** Muadina Demak
* **Layanan Utama:** Jasa Makeup Artist (MUA) Kelas Premium untuk rias pengantin (tradisional & modern), pre-wedding, wisuda, pesta, serta kursus privat makeup.
* **Slogan:** Merayakan Kecantikan Alami Setiap Perempuan Indonesia
* **URL Live Landing Page:** [https://muadina-demak.vercel.app/](https://muadina-demak.vercel.app/)
* **Repository Source Code:** [https://github.com/dinasetianingsih/MuadinaDemak](https://github.com/dinasetianingsih/MuadinaDemak)

---

## 2. Target Segmen Pasar

### 2.1. Demografi
* **Jenis Kelamin:** Wanita
* **Usia:** 20–40 tahun
* **Lokasi:** Indonesia (khususnya area perkotaan & wilayah Demak dan sekitarnya)
* **Kategori Utama:** Calon pengantin, wanita/pasangan yang akan bertunangan/pre-wedding, mahasiswi yang akan wisuda, serta wanita yang ingin belajar teknik makeup profesional.

### 2.2. Psikografi
* **Kelas Sosial:** Menengah ke atas (Upper-middle class).
* **Nilai & Preferensi:** Menghargai estetika elegan, kualitas premium, dan tampilan *photogenic* (*HD Ready*). 
* **Kekhawatiran utama (*Pain Points*):** 
  * Takut riasan terlihat *cakey*, tebal seperti topeng, atau tidak natural.
  * Takut riasan mudah luntur dan berminyak saat acara berlangsung.
  * Takut hasil riasan justru menyembunyikan/mengubah karakter wajah asli.
* **Motivasi Utama:** Bersedia berinvestasi lebih demi penampilan sempurna, rasa percaya diri, ketahanan riasan 14+ jam, dan hasil foto yang sempurna di hari istimewa.

---

## 3. Struktur Halaman & Justifikasi Desain

### A. Hero Section (Beranda)
* **Elemen Utama:** Headline "Tampil Anggun dan Memesona di Hari Istimewamu", statistik singkat (500+ Klien Puas, 14 Jam Ketahanan, 5★ Rating), CTA WhatsApp.
* **Justifikasi Desain:**
  * Layout *split-screen* asimetris (55% teks, 45% visual) dengan palet warna *cream* dan *champagne* memancarkan kesan mewah dan eksklusif.
  * Tipografi *Cormorant Garamond* (font serif) pada headline memberikan sentuhan editorial majalah mode yang disukai audiens wanita premium.
  * CTA utama ditempatkan di sebelah kiri mengikuti pola baca alami audiens (*F-Pattern/Z-Pattern*).
  * *Floating card* berisi ulasan singkat diletakkan di area *above-the-fold* untuk membangun *social proof* dan *trust* dalam 3 detik pertama kunjungan.

### B. Problem & Value Proposition Section (Solusi Kekhawatiran)
* **Elemen Utama:** Validasi kekhawatiran (Makeup Luntur, *Cakey*, Wajah Berubah) vs Solusi Muadina Demak (Teknik HD, Tahan 14+ Jam, Konsultasi Warna/Karakter Wajah).
* **Justifikasi Desain:**
  * Dirancang secara berdampingan: sisi kiri memvalidasi kekhawatiran pelanggan, sedangkan sisi kanan menyajikan solusi spesifik Muadina Demak. Hal ini menciptakan efek psikologis kelegaan.
  * Desain kotak berlatar putih dengan aksen *rose gold* menjaga informasi tetap bersih, mudah dibaca, dan elegan.

### C. Services & Features Section (Layanan Kami)
* **Elemen Utama:** Grid 4 Layanan (Rias Pengantin Premium, Rias Tunangan & Pre-Wedding, Rias Wisuda & Pesta, Kursus Privat Makeup) beserta tag sub-kategori.
* **Justifikasi Desain:**
  * Struktur *grid* 2x2 digunakan agar informasi sangat *scannable* (mudah dipindai) bagi segmen audiens yang berbeda-beda.
  * Kartu dilengkapi visual ikon pendukung dan gambar portofolio untuk mempercepat identifikasi visual.
  * Efek interaksi *hover* (kartu terangkat & batas warna berubah) memberikan *micro-interaction* yang meningkatkan UX serta mengandaskan persepsi brand yang modern dan memperhatikan detail.

### D. Social Proof (Portofolio & Testimoni)
* **Elemen Utama:** Galeri foto karya riasan dan ulasan nyata dari klien (*Maharani K.*, *Cantika P.*, *Rizky A.*).
* **Justifikasi Desain (Portofolio):** Menggunakan latar belakang *charcoal* (gelap) yang kontras seperti galeri seni eksklusif, berguna untuk menonjolkan detail warna dan riasan wajah klien secara *high-contrast*.
* **Justifikasi Desain (Testimoni):** Memanfaatkan rating bintang 4.9/5 (200+ ulasan), tanda kutip besar, foto klien, dan badge *Klien Terverifikasi* untuk memaksimalkan otoritas dan dorongan *word-of-mouth*.

### E. Final CTA (Call to Action)
* **Elemen Utama:** Informasi ketersediaan jadwal (Bulan Juli — Desember 2026), tombol WhatsApp, dan tautan Instagram.
* **Justifikasi Desain:**
  * Transisi ke latar belakang gelap memberi sinyal visual kuat bahwa audiens berada di titik pengambilan keputusan.
  * *Copywriting* berbasis urgensi ("Tanggal terbatas setiap bulan") memicu efek FOMO (*Fear of Missing Out*).
  * CTA mengarah langsung ke WhatsApp karena konsumen Indonesia memiliki tingkat konversi lebih tinggi melalui *conversational commerce* ketimbang formulir statis.

### F. Footer Section
* **Elemen Utama:** Logo, slogan ("Merayakan Kecantikan Alami Setiap Perempuan Indonesia"), ikon media sosial (Instagram, TikTok, YouTube), kolom Navigasi, dan kolom Layanan.
* **Justifikasi Desain:** Latar belakang cokelat tua dengan teks krem keemasan memberikan penutup halaman yang konsisten, anggun, dan lengkap dengan struktur navigasi sekunder.

---

## 4. Spesifikasi Teknis (Tech Stack)

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React / React Icons
* **Deployment:** Vercel
* **Versi Node.js Minimal:** Node.js v18.x atau yang lebih baru