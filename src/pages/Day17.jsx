import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day17() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 17 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          ATS Testing & Accuracy Evaluation
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Tested and validated the Zecpath ATS scoring and shortlisting
          system using controlled candidate scenarios, boundary testing,
          API integration testing, accuracy evaluation, and improvement
          analysis.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="/day17_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 17 Report
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
            📄 Day 17 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            ATS testing, accuracy metrics, implementation validation,
            boundary testing, and improvement backlog.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <a
              href="/day17_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day17_completed.pdf"
              download="day17_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 17
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
            ATS Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            End-to-End ATS Workflow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The weighted ATS engine was integrated with the FastAPI
            scoring endpoint and connected to the candidate shortlisting
            workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-400">
              📄 Candidate Data
            </h3>
            <p className="text-gray-400 mt-4">
              Candidate scoring inputs are validated using Pydantic
              request schemas.
            </p>
          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              ⚙️ ATS Engine
            </h3>
            <p className="text-gray-400 mt-4">
              Role-specific weights from weights.json are used to
              calculate the final ATS score.
            </p>
          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              📊 Score API
            </h3>
            <p className="text-gray-400 mt-4">
              The FastAPI scoring endpoint returns the calculated
              candidate ATS score.
            </p>
          </div>

          <div className="bg-slate-900 border border-orange-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-400">
              🏆 Shortlisting
            </h3>
            <p className="text-gray-400 mt-4">
              Candidates are classified as shortlisted, review, or
              rejected using score thresholds.
            </p>
          </div>

        </div>

      </section>

      {/* Test Results */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Validation Results
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ATS Boundary Testing
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-green-500 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold text-green-400">
                70.00%
              </h3>
              <p className="text-gray-400 mt-3">
                Shortlisted
              </p>
              <p className="text-green-400 mt-4 font-semibold">
                ✓ Passed
              </p>
            </div>

            <div className="border border-yellow-500 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                69.99%
              </h3>
              <p className="text-gray-400 mt-3">
                Review
              </p>
              <p className="text-yellow-400 mt-4 font-semibold">
                ✓ Passed
              </p>
            </div>

            <div className="border border-red-500 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold text-red-400">
                49.99%
              </h3>
              <p className="text-gray-400 mt-3">
                Rejected
              </p>
              <p className="text-red-400 mt-4 font-semibold">
                ✓ Passed
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Accuracy Metrics */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Evaluation Metrics
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Controlled Test Results
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-400">
              100%
            </h3>
            <p className="text-gray-400 mt-3">
              Precision
            </p>
          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              100%
            </h3>
            <p className="text-gray-400 mt-3">
              Recall
            </p>
          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-purple-400">
              100%
            </h3>
            <p className="text-gray-400 mt-3">
              F1 Score
            </p>
          </div>

          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              7/7
            </h3>
            <p className="text-gray-400 mt-3">
              Decision Agreement
            </p>
          </div>

        </div>

        <p className="text-gray-500 text-center mt-8 max-w-3xl mx-auto">
          Metrics are based on a small controlled test set and should
          not be interpreted as production-level ATS accuracy.
        </p>

      </section>

      {/* Improvements */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Future Improvements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Improvement Backlog
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-blue-400">
                Non-Tech Role Support
              </h3>
              <p className="text-gray-400 mt-2">
                Add dedicated scoring configurations for HR,
                Marketing, Sales, and other roles.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-green-400">
                Larger Test Dataset
              </h3>
              <p className="text-gray-400 mt-2">
                Expand testing with larger labelled resume and
                job-description datasets.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-purple-400">
                Role-Specific Weights
              </h3>
              <p className="text-gray-400 mt-2">
                Tune ATS weights according to different job roles.
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-orange-400">
                Continuous Evaluation
              </h3>
              <p className="text-gray-400 mt-2">
                Add regression testing whenever ATS scoring logic
                is updated.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day17;