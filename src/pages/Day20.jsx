import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day20() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 20 Submission
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Final ATS Evaluation & Production Readiness
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Final validation of the Zecpath AI recruitment system covering
          ATS scoring, candidate ranking, shortlisting, accuracy evaluation,
          API validation, demo datasets, and production readiness.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="/day20_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 20 Report
          </a>

          <a
            href="#evaluation"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Evaluation
          </a>

        </div>

      </section>

      {/* Deliverables */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 20 Deliverables
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Final Project Validation
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Day 20 completes the validation stage of the Zecpath AI
            ATS system and prepares the project for final demonstration.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🚀 Production-Ready ATS
            </h3>

            <p className="text-gray-400 mt-4">
              End-to-end recruitment workflow connecting resume processing,
              ATS scoring, candidate ranking, and automated shortlisting.
            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📊 Demo Dataset
            </h3>

            <p className="text-gray-400 mt-4">
              Five candidates were evaluated and ranked using their ATS
              scores to demonstrate recruitment decision workflows.
            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📄 Final Evaluation Report
            </h3>

            <p className="text-gray-400 mt-4">
              Complete documentation of ATS accuracy, ranking,
              shortlisting, API validation, and production readiness.
            </p>

          </div>

        </div>

      </section>

      {/* Evaluation */}
      <section
        id="evaluation"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            ATS Evaluation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            System Performance
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Accuracy */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🎯 Skill Extraction Accuracy
            </h3>

            <div className="text-6xl font-bold mt-6 text-green-400">
              100%
            </div>

            <p className="text-gray-400 mt-4">
              Evaluation performed using 3 resume samples.
              17 skills were successfully detected with
              0 missed skills and 0 false positives.
            </p>

          </div>

          {/* Accuracy Details */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📋 Evaluation Results
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Resume Samples</span>
                <span className="font-bold">3</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Skills Detected</span>
                <span className="font-bold">17</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Missed Skills</span>
                <span className="font-bold">0</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>False Positives</span>
                <span className="font-bold">0</span>
              </div>

              <div className="flex justify-between">
                <span>Overall Accuracy</span>
                <span className="font-bold text-green-400">100%</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ATS Components */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            ATS Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            End-to-End Recruitment Workflow
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-7 text-center">

            <div className="text-4xl">📄</div>

            <h3 className="font-bold text-xl mt-4">
              Resume Processing
            </h3>

            <p className="text-gray-400 mt-3">
              Extract and process candidate resume information.
            </p>

          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-7 text-center">

            <div className="text-4xl">🧠</div>

            <h3 className="font-bold text-xl mt-4">
              AI Matching
            </h3>

            <p className="text-gray-400 mt-3">
              Compare candidate information with job requirements.
            </p>

          </div>

          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-7 text-center">

            <div className="text-4xl">📊</div>

            <h3 className="font-bold text-xl mt-4">
              ATS Scoring
            </h3>

            <p className="text-gray-400 mt-3">
              Calculate weighted candidate compatibility scores.
            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-7 text-center">

            <div className="text-4xl">🎯</div>

            <h3 className="font-bold text-xl mt-4">
              Shortlisting
            </h3>

            <p className="text-gray-400 mt-3">
              Convert ATS scores into recruitment decisions.
            </p>

          </div>

        </div>

      </section>

      {/* Candidate Ranking */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Demo Dataset
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Ranking Results
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="p-4 text-blue-400">
                  Rank
                </th>

                <th className="p-4 text-blue-400">
                  Candidate
                </th>

                <th className="p-4 text-blue-400">
                  ATS Score
                </th>

                <th className="p-4 text-blue-400">
                  Decision
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-slate-800">

                <td className="p-4">
                  1
                </td>

                <td className="p-4 font-semibold">
                  Alice
                </td>

                <td className="p-4 text-green-400 font-bold">
                  95%
                </td>

                <td className="p-4 text-green-400">
                  ✅ Shortlisted
                </td>

              </tr>

              <tr className="border-b border-slate-800">

                <td className="p-4">
                  2
                </td>

                <td className="p-4 font-semibold">
                  John
                </td>

                <td className="p-4 text-green-400 font-bold">
                  88%
                </td>

                <td className="p-4 text-green-400">
                  ✅ Shortlisted
                </td>

              </tr>

              <tr className="border-b border-slate-800">

                <td className="p-4">
                  3
                </td>

                <td className="p-4 font-semibold">
                  Sarah
                </td>

                <td className="p-4 text-green-400 font-bold">
                  84%
                </td>

                <td className="p-4 text-green-400">
                  ✅ Shortlisted
                </td>

              </tr>

              <tr className="border-b border-slate-800">

                <td className="p-4">
                  4
                </td>

                <td className="p-4 font-semibold">
                  David
                </td>

                <td className="p-4 text-green-400 font-bold">
                  76%
                </td>

                <td className="p-4 text-green-400">
                  ✅ Shortlisted
                </td>

              </tr>

              <tr>

                <td className="p-4">
                  5
                </td>

                <td className="p-4 font-semibold">
                  Michael
                </td>

                <td className="p-4 text-yellow-400 font-bold">
                  68%
                </td>

                <td className="p-4 text-yellow-400">
                  🔎 Review
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Shortlisting Rules */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Decision Engine
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Shortlisting Rules
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">

            <div className="text-4xl">✅</div>

            <h3 className="text-2xl font-bold text-green-400 mt-4">
              Shortlisted
            </h3>

            <p className="text-4xl font-bold mt-4">
              70–100
            </p>

            <p className="text-gray-400 mt-3">
              Candidate qualifies for the next recruitment stage.
            </p>

          </div>

          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8 text-center">

            <div className="text-4xl">🔎</div>

            <h3 className="text-2xl font-bold text-yellow-400 mt-4">
              Review
            </h3>

            <p className="text-4xl font-bold mt-4">
              50–69
            </p>

            <p className="text-gray-400 mt-3">
              Candidate requires additional recruiter evaluation.
            </p>

          </div>

          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8 text-center">

            <div className="text-4xl">❌</div>

            <h3 className="text-2xl font-bold text-red-400 mt-4">
              Rejected
            </h3>

            <p className="text-4xl font-bold mt-4">
              0–49
            </p>

            <p className="text-gray-400 mt-3">
              Candidate does not meet the configured evaluation criteria.
            </p>

          </div>

        </div>

      </section>

      {/* API Validation */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            API Validation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Shortlisting API Results
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-yellow-400">
              🔎 Review Scenario
            </h3>

            <p className="text-gray-400 mt-4">
              ATS Score: <strong className="text-white">60</strong>
            </p>

            <div className="bg-slate-950 rounded-xl p-6 mt-5">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`{
  "candidate_id": "CAND-82624710",
  "ats_score": 60,
  "status": "review",
  "message": "Candidate shortlisting completed"
}`}
              </pre>

            </div>

          </div>

          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-red-400">
              ❌ Rejected Scenario
            </h3>

            <p className="text-gray-400 mt-4">
              ATS Score: <strong className="text-white">40</strong>
            </p>

            <div className="bg-slate-950 rounded-xl p-6 mt-5">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`{
  "candidate_id": "CAND-82624710",
  "ats_score": 40,
  "status": "rejected",
  "message": "Candidate shortlisting completed"
}`}
              </pre>

            </div>

          </div>

        </div>

      </section>

      {/* Production Readiness */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-blue-500 rounded-2xl p-10">

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-widest">
              Final Assessment
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Production Readiness
            </h2>

          </div>

          <div className="mt-10 space-y-5 text-gray-300">

            <p>✅ Resume processing implemented</p>
            <p>✅ Skill extraction implemented</p>
            <p>✅ ATS scoring implemented</p>
            <p>✅ Semantic matching implemented</p>
            <p>✅ Candidate ranking implemented</p>
            <p>✅ Automated shortlisting implemented</p>
            <p>✅ FastAPI integration implemented</p>
            <p>✅ Accuracy evaluation completed</p>
            <p>✅ Decision threshold consistency refined</p>

          </div>

        </div>

      </section>

      {/* PDF Documentation */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

          <p className="text-blue-400 uppercase tracking-widest">
            Final Documentation
          </p>

          <h2 className="text-4xl font-bold mt-4">
            📄 Day 20 Evaluation Report
          </h2>

          <p className="text-gray-400 mt-5">
            Read or download the complete Day 20 ATS evaluation report.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <a
              href="/day20_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              👁️ View PDF
            </a>

            <a
              href="/day20_completed.pdf"
              download="day20_completed.pdf"
              className="px-7 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
            >
              ⬇️ Download PDF
            </a>

          </div>

        </div>

      </section>

      {/* Final Message */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="text-center bg-slate-900 border border-green-500 rounded-2xl p-10">

          <div className="text-5xl">
            🏆
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Zecpath AI Internship Completed
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Day 20 completes the final validation stage of the
            Zecpath AI recruitment platform, connecting ATS evaluation,
            candidate ranking, and automated recruitment decisions.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day20;