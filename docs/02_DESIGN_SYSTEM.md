# 🎨 DESIGN SYSTEM
## Website Promosi Aplikasi Belajar Anak

---

## 1. Design Philosophy

Website ini menggunakan pendekatan **"Playful Professional"** — tampilan yang:
- **Ceria & Berwarna** → menarik perhatian anak dan orang tua
- **Bersih & Terstruktur** → terlihat profesional dan terpercaya
- **Modern & Premium** → menggunakan glassmorphism, gradien, dan animasi halus
- **Friendly & Accessible** → mudah dipahami semua kalangan

---

## 2. Color Palette

### Primary Colors (Warna Utama)
```css
--primary-100: #FFF9C4;   /* Kuning sangat muda */
--primary-200: #FFF176;   /* Kuning muda */
--primary-300: #FFEE58;   /* Kuning cerah */
--primary-400: #FFCA28;   /* Kuning emas (main) */
--primary-500: #FFB300;   /* Kuning oranye */
```

### Secondary Colors (Warna Pendukung)
```css
--secondary-100: #E8F5E9; /* Hijau sangat muda */
--secondary-200: #A5D6A7; /* Hijau muda */
--secondary-300: #66BB6A; /* Hijau segar */
--secondary-400: #43A047; /* Hijau (main) */
--secondary-500: #2E7D32; /* Hijau tua */
```

### Accent Colors (Warna Aksen)
```css
--accent-blue:   #42A5F5;  /* Biru langit */
--accent-pink:   #EC407A;  /* Merah muda */
--accent-purple: #AB47BC;  /* Ungu lembut */
--accent-orange: #FF7043;  /* Oranye */
--accent-teal:   #26C6DA;  /* Tosca */
```

### Neutral / Background
```css
--bg-primary:    #FAFBFF;  /* Background utama (putih kebiruan) */
--bg-secondary:  #F0F4FF;  /* Background section alternating */
--bg-dark:       #1A1A2E;  /* Dark section (footer, dll) */
--bg-card:       #FFFFFF;  /* Card background */
--text-primary:  #1E293B;  /* Teks utama */
--text-secondary:#64748B;  /* Teks sekunder */
--text-light:    #CBD5E1;  /* Teks pada background gelap */
```

### Gradient Utama
```css
--gradient-hero:   linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-cta:    linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-warm:   linear-gradient(135deg, #FFCA28 0%, #FF7043 100%);
--gradient-cool:   linear-gradient(135deg, #42A5F5 0%, #26C6DA 100%);
--gradient-nature: linear-gradient(135deg, #66BB6A 0%, #42A5F5 100%);
```

---

## 3. Typography

### Font Stack
```css
/* Heading - Playful namun terbaca */
--font-heading: 'Nunito', 'Fredoka One', sans-serif;

/* Body - Bersih dan profesional */
--font-body: 'Poppins', 'Inter', sans-serif;

/* Accent - Untuk highlight/badge */
--font-accent: 'Fredoka One', cursive;
```

### Import Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@300;400;500;600&family=Fredoka+One&display=swap" rel="stylesheet">
```

### Type Scale
```css
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px */
```

---

## 4. Spacing System

```css
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

---

## 5. Border Radius

```css
--radius-sm:   8px;
--radius-md:   12px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-2xl:  32px;
--radius-full: 9999px;  /* Pill shape */
```

---

## 6. Shadow System

```css
--shadow-sm:  0 2px 8px rgba(0,0,0,0.08);
--shadow-md:  0 4px 20px rgba(0,0,0,0.12);
--shadow-lg:  0 8px 40px rgba(0,0,0,0.16);
--shadow-xl:  0 16px 60px rgba(0,0,0,0.20);

/* Colored shadows untuk card */
--shadow-yellow: 0 8px 30px rgba(255, 202, 40, 0.35);
--shadow-green:  0 8px 30px rgba(102, 187, 106, 0.35);
--shadow-blue:   0 8px 30px rgba(66, 165, 245, 0.35);
--shadow-pink:   0 8px 30px rgba(236, 64, 122, 0.35);
```

---

## 7. Component Design

### 7.1 Buttons

**Primary CTA Button (Download Now)**
```
- Background: Gradient warm (kuning → oranye)
- Text: Putih, font Nunito Bold
- Padding: 16px 40px
- Border Radius: full (pill)
- Shadow: shadow-yellow
- Hover: scale(1.05) + shadow lebih besar
- Transition: all 0.3s ease
- Icon: ▶ Google Play (SVG)
```

**Secondary Button (Lihat Screenshot)**
```
- Background: Transparent
- Border: 2px solid primary color
- Text: Primary color
- Hover: Background primary color, text putih
```

### 7.2 Cards (Feature Cards)

```
- Background: White dengan glassmorphism ringan
- Border: 1px solid rgba(255,255,255,0.6)
- Border Radius: radius-xl (24px)
- Shadow: shadow-md
- Padding: 32px 24px
- Icon: 64px, rounded, gradient background
- Hover: translateY(-8px) + shadow-lg
- Transition: all 0.4s ease
```

### 7.3 Screenshot Cards

```
- Border Radius: radius-lg (16px)
- Shadow: shadow-md
- Overflow: hidden
- Hover: scale(1.03) + shadow-xl
- Aspect Ratio: 9/16 (portrait mobile)
```

### 7.4 Testimonial Cards

```
- Background: White
- Border: none, shadow-sm
- Border Radius: radius-xl
- Quote icon: Primary color, besar
- Star rating: Kuning emas (#FFB300)
- Avatar: rounded-full, 48x48px
```

### 7.5 Navbar

```
- Position: sticky, top: 0
- Background: rgba(255,255,255,0.95) + backdrop-blur
- Shadow on scroll: shadow-sm
- Logo: kiri, tinggi 40px
- Links: tengah (hidden di mobile)
- CTA Button: kanan
- Hamburger: muncul di mobile (≤768px)
```

---

## 8. Decorative Elements

### Background Shapes
- Blob shapes SVG di hero section (kuning, hijau, biru)
- Floating circles/dots sebagai dekorasi
- Wave/curve SVG sebagai section divider
- Star/sparkle animasi di hero

### Karakter / Ilustrasi
- Gunakan ilustrasi anak-anak flat style
- Warna cerah dan ramah
- Tersedia dari: undraw.co, storyset.com (free)
- Alternatif: emoji besar yang diperbesar dengan filter

### Badges & Labels
- "New Feature" badge → background kuning, teks gelap
- "Free Download" badge → background hijau, teks putih
- "4.8 ★" rating badge → background oranye

---

## 9. Animation Guidelines

### Principles
- **Subtle**: Animasi tidak boleh mengganggu keterbacaan
- **Purposeful**: Setiap animasi punya makna (feedback, transisi, dekorasi)
- **Smooth**: Gunakan easing `ease-out` atau `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce)
- **Performance**: Hanya gunakan `transform` dan `opacity` untuk animasi (GPU accelerated)

### Animasi yang Diimplementasikan

| Animasi | Trigger | Durasi | Elemen |
|---------|---------|--------|--------|
| Fade in + slide up | Scroll into view | 0.6s | Cards, sections |
| Float up-down | Continuous | 3s loop | Hero mockup |
| Pulse glow | Continuous | 2s loop | CTA button |
| Counter increment | Scroll into view | 2s | Statistik angka |
| Blob morph | Continuous | 8s loop | Background shapes |
| Sparkle twinkle | Continuous | 1.5s loop | Bintang dekorasi |
| Carousel slide | User interaction | 0.4s | Screenshot slider |
| Accordion expand | User click | 0.3s | FAQ |

### Scroll Animation Class
```css
/* Elemen ini akan animate saat masuk viewport */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
}
```

---

## 10. Responsive Breakpoints

```css
/* Mobile First */
--bp-sm:  576px;   /* Large mobile */
--bp-md:  768px;   /* Tablet */
--bp-lg:  992px;   /* Small desktop */
--bp-xl:  1200px;  /* Desktop */
--bp-2xl: 1400px;  /* Large desktop */
```

### Grid System
- Mobile: 1 kolom
- Tablet (768px+): 2 kolom
- Desktop (992px+): 3 atau 4 kolom

---

*Dokumen ini adalah bagian dari paket dokumentasi proyek. Lanjutkan ke: `03_CONTENT_GUIDE.md`*
