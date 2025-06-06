"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import request from "@/utils/request";
import Navbar from "@/components/Navbar";

const historyData = [
    {
        name: "Lamborgini Urus",
        image: "https://www.pngmart.com/files/22/Ferrari-PNG-Image.png",
        price: "IDR 7.000.000,00",
        orderDate: "tanggal pemesanan",
        returnDate: "tanggal pengembalian",
    },
    {
        name: "Toyota Supra",
        image: "https://www.pngmart.com/files/22/Toyota-Corolla-PNG-Image.png",
        price: "IDR 10.000.000,00",
        orderDate: "tanggal pemesanan",
        returnDate: "tanggal pengembalian",
    },
    {
        name: "BMW M4",
        image: "https://www.pngmart.com/files/22/Hyundai-Santa-Fe-PNG-Image.png",
        price: "IDR 5.000.000,00",
        orderDate: "tanggal pemesanan",
        returnDate: "tanggal pengembalian",
    },
];

export default function HistoryPage() {
    const router = useRouter();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");

    // Ambil username dari localStorage
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            console.warn("Username tidak ditemukan di localStorage");
        }
    }, []);
    return (
        <div className="min-h-screen font-sans bg-gradient-to-b from-blue-400 to-blue-100 overflow-x-hidden">
            {/* Navbar */}
            <Navbar userName={username} />

            {/* Centered Main Content */}
            <div className="flex justify-center items-center px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-5xl flex flex-col gap-8">
                    <h1 className="text-4xl font-extrabold text-center mb-4">HISTORY</h1>
                    <div className="flex flex-col gap-6">
                        {historyData.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center bg-gray-100 rounded-2xl shadow-md px-6 py-4 gap-6"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-48 h-28 object-contain"
                                />
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-2xl font-extrabold">{item.name}</div>
                                    <div className="font-semibold mt-2">{item.orderDate}</div>
                                    <div className="font-semibold">{item.returnDate}</div>
                                </div>
                                <div className="flex flex-col items-end gap-4">
                                    <div className="text-lg font-bold">{item.price}</div>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-2 rounded-full transition">
                                        Rent
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
