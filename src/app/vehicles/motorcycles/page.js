"use client";
import React from "react";

const motorList = [
  {
    name: "Yamaha R15",
    img: "/images/r15.png",
    price: "Rp 350.000 / hari",
    desc: "Motor sport ringan cocok untuk pemula."
  },
  {
    name: "Kawasaki Ninja 250",
    img: "/images/ninja250.png",
    price: "Rp 500.000 / hari",
    desc: "Performa tinggi dan tampilan agresif."
  },
  {
    name: "Honda PCX",
    img: "/images/pcx.png",
    price: "Rp 300.000 / hari",
    desc: "Skuter premium dengan kenyamanan maksimal."
  },
  {
    name: "Yamaha NMAX",
    img: "/images/nmax.png",
    price: "Rp 280.000 / hari",
    desc: "Kenyamanan dan efisiensi untuk harian."
  }
];

export default function Motorcycles() {
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

      {/* List Motor */}
      <div className="py-12 px-6 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Motor Tersedia</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {motorList.map((motor, idx) => (
            <div key={idx} className="bg-white text-gray-900 rounded-xl shadow-lg p-6 transition hover:scale-105 cursor-pointer">
              <img src={motor.img} alt={motor.name} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-bold text-lg">{motor.name}</h3>
              <p className="italic text-sm text-gray-600">{motor.desc}</p>
              <p className="font-semibold mt-2">{motor.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
