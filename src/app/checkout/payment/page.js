export default function Payment() {
  return (
<<<<<<< HEAD:src/app/pembayaran/page.js
    <div className="min-h-screen bg-gray-100 p-0 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-blue-500 text-white p-4 border-b border-blue-200 rounded-none">
        <h1 className="text-2xl font-bold">VeloRent.</h1>
        <nav className="flex gap-8">
          <a href="#" className="hover:underline font-bold">Home</a>
          <a href="#" className="hover:underline font-bold">Settings</a>
          <a href="#" className="hover:underline font-bold">History</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Hello, User !</span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-500 font-bold">U</span>
          </div>
        </div>
      </header>
=======
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

>>>>>>> 878041264cdfddd66e77069b40c79a829ecbc1be:src/app/checkout/payment/page.js
      {/* Main Content */}
      <main className="mt-8 flex flex-col gap-8 px-4">
        {/* Car Details */}
        <section className="bg-white p-6 border border-gray-300 rounded-xl shadow-sm flex-1">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="flex-1 w-full">
              <h2 className="text-xl font-bold mb-1">Lamborghini Urus 1000cc</h2>
              <p className="text-blue-500 font-bold mb-4">IDR 1.000.000,00 / Day</p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="PICK UP LOCATION"
                  className="w-full p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                />
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                  />
                  <input
                    type="date"
                    className="w-1/2 p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="YOUR IDENTIFICATION CARD"
                  className="w-full p-2 bg-gray-100 rounded-md text-xs uppercase placeholder-gray-400"
                />
              </form>
              <p className="mt-4 text-lg font-bold">Total : IDR 7.000.000,00</p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white p-6 border border-gray-300 rounded-xl shadow-sm flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-bold shadow-sm">Transfer Bank</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg font-bold text-gray-500">Kredit</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg font-bold text-gray-500">Qris</button>
            <button className="flex-1 bg-gray-200 py-2 rounded-lg font-bold text-gray-500">Cash</button>
          </div>
          <h3 className="text-lg font-bold mb-4">Pilih Bank</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://seeklogo.com/images/S/seabank-logo-7B6B5B3A6B-seeklogo.com.png" alt="SeaBank" className="w-6 h-6" />
              <span className="font-semibold">SeaBank</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_Bank_Central_Asia.svg" alt="BCA" className="w-6 h-6" />
              <span className="font-semibold">Bank BCA</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Logo_Bank_Mandiri.svg" alt="Mandiri" className="w-6 h-6" />
              <span className="font-semibold">Bank Mandiri</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Logo_Bank_BNI.svg" alt="BNI" className="w-6 h-6" />
              <span className="font-semibold">Bank BNI</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Logo_Bank_BRI.svg" alt="BRI" className="w-6 h-6" />
              <span className="font-semibold">Bank BRI</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo_Bank_Syariah_Indonesia.svg" alt="BSI" className="w-6 h-6" />
              <span className="font-semibold">Bank Syariah Indonesia (BSI)</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_Bank_Permata.svg" alt="Permata" className="w-6 h-6" />
              <span className="font-semibold">Bank Permata</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Logo_CIMB_Niaga.svg" alt="CIMB Niaga" className="w-6 h-6" />
              <span className="font-semibold">Bank CIMB Niaga</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" name="bank" className="accent-blue-500" />
              <span className="font-semibold">Bank lainnya</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Terdapat perubahan nama bank penerima dari Bank Mandiri ke Bank SeaBank.
          </p>
        </section>

        {/* Order Summary */}
        <div className="w-full flex flex-col mt-8">
          <div className="bg-white border border-gray-300 rounded-xl p-6 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold min-w-[120px]">SubTotal</span>
                <span className="font-bold">Rp 7.000.000</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-semibold min-w-[120px]">Discount</span>
                <span className="font-bold">Rp 500.000</span>
              </div>
              <div className="flex justify-between items-center text-base mb-4">
                <span className="font-semibold min-w-[120px]">Total payment</span>
                <span className="font-bold text-lg text-blue-600">Rp 6.500.000</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg mt-2">
                Make Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}