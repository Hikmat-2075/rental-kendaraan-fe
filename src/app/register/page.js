"use client";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex justify-end bg-[url('/bg-login.jpg')] bg-cover bg-center font-sans">
      <div className="bg-gray-200 bg-opacity-95 shadow-lg w-full max-w-xl min-h-screen p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 w-full text-center">Create a New Account</h2>
        <form className="w-full max-w-md mx-auto space-y-5">
          <div>
            <label className="block font-semibold mb-1 text-left" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-left" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-left" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <label className="block font-semibold mb-1 text-left" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={showPassword
                    ? "M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4.03-9-9s4-9 9-9 9 4.03 9 9c0 1.02-.165 2-.475 2.925M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    : "M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0c0 5-4-9-9-9s-9-4-9-9 4-9 9-9 9 4 9 9z"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <label className="block font-semibold mb-1 text-left" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={() => setShowConfirm((prev) => !prev)}
              tabIndex={-1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={showConfirm
                    ? "M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4.03-9-9s4-9 9-9 9 4.03 9 9c0 1.02-.165 2-.475 2.925M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    : "M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0c0 5-4-9-9-9s-9-4-9-9 4-9 9-9 9 4 9 9z"
                  }
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition mt-2"
          >
            Register
          </button>
        </form>
        <div className="flex justify-start w-full max-w-md mx-auto mt-6 text-sm text-gray-600">
          <span>Already have an account ?&nbsp;</span>
          <a href="/login" className="text-blue-600 font-semibold hover:underline">Sign in</a>
        </div>
      </div> {/* ini penutup kotak abu-abu */}
    </div>
  );
}