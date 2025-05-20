export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-login.jpg')] bg-cover bg-center font-sans">
      <div className="bg-gray-200 bg-opacity-95 rounded-lg shadow-lg w-full max-w-md p-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign in</h2>
        <form className="w-full space-y-5">
          <div>
            <label className="block font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between w-full mt-4 text-sm">
          <div>
            New User?{" "}
            <a href="/register" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </a>
          </div>
          <a href="#" className="text-gray-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
