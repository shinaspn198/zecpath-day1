import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day11() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 11 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Education & Certification Parsing Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an AI-powered Education & Certification Parsing Engine
          capable of extracting academic qualifications, institutions,
          fields of study, graduation years, professional certifications,
          and evaluating education relevance for intelligent recruitment.

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
            📄 Day 11 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            View and download the completed Day 11 Education &
            Certification Parsing documentation.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day11_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 11 PDF
            </a>

            <a
              href="/day11_completed.pdf"
              download="day11_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 11
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
            Education Intelligence Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The engine processes resume education details through
            education extraction, certification detection,
            structured academic profile generation, and education
            relevance analysis for AI-powered hiring systems.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🎓 Education Extraction
            </h3>

            <p className="text-gray-400 mt-4">

              Extracts degree names, institutions,
              fields of study, and graduation years
              from candidate resumes.

            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🏅 Certification Extraction
            </h3>

            <p className="text-gray-400 mt-4">

              Detects professional certifications
              and prepares them for AI-powered
              candidate evaluation.

            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📊 Education Relevance
            </h3>

            <p className="text-gray-400 mt-4">

              Calculates education relevance based
              on academic specialization and
              target job requirements.

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
            Day 11 Deliverables
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-blue-400">
              📚 Education & Certification Extraction
            </h3>

            <p className="text-gray-400 mt-4">
              Extracts academic qualifications and
              professional certifications from resumes.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              🎓 Structured Academic Profile
            </h3>

            <p className="text-gray-400 mt-4">
              Generates structured education objects
              including degree, institution, field,
              and graduation year.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400">
              🎯 Education Relevance Logic
            </h3>

            <p className="text-gray-400 mt-4">
              Computes education relevance scores
              for intelligent AI candidate screening.
            </p>

          </div>

        </div>

      </section>

      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold text-green-400">
            Day 11 Completed Successfully ✅
          </h2>

          <p className="text-gray-300 mt-6 text-lg">

            Successfully developed an AI-powered Education &
            Certification Parsing Engine capable of extracting
            academic information, professional certifications,
            generating structured academic profiles, and evaluating
            education relevance for intelligent recruitment.

          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day11;