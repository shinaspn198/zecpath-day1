import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day10() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 10 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Experience Parsing & Relevance Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an AI-powered Experience Parsing Engine capable of
          extracting candidate work experience, identifying companies,
          calculating employment duration, generating structured experience
          objects, and evaluating experience relevance for target job roles.

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
            📄 Day 10 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            View and download the completed Day 10 Experience Parsing &
            Relevance Engine documentation.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day10_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 10 PDF
            </a>

            <a
              href="/day10_completed.pdf"
              download="day10_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 10
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
            Experience Intelligence Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The engine processes resume experience sections by extracting
            job titles, company names, employment durations, calculating
            experience, and generating structured experience objects for
            intelligent recruitment systems.

          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              💼 Experience Parser
            </h3>

            <p className="text-gray-400 mt-4">

              Extracts candidate work experience including job titles,
              company names, and employment durations from resumes.

            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🎯 Relevance Scoring
            </h3>

            <p className="text-gray-400 mt-4">

              Evaluates candidate experience against a target role by
              calculating an experience relevance score.

            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📦 Structured Experience Object
            </h3>

            <p className="text-gray-400 mt-4">

              Generates structured experience data for integration
              with AI recruitment and ATS platforms.

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
            Day 10 Deliverables
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-blue-400">
              💼 Experience Parser
            </h3>

            <p className="text-gray-400 mt-4">
              Extracts job titles, company names, and employment durations
              from candidate resumes.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              🎯 Experience Relevance Scoring
            </h3>

            <p className="text-gray-400 mt-4">
              Computes relevance scores between candidate experience
              and target job roles.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400">
              📦 Structured Experience Object
            </h3>

            <p className="text-gray-400 mt-4">
              Produces structured experience data for downstream
              AI hiring modules.
            </p>

          </div>

        </div>

      </section>


      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold text-green-400">
            Day 10 Completed Successfully ✅
          </h2>

          <p className="text-gray-300 mt-6 text-lg">

            Successfully developed an AI-powered Experience Parsing &
            Relevance Engine capable of extracting professional experience,
            evaluating relevance for target roles, and generating structured
            experience objects for intelligent recruitment systems.

          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day10;