import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
 return (
  <div 
    id="pdf-content"
    className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
  >
<Navbar />
     {/* Hero Section */}
<section className="flex flex-col items-center justify-center min-h-screen pt-28 text-center px-6">

  <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-6">
    🚀 Day 1 Submission • Interactive Documentation Portal
  </div>

  <p className="text-blue-400 text-lg mb-4">
    AI-Powered Recruitment Platform
  </p>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="text-white">Zecpath</span>{" "}
<span className="text-blue-500">AI</span>

<br />

<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
Onboarding Portal
</span>
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl">
          Interactive documentation for understanding the complete
          AI Hiring Platform from Phase 1 to Phase 100.
        </p>

     <div className="mt-10 flex flex-wrap justify-center gap-5">

  <button
    onClick={() =>
      document.getElementById("lifecycle").scrollIntoView({
        behavior: "smooth",
      })
    }
    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition shadow-lg"
  >
    🚀 Explore Documentation
  </button>

  <a
    href="/day1_completed.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 border border-gray-600 rounded-xl text-lg hover:bg-slate-800 transition inline-block"
  >
    📄 View PDF
  </a>

</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl w-full">

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h2 className="text-4xl font-bold text-blue-500">100</h2>
    <p className="text-gray-400 mt-2">Project Phases</p>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h2 className="text-4xl font-bold text-green-500">21+</h2>
    <p className="text-gray-400 mt-2">AI Engines</p>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h2 className="text-4xl font-bold text-purple-500">6</h2>
    <p className="text-gray-400 mt-2">Major Modules</p>
  </div>

  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">
    <h2 className="text-4xl font-bold text-yellow-500">AI</h2>
    <p className="text-gray-400 mt-2">End-to-End Automation</p>
  </div>
  

</div>

      </section>

{/* ================= Project Overview ================= */}

<section
  id="overview"
  className="max-w-7xl mx-auto px-8 py-24"
>
  <div className="text-center mb-16">

    <p className="text-blue-500 uppercase tracking-widest">
      Product Overview
    </p>

    <h2 className="text-5xl font-bold mt-4">
      What is Zecpath?
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
      Zecpath is an AI-powered recruitment platform that automates
      the complete hiring lifecycle. It helps recruiters screen,
      interview, evaluate, and hire candidates efficiently using
      Artificial Intelligence.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">
        🎯 Vision
      </h3>
      <p className="text-gray-400">
        Build an intelligent hiring platform capable of automating recruitment while maintaining fairness, transparency, and scalability.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-semibold mb-4 text-green-400">
        🚀 Mission
      </h3>
      <p className="text-gray-400">
        Reduce recruiter workload by automating resume screening, interviews, candidate evaluation, and offer generation through AI.
      </p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        💼 Business Objectives
      </h3>

      <ul className="text-gray-400 space-y-2">
        <li>✔ Recruiter Automation</li>
        <li>✔ Fair Hiring</li>
        <li>✔ Faster Recruitment</li>
        <li>✔ Scalability</li>
        <li>✔ Compliance</li>
      </ul>

    </div>

  </div>

</section>
{/* ================= Hiring Lifecycle ================= */}

<section
  id="lifecycle"
  className="max-w-7xl mx-auto px-8 py-24"
>

<div className="text-center mb-20">

<p className="text-blue-500 uppercase tracking-widest">
Hiring Lifecycle
</p>

<h2 className="text-5xl font-bold mt-4">
Complete AI Hiring Workflow
</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto">
The following workflow shows how Zecpath automates the
complete recruitment process using Artificial Intelligence.
</p>

</div>

<div className="space-y-6">

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
🏢 Company Creates Job Posting
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
📄 Candidate Applies & Uploads Resume
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
🤖 AI Resume Parser
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
📊 ATS Scoring Engine
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
📞 AI Voice Screening
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
🎤 AI HR Interview
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
💻 AI Technical Interview
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
⌨️ AI Machine Test
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
🎯 Final AI Decision
</div>

<div className="text-center text-blue-500 text-3xl">↓</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
📧 Offer Letter Automation
</div>

</div>

</section>
{/* ================= AI Modules ================= */}

<section
  id="ai"
  className="max-w-7xl mx-auto px-8 py-24"
>

<div className="text-center mb-16">

<p className="text-blue-500 uppercase tracking-widest">
AI Modules
</p>

<h2 className="text-5xl font-bold mt-4">
Artificial Intelligence Engines
</h2>

<p className="text-gray-400 max-w-3xl mx-auto mt-6">
Each AI engine is responsible for automating a specific stage
of the recruitment process.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-blue-400">📄 Resume Parser AI</h3>
<p className="mt-4 text-gray-400">
Extracts skills, education, certifications and experience from resumes.
</p>
</div>

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-green-400">📊 ATS Scoring AI</h3>
<p className="mt-4 text-gray-400">
Matches resumes with job descriptions and generates candidate scores.
</p>
</div>

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-purple-400">📞 Voice Screening AI</h3>
<p className="mt-4 text-gray-400">
Conducts automated voice interviews and screening calls.
</p>
</div>

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-pink-400">🎤 HR Interview AI</h3>
<p className="mt-4 text-gray-400">
Evaluates communication, confidence and HR interview responses.
</p>
</div>

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-orange-400">💻 Technical Interview AI</h3>
<p className="mt-4 text-gray-400">
Conducts technical interviews based on candidate skills.
</p>
</div>

<div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
<h3 className="text-xl font-bold text-yellow-400">🎯 Final Decision AI</h3>
<p className="mt-4 text-gray-400">
Combines all evaluation scores to recommend hiring decisions.
</p>
</div>

</div>

</section>
{/* ================= AI Responsibilities ================= */}

<section
  id="responsibilities"
  className="max-w-6xl mx-auto px-8 py-24"
>

<div className="text-center mb-16">

<p className="text-blue-500 uppercase tracking-widest">
AI Responsibilities
</p>

<h2 className="text-5xl font-bold mt-4">
Zecpath AI Responsibilities Overview
</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto">
Artificial Intelligence powers every stage of the recruitment
process, reducing manual effort while improving speed,
consistency, and decision quality.
</p>

</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 space-y-8 leading-8 text-gray-300">

<div>

<h3 className="text-2xl font-semibold text-blue-400 mb-4">
📄 Resume Intelligence
</h3>

<p>
The AI Resume Parser extracts structured information such as
skills, education, certifications and experience from uploaded
resumes. The ATS Scoring Engine then compares the candidate's
profile with the job description and generates a suitability score.
</p>

</div>

<div>

<h3 className="text-2xl font-semibold text-green-400 mb-4">
🎤 AI Interview Automation
</h3>

<p>
Shortlisted candidates are automatically screened using AI Voice
Screening followed by AI HR Interviews. The platform evaluates
communication skills, confidence, fluency and response quality
without requiring continuous recruiter involvement.
</p>

</div>

<div>

<h3 className="text-2xl font-semibold text-purple-400 mb-4">
💻 Technical Evaluation
</h3>

<p>
AI conducts technical interviews and machine tests by generating
role-specific questions and evaluating coding ability,
problem-solving skills and technical knowledge.
</p>

</div>

<div>

<h3 className="text-2xl font-semibold text-yellow-400 mb-4">
🎯 Decision Intelligence
</h3>

<p>
The Final Decision AI combines ATS scores, interview results,
technical performance and assessment outcomes to recommend
whether a candidate should be shortlisted, rejected or selected.
</p>

</div>

<div>

<h3 className="text-2xl font-semibold text-pink-400 mb-4">
🚀 Business Impact
</h3>

<ul className="list-disc ml-6 space-y-2">

<li>Automates repetitive recruitment tasks</li>

<li>Reduces recruiter workload</li>

<li>Improves hiring speed</li>

<li>Supports fair and consistent evaluations</li>

<li>Scales recruitment for large organizations</li>

<li>Provides better candidate experience</li>

</ul>

</div>

</div>

</section>
<Footer />
    </div>
  );
}

export default Home;