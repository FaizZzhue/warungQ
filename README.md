# Warung Q 🍛

Warung Q adalah aplikasi web interaktif berbasis React yang mensimulasikan sistem pemesanan makanan digital untuk warung makan Indonesia. Project ini dibangun sebagai implementasi **Basic State Management** menggunakan `useState` pada React.

---

## Tech Stack

- **React** — UI library
- **Vite** — Build tool & dev server
- **JavaScript** — Bukan TypeScript
- **Tailwind CSS** — Utility-first styling
- **Google Fonts** — Plus Jakarta Sans + Inter

---

## Fitur Utama

- Menampilkan daftar menu makanan dari data statis
- Toggle **favorite** per item menu menggunakan `useState`
- **Counter quantity** untuk menambah/mengurangi jumlah pesanan
- **Conditional rendering** — badge "Habis", cart kosong, total harga
- Filter menu berdasarkan kategori (Semua / Makanan / Minuman / Snack)
- Cart summary dengan total harga otomatis

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
| `useCart.js` | Mengelola item di keranjang, quantity, dan total harga |
| `useFavorite.js` | Toggle favorite per item menu |
| `useFilter.js` | Menyimpan kategori aktif untuk filter menu |

---

## Author

**Afaizyr** — GDGoC Frontend Division 2025/2026