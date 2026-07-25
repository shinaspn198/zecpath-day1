import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">
            Zecpath <span className="text-blue-500">AI</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <Link to="/" className="hover:text-blue-400 transition">
            🏠 Home
          </Link>

          <Link to="/day1" className="hover:text-blue-400 transition">
            📘 Day 1
          </Link>

          <Link to="/day2" className="hover:text-blue-400 transition">
            🤖 Day 2
          </Link>

          <Link to="/about" className="hover:text-blue-400 transition">
            ℹ️ About
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;