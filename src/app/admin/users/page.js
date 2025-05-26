'use client'; // Menandakan bahwa komponen ini dijalankan di sisi klien

import React, { useState } from 'react';

export default function UsersPage() {
  // Data pengguna statis sementara
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alicebrown@example.com', role: 'User' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Daftar Pengguna</h1>

      <table className="min-w-full table-auto">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Peran</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-blue-100">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center">
                Tidak ada pengguna.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
