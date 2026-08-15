import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day22() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 22 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          HR Screening Dataset Creation
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Created a structured HR screening question dataset, organized
          screening categories and priorities, and implemented an AI-ready
          question engine for automated candidate screening conversations.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day22_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 22 Report
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
            📄 Day 22 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            HR screening dataset, question category mapping, and
            AI conversation-ready question objects.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day22_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day22_completed.pdf"
              download="day22_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 22
            </a>

          </div>

        </div>

      </section>

      {/* Three Deliverables */}
      <section
        id="implementation"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest">
            Day 22 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            HR Screening Pipeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 22 implementation prepares structured HR screening
            questions for use in an automated candidate screening workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              📋 Question Dataset
            </h3>

            <p className="text-gray-400 mt-4">
              Created a structured HR screening question bank containing
              30 questions designed for automated candidate screening.
            </p>

            <div className="mt-6">

              <p className="text-3xl font-bold text-blue-400">
                30
              </p>

              <p className="text-gray-500 mt-1">
                Screening Questions
              </p>

            </div>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🗂️ Category Mapping
            </h3>

            <p className="text-gray-400 mt-4">
              Organized the screening questions into seven structured
              categories for controlled HR screening workflows.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 text-gray-300 text-sm">

              <span>• Introduction</span>
              <span>• Education</span>
              <span>• Experience</span>
              <span>• Skills</span>
              <span>• Location</span>
              <span>• Salary</span>
              <span>• Notice Period</span>

            </div>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🤖 Conversation Objects
            </h3>

            <p className="text-gray-400 mt-4">
              Implemented the question engine that converts the dataset
              into AI conversation-ready question objects.
            </p>

            <div className="mt-6">

              <p className="text-3xl font-bold text-purple-400">
                30
              </p>

              <p className="text-gray-500 mt-1">
                AI Conversation Objects
              </p>

            </div>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>

      {/* Dataset Structure */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Dataset Structure
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Question Object Fields
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Each screening question is represented using structured
            fields that can be consumed by the AI screening workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              question_id
            </h3>
            <p className="text-gray-400 mt-2">
              Unique identifier for each screening question.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              category
            </h3>
            <p className="text-gray-400 mt-2">
              Defines the HR screening category.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              prompt
            </h3>
            <p className="text-gray-400 mt-2">
              The actual question presented to the candidate.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-cyan-400">
              expected_answer_type
            </h3>
            <p className="text-gray-400 mt-2">
              Defines the expected response format.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              mandatory
            </h3>
            <p className="text-gray-400 mt-2">
              Indicates whether the question must be answered.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-pink-400">
              scoring_importance
            </h3>
            <p className="text-gray-400 mt-2">
              Defines the importance of the question during evaluation.
            </p>
          </div>

        </div>

      </section>

      {/* Screening Categories */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Screening Categories
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Seven HR Screening Areas
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-blue-500 rounded-xl p-6">
              <h3 className="font-bold text-blue-400">
                👋 Introduction
              </h3>
              <p className="text-gray-400 mt-2">
                Candidate background and career interests.
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-6">
              <h3 className="font-bold text-green-400">
                🎓 Education
              </h3>
              <p className="text-gray-400 mt-2">
                Qualifications and educational background.
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-6">
              <h3 className="font-bold text-purple-400">
                💼 Experience
              </h3>
              <p className="text-gray-400 mt-2">
                Professional experience and responsibilities.
              </p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-6">
              <h3 className="font-bold text-cyan-400">
                🛠️ Skills
              </h3>
              <p className="text-gray-400 mt-2">
                Technical skills and relevant capabilities.
              </p>
            </div>

            <div className="border border-orange-500 rounded-xl p-6">
              <h3 className="font-bold text-orange-400">
                📍 Location
              </h3>
              <p className="text-gray-400 mt-2">
                Location and work-mode compatibility.
              </p>
            </div>

            <div className="border border-yellow-500 rounded-xl p-6">
              <h3 className="font-bold text-yellow-400">
                💰 Salary
              </h3>
              <p className="text-gray-400 mt-2">
                Compensation expectations.
              </p>
            </div>

            <div className="border border-pink-500 rounded-xl p-6">
              <h3 className="font-bold text-pink-400">
                ⏱️ Notice Period
              </h3>
              <p className="text-gray-400 mt-2">
                Candidate availability and joining timeline.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Implementation Result */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Validation Result
          </p>

          <h2 className="text-5xl font-bold mt-4">
            AI Conversation Engine
          </h2>

        </div>

        <div className="bg-slate-900 border border-green-500 rounded-2xl p-10 text-center">

          <h3 className="text-5xl font-bold text-green-400">
            30
          </h3>

          <p className="text-xl text-gray-300 mt-4">
            AI Conversation Objects Generated
          </p>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
            The implemented question engine successfully loaded all
            30 HR screening questions and converted them into structured
            objects ready for an automated screening conversation workflow.
          </p>

          <div className="mt-8 text-green-400 font-semibold text-lg">
            ✓ Day 22 Implementation Verified
          </div>

        </div>

      </section>

      {/* Implementation Files */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Project Files
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Day 22 Implementation
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              📄 Dataset
            </h3>
            <p className="text-gray-400 mt-3">
              data/hr_screening_questions.json
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              ⚙️ Configuration
            </h3>
            <p className="text-gray-400 mt-3">
              config/screening_rules.json
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              🤖 Question Engine
            </h3>
            <p className="text-gray-400 mt-3">
              screening_ai/question_engine.py
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day22;