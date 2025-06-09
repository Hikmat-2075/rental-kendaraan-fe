'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import request from '@/utils/request';
import { useRouter, useParams } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

export default function Payment() {
  const router = useRouter();
  const { transaksiId } = useParams() // Mendapatkan transaksiId dari URL query parameter

  const [username, setUsername] = useState('');
  const [totalHarga, setTotalHarga] = useState(null);
  const [jumlahBayar, setJumlahBayar] = useState(0);
  const [kembalian, setKembalian] = useState(0);

  // Ambil username dari localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      console.warn('Username not found in localStorage');
    }

    // Ambil data transaksi berdasarkan transaksiId (dari URL parameter)
    if (transaksiId) {
      request.get(`/transaksi/${transaksiId}`)
        .then(response => {
          const data = response.data;
          console.log(data);
          setTotalHarga(data.totalHarga); // Ambil total harga transaksi

        })
        .catch(err => {
          console.error('Gagal mengambil data transaksi:', err);
        });
    }
  }, [transaksiId]);

  // Fungsi untuk menghitung kembalian
  const handlePayment = async () => {
    if (jumlahBayar >= totalHarga) {
      const kembali = jumlahBayar - totalHarga;
      setKembalian(kembali);
      
      try {
        // Kirim data pembayaran ke backend menggunakan POST request
        const response = await request.post('/pembayaran', {
          transaksiId,
          jumlahBayar
        });

        // Menangani response sukses
        const pembayaran = response.data;
        toast.success('Pembayaran berhasil!');
        
        // Arahkan ke halaman konfirmasi atau halaman lain setelah pembayaran berhasil
        router.push(`/confirmation/${pembayaran.id}`);
      } catch (error) {
        console.error('Gagal melakukan pembayaran:', error);
        toast.error('Pembayaran gagal, coba lagi!');
      }
    } else {
      toast.error('Jumlah bayar tidak cukup!');
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gray-100 p-0 font-sans">
        <Navbar userName={username} />
        <main className="mt-8 flex flex-col gap-8 px-4">
          <section className="bg-white p-6 border border-gray-300 rounded-xl shadow-sm flex-1">
            <h2 className="text-xl font-bold mb-6">Pembayaran</h2>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <p className="text-blue-500 font-bold mb-4">
                  Total Harga: {totalHarga !== null ? `Rp ${totalHarga.toLocaleString()}` : 'Loading...'}
                </p>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Jumlah Bayar</label>
                  <input
                    type="number"
                    value={jumlahBayar}
                    onChange={e => setJumlahBayar(Number(e.target.value))}
                    className="w-full p-2 bg-gray-100 rounded-md"
                    placeholder="Masukkan jumlah bayar"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Kembalian</label>
                  <input
                    type="number"
                    value={kembalian}
                    readOnly
                    className="w-full p-2 bg-gray-100 rounded-md"
                    placeholder="Kembalian"
                  />
                </div>
                <button
                  onClick={handlePayment}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                >
                  Bayar
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
