"use client";
import React from "react";

const carList = [
  {
    name: "Toyota Avanza",
    img: "/images/avanza.png",
    price: "Rp 500.000 / hari",
    desc: "Mobil keluarga nyaman dan irit bahan bakar."
  },
  {
    name: "Honda Brio",
    img: "/images/brio.png",
    price: "Rp 400.000 / hari",
    desc: "City car lincah cocok untuk jalanan perkotaan."
  },
  {
    name: "Mitsubishi Xpander",
    img: "/images/xpander.png",
    price: "Rp 550.000 / hari",
    desc: "MPV dengan tampilan modern dan fitur lengkap."
  },
  {
    name: "Daihatsu Terios",
    img: "/images/terios.png",
    price: "Rp 600.000 / hari",
    desc: "SUV tangguh untuk semua medan."
  }
];

export default function ListMobilPage() {
  return (
    <div className="min-h-screen font-sans bg-[#3b5bdb] relative overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-black rounded-b-[25px] shadow-lg z-10 relative">
        <nav className="flex items-center justify-between px-12 py-5">
          <div className="logo text-3xl font-bold text-white tracking-tight">
            VeloRent
          </div>
          <ul className="flex gap-16 text-white font-semibold text-lg">
            <li>
              <a href="/home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">History</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium hover:text-blue-400 transition cursor-pointer">Hello, User !</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      {/* List Mobil */}
      <div className="py-12 px-6 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Mobil Tersedia</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carList.map((car, idx) => (
            <div key={idx} className="bg-white text-gray-900 rounded-xl shadow-lg p-6 transition hover:scale-105 cursor-pointer">
              <img src={car.img} alt={car.name} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-bold text-lg">{car.name}</h3>
              <p className="italic text-sm text-gray-600">{car.desc}</p>
              <p className="font-semibold mt-2">{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
