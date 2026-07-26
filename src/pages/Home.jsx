import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-6">
          🚀 Zecpath AI Internship Documentation Portal
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="text-white">Zecpath AI</span>
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

        <div className="mt-10 flex gap-6">
          <Link
            to="/day1"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
          >
            📘 Day 1
          </Link>

          <Link
            to="/day2"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold"
          >
            🤖 Day 2
          </Link>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

  <p className="text-purple-400 uppercase tracking-widest">
    Day 3
  </p>

  <h3 className="text-3xl font-bold mt-4">
    AI Environment Setup
  </h3>

  <p className="text-gray-400 mt-4">
    Built a modular AI engineering environment with repository
    architecture, AI modules, testing framework, and Git workflow.
  </p>


  <a
    href="/day3"
    className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
  >
    View Day 3 🚀
  </a>

</div>
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 opacity-70">

  <p className="text-gray-400 uppercase tracking-widest">
    Upcoming
  </p>

  <h3 className="text-3xl font-bold mt-4">
    Day 4
  </h3>

  <p className="text-gray-400 mt-4">
    Next Zecpath AI engineering assignment coming soon.
  </p>


  <button
    className="mt-6 px-6 py-3 border border-gray-600 rounded-xl"
  >
    Coming Soon 🚀
  </button>

</div>
        </div>

      </section>
    {/* ================= Internship Progress ================= */}

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="text-center mb-14">
    <p className="text-blue-400 uppercase tracking-widest">
      Internship Progress
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Documentation Timeline
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Follow the progress of the Zecpath AI onboarding journey through
      structured daily deliverables.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <Link
      to="/day1"
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
    >
      <h3 className="text-3xl font-bold text-blue-400">
        📘 Day 1
      </h3>

      <p className="text-gray-400 mt-4">
        Product Overview, Hiring Lifecycle, AI Modules, and AI Responsibilities.
      </p>

      <div className="mt-6 text-green-400 font-semibold">
        ✅ Completed
      </div>
    </Link>

    <Link
      to="/day2"
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 hover:-translate-y-2 transition duration-300"
    >
      <h3 className="text-3xl font-bold text-green-400">
        🤖 Day 2
      </h3>

      <p className="text-gray-400 mt-4">
        AI System Architecture, Data Flow, Microservices, and Communication Design.
      </p>

      <div className="mt-6 text-yellow-400 font-semibold">
        ✅ Completed
      </div>
    </Link>

  </div>

</section>
{/* ================= Learning Roadmap ================= */}

<section className="max-w-6xl mx-auto px-8 py-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Development Journey
    </p>

    <h2 className="text-5xl font-bold mt-4">
      AI Engineering Roadmap
    </h2>

  </div>


  <div className="grid md:grid-cols-3 gap-8">


    <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

      <h3 className="text-3xl font-bold text-green-400">
        Day 1 ✅
      </h3>

      <p className="text-gray-400 mt-4">
        Project understanding, requirements analysis,
        and AI platform planning.
      </p>

    </div>


    <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

      <h3 className="text-3xl font-bold text-blue-400">
        Day 2 ✅
      </h3>

      <p className="text-gray-400 mt-4">
        Complete AI system architecture,
        communication design, and deployment planning.
      </p>

    </div>


    <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

      <h3 className="text-3xl font-bold text-purple-400">
      Day 3 🔵 In Progress
      Environment & Repository Setup🚀
      </h3>

      <p className="text-gray-400 mt-4">
        Coming soon...
        Next stage of AI engineering development.
      </p>

    </div>


  </div>

</section>
    </div>
  );
}

export default Home;