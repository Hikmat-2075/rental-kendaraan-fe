import React from 'react';

export default function TransactionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pengelolaan Transaksi</h1>
      <div className="space-y-4">
        {/* Daftar transaksi */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Daftar Transaksi</h2>
          {/* Daftar transaksi akan ditampilkan di sini */}
        </div>
      </div>
    </div>
  );
}
