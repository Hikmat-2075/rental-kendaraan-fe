'use client';
import React from 'react'; // Import React
import Navbar from '@/components/Navbar'; 
import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import request from '@/utils/request'; // Import request utility for API calls


export default function Payment() {
  const [username, setUsername] = useState('');
  // Fetch username from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      console.warn('Username not found in localStorage');
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-0 font-sans">
      {/* Navbar */}
      <Navbar userName={username} />

      {/* Header */}
      {/* Main Content */}
      <main className="mt-8 flex flex-col gap-8 px-4">
        {/* Car Details */}
        <section className="bg-white p-6 border border-gray-300 rounded-xl shadow-sm flex-1">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="flex-1 w-full">
              <h2 className="text-xl font-bold mb-1">Lamborghini Urus 1000cc</h2>
              <p className="text-blue-500 font-bold mb-4">IDR 1.000.000,00 / Day</p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="PICK UP LOCATION"
                  className="w-full p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                />
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                  />
                  <input
                    type="date"
                    className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="YOUR IDENTIFICATION CARD"
                  className="w-full p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                />
              </form>
              <p className="mt-4 text-lg font-bold">Total : IDR 7.000.000,00</p>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <div className="w-full flex flex-col mt-8">
          <div className="bg-white border border-gray-300 rounded-xl p-6 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-base mb-4">
                <span className="font-semibold min-w-[120px]">Total payment</span>
                <span className="font-bold text-lg text-blue-600">Rp 6.500.000</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg mt-2">
                Make Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}