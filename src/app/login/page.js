"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Login gagal");
      }

      const data = await res.json();

      // Simpan token ke localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("role", data.role);

      // Arahkan ke halaman dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-login.jpg')] bg-cover bg-center font-sans">
      <div className="bg-gray-200 bg-opacity-95 rounded-lg shadow-lg w-full max-w-md p-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign in</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label className="block font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Login
          </button>
          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}
        </form>

        <div className="flex justify-between w-full mt-4 text-sm">
          <div>
            New User?{" "}
            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>
          <a href="#" className="text-gray-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
