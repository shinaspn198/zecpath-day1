import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Day 4 – Data Understanding & Structuring
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Day 4 focused on understanding recruitment data by converting
          resumes and job descriptions into structured AI-ready formats.
          The work included designing resume and job schemas along with
          AI data entities for intelligent hiring systems.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href="/day4_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            📄 View Report
          </a>

          <a
            href="/day4_completed.pdf"
            download
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            ⬇ Download PDF
          </a>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day4;