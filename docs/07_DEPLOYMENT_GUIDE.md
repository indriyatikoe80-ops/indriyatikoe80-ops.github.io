# 🚀 DEPLOYMENT GUIDE
## Website Promosi Aplikasi Belajar Anak

---

## Gambaran Umum

Karena website ini adalah **Static Site** (hanya berisi HTML, CSS, JavaScript, dan gambar/aset), proses deployment (mempublikasikan ke internet) sangatlah mudah dan bisa dilakukan **100% gratis**.

Pilih salah satu dari 3 platform hosting gratis yang paling populer di bawah ini.

---

## Opsi 1: Netlify (Sangat Direkomendasikan)
Netlify adalah platform terbaik untuk hosting static site karena sangat cepat, gratis, dan mudah digunakan.

### Cara Deploy dengan Drag & Drop (Tanpa Command Line)
1. Jalankan perintah `npm run build` di terminal Anda. Ini akan menghasilkan folder `dist`.
2. Buka browser dan pergi ke [app.netlify.com/drop](https://app.netlify.com/drop)
3. Buat akun atau login (bisa menggunakan akun Google/GitHub).
4. Anda akan melihat area bertuliskan **"Drag and drop your site output folder here"**.
5. Buka folder proyek Anda di komputer (`d:\candra\coba\promosi`).
6. Tarik (drag) folder `dist` (bukan seluruh folder proyek) dan lepaskan (drop) ke area di Netlify.
7. Tunggu beberapa detik, website Anda akan langsung online!
7. **Mengganti Nama Domain:** 
   - Klik `Site settings` > `Change site name`.
   - Ubah menjadi sesuatu yang mudah diingat, contoh: `aplikasi-belajar-anak.netlify.app`.

### Cara Update Website
Jika Anda mengubah teks atau gambar:
1. Masuk ke dashboard Netlify Anda.
2. Klik nama website Anda.
3. Masuk ke tab **Deploys**.
4. Tarik dan lepaskan kembali folder `promosi` yang sudah diperbarui ke kotak "Drag and drop your site output folder here".

---

## Opsi 2: Vercel

Vercel sangat mirip dengan Netlify, juga gratis dan sangat cepat.

### Cara Deploy
1. Daftar atau login di [vercel.com](https://vercel.com).
2. Download Vercel CLI di komputer Anda (membutuhkan Node.js). Buka terminal dan ketik: `npm i -g vercel`.
3. Buka terminal di folder proyek Anda (`d:\candra\coba\promosi`).
4. Ketik perintah: `vercel`
5. Ikuti petunjuk di layar:
   - Set up and deploy? `Y`
   - Which scope? (Tekan Enter)
   - Link to existing project? `N`
   - What's your project's name? `promosi-aplikasi-belajar`
   - In which directory is your code located? `./`
6. Vercel akan mengunggah file Anda dan memberikan link live (contoh: `promosi-aplikasi-belajar.vercel.app`).

---

## Opsi 3: GitHub Pages

Pilihan ini baik jika Anda sudah familiar dengan Git dan GitHub.

### Cara Deploy
1. Buat repository publik baru di [github.com](https://github.com) (misal: `promosi-app`).
2. Buka terminal di folder proyek Anda.
3. Jalankan perintah Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[USERNAME-ANDA]/promosi-app.git
   git push -u origin main
   ```
4. Di halaman GitHub repository Anda, klik menu **Settings**.
5. Di sidebar kiri, cari bagian **Pages**.
6. Pada opsi **Source**, ubah dari `None` menjadi `main` branch. Klik Save.
7. Tunggu sekitar 1-2 menit. Website Anda akan aktif di: `https://[USERNAME-ANDA].github.io/promosi-app/`

---

## Menambahkan Custom Domain (Opsional)

Jika Anda ingin website terlihat lebih profesional dengan domain sendiri (misal: `www.aplikasibelajaranak.com` atau `.id`), berikut langkah umumnya:

1. Beli nama domain dari registrar lokal seperti Niagahoster, DomaiNesia, atau Hostinger. (Domain `.id` atau `.my.id` relatif murah).
2. Jika Anda menggunakan **Netlify**:
   - Di dashboard Netlify, masuk ke `Domain management` > `Add custom domain`.
   - Masukkan nama domain Anda.
   - Anda akan diminta mengarahkan DNS record dari registrar Anda ke Netlify (biasanya mengubah Nameservers).
3. Setelah DNS disetel, Netlify akan secara otomatis memasangkan SSL/HTTPS (gembok hijau) gratis untuk website Anda.

---

## Checklist Sebelum Deploy

Pastikan Anda telah mengecek hal-hal berikut sebelum online:

- [ ] Semua file HTML, CSS, JS sudah tersimpan.
- [ ] Folder `assets` beserta seluruh gambar dan icon ikut ter-upload.
- [ ] Ukuran gambar sudah diperkecil (optimized) agar tidak berat saat dimuat.
- [ ] Tidak ada file yang link-nya mengarah ke folder lokal di komputer Anda (misal `C:/users/...`). Semua link gambar harus relatif seperti `assets/images/logo.png`.
- [ ] Uji coba link tombol WhatsApp/Download, pastikan berfungsi.
- [ ] Periksa website di HP sebelum disebarkan ke publik.

---

*Dokumen ini melengkapi seri dokumentasi website promosi.*
