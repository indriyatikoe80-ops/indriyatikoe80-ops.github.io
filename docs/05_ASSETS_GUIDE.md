# 🖼️ ASSETS GUIDE
## Website Promosi Aplikasi Belajar Anak

---

## 1. Daftar Asset yang Dibutuhkan

### Wajib Ada (Must Have)

| File | Ukuran | Format | Keterangan |
|------|--------|--------|-----------|
| `logo.png` | min 200x200px | PNG (transparan) | Logo aplikasi |
| `app-icon.png` | 512x512px | PNG | Icon aplikasi |
| `hero-mockup.png` | min 600x800px | PNG (transparan) | Mockup HP dengan screenshot |
| `ss-01.jpg` s/d `ss-06.jpg` | min 720x1280px | JPG/PNG | Screenshot aplikasi |
| `og-image.jpg` | 1200x630px | JPG | Social sharing image |

### Opsional (Nice to Have)

| File | Ukuran | Format | Keterangan |
|------|--------|--------|-----------|
| `character-01.png` | bebas | PNG (transparan) | Karakter maskot |
| `character-02.png` | bebas | PNG (transparan) | Karakter maskot 2 |
| `demo-video.mp4` | maks 30MB | MP4 | Video demo singkat |
| `favicon.ico` | 32x32px | ICO/PNG | Favicon browser |

---

## 2. Panduan Screenshot Aplikasi

Screenshot adalah aset **paling penting** — langsung mempengaruhi keputusan download.

### Tips Mengambil Screenshot
1. Gunakan **mode DND (Do Not Disturb)** — notifikasi bersih
2. **Bersihkan status bar** — baterai penuh, sinyal penuh
3. Ambil di **resolusi tinggi** (gunakan HP dengan resolusi terbaik)
4. Screenshot di **momen terbaik** — tampilkan konten yang menarik, bukan halaman loading
5. Urutan screenshot yang disarankan:

```
ss-01.jpg → Halaman Utama / Home Screen (berikan kesan pertama terbaik)
ss-02.jpg → Menu atau Daftar Materi
ss-03.jpg → Contoh aktivitas belajar (huruf/angka/dll)
ss-04.jpg → Contoh mini game / permainan
ss-05.jpg → Contoh animasi / suara / fitur interaktif
ss-06.jpg → Halaman reward / pencapaian (jika ada)
```

### Tools Membuat Mockup Hero (Gratis)
- **smartmockups.com** → upload screenshot → pilih frame HP → export
- **mockupworld.co** → pilih template gratis → Photoshop
- **canva.com** → template mockup HP sudah tersedia
- **shots.so** → online, drag & drop, gratis

---

## 3. Panduan Logo

### Spesifikasi
- Format: **PNG dengan background transparan**
- Ukuran minimal: 200x200px (makin besar makin baik)
- Aspek rasio: Bebas (persegi, persegi panjang, atau custom)

### Jika Logo Belum Ada
Buat logo sederhana menggunakan:
- **Canva.com** (gratis) → logo maker
- **Looka.com** → AI logo generator
- **Hatchful by Shopify** (gratis)
- Atau cukup gunakan **nama aplikasi dengan font Fredoka One** sebagai logo sementara

---

## 4. Panduan Favicon

Buat favicon dari logo aplikasi:
- Ukuran: 32x32px, 64x64px, 180x180px (untuk Apple)
- Tools: **favicon.io** → upload logo → download semua ukuran
- Taruh di root folder: `favicon.ico`, `favicon-32x32.png`

---

## 5. Open Graph Image (og-image.jpg)

Gambar ini muncul saat link website dibagikan di WhatsApp, Facebook, dll.

**Spesifikasi:**
- Ukuran: **1200 x 630 px**
- Format: JPG
- Konten: Logo + Nama Aplikasi + Tagline + Background menarik

**Tools Membuat:**
- Canva.com → Social Media → Facebook Cover (resize ke 1200x630)

---

## 6. Sumber Ilustrasi Gratis

Jika butuh ilustrasi tambahan untuk dekorasi:

| Sumber | Jenis | Lisensi |
|--------|-------|---------|
| [undraw.co](https://undraw.co) | Ilustrasi SVG flat | Free |
| [storyset.com](https://storyset.com) | Ilustrasi animasi | Free (atribusi) |
| [freepik.com](https://freepik.com) | Berbagai format | Free (atribusi) |
| [flaticon.com](https://flaticon.com) | Icon PNG/SVG | Free (atribusi) |
| [icons8.com](https://icons8.com) | Icon & ilustrasi | Free (terbatas) |
| [emojicdn.elk.sh](https://emojicdn.elk.sh) | Emoji sebagai gambar | Free |

**Tema yang dicari:** anak belajar, buku, pensil, sekolah, bermain, bintang

---

## 7. Sumber Icon (untuk Feature Cards, dll.)

Website menggunakan **emoji Unicode** untuk icon (tidak perlu library tambahan):

```
📚 Belajar        🎮 Game          🔊 Suara
✏️ Menulis        🔢 Angka         🌟 Prestasi
🧩 Puzzle         🏆 Reward        🛡️ Aman
📶 Offline        🎵 Musik         🎨 Kreativitas
👶 Anak           👩‍🏫 Guru          📱 Android
```

Alternatif: gunakan **Phosphor Icons** atau **Lucide Icons** (SVG, free)

---

## 8. Checklist Asset Sebelum Build

```
[ ] logo.png              → Tersedia, background transparan
[ ] app-icon.png          → Tersedia, 512x512px
[ ] favicon.ico           → Dibuat dari logo
[ ] hero-mockup.png       → Dibuat dengan smartmockups / canva
[ ] og-image.jpg          → Dibuat dengan canva (1200x630px)
[ ] ss-01.jpg             → Screenshot ke-1 siap
[ ] ss-02.jpg             → Screenshot ke-2 siap
[ ] ss-03.jpg             → Screenshot ke-3 siap
[ ] ss-04.jpg             → Screenshot ke-4 siap
[ ] ss-05.jpg             → Screenshot ke-5 siap
[ ] ss-06.jpg             → Screenshot ke-6 siap
```

---

## 9. Struktur Folder Assets

```
assets/
├── images/
│   ├── logo.png
│   ├── app-icon.png
│   ├── hero-mockup.png
│   ├── og-image.jpg
│   └── screenshots/
│       ├── ss-01.jpg
│       ├── ss-02.jpg
│       ├── ss-03.jpg
│       ├── ss-04.jpg
│       ├── ss-05.jpg
│       └── ss-06.jpg
├── icons/
│   └── (opsional: SVG icons)
└── downloads/
    └── app.apk             ← Taruh file APK di sini jika ada
```

---

*Dokumen ini adalah bagian dari paket dokumentasi proyek. Lanjutkan ke: `06_EXECUTION_PLAN.md`*
