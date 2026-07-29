import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            📋 Day 6 – Job Description Parsing System
          </h1>

          <p className="text-center text-gray-300 text-lg mb-12">
            Developed a Job Description Parsing System to convert employer job
            descriptions into structured AI-readable job requirement objects for
            intelligent recruitment and candidate matching.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🎯 Objective
              </h2>

              <p className="text-gray-300">
                Convert unstructured employer job descriptions into structured,
                AI-ready job requirement objects by extracting important hiring
                information.
              </p>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📦 Deliverables
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Job Description Parser Module</li>
                <li>Structured JD Output Samples</li>
                <li>JD Parsing Documentation</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🛠 Technologies Used
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Python</li>
                <li>Regular Expressions (re)</li>
                <li>JSON</li>
                <li>Text Processing</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📖 Key Learnings
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Job description analysis</li>
                <li>Skill extraction</li>
                <li>Role identification</li>
                <li>AI-ready job profile generation</li>
              </ul>

            </div>

          </div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <a
              href="/day6_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 View Report
            </a>

            <a
              href="/day6_completed.pdf"
              download
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              ⬇ Download PDF
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day6;