import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day23() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 23 Submission
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Transcript Data Architecture
        </h1>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
          Designed a structured architecture for storing voice transcripts,
          defining transcript metadata standards, normalizing speech-to-text
          output, and organizing screening interaction data for AI-powered
          candidate screening.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="/day23_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📄 View Day 23 Report
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
            📄 Day 23 Documentation Report
          </h2>

          <p className="text-gray-400 mt-6">
            Voice transcript schema, metadata standards, transcript
            normalization, and screening interaction architecture.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">

            <a
              href="/day23_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              👁️ View PDF
            </a>

            <a
              href="/day23_completed.pdf"
              download="day23_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 23
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
            Day 23 Implementation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Transcript Processing Pipeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            The Day 23 implementation establishes the data architecture
            required to process voice-based candidate screening interactions.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Deliverable 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-blue-400">
              🎙️ Voice Transcript Schema
            </h3>

            <p className="text-gray-400 mt-4">
              Created a structured transcript model containing candidate,
              job, question, speaker, transcript, timestamp, and confidence
              information.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

          {/* Deliverable 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              🏷️ Metadata Standards
            </h3>

            <p className="text-gray-400 mt-4">
              Defined consistent standards for candidate IDs, job IDs,
              question IDs, timestamps, and speech-to-text confidence.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

          {/* Deliverable 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-purple-400">
              🧹 Transcript Normalization
            </h3>

            <p className="text-gray-400 mt-4">
              Implemented normalization rules to remove common filler words,
              repeated spaces, and unnecessary punctuation from transcripts.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

          {/* Deliverable 4 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              🗄️ Screening Interaction
            </h3>

            <p className="text-gray-400 mt-4">
              Created a structured screening interaction model linking
              candidates, jobs, questions, transcripts, answers, timestamps,
              and confidence values.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✓ Completed
            </div>

          </div>

        </div>

      </section>

      {/* Transcript Schema */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Transcript Architecture
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Voice Transcript Fields
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Each transcript is represented using structured fields that can
            be consumed by the AI screening workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              transcript_id
            </h3>
            <p className="text-gray-400 mt-2">
              Unique identifier for each transcript.
            </p>
          </div>

          <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              candidate_id
            </h3>
            <p className="text-gray-400 mt-2">
              Identifies the candidate associated with the transcript.
            </p>
          </div>

          <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              job_id
            </h3>
            <p className="text-gray-400 mt-2">
              Identifies the job associated with the screening interaction.
            </p>
          </div>

          <div className="bg-slate-900 border border-cyan-500 rounded-xl p-6">
            <h3 className="font-bold text-cyan-400">
              question_id
            </h3>
            <p className="text-gray-400 mt-2">
              Identifies the screening question being answered.
            </p>
          </div>

          <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              speaker
            </h3>
            <p className="text-gray-400 mt-2">
              Identifies the speaker in the conversation.
            </p>
          </div>

          <div className="bg-slate-900 border border-pink-500 rounded-xl p-6">
            <h3 className="font-bold text-pink-400">
              transcript_text
            </h3>
            <p className="text-gray-400 mt-2">
              Stores the speech converted into text.
            </p>
          </div>

          <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
            <h3 className="font-bold text-yellow-400">
              timestamp
            </h3>
            <p className="text-gray-400 mt-2">
              Records when the transcript was generated.
            </p>
          </div>

          <div className="bg-slate-900 border border-indigo-500 rounded-xl p-6">
            <h3 className="font-bold text-indigo-400">
              confidence
            </h3>
            <p className="text-gray-400 mt-2">
              Represents speech-to-text confidence.
            </p>
          </div>

        </div>

      </section>

      {/* Metadata Standards */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Metadata Standards
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Structured Transcript Metadata
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div className="border border-blue-500 rounded-xl p-6">
              <h3 className="font-bold text-blue-400">
                Candidate ID
              </h3>
              <p className="text-gray-400 mt-2">
                CAND-001
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-6">
              <h3 className="font-bold text-green-400">
                Job ID
              </h3>
              <p className="text-gray-400 mt-2">
                JOB-AI-001
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-6">
              <h3 className="font-bold text-purple-400">
                Question ID
              </h3>
              <p className="text-gray-400 mt-2">
                Q-001
              </p>
            </div>

            <div className="border border-cyan-500 rounded-xl p-6">
              <h3 className="font-bold text-cyan-400">
                Timestamp
              </h3>
              <p className="text-gray-400 mt-2">
                ISO 8601
              </p>
            </div>

            <div className="border border-orange-500 rounded-xl p-6">
              <h3 className="font-bold text-orange-400">
                Confidence
              </h3>
              <p className="text-gray-400 mt-2">
                0.0 — 1.0
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Normalization */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Transcript Normalization
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Raw → Normalized Transcript
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-red-400">
              Raw Transcript
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed">
              "uhh... I have&nbsp;&nbsp; two years um of experience in Python&nbsp;&nbsp; ."
            </p>

          </div>

          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-green-400">
              Normalized Transcript
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed">
              "I have two years of experience in Python."
            </p>

          </div>

        </div>

        <div className="mt-8 text-center text-green-400 font-semibold">
          ✓ Normalization test successfully verified
        </div>

      </section>

      {/* Screening Interaction */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-widest">
            Screening Interaction Database
          </p>

          <h2 className="text-5xl font-bold mt-4">
            AI Screening Interaction Structure
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Screening interactions connect candidates, jobs, questions,
            transcripts, answers, timestamps, and confidence values.
          </p>

        </div>

        <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-10">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-blue-500 rounded-xl p-6">
              <h3 className="font-bold text-blue-400">
                interaction_id
              </h3>
              <p className="text-gray-400 mt-2">
                Unique interaction identifier.
              </p>
            </div>

            <div className="border border-green-500 rounded-xl p-6">
              <h3 className="font-bold text-green-400">
                transcript_id
              </h3>
              <p className="text-gray-400 mt-2">
                Links the interaction to the transcript.
              </p>
            </div>

            <div className="border border-purple-500 rounded-xl p-6">
              <h3 className="font-bold text-purple-400">
                answer_text
              </h3>
              <p className="text-gray-400 mt-2">
                Stores the candidate's answer.
              </p>
            </div>

            <div className="border border-orange-500 rounded-xl p-6">
              <h3 className="font-bold text-orange-400">
                confidence
              </h3>
              <p className="text-gray-400 mt-2">
                Stores transcription confidence.
              </p>
            </div>

          </div>

          <div className="mt-10 text-center text-green-400 font-semibold">
            ✓ Screening interaction schema tested successfully
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
            Day 23 Implementation
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-blue-400">
              🎙️ Transcript Schema
            </h3>
            <p className="text-gray-400 mt-3">
              interview_ai/transcript_schema.py
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-green-400">
              🧹 Normalizer
            </h3>
            <p className="text-gray-400 mt-3">
              interview_ai/transcript_normalizer.py
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-purple-400">
              🗄️ Screening Interaction
            </h3>
            <p className="text-gray-400 mt-3">
              interview_ai/screening_interaction.py
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
            Day 23 Implementation Completed
          </p>

          <p className="text-gray-500 mt-6">
            Transcript architecture, metadata standards, normalization,
            and screening interaction structures were implemented and tested
            successfully.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Day23;