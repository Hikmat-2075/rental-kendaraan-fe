export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ringkasan</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Total Kendaraan: 10</div>
        <div className="bg-white p-4 rounded shadow">Total User: 25</div>
        <div className="bg-white p-4 rounded shadow">Total Transaksi: 100</div>
      </div>
    </div>
  );
}
