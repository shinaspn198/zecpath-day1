import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-6">
          🚀 Zecpath AI Internship Documentation Portal
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="text-white">
            Zecpath AI
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Onboarding Portal
          </span>
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl">
          A centralized documentation portal containing all internship
          deliverables, system architecture, AI workflows, and technical
          documentation for the Zecpath AI Recruitment Platform.
        </p>

        <div className="mt-10">
          <Link
            to="/documentation"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📚 Explore Documentation
          </Link>
        </div>

      </section>

      {/* Internship Progress */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-14">

          <p className="text-blue-400 uppercase tracking-widest">
            Learning Progress
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Documentation Timeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Follow the progress of the Zecpath AI onboarding journey
            through structured daily deliverables.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-blue-400">
              📘 Day 1
            </h3>

            <p className="text-gray-400 mt-4">
              Product overview, hiring lifecycle, AI modules and responsibilities.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-green-400">
              🤖 Day 2
            </h3>

            <p className="text-gray-400 mt-4">
              AI system architecture, data flow, microservices and communication design.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-purple-400">
              🚀 Day 3
            </h3>

            <p className="text-gray-400 mt-4">
              AI environment setup, repository architecture, AI modules,
              testing framework and Git workflow.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

  <h3 className="text-3xl font-bold text-purple-400">
    📊 Day 4
  </h3>

  <p className="text-gray-400 mt-4">
    Data understanding, resume structured schemas, job description
    schemas, and AI data entity design.
  </p>

  <div className="mt-6 text-green-400 font-semibold">
    ✅ Completed
  </div>

</div>
<div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

  <h3 className="text-3xl font-bold text-purple-400">
    📝 Day 5
  </h3>

  <p className="text-gray-400 mt-4">
    Resume text extraction engine, PDF/DOCX parsing, text cleaning,
    and AI-ready resume output generation.
  </p>

  <div className="mt-6 text-green-400 font-semibold">
    ✅ Completed
  </div>
  
  </div>
 <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

  <h3 className="text-3xl font-bold text-purple-400">
    📋 Day 6
  </h3>

  <p className="text-gray-400 mt-4">
    Job Description Parsing System to convert employer job descriptions
    into structured AI-readable job requirement objects.
  </p>

  <div className="mt-6 text-green-400 font-semibold">
    ✅ Completed
  </div>

</div>
<div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

  <h3 className="text-3xl font-bold text-cyan-400">
    📊 Day 7
  </h3>

  <p className="text-gray-400 mt-4">
    Designed the AI data pipeline, storage architecture, metadata standards,
    and dataset versioning strategy for the Zecpath AI recruitment platform.
  </p>

  <div className="mt-6 text-green-400 font-semibold">
    ✅ Completed
  </div>

</div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;