function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Zecpath <span className="text-blue-500">AI</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#overview" className="hover:text-blue-400 transition">
            Overview
          </a>

          <a href="#lifecycle" className="hover:text-blue-400 transition">
            Lifecycle
          </a>

          <a href="#ai" className="hover:text-blue-400 transition">
            AI Modules
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;