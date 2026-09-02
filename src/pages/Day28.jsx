import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day28() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 28 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          AI Screening Report Generator
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Transformed structured AI screening evaluations into
          recruiter-friendly screening reports containing key answers,
          strengths, risks, missing information, salary expectations,
          availability, confirmed skills, and recommendations.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day28_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 28 Report
          </a>

          <a
            href="#implementation"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Deliverables
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
            📄 Day 28 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            Structured AI screening reports with recruiter-ready summaries
            of candidate answers, strengths, risks, missing information,
            salary expectation, availability, and confirmed skills.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day28_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day28_completed.pdf"
              download="day28_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 28
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
            Day 28 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            AI Screening Report Generation
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 28 implementation transforms screening evaluation
            data into structured and recruiter-friendly reports.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🧠 Screening Report Builder
            </h3>

            <p className="text-gray-400 mt-4">
              Builds a structured ScreeningReport containing candidate
              evaluation information and recruiter-facing insights.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📋 Recruiter-Ready Format
            </h3>

            <p className="text-gray-400 mt-4">
              Converts the structured report into a readable format
              organized into clear recruiter-focused sections.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📊 Sample Screening Reports
            </h3>

            <p className="text-gray-400 mt-4">
              Includes sample reports demonstrating strong candidate
              and recruiter-review screening outcomes.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>


      {/* Report Architecture */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Report Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Screening Evaluation → Recruiter Report
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Screening evaluation information is organized into a
            structured report and converted into a recruiter-ready format.
          </p>

        </div>


        <div className="grid md:grid-cols-5 gap-5">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6 text-center">
            <div className="text-4xl">📊</div>
            <h3 className="font-bold text-blue-400 mt-4">
              Evaluation
            </h3>
            <p className="text-gray-400 mt-2">
              Screening score and decision
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6 text-center">
            <div className="text-4xl">🧠</div>
            <h3 className="font-bold text-green-400 mt-4">
              Report Builder
            </h3>
            <p className="text-gray-400 mt-2">
              Structured report
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6 text-center">
            <div className="text-4xl">📝</div>
            <h3 className="font-bold text-purple-400 mt-4">
              Summary
            </h3>
            <p className="text-gray-400 mt-2">
              Answers, strengths & risks
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6 text-center">
            <div className="text-4xl">👤</div>
            <h3 className="font-bold text-orange-400 mt-4">
              Candidate Data
            </h3>
            <p className="text-gray-400 mt-2">
              Salary, availability & skills
            </p>
          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6 text-center">
            <div className="text-4xl">📋</div>
            <h3 className="font-bold text-cyan-400 mt-4">
              Recruiter Report
            </h3>
            <p className="text-gray-400 mt-2">
              Ready-to-read output
            </p>
          </div>

        </div>

      </section>


      {/* Required Report Information */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 28 Report Information
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Recruiter Screening Insights
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              💬 Key Answers
            </h3>
            <p className="text-gray-400 mt-3">
              Important candidate answers captured in the screening report.
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              💪 Strengths
            </h3>
            <p className="text-gray-400 mt-3">
              Positive candidate attributes identified during screening.
            </p>
          </div>


          <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
            <h3 className="font-bold text-red-400">
              ⚠️ Risks
            </h3>
            <p className="text-gray-400 mt-3">
              Candidate risks or areas requiring recruiter attention.
            </p>
          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
            <h3 className="font-bold text-yellow-400">
              🔎 Missing Information
            </h3>
            <p className="text-gray-400 mt-3">
              Information that was not available during screening.
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              💰 Salary Expectation
            </h3>
            <p className="text-gray-400 mt-3">
              Candidate salary expectation included in the report.
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              ⏱️ Availability
            </h3>
            <p className="text-gray-400 mt-3">
              Candidate availability information included for recruiters.
            </p>
          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">
            <h3 className="font-bold text-cyan-400">
              🛠️ Confirmed Skills
            </h3>
            <p className="text-gray-400 mt-3">
              Skills confirmed during the screening process.
            </p>
          </div>


          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">
            <h3 className="font-bold text-indigo-400">
              🎯 Recommendation
            </h3>
            <p className="text-gray-400 mt-3">
              Recruiter-facing recommendation based on the screening decision.
            </p>
          </div>

        </div>

      </section>


      {/* Sample Reports */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Sample Screening Reports
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Recruiter Report Examples
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          {/* Strong Candidate */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🟢 Strong Candidate
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                <span className="text-blue-400 font-semibold">
                  Candidate:
                </span>{" "}
                CAND-001
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Screening Score:
                </span>{" "}
                91.67
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Decision:
                </span>{" "}
                strong_candidate
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Salary:
                </span>{" "}
                6 LPA
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Availability:
                </span>{" "}
                Immediate
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Skills:
                </span>{" "}
                Python, Machine Learning, FastAPI
              </p>

            </div>

          </div>


          {/* Review Candidate */}
          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-yellow-400">
              🟡 Review Candidate
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                <span className="text-blue-400 font-semibold">
                  Candidate:
                </span>{" "}
                CAND-002
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Screening Score:
                </span>{" "}
                65.0
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Decision:
                </span>{" "}
                review
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Availability:
                </span>{" "}
                15 days
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Skills:
                </span>{" "}
                Python, Pandas
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Missing:
                </span>{" "}
                Salary expectation
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Project Files */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Project Files
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Day 28 Implementation
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              🧠 Report Schema
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/screening_report_schema.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              🏗️ Report Builder
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/screening_report_builder.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              📋 Report Formatter
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/recruiter_report_formatter.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-orange-400">
              📊 Sample Reports
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/sample_screening_reports.py
            </p>

          </div>

        </div>

      </section>


      {/* Completion */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-green-500 rounded-2xl p-10 text-center">

          <h3 className="text-5xl font-bold text-green-400">
            Day 28
          </h3>

          <p className="text-2xl font-bold text-gray-200 mt-4">
            AI Screening Report Generator
          </p>

          <p className="text-gray-400 mt-6">
            Structured screening reports, recruiter-ready formatting,
            and sample screening reports have been implemented and tested.
          </p>

          <div className="mt-6 text-green-400 font-bold text-xl">
            ✓ IMPLEMENTATION COMPLETE
          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day28;