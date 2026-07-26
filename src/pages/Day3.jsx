import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day3() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 3 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Environment & Repository Setup
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          Building a professional AI engineering environment with
          modular architecture, AI components, logging system,
          testing framework, and documentation standards.
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
            Explore Architecture
          </a>
        function Day3() {
  return (
    <div className="day3">

      <h1>🚀 Day 3 Documentation</h1>

      {/* Your existing Day 3 content here */}


      <section className="deliverables">
        <h2>📄 Internship Deliverables</h2>

        <p>
          View and download the completed internship reports.
        </p>

        <div className="pdf-links">

          <a
            href="/day1_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            👁️ View Day 1 Report
          </a>

          <a href="/day1_Report.pdf" download>
            ⬇️ Download Day 1 Report
          </a>


          <a
            href="/day2_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            👁️ View Day 2 Report
          </a>

          <a href="/day2_Report.pdf" download>
            ⬇️ Download Day 2 Report
          </a>


          <a
            href="/day3_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            👁️ View Day 3 Report
          </a>

          <a href="/day3_Report.pdf" download>
            ⬇️ Download Day 3 Report
          </a>

        </div>
      </section>


    </div>
  );
}

export default Day3;
        </div>

      </section>

    {/* Repository Architecture */}

<section
  id="architecture"
  className="max-w-7xl mx-auto px-8 pb-24"
>

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Repository Architecture
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Modular AI System Design
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      Zecpath AI follows a modular architecture where each component
      handles a specific responsibility including resume parsing,
      ATS analysis, scoring, logging, and testing.
    </p>

  </div>


  <div className="flex flex-col items-center space-y-6">


    <div className="bg-slate-900 border border-slate-800 rounded-xl px-10 py-5 w-80 text-center hover:border-blue-500 transition">

      <h3 className="text-2xl font-bold text-blue-400">
        🚀 Main Application
      </h3>

      <p className="text-gray-400 mt-2">
        main.py
      </p>

    </div>


    <div className="text-blue-500 text-3xl">
      ↓
    </div>


    <div className="grid md:grid-cols-3 gap-6">


      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500 transition">

        <h3 className="text-xl font-bold text-blue-400">
          📄 Resume Parser
        </h3>

        <p className="text-gray-400 mt-3">
          Extracts candidate information and skills from resumes.
        </p>

      </div>


      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-green-500 transition">

        <h3 className="text-xl font-bold text-green-400">
          🤖 ATS Engine
        </h3>

        <p className="text-gray-400 mt-3">
          Calculates resume matching score with job requirements.
        </p>

      </div>


      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500 transition">

        <h3 className="text-xl font-bold text-purple-400">
          📊 Scoring Engine
        </h3>

        <p className="text-gray-400 mt-3">
          Generates candidate evaluation results.
        </p>

      </div>


    </div>


    <div className="text-blue-500 text-3xl">
      ↓
    </div>


    <div className="grid md:grid-cols-2 gap-6">


      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">

        📝 Logging System

        <p className="text-gray-400 mt-2">
          Tracks system events and AI activities.
        </p>

      </div>


      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">

        🧪 Testing Framework

        <p className="text-gray-400 mt-2">
          Automated validation using pytest.
        </p>

      </div>


    </div>


  </div>


</section>
{/* AI Modules Overview */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      AI Modules
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Intelligent Processing Pipeline
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      Zecpath AI consists of independent AI modules that process
      candidate information and generate intelligent recruitment insights.
    </p>

  </div>


  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <h3 className="text-2xl font-bold text-blue-400">
        📄 Resume Parser
      </h3>

      <p className="text-gray-400 mt-4">
        Extracts candidate details, skills, education,
        and experience from uploaded resumes.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition">

      <h3 className="text-2xl font-bold text-green-400">
        🤖 ATS Engine
      </h3>

      <p className="text-gray-400 mt-4">
        Matches resumes with job descriptions and
        generates compatibility scores.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition">

      <h3 className="text-2xl font-bold text-purple-400">
        📊 Scoring Engine
      </h3>

      <p className="text-gray-400 mt-4">
        Combines multiple factors to evaluate
        candidate performance.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-yellow-500 transition">

      <h3 className="text-2xl font-bold text-yellow-400">
        🎤 Interview AI
      </h3>

      <p className="text-gray-400 mt-4">
        Generates interview questions and evaluates
        technical and communication skills.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500 transition">

      <h3 className="text-2xl font-bold text-red-400">
        🧠 Decision AI
      </h3>

      <p className="text-gray-400 mt-4">
        Analyzes all scores and provides final
        recruitment recommendations.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">

      <h3 className="text-2xl font-bold text-cyan-400">
        📝 Logging System
      </h3>

      <p className="text-gray-400 mt-4">
        Maintains system logs for monitoring
        and debugging.
      </p>

    </div>


  </div>

</section>
{/* Technology Stack & Testing */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Development Stack
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Tools & Engineering Practices
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      Zecpath AI follows professional software engineering practices
      using modern development tools, testing frameworks, and modular
      architecture.
    </p>

  </div>


  <div className="grid md:grid-cols-3 gap-8">


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <h3 className="text-2xl font-bold text-blue-400">
        🐍 Python
      </h3>

      <p className="text-gray-400 mt-4">
        Core programming language for AI modules,
        backend logic, and automation.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition">

      <h3 className="text-2xl font-bold text-green-400">
        🧪 Pytest
      </h3>

      <p className="text-gray-400 mt-4">
        Automated testing framework used to validate
        AI system components.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition">

      <h3 className="text-2xl font-bold text-purple-400">
        📦 Modular Design
      </h3>

      <p className="text-gray-400 mt-4">
        Independent modules for parsing, scoring,
        AI processing, and utilities.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-yellow-500 transition">

      <h3 className="text-2xl font-bold text-yellow-400">
        📝 Logging
      </h3>

      <p className="text-gray-400 mt-4">
        Tracks system activities, errors,
        and debugging information.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">

      <h3 className="text-2xl font-bold text-cyan-400">
        🔬 Testing
      </h3>

      <p className="text-gray-400 mt-4">
        Ensures reliability through automated
        validation and test cases.
      </p>

    </div>


    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-orange-500 transition">

      <h3 className="text-2xl font-bold text-orange-400">
        🔧 Git & GitHub
      </h3>

      <p className="text-gray-400 mt-4">
        Version control and repository management
        for collaborative development.
      </p>

    </div>


  </div>

</section>
{/* GitHub Repository Section */}

<section className="max-w-5xl mx-auto px-8 pb-24">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

    <p className="text-blue-400 uppercase tracking-widest">
      Source Code
    </p>


    <h2 className="text-4xl font-bold mt-4">
      Zecpath AI System Repository
    </h2>


    <p className="text-gray-400 mt-6">

      Complete AI engineering implementation including
      modular architecture, AI components, testing framework,
      and documentation.

    </p>


    <a
      href="https://github.com/shinaspn198/zecpath-ai-system"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
    >
      View GitHub Repository 🚀
    </a>


  </div>

</section>
{/* Completion Status */}

<section className="max-w-5xl mx-auto px-8 pb-24">

  <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">


    <h2 className="text-4xl font-bold text-green-400">
      Day 3 Completed Successfully ✅
    </h2>


    <p className="text-gray-300 mt-6 text-lg">

      Zecpath AI environment setup, repository structure,
      AI modules, testing framework, and engineering practices
      have been successfully implemented.

    </p>


  </div>

</section>
      <Footer />

    </div>
  );
}

export default Day3;