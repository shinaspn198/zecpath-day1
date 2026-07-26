import { Link, NavLink } from "react-router-dom";

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
<div className="hidden md:flex gap-8">

  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-400 transition"
    }
  >
    🏠 Home
  </NavLink>

  <NavLink
    to="/documentation"
    className={({ isActive }) =>
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-400 transition"
    }
  >
    📚 Documentation
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-400 transition"
    }
  >
    ℹ️ About
  </NavLink>

</div>
        </div>


    </nav>
  );
}

export default Navbar;