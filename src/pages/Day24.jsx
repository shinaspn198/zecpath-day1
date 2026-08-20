import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day24() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 24 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Voice Interview Processing & Response Analysis
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Developed the processing layer for AI-powered candidate screening
          by transforming normalized interview transcripts into structured
          candidate responses and evaluation-ready data.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day24_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 24 Report
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
            📄 Day 24 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            Voice interview processing, candidate response extraction,
            response classification, confidence handling, and structured
            interview evaluation data.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day24_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day24_completed.pdf"
              download="day24_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 24
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
            Day 24 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Voice Interview Processing Pipeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 24 implementation processes normalized interview
            transcripts and converts candidate responses into structured
            data that can be consumed by downstream AI screening systems.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🎙️ Transcript Input
            </h3>

            <p className="text-gray-400 mt-4">
              Accepts normalized transcripts generated from the Day 23
              transcript architecture and prepares them for response
              processing.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🧠 Response Extraction
            </h3>

            <p className="text-gray-400 mt-4">
              Extracts candidate responses from screening interactions and
              associates each response with its corresponding interview
              question.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🔎 Response Classification
            </h3>

            <p className="text-gray-400 mt-4">
              Organizes candidate responses according to screening
              categories such as introduction, education, experience,
              skills, location, salary, and notice period.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 4 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              📊 Evaluation Data
            </h3>

            <p className="text-gray-400 mt-4">
              Converts processed responses into structured evaluation data
              that can be used by AI screening and candidate assessment
              workflows.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>


      {/* Processing Pipeline */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Processing Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Voice → Structured Candidate Data
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The processing pipeline transforms raw candidate speech into
            structured information suitable for automated screening.
          </p>

        </div>


        <div className="grid md:grid-cols-5 gap-5">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6 text-center">

            <div className="text-4xl">
              🎙️
            </div>

            <h3 className="font-bold text-blue-400 mt-4">
              Voice Input
            </h3>

            <p className="text-gray-400 mt-2">
              Candidate speech
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6 text-center">

            <div className="text-4xl">
              📝
            </div>

            <h3 className="font-bold text-green-400 mt-4">
              Transcript
            </h3>

            <p className="text-gray-400 mt-2">
              Speech-to-text output
            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6 text-center">

            <div className="text-4xl">
              🧹
            </div>

            <h3 className="font-bold text-purple-400 mt-4">
              Normalization
            </h3>

            <p className="text-gray-400 mt-2">
              Clean transcript
            </p>

          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6 text-center">

            <div className="text-4xl">
              🧠
            </div>

            <h3 className="font-bold text-orange-400 mt-4">
              Analysis
            </h3>

            <p className="text-gray-400 mt-2">
              Response processing
            </p>

          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6 text-center">

            <div className="text-4xl">
              📊
            </div>

            <h3 className="font-bold text-cyan-400 mt-4">
              Evaluation
            </h3>

            <p className="text-gray-400 mt-2">
              Structured candidate data
            </p>

          </div>

        </div>

      </section>


      {/* Response Schema */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Candidate Response Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Structured Response Fields
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Candidate responses are represented using structured fields so
            they can be evaluated consistently by downstream AI modules.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              response_id
            </h3>

            <p className="text-gray-400 mt-2">
              Unique identifier for the candidate response.
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              candidate_id
            </h3>

            <p className="text-gray-400 mt-2">
              Identifies the candidate providing the response.
            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              question_id
            </h3>

            <p className="text-gray-400 mt-2">
              Identifies the question associated with the response.
            </p>

          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">

            <h3 className="font-bold text-cyan-400">
              category
            </h3>

            <p className="text-gray-400 mt-2">
              Defines the screening category of the response.
            </p>

          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">

            <h3 className="font-bold text-orange-400">
              response_text
            </h3>

            <p className="text-gray-400 mt-2">
              Stores the normalized candidate response.
            </p>

          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">

            <h3 className="font-bold text-pink-400">
              confidence
            </h3>

            <p className="text-gray-400 mt-2">
              Represents confidence associated with the processed response.
            </p>

          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">

            <h3 className="font-bold text-yellow-400">
              timestamp
            </h3>

            <p className="text-gray-400 mt-2">
              Records when the response was processed.
            </p>

          </div>


          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">

            <h3 className="font-bold text-indigo-400">
              processing_status
            </h3>

            <p className="text-gray-400 mt-2">
              Tracks successful or failed response processing.
            </p>

          </div>

        </div>

      </section>


      {/* Screening Categories */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            AI Screening Categories
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Response Classification
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              👋 Introduction
            </h3>
            <p className="text-gray-400 mt-3">
              Processes candidate introduction responses.
            </p>
          </div>


          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              🎓 Education
            </h3>
            <p className="text-gray-400 mt-3">
              Identifies educational background and qualifications.
            </p>
          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              💼 Experience
            </h3>
            <p className="text-gray-400 mt-3">
              Processes professional experience responses.
            </p>
          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">
            <h3 className="font-bold text-cyan-400">
              🛠 Skills
            </h3>
            <p className="text-gray-400 mt-3">
              Identifies technical and professional skills.
            </p>
          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              📍 Location
            </h3>
            <p className="text-gray-400 mt-3">
              Processes candidate location information.
            </p>
          </div>


          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">
            <h3 className="font-bold text-pink-400">
              💰 Salary
            </h3>
            <p className="text-gray-400 mt-3">
              Processes salary expectation responses.
            </p>
          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
            <h3 className="font-bold text-yellow-400">
              ⏱️ Notice Period
            </h3>
            <p className="text-gray-400 mt-3">
              Processes candidate availability and notice period.
            </p>
          </div>


          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">
            <h3 className="font-bold text-indigo-400">
              🧠 Overall Response
            </h3>
            <p className="text-gray-400 mt-3">
              Aggregates processed screening responses.
            </p>
          </div>

        </div>

      </section>


      {/* Example */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Processing Example
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Raw Response → Structured Response
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-red-400">
              🎙️ Candidate Transcript
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed">
              "uhh... I have two years um of experience in Python and
              machine learning and currently I am working on FastAPI."
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🧠 Structured Response
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                <span className="text-blue-400 font-semibold">
                  Category:
                </span>{" "}
                Experience
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Experience:
                </span>{" "}
                2 years
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Skills:
                </span>{" "}
                Python, Machine Learning, FastAPI
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Status:
                </span>{" "}
                Processed
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Evaluation Pipeline */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Candidate Evaluation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            AI Screening Evaluation Flow
          </h2>

        </div>


        <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-10">

          <div className="grid md:grid-cols-6 gap-4 text-center">

            <div className="border border-blue-500 rounded-xl p-5">
              <div className="text-3xl">🎙️</div>
              <p className="font-semibold mt-3">Voice</p>
            </div>

            <div className="border border-green-500 rounded-xl p-5">
              <div className="text-3xl">📝</div>
              <p className="font-semibold mt-3">Transcript</p>
            </div>

            <div className="border border-purple-500 rounded-xl p-5">
              <div className="text-3xl">🧹</div>
              <p className="font-semibold mt-3">Normalize</p>
            </div>

            <div className="border border-orange-500 rounded-xl p-5">
              <div className="text-3xl">🧠</div>
              <p className="font-semibold mt-3">Analyze</p>
            </div>

            <div className="border border-pink-500 rounded-xl p-5">
              <div className="text-3xl">📊</div>
              <p className="font-semibold mt-3">Evaluate</p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-5">
              <div className="text-3xl">✅</div>
              <p className="font-semibold mt-3">Decision</p>
            </div>

          </div>

          <div className="mt-10 text-center text-green-400 font-semibold">
            ✓ Candidate response processing pipeline successfully designed
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
            Day 24 Implementation
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              🧠 Response Processor
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/response_processor.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              📊 Response Schema
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/response_schema.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              🔎 Response Analysis
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/response_analyzer.py
            </p>

          </div>

        </div>

      </section>


      {/* Completion */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-slate-900 border border-green-500 rounded-2xl p-10 text-center">

          <h3 className="text-5xl font-bold text-green-400">
            ✓
          </h3>

          <p className="text-2xl font-bold text-gray-200 mt-4">
            Day 24 Implementation Completed
          </p>

          <p className="text-gray-500 mt-6">
            Voice interview processing, candidate response extraction,
            response classification, structured response modeling, and
            AI screening evaluation flow were designed successfully.
          </p>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day24;