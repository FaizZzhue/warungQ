# Warung Q 🍛

Warung Q adalah aplikasi web interaktif berbasis React yang mensimulasikan sistem pemesanan makanan digital untuk warung makan Indonesia. Project ini dibangun sebagai implementasi **Basic State Management** menggunakan `useState` pada React.

---

## Tech Stack

- **React 19** — UI library
- **Vite 7** — Build tool & dev server
- **JavaScript** — Bukan TypeScript
- **Tailwind CSS v4** — Utility-first styling
- **React Icons** — Icon library
- **Google Fonts** — Plus Jakarta Sans + Inter

---

## Fitur Utama

- Landing page dengan Hero, Info Strip, dan Banner Promo
- Menampilkan daftar menu makanan dari data statis (12 item)
- Filter menu berdasarkan kategori — Semua / Makanan / Minuman / Snack
- Section **Menu Unggulan** menampilkan item dengan `featured: true`
- Toggle **favorite** per item menu menggunakan `useState`
- **Counter quantity** untuk menambah/mengurangi jumlah pesanan
- **Conditional rendering** — badge "Habis", badge item, cart kosong, diskon aktif
- Cart summary dengan subtotal, diskon, dan total harga otomatis
- **Sistem voucher diskon 20%** — berlaku untuk pemesanan nasi + minuman saja
- Input nomor meja sebelum submit pesanan
- Navbar responsif dengan hamburger menu untuk mobile

---

## Struktur Folder

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navbar.jsx
│   │   ├── NavMobile.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       └── Card.jsx
├── constans/
│   ├── hero.js
│   ├── info.js
│   ├── menu.js
│   └── navigations.js
├── container/
│   ├── Cart/
│   │   └── CartSummary.jsx
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── HeroText.jsx
│   ├── Info/
│   │   ├── Info.jsx
│   │   └── InfoCard.jsx
│   └── Menu/
│       ├── Menu.jsx
│       ├── MenuContent.jsx
│       ├── MenuCard.jsx
│       ├── MenuList.jsx
│       ├── FeaturedMenu.jsx
│       └── CategoryFilter.jsx
├── hooks/
│   ├── useCart.js
│   ├── useFavorite.js
│   └── useFilter.js
├── App.jsx
├── App.css
└── index.css
```

---

## Cara Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

---

## Implementasi useState

| Hook | Kegunaan |
|---|---|
| `useCart.js` | Mengelola item di keranjang, quantity, subtotal, diskon, dan total |
| `useFavorite.js` | Toggle favorite per item menu |
| `useFilter.js` | Menyimpan kategori aktif untuk filter menu |

---

## Logika Diskon

Diskon 20% berlaku dengan ketentuan:
- User **klik tombol "Klaim sekarang"** di section Promo terlebih dahulu
- Keranjang hanya berisi item **nasi** (kategori Makanan yang mengandung kata "nasi") dan **minuman**
- Tidak boleh ada item Snack atau makanan non-nasi di keranjang
- Diskon dihitung otomatis dari total keseluruhan setelah syarat terpenuhi

---

## Author

**Afaizyr** — GDGoC Frontend Division 2025/2026