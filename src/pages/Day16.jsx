import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day16() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 16 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          ATS API Specification & Integration
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed a FastAPI-based API layer for the Zecpath AI
          recruitment system, making ATS functionality consumable
          by backend systems through standardized REST APIs,
          structured schemas, asynchronous job handling,
          centralized error handling, and logging.

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
            Explore API Flow
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
            📄 Day 16 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            View and download the completed Day 16 ATS API
            Specification and Integration documentation.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day16_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 16 PDF
            </a>

            <a
              href="/day16_completed.pdf"
              download="day16_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 16
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
            ATS API Processing Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            API Integration Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The API layer connects resume processing, ATS scoring,
            candidate shortlisting, and asynchronous job handling
            into a structured recruitment workflow.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📄 Resume APIs
            </h3>

            <p className="text-gray-400 mt-4">

              Provides resume upload and parsing endpoints
              for processing candidate resumes and generating
              structured candidate profiles.

            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📊 ATS Processing
            </h3>

            <p className="text-gray-400 mt-4">

              Connects ATS scoring and candidate shortlisting
              services through standardized API endpoints
              and structured request/response schemas.

            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              ⚙️ Job Processing
            </h3>

            <p className="text-gray-400 mt-4">

              Supports asynchronous ATS jobs while providing
              centralized logging and error handling for
              reliable backend integration.

            </p>

          </div>

        </div>

      </section>

      {/* API Flow */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            End-to-End Processing
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ATS API Flow
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-5 gap-4 text-center">

            <div className="border border-blue-500 rounded-xl p-6">
              <h3 className="font-bold text-blue-400">
                📄 Resume Upload
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                Upload candidate resume
              </p>
            </div>

            <div className="flex items-center justify-center text-3xl text-gray-500">
              →
            </div>

            <div className="border border-green-500 rounded-xl p-6">
              <h3 className="font-bold text-green-400">
                🧠 Resume Parsing
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                Generate structured profile
              </p>
            </div>

            <div className="flex items-center justify-center text-3xl text-gray-500">
              →
            </div>

            <div className="border border-purple-500 rounded-xl p-6">
              <h3 className="font-bold text-purple-400">
                📊 ATS Scoring
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                Generate candidate score
              </p>
            </div>

          </div>

          <div className="text-center text-3xl text-gray-500 my-6">
            ↓
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-orange-500 rounded-xl p-6 text-center">

              <h3 className="font-bold text-orange-400">
                🏆 Candidate Shortlisting
              </h3>

              <p className="text-gray-400 mt-3">
                Classifies candidates using configured
                shortlisting rules.
              </p>

            </div>

                       <div className="border border-cyan-500 rounded-xl p-6 text-center">

              <h3 className="font-bold text-cyan-400">
                ⚙️ Async Job Processing
              </h3>

              <p className="text-gray-400 mt-3">
                Handles long-running ATS processing
                through job status tracking.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day16;