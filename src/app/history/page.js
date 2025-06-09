"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import request from "@/utils/request";
import Navbar from "@/components/Navbar";

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      console.warn("Username tidak ditemukan di localStorage");
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.warn("ID user tidak ditemukan di localStorage");
      setLoading(false);
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await request.get(`/transaksi/user/${userId}`);
        if (res.status === 200) {
          console.log("Data history:", res.data); // ✅ Debug response
          setHistory(res.data);
        } else {
          console.error("Gagal mengambil data history:", res.statusText);
        }
      } catch (err) {
        console.error("Terjadi kesalahan saat mengambil history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-blue-400 to-blue-100 overflow-x-hidden">
      {/* Navbar */}
      <Navbar userName={username} />

      {/* Main Content */}
      <div className="flex justify-center items-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-5xl flex flex-col gap-8">
          <h1 className="text-4xl font-extrabold text-center mb-4">HISTORY</h1>

          {loading ? (
            <div className="text-center text-gray-500">Memuat data transaksi...</div>
          ) : history.length === 0 ? (
            <div className="text-center text-gray-500">Tidak ada riwayat transaksi.</div>
          ) : (
            <div className="flex flex-col gap-6">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-100 rounded-2xl shadow-md px-6 py-4 gap-6"
                >
                  {/* Placeholder image */}
                  <img
                    src="/no-image.png"
                    alt={item.namaKendaraan}
                    className="w-48 h-28 object-contain"
                  />
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-2xl font-extrabold">{item.namaKendaraan}</div>
                    <div className="font-semibold mt-2">
                      Pinjam: {item.tanggalPeminjaman}
                    </div>
                    <div className="font-semibold">
                      Kembali: {item.tanggalPengembalian}
                    </div>
                    <div className="font-semibold text-sm text-gray-600">
                      Status: {item.statusTransaksi}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-lg font-bold">
                      Rp{item.totalHarga.toLocaleString("id-ID")}
                    </div>
                    <button
                      onClick={() => router.push("/kendaraan")}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-2 rounded-full transition"
                    >
                      Sewa Lagi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
