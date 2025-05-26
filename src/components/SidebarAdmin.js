import Link from 'next/link';

const SidebarAdmin = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/admin/dashboard" className="block px-2 py-1 hover:bg-gray-200 rounded">Dashboard</Link>
        <Link href="/admin/vehicles" className="block px-2 py-1 hover:bg-gray-200 rounded">Kendaraan</Link>
        <Link href="/admin/users" className="block px-2 py-1 hover:bg-gray-200 rounded">User</Link>
        <Link href="/admin/transactions" className="block px-2 py-1 hover:bg-gray-200 rounded">Transaksi</Link>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
