import { FaCar, FaUsers, FaClipboardList } from 'react-icons/fa'; // Import icon

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Ringkasan Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Total Kendaraan */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-blue-500 p-3 rounded-full text-white">
            <FaCar size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Total Kendaraan</h3>
            <p className="text-2xl font-bold text-gray-800">10</p>  
          </div>
        </div>

        {/* Total User */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-green-500 p-3 rounded-full text-white">
            <FaUsers size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Total User</h3>
            <p className="text-2xl font-bold text-gray-800">25</p>
          </div>
        </div>

        {/* Total Transaksi */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-yellow-500 p-3 rounded-full text-white">
            <FaClipboardList size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Total Transaksi</h3>
            <p className="text-2xl font-bold text-gray-800">100</p>
          </div>
        </div>
      </div>

      {/* Example Chart - Uncomment to add a simple chart */}
      {/* 
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Statistik Transaksi</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <LineChartComponent /> // Gantikan dengan grafik yang sesuai
        </div>
      </div>
      */}
    </div>
  );
}
