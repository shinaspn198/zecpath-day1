import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day18() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 18 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          ATS Scoring & Candidate Evaluation
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Implemented and validated the candidate evaluation workflow by
          connecting ATS scoring with role-specific configuration,
          candidate evaluation, and automated decision logic.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="/day18_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 18 Report
          </a>

          <a
            href="#implementation"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Implementation
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
            📄 Day 18 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            ATS scoring workflow, candidate evaluation logic,
            role-based scoring configuration, and API integration.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day18_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day18_completed.pdf"
              download="day18_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 18
            </a>

          </div>

        </div>

      </section>

      {/* Implementation */}
      <section
        id="implementation"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest">
            Scoring Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Evaluation Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Candidate information is evaluated through the ATS scoring
            pipeline before the final recruitment decision is generated.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-400">
              📄 Candidate Profile
            </h3>
            <p className="text-gray-400 mt-4">
              Parsed candidate information provides the input required
              for ATS evaluation.
            </p>
          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              ⚙️ Role Configuration
            </h3>
            <p className="text-gray-400 mt-4">
              Role-specific weights stored in the scoring configuration
              control how candidate attributes contribute to the score.
            </p>
          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              📊 ATS Score
            </h3>
            <p className="text-gray-400 mt-4">
              The scoring engine calculates a normalized ATS score
              representing the candidate's job match.
            </p>
          </div>

          <div className="bg-slate-900 border border-orange-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-400">
              🎯 Evaluation
            </h3>
            <p className="text-gray-400 mt-4">
              The calculated score is passed to the decision workflow
              for candidate evaluation.
            </p>
          </div>

        </div>

      </section>

      {/* Scoring Components */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            ATS Components
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Role-Based Scoring Configuration
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-blue-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400">
                AI Engineer
              </h3>

              <p className="text-gray-400 mt-4">
                Uses role-specific weights to evaluate technical
                capabilities and candidate-job compatibility.
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400">
                Data Scientist
              </h3>

              <p className="text-gray-400 mt-4">
                Uses a dedicated scoring configuration for data science
                skills and relevant candidate attributes.
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-400">
                Software Engineer
              </h3>

              <p className="text-gray-400 mt-4">
                Uses role-specific scoring weights to evaluate software
                engineering candidates.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Architecture */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Processing Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ATS Evaluation Pipeline
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-5 gap-4 items-center text-center">

            <div className="border border-blue-500 rounded-xl p-6">
              <span className="text-3xl">📄</span>
              <h3 className="font-bold mt-3">Resume</h3>
            </div>

            <div className="text-gray-500 text-2xl">→</div>

            <div className="border border-green-500 rounded-xl p-6">
              <span className="text-3xl">🔍</span>
              <h3 className="font-bold mt-3">Profile</h3>
            </div>

            <div className="text-gray-500 text-2xl">→</div>

            <div className="border border-purple-500 rounded-xl p-6">
              <span className="text-3xl">📊</span>
              <h3 className="font-bold mt-3">ATS Score</h3>
            </div>

          </div>

          <div className="flex justify-center text-gray-500 text-2xl my-4">
            ↓
          </div>

          <div className="max-w-md mx-auto border border-orange-500 rounded-xl p-6 text-center">

            <span className="text-3xl">🎯</span>

            <h3 className="font-bold text-xl mt-3">
              Candidate Evaluation
            </h3>

            <p className="text-gray-400 mt-2">
              Score is passed to the candidate decision workflow.
            </p>

          </div>

        </div>

      </section>

      {/* Key Learnings */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 18 Outcomes
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Key Implementation Learnings
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-400">
              Configuration-Driven Scoring
            </h3>

            <p className="text-gray-400 mt-4">
              Keeping scoring weights in a configuration file makes
              the ATS engine easier to modify and maintain.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-green-400">
              API-Based Evaluation
            </h3>

            <p className="text-gray-400 mt-4">
              The scoring engine can be consumed through the FastAPI
              layer as part of the larger recruitment workflow.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-purple-400">
              Reusable Architecture
            </h3>

            <p className="text-gray-400 mt-4">
              Separating candidate data, scoring configuration, and
              decision logic makes the system easier to extend.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-orange-400">
              Decision Automation
            </h3>

            <p className="text-gray-400 mt-4">
              ATS scores can be directly connected to automated
              candidate evaluation and shortlisting.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day18;
