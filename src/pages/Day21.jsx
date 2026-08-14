import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day21() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 21 Submission
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Eligibility Decision Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          An automated eligibility engine that evaluates candidates using
          ATS scores and recruiter-defined job rules to classify candidates
          as Eligible, Review, or Rejected.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="/day21_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 21 Report
          </a>

          <a
            href="#deliverables"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Deliverables
          </a>

        </div>

      </section>

      {/* Objective */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-blue-500 rounded-2xl p-10">

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-widest">
              Objective
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Automated Candidate Eligibility
            </h2>

          </div>

          <p className="text-gray-400 mt-6 text-center max-w-3xl mx-auto">
            The system automatically determines whether candidates qualify
            for AI screening calls by combining ATS results with configurable
            recruiter-defined eligibility rules.
          </p>

        </div>

      </section>

      {/* Deliverables */}
      <section
        id="deliverables"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 21 Deliverables
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Eligibility System Components
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Three core deliverables were implemented and tested as part of
            the Day 21 Eligibility Decision Engine.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <div className="text-4xl">
              ⚙️
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mt-5">
              Eligibility Decision Engine
            </h3>

            <p className="text-gray-400 mt-4">
              Evaluates candidates against ATS score, mandatory skills,
              experience, location, and availability rules.
            </p>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>✅ ATS score evaluation</p>
              <p>✅ Mandatory skill evaluation</p>
              <p>✅ Experience evaluation</p>
              <p>✅ Location evaluation</p>
              <p>✅ Availability evaluation</p>

            </div>

          </div>

          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <div className="text-4xl">
              📋
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mt-5">
              Rule Configuration Format
            </h3>

            <p className="text-gray-400 mt-4">
              Eligibility rules are stored separately in a configurable
              JSON file so that requirements can be changed without
              modifying the decision engine.
            </p>

            <div className="bg-slate-950 rounded-xl p-5 mt-6">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`{
  "AI Engineer": {
    "minimum_ats_score": 70,
    "mandatory_skills": [
      "Python",
      "Machine Learning",
      "FastAPI"
    ],
    "experience": {
      "min_years": 0,
      "max_years": 3
    }
  }
}`}
              </pre>

            </div>

          </div>

          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <div className="text-4xl">
              📊
            </div>

            <h3 className="text-2xl font-bold text-green-400 mt-5">
              Candidate Eligibility Result
            </h3>

            <p className="text-gray-400 mt-4">
              Produces a structured result containing the candidate ID,
              job role, eligibility status, ATS score, failures,
              review conditions, and individual checks.
            </p>

            <div className="bg-slate-950 rounded-xl p-5 mt-6">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`{
  "candidate_id": "CAND-001",
  "job_role": "AI Engineer",
  "eligibility_status": "Eligible",
  "ats_score": 82,
  "critical_failures": [],
  "review_conditions": []
}`}
              </pre>

            </div>

          </div>

        </div>

      </section>

      {/* Decision Logic */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Decision Logic
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Classification
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Eligible */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              🟢
            </div>

            <h3 className="text-3xl font-bold text-green-400 mt-5">
              Eligible
            </h3>

            <p className="text-gray-400 mt-4">
              All configured eligibility requirements are satisfied.
            </p>

            <div className="bg-slate-950 rounded-xl p-5 mt-6">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`ATS Score: 82
Skills: All Present
Experience: 2 Years
Location: Bangalore
Availability: Immediate

→ Eligible`}
              </pre>

            </div>

          </div>

          {/* Review */}
          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              🟡
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mt-5">
              Review
            </h3>

            <p className="text-gray-400 mt-4">
              Critical requirements pass, but a recruiter review condition
              has been detected.
            </p>

            <div className="bg-slate-950 rounded-xl p-5 mt-6">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`ATS Score: 82
Skills: All Present
Experience: 2 Years
Location: Kochi

→ Review
Reason: Location`}
              </pre>

            </div>

          </div>

          {/* Rejected */}
          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              🔴
            </div>

            <h3 className="text-3xl font-bold text-red-400 mt-5">
              Rejected
            </h3>

            <p className="text-gray-400 mt-4">
              A critical eligibility requirement has failed.
            </p>

            <div className="bg-slate-950 rounded-xl p-5 mt-6">

              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`ATS Score: 55
Required: 70

Critical Failure:
ATS Score

→ Rejected`}
              </pre>

            </div>

          </div>

        </div>

      </section>

      {/* Implementation Status */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-blue-500 rounded-2xl p-10">

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-widest">
              Implementation Status
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Day 21 Completed
            </h2>

          </div>

          <div className="mt-10 space-y-5 text-gray-300">

            <p>✅ Eligibility configuration created</p>
            <p>✅ ATS score eligibility implemented</p>
            <p>✅ Mandatory skill eligibility implemented</p>
            <p>✅ Experience eligibility implemented</p>
            <p>✅ Location eligibility implemented</p>
            <p>✅ Availability eligibility implemented</p>
            <p>✅ Eligible scenario tested</p>
            <p>✅ Review scenario tested</p>
            <p>✅ Rejected scenario tested</p>
            <p>✅ Candidate result structure implemented</p>

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
            📄 Day 21 Eligibility Report
          </h2>

          <p className="text-gray-400 mt-5">
            Read or download the complete Day 21 Eligibility Decision
            Engine report.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <a
              href="/day21_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              👁️ View PDF
            </a>

            <a
              href="/day21_completed.pdf"
              download="day21_completed.pdf"
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
            Day 21 Completed
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            The Zecpath AI recruitment platform can now automatically
            evaluate candidate eligibility using configurable rules and
            classify candidates as Eligible, Review, or Rejected.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day21;