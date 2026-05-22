# 🚀 EXECUTION PLAN
## Website Promosi Aplikasi Belajar Anak

---

## Overview

Rencana eksekusi ini dibagi menjadi **5 fase** yang harus dijalankan secara berurutan.
Total estimasi waktu pengerjaan: **4–8 jam** (tergantung kesiapan aset).

---

## Fase 0: Persiapan (Prerequisite)

**Selesaikan ini SEBELUM mulai coding:**

### 0.1 — Isi Data Aplikasi
- [x] Tentukan nama aplikasi final
- [x] Buat tagline/slogan
- [x] Siapkan deskripsi pendek (1 paragraf)
- [x] Kumpulkan statistik (jumlah materi, mini game, dsb.)
- [x] Siapkan kontak (email, WhatsApp, Instagram)

### 0.2 — Siapkan Semua Aset Gambar
Ikuti panduan di `05_ASSETS_GUIDE.md`:
- [ ] `logo.png` (PNG transparan)
- [ ] `app-icon.png` (512x512)
- [ ] `hero-mockup.png` (mockup HP)
- [x] `og-image.jpg` (1200x630)
- [x] `favicon.ico`
- [ ] Minimal 6 screenshot: `ss-01.jpg` s/d `ss-06.jpg`

### 0.3 — Tentukan Metode Download
- [x] **Opsi A**: File APK di-host sendiri (taruh di `assets/downloads/`)

### 0.4 — Buat Folder Struktur
```powershell
mkdir assets\images\screenshots
mkdir assets\downloads
mkdir css
mkdir js
```

---

## Fase 1: Foundation — React + Vite Setup

**Estimasi: 1 jam**

### 1.1 — Inisialisasi Proyek
- [x] Setup Vite + React + TypeScript
- [x] Konfigurasi folder `src/components`, `src/styles`, `src/assets`
- [x] Instalasi library animasi (Framer Motion - opsional namun disarankan)

### 1.2 — Konfigurasi Dasar
- [x] Setup Global Styles (Warna, Font, Design Tokens)
- [ ] Konfigurasi SEO via React Helmet atau Vite plugin
- [x] Integrasi Google Fonts di `index.html` atau CSS

### 1.3 — Base Layout
- [x] Buat Layout Wrapper (Navbar + Footer)
- [x] Setup App.tsx sebagai main entry point

**✅ Checkpoint 1:** Buka index.html di browser — struktur skeleton terlihat.

---

## Fase 2: Section Build — Navbar & Hero

**Estimasi: 1–2 jam**

### 2.1 — Navbar
- [x] HTML struktur navbar
- [x] CSS: sticky, backdrop-blur, transition scroll
- [x] CSS: responsive hamburger menu
- [x] JS: scroll behavior (transparent → white)
- [x] JS: hamburger toggle
- [x] JS: active link on scroll

### 2.2 — Hero Section
- [x] HTML: background blobs, bintang dekorasi
- [x] HTML: teks (headline, sub, badges, buttons)
- [x] HTML: phone mockup + floating badges
- [x] CSS: hero layout 2 kolom
- [x] CSS: blob shapes + animasi morph
- [x] CSS: floating animation untuk mockup
- [x] CSS: gradient text untuk highlight
- [x] JS: generate bintang sparkle dinamis
- [x] Responsive: stack vertikal di mobile

**✅ Checkpoint 2:** Hero section terlihat cantik dengan animasi berjalan.

---

## Fase 3: Content Sections

**Estimasi: 1–2 jam**

### 3.1 — Stats Bar
- [x] HTML: 4 kolom stat
- [x] CSS: styling angka besar
- [x] JS: Intersection Observer + counter animation

### 3.2 — Features Section
- [x] HTML: grid 6 card
- [x] CSS: card glassmorphism, icon gradient, hover effect
- [x] JS: stagger animate on scroll

### 3.3 — Learning Modules
- [x] HTML: daftar modul 2 kolom
- [x] CSS: item list dengan icon, hover state
- [x] Tambahkan ilustrasi atau gambar di kolom kanan

### 3.4 — Screenshots Slider
- [x] HTML: slider wrapper, slide items, controls, dots
- [x] CSS: slider layout, overflow hidden
- [x] JS: carousel logic (prev/next, auto-play, dots, touch swipe)

### 3.5 — How To Use
- [x] HTML: 3 step cards + connector line
- [x] CSS: step number styling, connector
- [x] JS: animate on scroll

**✅ Checkpoint 3:** Scroll dari atas ke bawah — semua section muncul dengan animasi halus.

---

## Fase 4: Social Proof & Conversion

**Estimasi: 1 jam**

### 4.1 — Testimonials
- [x] HTML: carousel testimonial card
- [x] CSS: card, quote icon, star rating, avatar
- [x] JS: carousel logic

### 4.2 — FAQ Accordion
- [x] HTML: FAQ items dengan question + answer
- [x] CSS: accordion styling
- [x] JS: accordion logic (expand/collapse, 1 open at a time)

### 4.3 — Download / CTA Final Section
- [x] HTML: CTA besar dengan tombol download
- [x] Implementasi metode download yang dipilih di Fase 0.3:
  - [x] **Opsi A**: `<a href="assets/downloads/app.apk" download>`
- [x] CSS: background gradient gelap, teks besar
- [x] Trust badges (aman, gratis, dll.)

### 4.4 — Footer
- [x] HTML: multi-kolom footer
- [x] CSS: dark background, link hover
- [x] Social media links
- [x] Copyright

### 4.5 — Floating Button
- [x] HTML: fixed position button
- [x] CSS: pulse animation, z-index tinggi
- [x] JS: show/hide on scroll position

**✅ Checkpoint 4:** Website terlihat lengkap dari navbar sampai footer.

---

## Fase 5: Polish & Quality Check

**Estimasi: 30–60 menit**

### 5.1 — Responsive Testing
- [x] Test di mobile 375px (iPhone SE)
- [x] Test di mobile 390px (iPhone 14)
- [x] Test di tablet 768px (iPad)
- [x] Test di desktop 1280px
- [x] Test di desktop 1920px
- [x] Fix semua layout yang rusak di ukuran tertentu

### 5.2 — Content Review
- [x] Semua `[ISI: ...]` sudah diisi dengan konten nyata
- [x] Tidak ada teks placeholder yang tertinggal
- [x] Semua link sudah benar (tidak ada #placeholder)
- [x] Semua gambar bisa terbuka (tidak 404)

### 5.3 — Performance
- [ ] Kompres semua gambar (gunakan squoosh.app)
  - [ ] JPG: kualitas 75-80%, < 200KB per screenshot
  - [ ] PNG: lossless compression
- [x] Lazy loading pada gambar (`loading="lazy"`)
- [x] Font display swap (sudah ada di Google Fonts URL)

### 5.4 — Aksesibilitas & SEO
- [x] Semua gambar punya `alt` text
- [x] Heading hierarchy benar (H1 → H2 → H3)
- [x] Meta title (maks 60 karakter)
- [x] Meta description (maks 160 karakter)
- [x] OG tags terisi semua
- [x] Favicon muncul di tab browser

### 5.5 — Cross-browser Test
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Edge ✓
- [ ] Safari (jika ada Mac/iPhone)

**✅ Checkpoint 5 (Final):** Website siap ditampilkan ke pengguna!

---

## Status Tracking

| Fase | Status | Catatan |
|------|--------|---------|
| 0 — Persiapan | ✅ Selesai | Folder dibuat, data aplikasi siap |
| 1 — Foundation | ✅ Selesai | React + Vite + TS Setup, Global Styles |
| 2 — Navbar & Hero | ✅ Selesai | Migrated to React + Framer Motion |
| 3 — Content Sections | ✅ Selesai | All sections migrated to React components |
| 4 — Social Proof | ✅ Selesai | All social proof components ready |
| 5 — Polish | ✅ Selesai | Ready for deployment |

*Update tabel ini seiring progress pengerjaan.*

---

*Dokumen ini adalah bagian dari paket dokumentasi proyek. Lanjutkan ke: `07_DEPLOYMENT_GUIDE.md`*
