import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day7() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            📊 Day 7 – AI Data Pipeline & Storage Design
          </h1>

          <p className="text-center text-gray-300 text-lg mb-12">
            Designed the complete AI data pipeline for the Zecpath recruitment
            platform, defining how candidate data flows, is stored, processed,
            and reused for intelligent hiring decisions and future AI model
            improvements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🎯 Objective
              </h2>

              <p className="text-gray-300">
                Design a scalable AI data pipeline that manages resumes,
                candidate profiles, ATS scores, screening reports, interview
                results, metadata, and training datasets across the recruitment
                lifecycle.
              </p>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📦 Deliverables
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI Data Pipeline Diagram</li>
                <li>Storage Structure Documentation</li>
                <li>Metadata Standards Document</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🛠 Technologies & Concepts
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI Data Pipeline Design</li>
                <li>JSON Data Structures</li>
                <li>Metadata Standards</li>
                <li>Dataset Versioning</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📖 Key Learnings
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI data lifecycle management</li>
                <li>Storage architecture design</li>
                <li>Metadata standardization</li>
                <li>Dataset versioning and retraining strategy</li>
              </ul>

            </div>

          </div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <a
              href="/day7_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 View Report
            </a>

            <a
              href="/day7_completed.pdf"
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

export default Day7;