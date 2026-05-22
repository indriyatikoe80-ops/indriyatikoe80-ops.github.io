# 🗺️ PAGE STRUCTURE
## Website Promosi Aplikasi Belajar Anak

---

## Gambaran Umum

Website adalah **Single Page Application** dengan navigasi smooth-scroll.
Semua section berada dalam 1 file `index.html`.

### Urutan Section

```
[NAVBAR]          ← Sticky, selalu terlihat
   ↓
[HERO]            ← First impression, paling penting
   ↓
[STATS BAR]       ← Angka statistik animasi
   ↓
[FEATURES]        ← Fitur unggulan (6 card)
   ↓
[LEARNING]        ← Daftar materi pembelajaran
   ↓
[SCREENSHOTS]     ← Slider screenshot aplikasi
   ↓
[HOW TO USE]      ← 3 langkah mudah
   ↓
[TESTIMONIALS]    ← Testimoni pengguna
   ↓
[FAQ]             ← Pertanyaan umum
   ↓
[CTA FINAL]       ← Ajakan download terakhir
   ↓
[FOOTER]          ← Info kontak & link
   ↓
[FLOATING BUTTON] ← Download button mengambang
```

---

## Detail Setiap Section

---

### [A] NAVBAR

**Layout:** `Logo kiri | Menu tengah | CTA kanan`

**Behavior:**
- Default: Background transparan (di atas hero)
- On scroll > 80px: Background putih + shadow (sticky)
- Mobile (≤768px): Hamburger menu, menu collapse

**HTML Structure:**
```html
<nav id="navbar">
  <div class="nav-container">
    <div class="nav-logo">
      <img src="assets/images/logo.png" alt="Logo">
      <span class="nav-brand">[NAMA APLIKASI]</span>
    </div>
    <ul class="nav-links">
      <li><a href="#hero">Beranda</a></li>
      <li><a href="#features">Fitur</a></li>
      <li><a href="#screenshots">Tangkapan Layar</a></li>
      <li><a href="#how-to-use">Cara Pakai</a></li>
      <li><a href="#testimonials">Testimoni</a></li>
      <li><a href="#contact">Kontak</a></li>
    </ul>
    <a href="#download" class="btn-cta-nav">📲 Download</a>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>
```

---

### [B] HERO SECTION

**ID:** `#hero`
**Layout:** Split 2 kolom (teks kiri, gambar kanan) → 1 kolom di mobile

**Visual Elements:**
- Background: Gradient ungu-biru gelap + blob shapes warna-warni
- Bintang/sparkle animasi bertebaran
- Mockup HP terapung (float animation)
- Confetti dots dekorasi

**HTML Structure:**
```html
<section id="hero" class="hero-section">
  <!-- Background decorations -->
  <div class="hero-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="stars-container">
      <!-- JS akan generate bintang di sini -->
    </div>
  </div>

  <div class="hero-content">
    <!-- Kiri: Teks -->
    <div class="hero-text">
      <div class="hero-badge">🌟 Aplikasi Belajar Anak #1</div>
      <h1 class="hero-title">
        Belajar Sambil Bermain, <span class="text-gradient">Cerdas Sejak Dini!</span>
      </h1>
      <p class="hero-subtitle">[DESKRIPSI SINGKAT APLIKASI]</p>
      
      <!-- Trust badges -->
      <div class="hero-badges">
        <span class="badge">✅ Gratis</span>
        <span class="badge">⭐ 4.8/5</span>
        <span class="badge">👶 Aman Anak</span>
        <span class="badge">📶 Offline</span>
      </div>
      
      <!-- CTA Buttons -->
      <div class="hero-buttons">
        <a href="#download" class="btn-primary">
          📲 Download Sekarang
        </a>
        <a href="#screenshots" class="btn-secondary">
          ▶ Lihat Preview
        </a>
      </div>
    </div>

    <!-- Kanan: Mockup -->
    <div class="hero-image">
      <div class="phone-mockup">
        <img src="assets/images/hero-mockup.png" alt="Preview Aplikasi">
      </div>
      <!-- Floating badges di sekitar mockup -->
      <div class="floating-badge badge-stars">⭐ 4.8 Rating</div>
      <div class="floating-badge badge-users">👨‍👩‍👧 [X]K+ Pengguna</div>
      <div class="floating-badge badge-games">🎮 [X]+ Mini Game</div>
    </div>
  </div>
</section>
```

---

### [C] STATS BAR

**ID:** `#stats`
**Layout:** 4 kolom angka statistik
**Behavior:** Counter animasi saat pertama kali terlihat (Intersection Observer)

**Stats Items:**
```
[X]K+        [X.X]★       [X]+         [X]+
Download     Rating       Materi       Mini Game
```

---

### [D] FEATURES SECTION

**ID:** `#features`
**Layout:** Grid 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
**Background:** Section background ke-2 (off-white / light blue tint)

**6 Feature Cards** dengan icon gradient, judul, dan deskripsi.
Lihat konten detail di `03_CONTENT_GUIDE.md` → Section 3.

**Behavior:**
- Card muncul dengan stagger animation (delay per card)
- Hover: card terangkat + shadow lebih besar

---

### [E] LEARNING MODULES SECTION

**ID:** `#learning`
**Layout:** 2 kolom (daftar materi kiri, ilustrasi/gambar kanan)

**Kiri:** Daftar modul dengan ikon emoji, judul, dan deskripsi singkat
**Kanan:** Screenshot atau ilustrasi preview materi

**Tabs/Filter (optional):**
- Jika materi banyak, bisa ditambah tab filter (Semua | Huruf | Angka | Menulis | Game)

---

### [F] SCREENSHOTS SECTION

**ID:** `#screenshots`
**Layout:** Horizontal carousel/slider
**Background:** Gradient gelap agar screenshot lebih menonjol

**Controls:**
- Tombol prev/next
- Dot indicator
- Auto-play setiap 3 detik (pause on hover)
- Touch/swipe support di mobile

**Screenshot Items:** Minimal 6 screenshot
Lihat konten di `03_CONTENT_GUIDE.md` → Section 5.

---

### [G] HOW TO USE SECTION

**ID:** `#how-to-use`
**Layout:** 3 steps horizontal (desktop) / vertical (mobile)
**Connectors:** Garis putus-putus / panah antar step

**Steps:**
1. Download APK
2. Install & Buka
3. Mulai Belajar!

> ℹ️ **Catatan (tanpa Play Store):**
> Step 1 mengarah ke `#download` section atau tombol download APK langsung.
> Jika APK belum tersedia publik, ganti teks dengan "Hubungi Kami untuk mendapatkan aplikasi".

---

### [H] TESTIMONIALS SECTION

**ID:** `#testimonials`
**Layout:** Carousel 3 card (desktop), 1 card (mobile)

**Setiap card:**
- Quote icon besar
- Teks testimoni
- Avatar + nama + peran
- Star rating

---

### [I] FAQ SECTION

**ID:** `#faq`
**Layout:** Accordion list, 1 kolom

**Behavior:**
- Klik pertanyaan → jawaban expand (smooth)
- Hanya 1 yang terbuka sekaligus (accordion mode)
- Icon rotasi (+/×) saat buka/tutup

---

### [J] DOWNLOAD SECTION

**ID:** `#download`
**Background:** Full-width gradient gelap / image background dengan overlay

**Layout:** Centered, teks besar, tombol download menonjol

> ℹ️ **Catatan (tanpa Play Store):**
> Karena belum di Play Store, tombol download bisa berupa:
>
> **Opsi A:** Tombol download APK langsung (jika ada hosting file APK)
> ```html
> <a href="assets/downloads/app-belajar.apk" download class="btn-download">
>   📲 Download APK (Android)
> </a>
> ```
>
> **Opsi B:** Tombol "Minta via WhatsApp / Email"
> ```html
> <a href="https://wa.me/628XXXXXXXXX?text=Halo, saya ingin mencoba aplikasi [NAMA]"
>    class="btn-download">
>   💬 Minta Link Download via WhatsApp
> </a>
> ```
>
> **Opsi C:** "Coming Soon" dengan form email (tanpa backend)
> → Gunakan Formspree.io (gratis) untuk form submit ke email
>
> **Rekomendasi saat ini:** Gunakan **Opsi B (WhatsApp)** — paling simpel & efektif

---

### [K] FOOTER

**ID:** `#contact`
**Layout:** 3-4 kolom grid (desktop), 1 kolom (mobile)
**Background:** Dark (#1A1A2E)

**Kolom:**
1. Logo + Deskripsi + Sosial Media
2. Navigasi Cepat
3. Kontak (email, kota)
4. *(optional)* Informasi Tambahan

**Bottom bar:** Copyright

---

### [L] FLOATING BUTTON

**Position:** `fixed`, `bottom: 24px`, `right: 24px`
**Visibility:** Muncul setelah scroll > 300px
**Behavior:** Klik → scroll to `#download` atau buka link download

```html
<a href="#download" class="floating-btn" id="floatingBtn">
  📲 Download
</a>
```

---

## JavaScript Modules

| File | Tanggung Jawab |
|------|---------------|
| `js/main.js` | Navbar scroll, smooth scroll, hamburger menu, floating btn |
| `js/main.js` | Intersection Observer (animate on scroll) |
| `js/main.js` | Counter animation (stats) |
| `js/main.js` | Screenshot carousel/slider |
| `js/main.js` | Testimonial carousel |
| `js/main.js` | FAQ accordion |
| `js/main.js` | Generate stars dekorasi |

> 💡 Semua JS digabung dalam 1 file `main.js` untuk kesederhanaan.

---

## Responsive Layout Summary

| Section | Mobile (< 768px) | Tablet (768-992px) | Desktop (>992px) |
|---------|------------------|-------------------|-----------------|
| Hero | 1 col, gambar di bawah | 1 col | 2 col split |
| Stats | 2x2 grid | 4 col | 4 col |
| Features | 1 col | 2 col | 3 col |
| Learning | 1 col | 2 col | 2 col |
| Screenshots | 1 visible | 2 visible | 3 visible |
| How To Use | Vertical steps | 3 col | 3 col |
| Testimonials | 1 col | 2 col | 3 col |
| FAQ | 1 col | 1 col | 1 col (70% width) |
| Footer | 1 col | 2 col | 4 col |

---

*Dokumen ini adalah bagian dari paket dokumentasi proyek. Lanjutkan ke: `05_ASSETS_GUIDE.md`*
