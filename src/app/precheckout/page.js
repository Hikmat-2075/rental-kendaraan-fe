"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const carImages = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
];

export default function Precheckout() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));

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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        {/* Image Carousel */}
        <div className="relative w-full max-w-md">
          <img
            src={carImages[current]}
            alt="Car"
            className="w-full h-56 object-cover rounded-lg shadow"
          />
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow border"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow border"
            onClick={nextSlide}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {carImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${current === idx ? "bg-black" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>

        {/* Vehicle Info */}
        <div className="w-full max-w-md bg-white rounded-xl shadow p-6 mt-4">
          <h2 className="text-2xl font-bold mb-2">Lamborghini Urus 1000cc</h2>
          <p className="text-lg text-gray-700 mb-4">
            Price at <span className="font-bold">IDR 1.000.000,00 / Day</span>
          </p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 font-semibold shadow">
            Vehicle Description
          </button>
          <div className="text-left text-sm">
            <p className="font-semibold mb-1">Lamborghini Urus 1000cc</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Mesin: 4.0-liter V8 twin-turbocharged</li>
              <li>Kapasitas Max Penumpang: 6 penumpang</li>
              <li>Warna: Silver</li>
              <li>Type:</li>
              <li>Merek:</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer Buttons */}
      <div className="w-full grid grid-cols-2">
        <button
          className="bg-blue-500 text-white py-4 text-lg font-bold rounded-none border-r border-white hover:bg-blue-600 transition"
          onClick={() => router.back()}
        >
          BACK
        </button>
        <button
          className="bg-blue-500 text-white py-4 text-lg font-bold rounded-none hover:bg-blue-600 transition"
          onClick={() => router.push("/pembayaran")}
        >
          RENT
        </button>
      </div>
    </div>
  );
}
