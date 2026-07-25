import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 2 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          AI System Architecture
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          Designing the complete AI ecosystem for the Zecpath Recruitment
          Platform, including frontend, backend, AI services, databases,
          and communication architecture.
        </p>

      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest">
            Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            High-Level AI System
          </h2>
        <div className="mt-16 flex flex-col items-center space-y-6">

  <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-5 w-80 text-center">
    🌐 React Frontend
  </div>

  <div className="text-3xl text-blue-500">↓</div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-5 w-80 text-center">
    ⚡ FastAPI Backend
  </div>

 <div className="grid md:grid-cols-3 gap-6">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h3 className="text-2xl font-bold text-blue-400">
      📄 ATS AI
    </h3>

    <p className="text-gray-400 mt-4">
      Parses resumes, extracts skills, compares them with job descriptions,
      and generates an ATS compatibility score.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h3 className="text-2xl font-bold text-green-400">
      🎤 Interview AI
    </h3>

    <p className="text-gray-400 mt-4">
      Conducts HR and technical interviews, generates questions,
      evaluates answers, and produces interview scores.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h3 className="text-2xl font-bold text-purple-400">
      😊 Behavior AI
    </h3>

    <p className="text-gray-400 mt-4">
      Analyzes facial expressions, communication patterns,
      confidence, and behavioral traits during interviews.
    </p>
  </div>

</div>

  <div className="text-3xl text-blue-500">↓</div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-5 w-80 text-center">
    🧠 Decision AI
  </div>

  <div className="text-3xl text-blue-500">↓</div>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
      🗄 PostgreSQL Database
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
      ☁ File Storage
    </div>

  </div>

</div>
        </div>

      </section>
    {/* ================= Communication Architecture ================= */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Communication Architecture
    </p>

    <h2 className="text-5xl font-bold mt-4">
      How Services Communicate
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      Zecpath uses both synchronous REST APIs and asynchronous message queues
      to ensure fast responses for users while efficiently processing
      long-running AI tasks.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* REST API */}

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition">

      <h3 className="text-3xl font-bold text-blue-400 mb-6">
        🔗 REST API
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>✅ User Login</li>
        <li>✅ Resume Upload</li>
        <li>✅ Job Creation</li>
        <li>✅ Fetch Candidate Profile</li>
        <li>✅ View Results</li>
      </ul>

    </div>

    {/* Queue */}

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-green-500 transition">

      <h3 className="text-3xl font-bold text-green-400 mb-6">
        📨 RabbitMQ / Redis Queue
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>✅ Interview Processing</li>
        <li>✅ Resume Parsing</li>
        <li>✅ Video Analysis</li>
        <li>✅ AI Report Generation</li>
        <li>✅ Notification Services</li>
      </ul>

    </div>

  </div>

</section>
{/* ================= AI Service Specifications ================= */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      AI Service Specifications
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Input • Processing • Output
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      Each AI engine receives specific inputs, performs intelligent
      processing, and generates structured outputs for the next stage
      of the recruitment workflow.
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* ATS AI */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-bold text-blue-400 mb-6">
        📄 ATS AI
      </h3>

      <p><strong>Input:</strong> Resume PDF, Job Description</p>

      <p className="mt-3">
        <strong>Processing:</strong> Resume parsing, skill extraction,
        keyword matching, experience analysis.
      </p>

      <p className="mt-3">
        <strong>Output:</strong> ATS Score, Skills, Shortlisting Status.
      </p>
    </div>

    {/* Interview AI */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-bold text-green-400 mb-6">
        🎤 Interview AI
      </h3>

      <p><strong>Input:</strong> Candidate Resume, Job Role</p>

      <p className="mt-3">
        <strong>Processing:</strong> Dynamic question generation,
        answer evaluation, technical assessment.
      </p>

      <p className="mt-3">
        <strong>Output:</strong> Technical Score, HR Score.
      </p>
    </div>

    {/* Behavior AI */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-bold text-purple-400 mb-6">
        😊 Behavior AI
      </h3>

      <p><strong>Input:</strong> Webcam Video, Audio</p>

      <p className="mt-3">
        <strong>Processing:</strong> Emotion detection, eye contact,
        facial expression analysis.
      </p>

      <p className="mt-3">
        <strong>Output:</strong> Confidence Score, Behavior Report.
      </p>
    </div>

    {/* Decision AI */}
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        🧠 Decision AI
      </h3>

      <p><strong>Input:</strong> ATS, Interview & Behavior Scores</p>

      <p className="mt-3">
        <strong>Processing:</strong> Weighted scoring, AI decision logic,
        recommendation engine.
      </p>

      <p className="mt-3">
        <strong>Output:</strong> Final Hiring Recommendation.
      </p>
    </div>

  </div>

</section>
{/* ================= Data Flow ================= */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Data Flow
    </p>

    <h2 className="text-5xl font-bold mt-4">
      End-to-End Recruitment Flow
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      This diagram illustrates how candidate information moves through
      the Zecpath AI platform—from application submission to the final
      hiring decision.
    </p>

  </div>

  <div className="flex flex-col items-center space-y-4">

    <div className="bg-slate-900 rounded-xl border border-slate-800 px-8 py-4 w-80 text-center">
      👤 Candidate
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 rounded-xl border border-slate-800 px-8 py-4 w-80 text-center">
      🌐 React Frontend
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 rounded-xl border border-slate-800 px-8 py-4 w-80 text-center">
      ⚡ FastAPI Backend
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 rounded-xl border border-slate-800 px-8 py-4 w-80 text-center">
      🤖 AI Gateway
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
        📄 ATS AI
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
        🎤 Interview AI
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
        😊 Behavior AI
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
        🧠 Decision AI
      </div>

    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 rounded-xl border border-slate-800 px-8 py-4 w-80 text-center">
      🗄 PostgreSQL Database
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-green-900/30 border border-green-500 rounded-xl px-8 py-4 w-80 text-center">
      ✅ Hiring Decision
    </div>

  </div>

</section>
{/* ================= Technology Stack ================= */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Technology Stack
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Technologies Used
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      The Zecpath AI platform is built using a modern technology stack
      that enables scalability, high performance, and AI-driven recruitment.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-400">⚛️ React</h3>
      <p className="text-gray-400 mt-4">
        Modern frontend framework for building an interactive user interface.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-green-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-green-400">⚡ FastAPI</h3>
      <p className="text-gray-400 mt-4">
        High-performance backend framework for AI APIs and business logic.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-blue-400">🗄 PostgreSQL</h3>
      <p className="text-gray-400 mt-4">
        Stores candidate profiles, job postings, interview results, and reports.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">📨 RabbitMQ</h3>
      <p className="text-gray-400 mt-4">
        Handles asynchronous processing for AI tasks and notifications.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-purple-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-purple-400">🤖 AI Models</h3>
      <p className="text-gray-400 mt-4">
        Power resume analysis, interview evaluation, and hiring recommendations.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-orange-500 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-orange-400">🐳 Docker</h3>
      <p className="text-gray-400 mt-4">
        Packages the application for consistent deployment across environments.
      </p>
    </div>

  </div>

</section>
{/* ================= Deployment Architecture ================= */}

<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-widest">
      Deployment Architecture
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Production Deployment
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
      The platform is designed as a scalable cloud-based application where
      frontend, backend, AI services, and databases are deployed independently.
    </p>

  </div>

  <div className="flex flex-col items-center space-y-5">

    <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-4 w-80 text-center">
      🌍 Internet Users
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-4 w-80 text-center">
      ⚛️ React Frontend (Vercel)
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="bg-slate-900 border border-slate-800 rounded-xl px-8 py-4 w-80 text-center">
      ⚡ FastAPI Backend
    </div>

    <div className="text-blue-500 text-3xl">↓</div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
        🤖 AI Services
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
        🗄 PostgreSQL
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
        ☁ File Storage
      </div>

    </div>

  </div>

</section>
{/* ================= Day 2 PDF ================= */}

<section className="max-w-5xl mx-auto px-8 pb-24">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

    <p className="text-blue-400 uppercase tracking-widest">
      Documentation
    </p>

    <h2 className="text-4xl font-bold mt-4">
      Day 2 Deliverable
    </h2>

    <p className="text-gray-400 mt-6">
      View or download the complete Day 2 AI System Architecture
      documentation.
    </p>

    <div className="flex justify-center gap-6 mt-10">

      <a
        href="/day2_completed.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
      >
        📄 View PDF
      </a>

      <a
        href="/day2_completed.pdf"
        download
        className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
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

export default Day2;