'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import request from '@/utils/request';
import { Toaster, toast } from 'react-hot-toast';

export default function Transaction() {
  const router = useRouter();
  const params = useParams();
  const id = params.id; // Mendapatkan id kendaraan dari URL parameter

  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [kendaraan, setKendaraan] = useState(null);
  const [tanggalPinjam, setTanggalPinjam] = useState('');
  const [tanggalKembali, setTanggalKembali] = useState('');
  const [totalHarga, setTotalHarga] = useState(null);
  const [hargaPerHari, setHargaPerHari] = useState(0);

  // Ambil username dan userId dari localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('userId');
    if (storedUsername && storedUserId) {
      setUsername(storedUsername);
      setUserId(storedUserId);
    } else {
      console.warn('Username atau userId tidak ditemukan di localStorage');
    }

    // Ambil detail kendaraan berdasarkan kendaraanId (dari URL parameter)
    if (id) {
      request.get(`/kendaraan/${id}`)
        .then(response => {
          const data = response.data;
          setKendaraan(data);

          // Pastikan harga dari kendaraan disimpan dengan benar
          if (data.harga) {
            setHargaPerHari(Number(data.harga)); // Konversi ke number untuk berjaga-jaga
          } else {
            setHargaPerHari(0);
          }
        })
        .catch(err => {
          console.error('Gagal mengambil data kendaraan:', err);
        });
    }
  }, [id]);

  // Fungsi untuk menghitung total harga berdasarkan tanggal
  const hitungTotalHarga = () => {
    if (tanggalPinjam && tanggalKembali && hargaPerHari > 0) {
      const tanggalPeminjaman = new Date(tanggalPinjam);
      const tanggalPengembalian = new Date(tanggalKembali);

      // Set jam ke tengah malam untuk akurasi selisih hari
      const msPerHari = 1000 * 60 * 60 * 24;
      const start = Date.UTC(
        tanggalPeminjaman.getFullYear(),
        tanggalPeminjaman.getMonth(),
        tanggalPeminjaman.getDate()
      );
      const end = Date.UTC(
        tanggalPengembalian.getFullYear(),
        tanggalPengembalian.getMonth(),
        tanggalPengembalian.getDate()
      );

      const selisihHari = Math.floor((end - start) / msPerHari);

      if (selisihHari < 1) {
        toast.error('Tanggal kembali harus lebih dari tanggal pinjam!');
        setTotalHarga(null);
        return;
      }

      const total = selisihHari * hargaPerHari;
      setTotalHarga(total);
    } else {
      toast.error('Silakan isi tanggal dengan benar dan pastikan harga kendaraan tersedia.');
    }
  };

  // Fungsi untuk membuat transaksi dan mengirimkan ke backend
  const handleOrder = async () => {
    if (!userId || !id || !tanggalPinjam || !tanggalKembali) {
      toast.error('Harap lengkapi semua data!');
      return;
    }

    try {
      const response = await request.post('/transaksi', {
        userId,
        kendaraanId: id,
        tanggalPeminjaman: tanggalPinjam,
        tanggalPengembalian: tanggalKembali
      });

      const { totalHarga, transaksiId } = response.data;
      setTotalHarga(totalHarga);

      toast.success('Transaksi berhasil dibuat!');

      // Arahkan ke halaman payment dengan membawa transaksiId (opsional)
      router.push(`/checkout/payment/${transaksiId}`);
    } catch (error) {
      console.error('Gagal membuat transaksi:', error);
      toast.error('Gagal membuat transaksi!');
    }
  };

  return (
    <>
      <Toaster position='top-center' />
      <div className="min-h-screen bg-gray-100 p-0 font-sans">
        <Navbar userName={username} />
        <main className="mt-8 flex flex-col gap-8 px-4">
          <section className="bg-white p-6 border border-gray-300 rounded-xl shadow-sm flex-1">
            {kendaraan ? (
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <img
                  src={`${process.env.NEXT_PUBLIC_HOST}${kendaraan.gambar}`}
                  alt={kendaraan.nama}
                  className="w-full lg:w-1/2 rounded-lg"
                />
                <div className="flex-1 w-full">
                  <h2 className="text-xl font-bold mb-1">{kendaraan.nama}</h2>
                  <p className="text-blue-500 font-bold mb-4">
                    IDR {hargaPerHari.toLocaleString()},00 / Day
                  </p>
                  <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                    <div className="flex gap-3">
                      <input
                        type="date"
                        value={tanggalPinjam}
                        onChange={e => setTanggalPinjam(e.target.value)}
                        className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase"
                      />
                      <input
                        type="date"
                        value={tanggalKembali}
                        onChange={e => setTanggalKembali(e.target.value)}
                        className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={hitungTotalHarga}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                    >
                      Hitung Total Harga
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <p>Loading vehicle details...</p>
            )}
          </section>

          <div className="w-full flex flex-col mt-8">
            <div className="bg-white border border-gray-300 rounded-xl p-6 w-full">
              <div className="flex justify-between items-center text-base mb-4">
                <span className="font-semibold min-w-[120px]">Total payment</span>
                <span className="font-bold text-lg text-blue-600">
                  {totalHarga !== null ? `Rp ${totalHarga.toLocaleString()}` : 'Silakan hitung total harga'}
                </span>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleOrder}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg mt-2"
                >
                  Make Order
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}