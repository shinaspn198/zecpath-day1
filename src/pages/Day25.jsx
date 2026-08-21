import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day25() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 25 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          HR Screening & AI Conversation Pipeline
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Completed the HR screening intelligence layer that understands
          candidate answers, extracts structured information, detects vague
          responses, integrates screening data, and validates the complete
          candidate conversation pipeline.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day25_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 25 Report
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
            📄 Day 25 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            HR screening pipeline, intent classification, answer understanding,
            skill and experience processing, availability integration, salary
            extraction, vague answer detection, final integration, and testing.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day25_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day25_completed.pdf"
              download="day25_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 25
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
            Day 25 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            HR Screening Intelligence Layer
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 25 implementation converts candidate answers into
            structured screening information that can be consumed by
            eligibility, scoring, ranking, and shortlisting systems.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🧠 Intent Classification
            </h3>

            <p className="text-gray-400 mt-4">
              Identifies the purpose of a candidate's answer such as
              introduction, skills, experience, availability, and salary
              expectation.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🔎 Answer Understanding
            </h3>

            <p className="text-gray-400 mt-4">
              Converts candidate answers into structured information and
              identifies missing, vague, and off-topic responses.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🛠 Skill & Experience
            </h3>

            <p className="text-gray-400 mt-4">
              Extracts candidate skills and experience years and integrates
              them into the structured candidate profile.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>


          {/* Deliverable 4 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              📊 Screening Data
            </h3>

            <p className="text-gray-400 mt-4">
              Combines availability, salary, answer status, and extracted
              information into a final structured screening result.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>


      {/* 12-Step Pipeline */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Complete Pipeline
          </p>

          <h2 className="text-5xl font-bold mt-4">
            12-Step HR Screening Pipeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every planned component of the HR screening pipeline was
            implemented and validated successfully.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {[
            ["1", "Intent Classification", "blue"],
            ["2", "Answer Understanding", "green"],
            ["3", "Skill Extraction", "purple"],
            ["4", "Skill Integration", "cyan"],
            ["5", "Experience Extraction", "orange"],
            ["6", "Experience Integration", "pink"],
            ["7", "Availability Extraction", "yellow"],
            ["8", "Availability Integration", "indigo"],
            ["9", "Salary Extraction", "blue"],
            ["10", "Vague Answer Detection", "green"],
            ["11", "Final Integration", "purple"],
            ["12", "Final Testing", "cyan"],
          ].map(([number, title, color]) => (

            <div
              key={number}
              className={`bg-slate-900 border border-${color}-500 rounded-xl p-6`}
            >

              <div className={`text-${color}-400 text-3xl font-bold`}>
                {number}
              </div>

              <h3 className={`text-xl font-bold text-${color}-400 mt-3`}>
                {title}
              </h3>

              <div className="text-green-400 mt-4 font-semibold">
                ✓ Completed
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Processing Architecture */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Processing Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Answer → Structured Screening Data
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The complete pipeline transforms an individual candidate answer
            into structured information suitable for automated screening.
          </p>

        </div>


        <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-10">

          <div className="grid md:grid-cols-6 gap-4 text-center">

            <div className="border border-blue-500 rounded-xl p-5">
              <div className="text-3xl">💬</div>
              <p className="font-semibold mt-3">Answer</p>
            </div>

            <div className="border border-green-500 rounded-xl p-5">
              <div className="text-3xl">🧠</div>
              <p className="font-semibold mt-3">Intent</p>
            </div>

            <div className="border border-purple-500 rounded-xl p-5">
              <div className="text-3xl">🔎</div>
              <p className="font-semibold mt-3">Extract</p>
            </div>

            <div className="border border-orange-500 rounded-xl p-5">
              <div className="text-3xl">🔗</div>
              <p className="font-semibold mt-3">Integrate</p>
            </div>

            <div className="border border-pink-500 rounded-xl p-5">
              <div className="text-3xl">📊</div>
              <p className="font-semibold mt-3">Evaluate</p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-5">
              <div className="text-3xl">✅</div>
              <p className="font-semibold mt-3">Result</p>
            </div>

          </div>

          <div className="mt-10 text-center text-green-400 font-semibold">
            ✓ Complete HR screening processing pipeline implemented
          </div>

        </div>

      </section>


      {/* Availability */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Availability Intelligence
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Candidate Availability Processing
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Candidate joining availability is extracted and integrated into
            the candidate screening profile.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              ⚡ Immediate
            </h3>

            <p className="text-gray-400 mt-3">
              "I can join immediately."
            </p>

            <p className="text-green-400 mt-4 font-semibold">
              → immediate
            </p>

          </div>


          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              📅 15 Days
            </h3>

            <p className="text-gray-400 mt-3">
              "I can join within 15 days."
            </p>

            <p className="text-blue-400 mt-4 font-semibold">
              → 15_days
            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              📆 30 Days
            </h3>

            <p className="text-gray-400 mt-3">
              "I have a 30 day notice period."
            </p>

            <p className="text-purple-400 mt-4 font-semibold">
              → 30_days
            </p>

          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">

            <h3 className="font-bold text-orange-400">
              🗓️ Two Weeks
            </h3>

            <p className="text-gray-400 mt-3">
              "I can join after two weeks."
            </p>

            <p className="text-orange-400 mt-4 font-semibold">
              → 2_weeks
            </p>

          </div>


          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">

            <h3 className="font-bold text-cyan-400">
              📅 One Week
            </h3>

            <p className="text-gray-400 mt-3">
              "I can join after one week."
            </p>

            <p className="text-cyan-400 mt-4 font-semibold">
              → 1_week
            </p>

          </div>


          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">

            <h3 className="font-bold text-yellow-400">
              ⏳ Notice Period
            </h3>

            <p className="text-gray-400 mt-3">
              "I have a notice period."
            </p>

            <p className="text-yellow-400 mt-4 font-semibold">
              → notice_period
            </p>

          </div>

        </div>

      </section>


      {/* Salary Extraction */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Salary Intelligence
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Salary Expectation Extraction
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The salary extraction engine identifies expected compensation
            from natural language candidate answers.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              💰 LPA
            </h3>

            <p className="text-gray-400 mt-3">
              "My expected salary is 6 LPA."
            </p>

            <p className="text-green-400 mt-4 font-semibold">
              → 6.0
            </p>

          </div>


          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              💵 Decimal LPA
            </h3>

            <p className="text-gray-400 mt-3">
              "I expect 7.5 LPA."
            </p>

            <p className="text-blue-400 mt-4 font-semibold">
              → 7.5
            </p>

          </div>


          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              💳 Lakhs
            </h3>

            <p className="text-gray-400 mt-3">
              "My expectation is 8 lakhs."
            </p>

            <p className="text-purple-400 mt-4 font-semibold">
              → 8.0
            </p>

          </div>

        </div>

      </section>


      {/* Answer Quality Detection */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Answer Quality Analysis
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Missing, Vague & Off-topic Detection
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-yellow-400">
              ⚠️ Missing Answer
            </h3>

            <p className="text-gray-400 mt-4">
              Detects empty candidate responses and marks them as missing
              answers for additional screening handling.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Implemented
            </div>

          </div>


          <div className="bg-slate-900 border border-orange-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-orange-400">
              ❓ Vague Answer
            </h3>

            <p className="text-gray-400 mt-4">
              Detects unclear responses such as "maybe", "not sure",
              "depends", and "probably".
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Implemented
            </div>

          </div>


          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-red-400">
              🚫 Off-topic Answer
            </h3>

            <p className="text-gray-400 mt-4">
              Identifies answers that do not correspond to the expected
              HR screening context.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Implemented
            </div>

          </div>

        </div>

      </section>


      {/* Final Candidate Schema */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Candidate Data Model
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Final Screening Result
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            All extracted and analyzed information is combined into one
            structured candidate screening object.
          </p>

        </div>


        <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

          <div className="grid md:grid-cols-3 gap-5">

            <div className="border border-blue-500 rounded-xl p-5">
              <h3 className="text-blue-400 font-bold">
                answer
              </h3>
              <p className="text-gray-400 mt-2">
                Original candidate response
              </p>
            </div>


            <div className="border border-green-500 rounded-xl p-5">
              <h3 className="text-green-400 font-bold">
                intent
              </h3>
              <p className="text-gray-400 mt-2">
                Classified screening intent
              </p>
            </div>


            <div className="border border-purple-500 rounded-xl p-5">
              <h3 className="text-purple-400 font-bold">
                skills
              </h3>
              <p className="text-gray-400 mt-2">
                Extracted candidate skills
              </p>
            </div>


            <div className="border border-cyan-500 rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold">
                experience_years
              </h3>
              <p className="text-gray-400 mt-2">
                Candidate experience
              </p>
            </div>


            <div className="border border-orange-500 rounded-xl p-5">
              <h3 className="text-orange-400 font-bold">
                availability
              </h3>
              <p className="text-gray-400 mt-2">
                Joining availability
              </p>
            </div>


            <div className="border border-pink-500 rounded-xl p-5">
              <h3 className="text-pink-400 font-bold">
                salary_lpa
              </h3>
              <p className="text-gray-400 mt-2">
                Expected salary in LPA
              </p>
            </div>


            <div className="border border-yellow-500 rounded-xl p-5">
              <h3 className="text-yellow-400 font-bold">
                is_missing
              </h3>
              <p className="text-gray-400 mt-2">
                Missing answer indicator
              </p>
            </div>


            <div className="border border-red-500 rounded-xl p-5">
              <h3 className="text-red-400 font-bold">
                is_vague
              </h3>
              <p className="text-gray-400 mt-2">
                Vague answer indicator
              </p>
            </div>


            <div className="border border-indigo-500 rounded-xl p-5">
              <h3 className="text-indigo-400 font-bold">
                is_off_topic
              </h3>
              <p className="text-gray-400 mt-2">
                Off-topic answer indicator
              </p>
            </div>

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
            Candidate Answer → Final Result
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              💬 Candidate Answer
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed">
              "I have 2 years of experience in Python. I can join
              immediately and my expected salary is 6 LPA."
            </p>

          </div>


          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              📊 Structured Result
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>
                <span className="text-blue-400 font-semibold">
                  Intent:
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
                  Skill:
                </span>{" "}
                Python
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Availability:
                </span>{" "}
                Immediate
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Salary:
                </span>{" "}
                6 LPA
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


      {/* Final Testing */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Final Validation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Integration Testing
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The final integration test validates the complete screening
            data structure across all major candidate response scenarios.
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Experience",
            "Skills",
            "Availability",
            "Salary",
            "Missing Answer",
            "Off-topic Answer",
            "Vague Answer",
          ].map((test) => (

            <div
              key={test}
              className="bg-slate-900 border border-green-500 rounded-xl p-6 text-center"
            >

              <div className="text-3xl">
                ✅
              </div>

              <h3 className="font-bold text-gray-200 mt-3">
                {test}
              </h3>

              <p className="text-green-400 mt-3 font-semibold">
                PASSED
              </p>

            </div>

          ))}

        </div>


        <div className="mt-10 bg-slate-900 border border-green-500 rounded-2xl p-8 text-center">

          <p className="text-2xl font-bold text-green-400">
            ALL FINAL INTEGRATION TESTS PASSED
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
            Day 25 Implementation
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-blue-400">
              📅 Availability Extractor
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/availability_extractor.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-green-400">
              🔗 Availability Integration
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/availability_integration.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-purple-400">
              💰 Salary Extractor
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/salary_extractor.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-cyan-400">
              ❓ Vague Detector
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/vague_answer_detector.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-orange-400">
              📊 Final Integration
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/final_integration.py
            </p>

          </div>


          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="font-bold text-pink-400">
              🧪 Final Tests
            </h3>

            <p className="text-gray-400 mt-3">
              interview_ai/test_final_integration.py
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
            Day 25 Implementation Completed
          </p>

          <p className="text-gray-500 mt-6">
            HR screening intelligence, candidate answer understanding,
            skill and experience processing, availability integration,
            salary extraction, vague answer detection, final integration,
            and complete testing were successfully implemented.
          </p>

          <div className="mt-8 text-green-400 font-bold text-lg">
            12 / 12 Steps Completed
          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day25;