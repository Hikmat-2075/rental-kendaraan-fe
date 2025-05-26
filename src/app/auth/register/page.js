"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          namaLengkap: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Register successful!");
        setFormData({
          username: "",
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/auth/login");
      } else {
        const error = await response.text();
        alert("Register failed: " + error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-login.jpg')] bg-cover bg-center font-sans">
      <div className="bg-gray-200 bg-opacity-95 shadow-lg w-full max-w-xl h-screen p-10 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-8 w-full text-center">Create a New Account</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-5">
          <div>
            <label htmlFor="username" className="block font-semibold mb-1 text-left">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1 text-left">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-left">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block font-semibold mb-1 text-left">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-9 text-gray-500"
              tabIndex={-1}
            >
              👁️
            </button>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block font-semibold mb-1 text-left">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute right-2 top-9 text-gray-500"
              tabIndex={-1}
            >
              👁️
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
          <span>Already have an account?&nbsp;</span>
          <a href="/auth/login" className="text-blue-600 font-semibold hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  );
}
