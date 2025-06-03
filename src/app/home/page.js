"use client";
import React, { useRef } from "react";

const promoCars = [
  {
    name: "Toyota Supra",
    img: "/images/supra.png",
    price: "Rp 1.500.000 / hari",
    desc: "Mobil sport legendaris, cocok untuk speed lover."
  },
  {
    name: "Mazda RX-7",
    img: "/images/rx7.png",
    price: "Rp 1.200.000 / hari",
    desc: "Rotary engine dengan handling mantap."
  },
  {
    name: "Lamborghini Huracan",
    img: "/images/lambo.png",
    price: "Rp 5.000.000 / hari",
    desc: "Desain mewah, performa buas."
  },
  {
    name: "BMW M4",
    img: "/images/m4.png",
    price: "Rp 2.000.000 / hari",
    desc: "Coupe bertenaga untuk pengalaman elegan."
  },
  {
    name: "Nissan GTR R35",
    img: "/image/NissanGTR.png",
    price: "Rp 2.500.000 / hari",
    desc: "Godzilla jalanan dengan akselerasi brutal."
  },
  {
    name: "Mercedes AMG GT",
    img: "/images/amg.png",
    price: "Rp 3.000.000 / hari",
    desc: "Perpaduan antara power dan kemewahan."
  },
  {
    name: "Porsche 911",
    img: "/images/911.png",
    price: "Rp 3.200.000 / hari",
    desc: "Ikon abadi, stabil di semua kondisi."
  }
];

export default function Home() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

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

      {/* Section di bawahnya overlap ke atas */}
      <div className="bg-gradient-to-b from-[#3b5bdb] to-[#5f8dff] pt-12 pb-20 -mt-8 z-0 relative">
        <section className="flex justify-center gap-16">
        <a
          href="/vehicles/cars"
          className="bg-white rounded-2xl shadow-md flex flex-col items-center px-12 py-10 transition hover:scale-105 cursor-pointer"
        >
          <img src="https://img.icons8.com/ios/100/car--v1.png" alt="Car" className="w-24 h-24 mb-4" />
          <p className="font-bold text-lg text-gray-800">Cars</p>
        </a>

        <a
          href="/vehicles/motorcycles"
          className="bg-white rounded-2xl shadow-md flex flex-col items-center px-12 py-10 transition hover:scale-105 cursor-pointer"
        >
          <img src="https://img.icons8.com/ios/100/motorcycle.png" alt="Motorcycle" className="w-24 h-24 mb-4" />
          <p className="font-bold text-lg text-gray-800">Motorcycle</p>
        </a>

        </section>
      </div>

      {/* Hot Products */}
      <div className="bg-white py-12">
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-extrabold text-black">Hot Promo this week</h2>
            <span className="text-2xl">🔥</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full text-2xl text-gray-700 hover:bg-gray-100 transition"
              onClick={handlePrev}
              aria-label="Scroll left"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div
              className="flex gap-8 px-2"
              ref={carouselRef}
              style={{
                scrollBehavior: "smooth",
                overflowX: "hidden",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {promoCars.map((car, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 rounded-2xl flex flex-col items-center justify-center min-w-[260px] min-h-[230px] shadow transition px-4 py-4"
                >
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-44 h-28 object-contain mb-2"
                  />
                  <p className="font-semibold text-sm text-gray-800">{car.name}</p>
                  <p className="text-[12px] text-gray-600 italic text-center">{car.desc}</p>
                  <p className="text-[12px] text-gray-900 font-bold mt-1">{car.price}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full text-2xl text-gray-700 hover:bg-gray-100 transition"
              onClick={handleNext}
              aria-label="Scroll right"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
