# Master Execution Plan: React Migration & Finalization

## 1. Executive Summary & Status

### Deskripsi Tugas
Melakukan finalisasi migrasi codebase dari Vanilla HTML/CSS/JS ke React.js + Vite + TypeScript, serta menyelesaikan fungsionalitas UI sesuai dokumentasi (fitur interaktif, slider, animasi, data dinamis).

### Status Sistem Terkini (Berdasarkan Analisa)
- **Infrastruktur:** React + Vite + TypeScript telah diinisialisasi. Library `framer-motion` dan `lucide-react` telah diinstal.
- **Komponen:** `Navbar`, `Hero`, `Stats`, `Features`, `Screenshots`, `Testimonials`, `FAQ`, `Download`, `Footer` telah dibuat dalam bentuk kerangka (skeleton) dengan data *hardcoded* (dummy).
- **Struktur Folder:** Folder `src/components/` telah terbentuk, namun file CSS global (`src/index.css`) masih mengandung beberapa sisa struktur lama.
- **DOKUMENTASI KONTRADIKTIF (BLOCKER):**
  1. `01_PROJECT_OVERVIEW.md` dan `03_CONTENT_GUIDE.md` masih mereferensikan "Google Play Store" (Line 13, 27, 28, 32, 119), bertentangan dengan instruksi user sebelumnya ("belum rencana memasukkan ke playstore", fokus ke WhatsApp/Direct APK).
  2. Struktur direktori pada `01_PROJECT_OVERVIEW.md` (Line 81-111) belum diperbarui ke struktur React Vite (`src/`, `public/`).
- **VARIABEL TIDAK DIDEFINISIKAN (BLOCKER):**
  - Data aktual (Nama Aplikasi, Deskripsi, Link WhatsApp, Testimoni, FAQ) belum disediakan. Masih menggunakan format `[ISI: ...]`.

---

## 2. Affected Files & Dependency

### File yang Harus Diperbarui
1. `docs/01_PROJECT_OVERVIEW.md` (Memperbaiki kontradiksi Play Store & struktur folder)
2. `docs/03_CONTENT_GUIDE.md` (Memperbaiki kontradiksi Play Store & mengisi variabel)
3. `src/data/content.ts` *(Baru)* (Menyimpan semua data dinamis/variabel konten agar tidak hardcoded di komponen)
4. `src/components/Hero.tsx` (Integrasi data dari `content.ts`)
5. `src/components/Features.tsx` (Integrasi data dari `content.ts`)
6. `src/components/Stats.tsx` (Integrasi data dari `content.ts` & animasi counter numerik)
7. `src/components/Screenshots.tsx` (Membuat carousel interaktif menggunakan `framer-motion` & aset aktual)
8. `src/components/Testimonials.tsx` (Integrasi data dari `content.ts`)
9. `src/components/FAQ.tsx` (Integrasi data dari `content.ts`)
10. `src/components/Download.tsx` (Integrasi link WhatsApp aktual)

### Relasi Antar File
- `src/App.tsx` merender semua komponen di dalam `src/components/`.
- Semua komponen di `src/components/` akan bergantung pada `src/data/content.ts` sebagai *Single Source of Truth* untuk teks dan link.

---

## 3. Implementation Step-by-Step (Checklist)

> **⚠️ PERHATIAN EXECUTOR:** JANGAN jalankan langkah 3.2 hingga 3.6 SEBELUM User menyelesaikan Langkah 3.1.

### Tahap 3.1: Resolusi Blocker (User Action Required)
- [x] Minta pengguna untuk mengklarifikasi apakah rujukan "Play Store" di dokumen harus dihapus total dan diganti ke "WhatsApp/Direct APK".
- [x] Minta pengguna untuk mengisi nilai variabel `[ISI: ...]` (Nama Aplikasi, Tagline, Nomor WA, dsb).
- [x] **Audit Point:** Pastikan tidak ada lagi teks `[ISI: ...]` di dokumen `03_CONTENT_GUIDE.md`.

### Tahap 3.2: Perbaikan Dokumentasi (Docs as Source of Truth)
- [ ] Buka `docs/01_PROJECT_OVERVIEW.md`.
- [ ] Hapus baris 13, 27-29, 32, 119 yang menyebutkan Play Store. Ganti dengan "Direct WhatsApp Download".
- [ ] Ubah struktur folder di baris 81-111 menjadi struktur Vite React (`src/`, `public/`).
- [ ] **Audit Point:** Pastikan struktur direktori di dokumen mencerminkan kondisi riil sistem React.

### Tahap 3.3: Pembuatan Data Layer
- [x] Buat file `src/data/content.ts`.
- [x] Ekspor konstanta (misal: `export const APP_DATA = {...}`) berisi nama aplikasi, tagline, link WA, array fitur, array testimoni, dan FAQ berdasarkan `docs/03_CONTENT_GUIDE.md` yang telah diisi user.
- [x] **Audit Point:** Pastikan file `content.ts` tidak memiliki error sintaks TypeScript dan semua tipe data terdefinisi.

### Tahap 3.4: Integrasi Data ke Komponen
- [x] Buka `src/components/Hero.tsx`. Impor `APP_DATA` dan ganti teks hardcoded dengan `APP_DATA.hero`.
- [x] Buka `src/components/Features.tsx`. Ganti array `features` dengan `APP_DATA.features`.
- [x] Buka `src/components/Stats.tsx`. Ganti array statis dengan `APP_DATA.stats`. Implementasikan animasi angka menggunakan `framer-motion` (useSpring/useTransform) atau `setInterval`.
- [x] Buka `src/components/Testimonials.tsx`. Ganti array `testimonials` dengan `APP_DATA.testimonials`.
- [x] Buka `src/components/FAQ.tsx`. Ganti array `faqs` dengan `APP_DATA.faqs`.
- [x] Buka `src/components/Download.tsx`. Ganti link `href` dengan `APP_DATA.email`.
- [x] **Audit Point:** Pastikan tidak ada lagi teks "Dummy" atau placeholder di dalam file komponen `.tsx`.

### Tahap 3.5: Implementasi Carousel Screenshot
- [ ] Buka `src/components/Screenshots.tsx`.
- [ ] Tambahkan logika carousel interaktif (drag-to-scroll atau tombol Next/Prev) menggunakan properti `drag="x"` dari `framer-motion` atau CSS `scroll-snap-type`.
- [ ] Sambungkan dengan `APP_DATA.screenshots` (array path gambar).
- [ ] **Audit Point:** Uji di viewport mobile dan desktop, pastikan slider dapat digeser (draggable) dan tidak pecah (overflow tersembunyi).

### Tahap 3.6: Penyisipan Aset Visual
- [ ] Hapus semua file `.jpg`, `.png`, `.svg` sementara (jika ada).
- [ ] Tempatkan aset asli (Logo, App Icon, Screenshot riil) yang diberikan user ke folder `public/assets/images/`.
- [ ] **Audit Point:** Cek path di `content.ts` (misal: `/assets/images/logo.png`) dan pastikan terhubung sempurna saat di-render.

---

## 4. Testing & Validation Protocol

### Unit Test (Opsional jika setup Vitest ditambahkan)
- Buat folder `src/tests/`.
- Validasi fungsi render dasar menggunakan `@testing-library/react`.
  - Komponen `Hero` merender Nama Aplikasi.
  - Komponen `Download` memiliki URL WhatsApp yang benar.

### Execution
- Jalankan aplikasi secara lokal untuk validasi:
  ```bash
  npm run dev
  ```
  *(Atau gunakan background command `start /B npm run dev` di Windows)*

### Integration / E2E Test
- Verifikasi visual:
  1. Buka browser pada `http://localhost:5173`.
  2. Lakukan klik pada menu "Navigasi" (Beranda, Fitur, dll) — pastikan *smooth scroll* berfungsi.
  3. Lakukan pengujian di ukuran layar HP (lebar < 768px) menggunakan Chrome DevTools (Responsive Mode). Pastikan Hamburger Menu berfungsi.
  4. Klik tombol CTA WhatsApp — pastikan terbuka tab baru mengarah ke `wa.me/...`.
