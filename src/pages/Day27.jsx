import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day27() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 27 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Confidence & Sentiment Signal Analysis
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Developed communication quality and behavioral signal analysis
          for AI-powered candidate screening by evaluating confidence,
          hesitation, response characteristics, sentiment, uncertainty,
          contradictions, and communication strength.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day27_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 27 Report
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
            📄 Day 27 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            Confidence analysis, hesitation detection, response length and
            pace analysis, sentiment identification, uncertainty detection,
            contradiction detection, and communication strength indicators.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day27_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day27_completed.pdf"
              download="day27_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 27
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
            Day 27 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Communication Signal Analysis
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 27 implementation analyzes candidate communication
            patterns and generates behavioral indicators for AI-assisted
            screening.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🧠 Confidence Analysis
            </h3>

            <p className="text-gray-400 mt-4">
              Detects hesitation and uncertainty patterns in candidate
              responses and evaluates communication confidence.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              😊 Sentiment Scoring
            </h3>

            <p className="text-gray-400 mt-4">
              Identifies positive, neutral, and negative sentiment signals
              from candidate responses.
            </p>

            <div className="mt-6 text-yellow-400 font-semibold">
              ⏳ Implementation Required
            </div>

          </div>


          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📊 Behavioral Indicators
            </h3>

            <p className="text-gray-400 mt-4">
              Produces communication indicators covering response length,
              pace, hesitation, uncertainty, contradictions, and
              communication strength.
            </p>

            <div className="mt-6 text-yellow-400 font-semibold">
              ⏳ Implementation Required
            </div>

          </div>

        </div>

      </section>


      {/* Analysis Pipeline */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Analysis Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Response → Behavioral Signals
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Candidate responses are processed to identify communication
            patterns and behavioral indicators.
          </p>

        </div>


        <div className="grid md:grid-cols-6 gap-5">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6 text-center">
            <div className="text-4xl">🗣️</div>
            <h3 className="font-bold text-blue-400 mt-4">
              Response
            </h3>
            <p className="text-gray-400 mt-2">
              Candidate answer
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6 text-center">
            <div className="text-4xl">🧠</div>
            <h3 className="font-bold text-green-400 mt-4">
              Confidence
            </h3>
            <p className="text-gray-400 mt-2">
              Confidence signals
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6 text-center">
            <div className="text-4xl">⏱️</div>
            <h3 className="font-bold text-purple-400 mt-4">
              Response
            </h3>
            <p className="text-gray-400 mt-2">
              Length & pace
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6 text-center">
            <div className="text-4xl">😊</div>
            <h3 className="font-bold text-orange-400 mt-4">
              Sentiment
            </h3>
            <p className="text-gray-400 mt-2">
              Positive / negative
            </p>
          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6 text-center">
            <div className="text-4xl">⚠️</div>
            <h3 className="font-bold text-pink-400 mt-4">
              Signals
            </h3>
            <p className="text-gray-400 mt-2">
              Uncertainty & contradictions
            </p>
          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6 text-center">
            <div className="text-4xl">📊</div>
            <h3 className="font-bold text-cyan-400 mt-4">
              Strength
            </h3>
            <p className="text-gray-400 mt-2">
              Communication indicators
            </p>
          </div>

        </div>

      </section>


      {/* Required Analysis */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 27 Analysis Tasks
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Communication Signal Detection
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              🗣️ Hesitation Patterns
            </h3>
            <p className="text-gray-400 mt-3">
              Detects hesitation words, repeated phrases, and uncertain
              communication patterns.
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              📏 Response Length
            </h3>
            <p className="text-gray-400 mt-3">
              Measures the length of candidate responses to identify
              unusually short or lengthy answers.
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              ⏱️ Response Pace
            </h3>
            <p className="text-gray-400 mt-3">
              Evaluates response timing and pace when timing information
              is available.
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              😊 Sentiment
            </h3>
            <p className="text-gray-400 mt-3">
              Identifies positive, neutral, and negative sentiment signals.
            </p>
          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">
            <h3 className="font-bold text-pink-400">
              ⚠️ Uncertainty
            </h3>
            <p className="text-gray-400 mt-3">
              Detects language indicating uncertainty or lack of confidence.
            </p>
          </div>


          <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
            <h3 className="font-bold text-red-400">
              🔄 Contradictions
            </h3>
            <p className="text-gray-400 mt-3">
              Identifies potentially conflicting information across
              candidate responses.
            </p>
          </div>

        </div>

      </section>


      {/* Communication Strength */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Communication Strength
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Behavioral Indicators
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Communication signals are converted into structured indicators
            that can support candidate screening analysis.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              Confidence
            </h3>
            <p className="text-gray-400 mt-3">
              High, medium, or low confidence signal.
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              Sentiment
            </h3>
            <p className="text-gray-400 mt-3">
              Positive, neutral, or negative response sentiment.
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              Hesitation
            </h3>
            <p className="text-gray-400 mt-3">
              Indicates the presence and level of hesitation.
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              Uncertainty
            </h3>
            <p className="text-gray-400 mt-3">
              Indicates uncertainty-related communication patterns.
            </p>
          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">
            <h3 className="font-bold text-pink-400">
              Response Length
            </h3>
            <p className="text-gray-400 mt-3">
              Measures candidate response size.
            </p>
          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">
            <h3 className="font-bold text-cyan-400">
              Response Pace
            </h3>
            <p className="text-gray-400 mt-3">
              Measures response timing when available.
            </p>
          </div>


          <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
            <h3 className="font-bold text-red-400">
              Consistency
            </h3>
            <p className="text-gray-400 mt-3">
              Identifies possible contradictions between responses.
            </p>
          </div>


          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">
            <h3 className="font-bold text-indigo-400">
              Communication Strength
            </h3>
            <p className="text-gray-400 mt-3">
              Provides an overall communication strength indicator.
            </p>
          </div>

        </div>

      </section>


      {/* Example */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Analysis Example
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Response → Behavioral Signals
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-red-400">
              🗣️ Candidate Response
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed">
              "Uhh... I think I have two years of experience in Python.
              Maybe I can work with FastAPI as well."
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📊 Behavioral Signals
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                <span className="text-blue-400 font-semibold">
                  Hesitation:
                </span>{" "}
                Detected
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Uncertainty:
                </span>{" "}
                Detected
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Sentiment:
                </span>{" "}
                Neutral
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Response Length:
                </span>{" "}
                Moderate
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Communication Strength:
                </span>{" "}
                Requires Review
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
            Day 27 Implementation
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              🧠 Confidence Analysis
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/confidence_analyzer.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              😊 Sentiment Analysis
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/sentiment_analyzer.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              📊 Behavioral Indicators
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/behavioral_indicators.py
            </p>

          </div>

        </div>

      </section>


      {/* Completion */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-10 text-center">

          <h3 className="text-5xl font-bold text-yellow-400">
            Day 27
          </h3>

          <p className="text-2xl font-bold text-gray-200 mt-4">
            Confidence & Sentiment Signal Analysis
          </p>

          <p className="text-gray-500 mt-6">
            Confidence analysis has been implemented. Sentiment scoring and
            behavioral indicator components remain aligned with the Day 27
            specification and are to be completed as required.
          </p>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day27;