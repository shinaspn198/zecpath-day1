import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day9() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 9 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Resume Skill Extraction Engine
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an AI-powered resume skill analysis system
          capable of extracting technical skills, normalizing
          skill variations, detecting technology stacks, and
          generating confidence-based structured outputs.

        </p>


        <div className="mt-10 flex justify-center gap-5">

          <a
            href="https://github.com/shinaspn198/zecpath-ai-system"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            🚀 View GitHub Repository
          </a>


          <a
            href="#architecture"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Modules
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
            📄 Day 9 Documentation Report
          </h2>


          <p className="text-gray-400 mt-6">
            View and download the completed Day 9 resume skill extraction
            documentation.
          </p>


          <div className="flex justify-center gap-5 mt-8">


            <a
              href="/day9_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View Day 9 PDF
            </a>


            <a
              href="/day9_completed.pdf"
              download="day9_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 9
            </a>


          </div>

        </div>

      </section>




      {/* Architecture */}

      <section
        id="architecture"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest">
            AI Processing Pipeline
          </p>


          <h2 className="text-5xl font-bold mt-4">
            Resume Intelligence Workflow
          </h2>


          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The system processes resume content through extraction,
            normalization, classification, and confidence scoring
            modules to generate structured candidate insights.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📄 Skill Extraction
            </h3>

            <p className="text-gray-400 mt-4">

              Extracts technical, business, and creative skills
              from resume sections using rule-based NLP techniques.

            </p>

          </div>



          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🔄 Skill Normalization
            </h3>

            <p className="text-gray-400 mt-4">

              Handles skill variations using synonym mapping
              such as ML, AI, and NLP normalization.

            </p>

          </div>



          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              📊 Confidence Scoring
            </h3>

            <p className="text-gray-400 mt-4">

              Assigns confidence scores to extracted skills
              for reliable AI decision making.

            </p>

          </div>


        </div>


      </section>




      {/* Deliverables */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Completed Modules
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Day 9 Deliverables
          </h2>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-blue-400">
              🧠 Skill Extraction Engine
            </h3>

            <p className="text-gray-400 mt-4">
              Extracts and categorizes candidate skills from resumes.
            </p>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400">
              📈 Confidence Scoring Logic
            </h3>

            <p className="text-gray-400 mt-4">
              Calculates confidence levels for detected skills.
            </p>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400">
              📦 Structured Output
            </h3>

            <p className="text-gray-400 mt-4">
              Generates structured skill information for
              downstream recruitment AI modules.
            </p>

          </div>


        </div>

      </section>





      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">


          <h2 className="text-4xl font-bold text-green-400">
            Day 9 Completed Successfully ✅
          </h2>


          <p className="text-gray-300 mt-6 text-lg">

            Resume skill extraction, confidence scoring,
            technology stack detection, and structured AI
            output generation have been successfully implemented.

          </p>


        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day9;