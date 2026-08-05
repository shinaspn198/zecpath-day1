import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day14() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 14 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Candidate Ranking & Shortlisting Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an AI-powered Candidate Ranking & Shortlisting
          Engine capable of automatically ranking candidates based
          on ATS scores, applying configurable shortlisting
          thresholds, classifying candidates into recruiter-friendly
          categories, and generating ranked hiring reports.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="https://github.com/shinaspn198/zecpath-ai-system"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            🚀 View GitHub Repository
          </a>

          <a
            href="#architecture"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Modules
          </a>

        </div>

      </section>

      {/* Documentation PDF */}

      <section className="max-w-5xl mx-auto px-8 py-16">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

          <p className="text-blue-400 uppercase tracking-widest">
            Internship Deliverables
          </p>

          <h2 className="text-4xl font-bold mt-4">
            📄 Day 14 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            View and download the completed Day 14 Candidate
            Ranking & Shortlisting documentation.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day14_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 14 PDF
            </a>

            <a
              href="/day14_completed.pdf"
              download="day14_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 14
            </a>

          </div>

        </div>

      </section>

      {/* Architecture */}

      <section
        id="architecture"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest">
            AI Processing Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Ranking Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The engine processes ATS scores by ranking candidates,
            applying configurable shortlisting thresholds,
            classifying recruitment decisions, and generating
            recruiter-friendly reports for intelligent hiring.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📊 Candidate Ranking
            </h3>

            <p className="text-gray-400 mt-4">

              Sorts candidates automatically based on
              ATS scores to identify the strongest
              applicants first.

            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              ✅ Shortlisting Rules
            </h3>

            <p className="text-gray-400 mt-4">

              Applies configurable score thresholds
              to classify candidates as Shortlisted,
              Review, or Rejected.

            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📈 Ranking Report
            </h3>

            <p className="text-gray-400 mt-4">

              Generates recruiter-friendly ranking
              reports including candidate status,
              summary statistics, and top candidate.

            </p>

          </div>

        </div>

      </section>

      {/* Deliverables */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Completed Modules
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Day 14 Deliverables
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-blue-400">
              📊 Auto Ranking Engine
            </h3>

            <p className="text-gray-400 mt-4">
              Automatically ranks candidates
              based on ATS scores from highest
              to lowest.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              ✅ Shortlisting Automation
            </h3>

            <p className="text-gray-400 mt-4">
              Automatically classifies candidates
              into Shortlisted, Review, and
              Rejected categories.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400">
              📈 Ranked Candidate Report
            </h3>

            <p className="text-gray-400 mt-4">
              Produces recruiter-friendly reports
              with rankings, summaries, and top
              candidate selection.
            </p>

          </div>

        </div>

      </section>

      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold text-green-400">
            Day 14 Completed Successfully ✅
          </h2>

          <p className="text-gray-300 mt-6 text-lg">

            Successfully developed an AI-powered
            Candidate Ranking & Shortlisting Engine
            capable of ranking candidates using ATS
            scores, applying configurable selection
            thresholds, automating recruitment
            decisions, and generating recruiter-friendly
            candidate reports.

          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day14;