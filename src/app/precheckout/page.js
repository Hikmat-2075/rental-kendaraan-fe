export default function precheckout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="w-full bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">VeloRent.</h1>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Settings</a>
          <a href="#" className="hover:underline">History</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Hello, User !</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-8 px-4">
        {/* Image Carousel */}
        <div className="relative w-full max-w-md">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Car"
            className="w-full rounded-lg"
          />
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            &#8592;
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            &#8594;
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>

        {/* Vehicle Info */}
        <h2 className="text-2xl font-bold mt-4">Lamborghini Urus 1000cc</h2>
        <p className="text-lg text-gray-700 mt-2">
          Price at <span className="font-bold">IDR 1.000.000,00 / Day</span>
        </p>

        {/* Vehicle Description */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Vehicle Description
        </button>
        <div className="text-left mt-4">
          <p>Lamborghini Urus 1000cc</p>
          <ul className="list-disc ml-6">
            <li>Mesin: 4.0-liter V8 twin-turbocharged</li>
            <li>Kapasitas Max Penumpang: 6 penumpang</li>
            <li>Warna: Silver</li>
            <li>Type:</li>
            <li>Merek:</li>
          </ul>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex justify-between mt-8 px-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">BACK</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">RENT</button>
      </div>
    </div>
  );
}