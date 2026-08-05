import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day13() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            📊 Day 13 – ATS Scoring Formula Design
          </h1>

          <p className="text-center text-gray-300 text-lg mb-12">
            Designed and implemented an AI-powered ATS Scoring Engine
            that evaluates candidates using configurable weighted
            parameters. The system generates transparent and
            explainable ATS scores based on skill match,
            experience relevance, education alignment,
            and semantic similarity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🎯 Objective
              </h2>

              <p className="text-gray-300">
                Design a transparent and explainable ATS scoring
                framework capable of evaluating candidates using
                configurable weights for different job roles.
              </p>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📦 Deliverables
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>ATS Scoring Engine</li>
                <li>Configurable Weight System</li>
                <li>Candidate Score Generator</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🛠 Technologies & Concepts
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Python</li>
                <li>JSON Configuration</li>
                <li>Weighted Scoring Algorithm</li>
                <li>Explainable AI (XAI)</li>
                <li>ATS Score Calculation</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📖 Key Learnings
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed configurable ATS scoring formulas</li>
                <li>Built weighted candidate evaluation systems</li>
                <li>Generated explainable ATS score reports</li>
                <li>Handled missing candidate data safely</li>
                <li>Created reusable role-based scoring models</li>
              </ul>

            </div>

          </div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <a
              href="/day13_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 View Report
            </a>

            <a
              href="/day13_completed.pdf"
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

export default Day13;