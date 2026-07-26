import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

        <h1 className="text-8xl font-bold text-blue-400">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
        >
          🏠 Back to Home
        </Link>

      </section>

      <Footer />

    </div>
  );
}

export default NotFound;