import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day12() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 12 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Semantic Resume–Job Matching Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an AI-powered Semantic Resume–Job Matching Engine
          using Sentence Transformers. The system converts resumes and
          job descriptions into semantic vector embeddings, computes
          cosine similarity, and generates intelligent match scores
          for AI-powered recruitment systems.

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
            📄 Day 12 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            View and download the completed Day 12 Semantic Resume–Job
            Matching Engine documentation.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day12_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 12 PDF
            </a>

            <a
              href="/day12_completed.pdf"
              download="day12_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 12
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
            Semantic Matching Pipeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The engine converts resumes and job descriptions into
            semantic embeddings using Sentence Transformers.
            Cosine similarity is calculated between embeddings
            to determine candidate-job compatibility and produce
            intelligent match percentages.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🧠 Sentence Embeddings
            </h3>

            <p className="text-gray-400 mt-4">

              Converts resumes and job descriptions into dense
              semantic vector representations using Sentence
              Transformers.

            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📊 Cosine Similarity
            </h3>

            <p className="text-gray-400 mt-4">

              Computes cosine similarity between resume and
              job description embeddings to generate an
              intelligent semantic match score.

            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🎯 Match Classification
            </h3>

            <p className="text-gray-400 mt-4">

              Classifies candidates into Excellent, Good,
              Fair, or Poor match categories based on
              similarity percentage.

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
            Day 12 Deliverables
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-blue-400">
              🧠 Semantic Embeddings
            </h3>

            <p className="text-gray-400 mt-4">
              Generates semantic embeddings from resumes and
              job descriptions using Sentence Transformers.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              📊 Similarity Calculation
            </h3>

            <p className="text-gray-400 mt-4">
              Calculates cosine similarity between resume
              and job description vectors.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400">
              🎯 Match Classification
            </h3>

            <p className="text-gray-400 mt-4">
              Produces percentage-based matching results
              and intelligent candidate recommendations.
            </p>

          </div>

        </div>

      </section>

      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold text-green-400">
            Day 12 Completed Successfully ✅
          </h2>

          <p className="text-gray-300 mt-6 text-lg">

            Successfully developed an AI-powered Semantic
            Resume–Job Matching Engine using Sentence
            Transformers and cosine similarity. The engine
            intelligently evaluates resume-job compatibility
            and produces percentage-based matching results
            for AI recruitment systems.

          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day12;