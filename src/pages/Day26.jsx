import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day26() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 26 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Final Screening Scoring & Evaluation
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Completed the final screening scoring layer that evaluates candidate
          responses across clarity, relevance, completeness, and consistency,
          calculates the overall screening score, and classifies candidate
          performance.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day26_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 26 Report
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
            📄 Day 26 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            Final screening scoring, question-level evaluation, score
            aggregation, candidate classification, edge-case handling,
            integration testing, and web application readiness.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day26_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day26_completed.pdf"
              download="day26_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 26
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
            Day 26 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Final Screening Scoring Layer
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The scoring layer converts question-level screening evaluations
            into a single measurable candidate performance score.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📝 Question Scoring
            </h3>

            <p className="text-gray-400 mt-4">
              Evaluates each candidate answer using clarity, relevance,
              completeness, and consistency.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📊 Score Aggregation
            </h3>

            <p className="text-gray-400 mt-4">
              Combines individual question scores into a total screening
              score and maximum possible score.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🎯 Score Interpretation
            </h3>

            <p className="text-gray-400 mt-4">
              Converts the numerical score into meaningful candidate
              performance categories.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 4 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              🔗 Final Integration
            </h3>

            <p className="text-gray-400 mt-4">
              Integrates question scores, overall scoring, classification,
              validation, and final screening output.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>


      {/* Scoring Architecture */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Scoring Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Answer → Final Screening Score
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The complete scoring pipeline transforms individual answer
            evaluations into a final screening performance result.
          </p>

        </div>


        <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-10">

          <div className="grid md:grid-cols-6 gap-4 text-center">

            <div className="border border-blue-500 rounded-xl p-5">
              <div className="text-3xl">💬</div>
              <p className="font-semibold mt-3">
                Answer
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-5">
              <div className="text-3xl">📝</div>
              <p className="font-semibold mt-3">
                Evaluate
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-5">
              <div className="text-3xl">📊</div>
              <p className="font-semibold mt-3">
                Score
              </p>
            </div>

            <div className="border border-orange-500 rounded-xl p-5">
              <div className="text-3xl">➕</div>
              <p className="font-semibold mt-3">
                Aggregate
              </p>
            </div>

            <div className="border border-pink-500 rounded-xl p-5">
              <div className="text-3xl">🎯</div>
              <p className="font-semibold mt-3">
                Interpret
              </p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-5">
              <div className="text-3xl">✅</div>
              <p className="font-semibold mt-3">
                Result
              </p>
            </div>

          </div>

          <div className="mt-10 text-center text-green-400 font-semibold">
            ✓ Final screening scoring pipeline implemented successfully
          </div>

        </div>

      </section>


      {/* Question Evaluation */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Question-Level Evaluation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Four-Dimension Answer Scoring
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every screening answer is evaluated across four dimensions,
            producing a maximum question score of 100.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-7">

            <h3 className="text-2xl font-bold text-blue-400">
              🗣️ Clarity
            </h3>

            <p className="text-gray-400 mt-4">
              Measures how clearly and understandably the candidate
              communicates the answer.
            </p>

            <div className="mt-6 text-blue-400 font-bold">
              25 Points
            </div>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-2xl p-7">

            <h3 className="text-2xl font-bold text-green-400">
              🎯 Relevance
            </h3>

            <p className="text-gray-400 mt-4">
              Measures whether the answer directly addresses the screening
              question.
            </p>

            <div className="mt-6 text-green-400 font-bold">
              25 Points
            </div>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-7">

            <h3 className="text-2xl font-bold text-purple-400">
              📚 Completeness
            </h3>

            <p className="text-gray-400 mt-4">
              Measures whether the candidate provides sufficient information
              to answer the question properly.
            </p>

            <div className="mt-6 text-purple-400 font-bold">
              25 Points
            </div>

          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-7">

            <h3 className="text-2xl font-bold text-cyan-400">
              🔄 Consistency
            </h3>

            <p className="text-gray-400 mt-4">
              Measures whether the answer remains logically consistent with
              the candidate's provided information.
            </p>

            <div className="mt-6 text-cyan-400 font-bold">
              25 Points
            </div>

          </div>

        </div>

      </section>


      {/* Score Calculation */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Score Calculation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Overall Screening Score
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Question scores are aggregated and normalized into a percentage
            representing the candidate's overall screening performance.
          </p>

        </div>


        <div className="bg-slate-900 border border-blue-500 rounded-2xl p-10 text-center">

          <div className="text-3xl md:text-4xl font-bold text-blue-400">
            Overall Score = (Total Score / Maximum Score) × 100
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="border border-blue-500 rounded-xl p-6">

              <div className="text-3xl">
                ➕
              </div>

              <h3 className="font-bold mt-3">
                Total Score
              </h3>

              <p className="text-gray-400 mt-2">
                Sum of all evaluated question scores.
              </p>

            </div>


            <div className="border border-purple-500 rounded-xl p-6">

              <div className="text-3xl">
                🎯
              </div>

              <h3 className="font-bold mt-3">
                Maximum Score
              </h3>

              <p className="text-gray-400 mt-2">
                Number of evaluated questions multiplied by 100.
              </p>

            </div>


            <div className="border border-green-500 rounded-xl p-6">

              <div className="text-3xl">
                📈
              </div>

              <h3 className="font-bold mt-3">
                Overall Percentage
              </h3>

              <p className="text-gray-400 mt-2">
                Normalized final screening performance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Classification */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Score Interpretation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Performance Classification
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The final numerical score is converted into a meaningful
            screening category for downstream candidate evaluation.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              🏆
            </div>

            <h3 className="text-3xl font-bold text-green-400 mt-5">
              Excellent
            </h3>

            <p className="text-5xl font-bold mt-5">
              90+
            </p>

            <p className="text-gray-400 mt-5">
              Candidate demonstrates a very strong screening performance.
            </p>

          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              📊
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mt-5">
              Average
            </h3>

            <p className="text-5xl font-bold mt-5">
              50–89
            </p>

            <p className="text-gray-400 mt-5">
              Candidate demonstrates an acceptable but improvable
              screening performance.
            </p>

          </div>


          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8 text-center">

            <div className="text-5xl">
              ⚠️
            </div>

            <h3 className="text-3xl font-bold text-red-400 mt-5">
              Weak
            </h3>

            <p className="text-5xl font-bold mt-5">
              &lt;50
            </p>

            <p className="text-gray-400 mt-5">
              Candidate demonstrates a weak screening performance.
            </p>

          </div>

        </div>

      </section>


      {/* Test Results */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Final Validation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Screening Scorer Test Results
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The final integration test validates strong, average, weak,
            empty-score, and invalid-input scenarios.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {/* Strong */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <div className="text-4xl">
              🏆
            </div>

            <h3 className="text-2xl font-bold text-green-400 mt-4">
              Strong Candidate
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                Question 1: <span className="text-green-400">93</span>
              </p>

              <p>
                Question 2: <span className="text-green-400">92</span>
              </p>

              <p>
                Question 3: <span className="text-green-400">95</span>
              </p>

              <p className="border-t border-slate-700 pt-3">
                Total: <span className="text-green-400 font-bold">
                  280 / 300
                </span>
              </p>

              <p>
                Overall:
                <span className="text-green-400 font-bold ml-2">
                  93.33%
                </span>
              </p>

              <p>
                Category:
                <span className="text-green-400 font-bold ml-2">
                  Excellent
                </span>
              </p>

            </div>

          </div>


          {/* Average */}
          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8">

            <div className="text-4xl">
              📊
            </div>

            <h3 className="text-2xl font-bold text-yellow-400 mt-4">
              Average Candidate
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                Question 1: <span className="text-yellow-400">69</span>
              </p>

              <p>
                Question 2: <span className="text-yellow-400">68</span>
              </p>

              <p>
                Question 3: <span className="text-yellow-400">70</span>
              </p>

              <p className="border-t border-slate-700 pt-3">
                Total: <span className="text-yellow-400 font-bold">
                  207 / 300
                </span>
              </p>

              <p>
                Overall:
                <span className="text-yellow-400 font-bold ml-2">
                  69.00%
                </span>
              </p>

              <p>
                Category:
                <span className="text-yellow-400 font-bold ml-2">
                  Average
                </span>
              </p>

            </div>

          </div>


          {/* Weak */}
          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <div className="text-4xl">
              ⚠️
            </div>

            <h3 className="text-2xl font-bold text-red-400 mt-4">
              Weak Candidate
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                Question 1: <span className="text-red-400">34</span>
              </p>

              <p>
                Question 2: <span className="text-red-400">32</span>
              </p>

              <p>
                Question 3: <span className="text-red-400">32</span>
              </p>

              <p className="border-t border-slate-700 pt-3">
                Total: <span className="text-red-400 font-bold">
                  98 / 300
                </span>
              </p>

              <p>
                Overall:
                <span className="text-red-400 font-bold ml-2">
                  32.67%
                </span>
              </p>

              <p>
                Category:
                <span className="text-red-400 font-bold ml-2">
                  Weak
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* Edge Cases */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              ✓ Empty Scores
            </h3>

            <p className="text-gray-400 mt-3">
              Empty scoring input was handled correctly.
            </p>

            <p className="text-green-400 font-semibold mt-4">
              PASSED
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              ✓ Invalid Input
            </h3>

            <p className="text-gray-400 mt-3">
              Invalid scoring input was rejected and handled correctly.
            </p>

            <p className="text-green-400 font-semibold mt-4">
              PASSED
            </p>

          </div>

        </div>


        <div className="mt-10 bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">

          <p className="text-3xl font-bold text-green-400">
            STEP 6 TEST: PASSED
          </p>

          <p className="text-gray-400 mt-4">
            All final screening scorer validation scenarios completed
            successfully.
          </p>

        </div>

      </section>


      {/* Project Files */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Project Files
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Day 26 Implementation
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Core scoring modules and automated tests created during
            Day 26 Step 6.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              📊 Screening Scorer
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/screening_scorer.py
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              📈 Overall Score
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/overall_screening_score.py
            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              🎯 Score Interpreter
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/score_interpreter.py
            </p>

          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">

            <h3 className="font-bold text-cyan-400">
              🔗 Final Scorer
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/final_screening_scorer.py
            </p>

          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">

            <h3 className="font-bold text-orange-400">
              🧪 Final Test
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/test_final_screening_scorer.py
            </p>

          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">

            <h3 className="font-bold text-pink-400">
              🧪 Question Tests
            </h3>

            <p className="text-gray-400 mt-3">
              test_question_scoring.py
            </p>

          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">

            <h3 className="font-bold text-yellow-400">
              🧪 Score Tests
            </h3>

            <p className="text-gray-400 mt-3">
              test_overall_screening_score.py
            </p>

          </div>


          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">

            <h3 className="font-bold text-indigo-400">
              🧪 Interpretation Tests
            </h3>

            <p className="text-gray-400 mt-3">
              test_score_interpreter.py
            </p>

          </div>

        </div>

      </section>


      {/* Complete Pipeline */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Zecpath AI Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Screening → Final Candidate Evaluation
          </h2>

        </div>


        <div className="bg-slate-900 border border-purple-500 rounded-2xl p-10">

          <div className="grid md:grid-cols-7 gap-4 text-center">

            <div className="border border-blue-500 rounded-xl p-5">
              <div className="text-2xl">📄</div>
              <p className="font-semibold mt-3">
                Resume
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-5">
              <div className="text-2xl">🎯</div>
              <p className="font-semibold mt-3">
                ATS
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-5">
              <div className="text-2xl">✅</div>
              <p className="font-semibold mt-3">
                Eligibility
              </p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-5">
              <div className="text-2xl">💬</div>
              <p className="font-semibold mt-3">
                Screening
              </p>
            </div>

            <div className="border border-orange-500 rounded-xl p-5">
              <div className="text-2xl">🧠</div>
              <p className="font-semibold mt-3">
                Understanding
              </p>
            </div>

            <div className="border border-pink-500 rounded-xl p-5">
              <div className="text-2xl">📊</div>
              <p className="font-semibold mt-3">
                Scoring
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-5">
              <div className="text-2xl">🏆</div>
              <p className="font-semibold mt-3">
                Decision
              </p>
            </div>

          </div>

          <div className="mt-10 text-center text-green-400 font-semibold">
            ✓ Day 26 scoring layer connected to the complete candidate
            evaluation architecture
          </div>

        </div>

      </section>


      {/* Git Status */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-blue-500 rounded-2xl p-10">

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-widest">
              Version Control
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Git Integration
            </h2>

          </div>

          <div className="mt-8 bg-slate-950 border border-slate-700 rounded-xl p-6">

            <p className="text-gray-300">
              The Day 26 scoring implementation introduced new scoring
              modules and automated validation tests into the project.
            </p>

            <div className="mt-6 space-y-2 text-gray-400 font-mono text-sm">

              <p>
                ✓ final_screening_scorer.py
              </p>

              <p>
                ✓ overall_screening_score.py
              </p>

              <p>
                ✓ score_interpreter.py
              </p>

              <p>
                ✓ screening_scorer.py
              </p>

              <p>
                ✓ test_final_screening_scorer.py
              </p>

              <p>
                ✓ Supporting scoring test files
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Completion */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-green-500 rounded-2xl p-10 text-center">

          <h3 className="text-6xl font-bold text-green-400">
            ✓
          </h3>

          <p className="text-3xl font-bold text-gray-200 mt-5">
            Day 26 Step 6 Completed
          </p>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
            Final screening scoring, question-level evaluation, score
            aggregation, score interpretation, edge-case handling,
            and integration testing were successfully implemented.
          </p>

          <div className="mt-8 text-green-400 font-bold text-xl">
            STEP 6 / 6 — PASSED
          </div>

          <div className="mt-3 text-gray-500">
            Ready for the next stage of Zecpath AI development.
          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day26;