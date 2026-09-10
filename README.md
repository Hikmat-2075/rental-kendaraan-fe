# rental-kendaraan-fe

Aplikasi web untuk sistem rental/penyewaan kendaraan (mobil & motor) — menyediakan antarmuka bagi pengguna untuk menelusuri kendaraan, melakukan proses penyewaan hingga pembayaran, serta antarmuka admin untuk mengelola armada, pengguna, dan transaksi. Merupakan frontend companion dari backend `rental-kendaraan-be`.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS v4, Bootstrap 5
- **HTTP Client:** Axios (dengan interceptor untuk auto-attach token)
- **Autentikasi:** Token disimpan di cookie (`js-cookie`), dikirim sebagai Bearer token
- **Validasi:** Zod
- **Notifikasi UI:** React Hot Toast, React Toastify
- **Ikon:** React Icons
- **Linting:** ESLint (eslint-config-next)

## Fitur Utama

**Halaman Publik & Pengguna**
- Beranda dengan promo kendaraan (mobil & motor)
- Daftar kendaraan per kategori (mobil / motor)
- Login & registrasi
- Profil pengguna

**Alur Penyewaan (Checkout)**
- Review detail penyewaan
- Proses pembayaran (input jumlah bayar & perhitungan kembalian otomatis)
- Halaman hasil/konfirmasi transaksi

**Riwayat**
- Riwayat transaksi penyewaan milik pengguna

**Panel Admin**
- Dashboard ringkasan admin
- Manajemen pengguna (lihat, edit)
- Manajemen transaksi
- Manajemen kendaraan — mobil & motor (tambah, lihat detail, edit, hapus)

## Instalasi & Menjalankan Proyek

### Prasyarat
- Node.js
- Backend `rental-kendaraan-be` sudah berjalan dan dapat diakses

### Langkah instalasi

```bash
# 1. Clone repository
git clone <repository-url>
cd rental-kendaraan-fe

# 2. Install dependencies
npm install

# 3. Buat file .env.local berisi alamat backend API
```

Variabel environment yang diperlukan: `NEXT_PUBLIC_HOST` (base URL backend API, contoh: `http://localhost:8080`).

```bash
# 4. Jalankan dalam mode development
npm run dev
```

Aplikasi berjalan di `http://localhost:3000` secara default.

### Build untuk production

```bash
npm run build
npm run start
```

## Struktur Folder Singkat

```
src/
├── app/
│   ├── home/              # Beranda & profil pengguna
│   ├── auth/               # Login & registrasi
│   ├── vehicles/            # Daftar mobil & motor
│   ├── checkout/             # Alur review → pembayaran → hasil transaksi
│   ├── history/             # Riwayat transaksi
│   └── admin/               # Dashboard, manajemen pengguna/kendaraan/transaksi
├── components/            # Navbar, SidebarAdmin, dll
└── utils/
    └── request.js            # Wrapper Axios (base URL & interceptor token)
```
