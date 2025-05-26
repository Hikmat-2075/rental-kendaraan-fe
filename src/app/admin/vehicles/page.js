'use client'; // Menandakan bahwa komponen ini dijalankan di sisi klien

import React, { useState } from 'react';

export default function VehiclesPage() {
  // Data kendaraan statis sementara
  const vehicles = [
    { id: 1, name: 'Mobil Sedan', type: 'Mobil', image: '/images/sedan.jpg' },
    { id: 2, name: 'Motor Sport', type: 'Motor', image: '/images/motor.jpg' },
    { id: 3, name: 'Mobil Jeep', type: 'Mobil', image: '/images/jeep.jpg' },
  ];

  // State untuk form kendaraan baru
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    type: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({
      ...newVehicle,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewVehicle({
      ...newVehicle,
      image: URL.createObjectURL(file), // Menyimpan gambar sementara
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses untuk menambah kendaraan ke database atau API
    console.log('Kendaraan baru ditambahkan:', newVehicle);
    // Reset form setelah submit
    setNewVehicle({
      name: '',
      type: '',
      image: null,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pengelolaan Kendaraan</h1>

      {/* Daftar Kendaraan */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Daftar Kendaraan</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Jenis</th>
              <th className="px-4 py-2 text-left">Gambar</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="px-4 py-2">{vehicle.name}</td>
                  <td className="px-4 py-2">{vehicle.type}</td>
                  <td className="px-4 py-2">
                    <img src={vehicle.image} alt={vehicle.name} className="w-24 h-24 object-cover" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center">
                  Tidak ada kendaraan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form Tambah Kendaraan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Tambah Kendaraan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nama Kendaraan
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newVehicle.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Jenis Kendaraan
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={newVehicle.type}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium mb-1">
              Gambar Kendaraan
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border p-2 rounded"
            />
            {newVehicle.image && (
              <div className="mt-2">
                <img
                  src={newVehicle.image}
                  alt="Preview"
                  className="w-24 h-24 object-cover border rounded"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Tambah Kendaraan
          </button>
        </form>
      </div>
    </div>
  );
}
