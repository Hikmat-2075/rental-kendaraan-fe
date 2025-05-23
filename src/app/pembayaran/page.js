export default function pembayaran() {
  return (
    <div className="min-h-screen font-sans bg-[#3b5bdb] relative overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-black rounded-b-[25px] shadow-lg z-10 relative">
        <nav className="flex items-center justify-between px-12 py-5">
          <div className="logo text-3xl font-bold text-white tracking-tight">
            VeloRent
          </div>
          <ul className="flex gap-16 text-white font-semibold text-lg">
            <li>
              <a href="/home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">History</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium hover:text-blue-400 transition cursor-pointer">Hello, User !</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Details */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/300x200" // Replace with actual car image URL
              alt="Car"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">Lamborghini Urus 1000cc</h2>
              <p className="text-blue-500 font-semibold">IDR 1.000.000,00 / Day</p>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Pick Up Location"
                  className="w-full p-2 border rounded-lg"
                />
                <div className="flex gap-4">
                  <input
                    type="date"
                    placeholder="Pick-Up Date"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                  <input
                    type="date"
                    placeholder="Drop-Off Date"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Identification Card"
                  className="w-full p-2 border rounded-lg"
                />
              </form>
              <p className="mt-4 text-lg font-bold">Total : IDR 7.000.000,00</p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg">Transfer Bank</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg">Kredit</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg">Qris</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg">Cash</button>
          </div>
          <h3 className="text-lg font-semibold mb-4">Pilih Bank</h3>
          <ul className="space-y-2">
            {/*
              { name: "SeaBank", logo: "🌊" },
              { name: "Bank BCA", logo: "🏦" },
              { name: "Bank Mandiri", logo: "🏦" },
              { name: "Bank BNI", logo: "🏦" },
              { name: "Bank BRI", logo: "🏦" },
              { name: "Bank Syariah Indonesia (BSI)", logo: "🏦" },
              { name: "Bank Permata", logo: "🏦" },
              { name: "Bank CIMB Niaga", logo: "🏦" },
              { name: "Bank lainnya", logo: "🏦" },
            */}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Terdapat perubahan nama bank penerima dari Bank Mandiri ke Bank SeaBank.
            </p>
          </section>
        </main>
      </div>
    );
  }