import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-6">
          🚀 Zecpath AI Internship Documentation Portal
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="text-white">
            Zecpath AI
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Onboarding Portal
          </span>
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl">
          A centralized documentation portal containing all internship
          deliverables, system architecture, AI workflows, and technical
          documentation for the Zecpath AI Recruitment Platform.
        </p>

        <div className="mt-10">
          <Link
            to="/documentation"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            📚 Explore Documentation
          </Link>
        </div>

      </section>

      {/* Internship Progress */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-14">

          <p className="text-blue-400 uppercase tracking-widest">
            Learning Progress
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Documentation Timeline
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Follow the progress of the Zecpath AI onboarding journey
            through structured daily deliverables.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Day 1 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-400">
              📘 Day 1
            </h3>
            <p className="text-gray-400 mt-4">
              Product overview, hiring lifecycle, AI modules and responsibilities.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-green-400">
              🤖 Day 2
            </h3>
            <p className="text-gray-400 mt-4">
              AI system architecture, data flow, microservices and communication design.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400">
              🚀 Day 3
            </h3>
            <p className="text-gray-400 mt-4">
              AI environment setup, repository architecture, AI modules,
              testing framework and Git workflow.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400">
              📊 Day 4
            </h3>
            <p className="text-gray-400 mt-4">
              Data understanding, resume structured schemas, job description
              schemas, and AI data entity design.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400">
              📝 Day 5
            </h3>
            <p className="text-gray-400 mt-4">
              Resume text extraction engine, PDF/DOCX parsing, text cleaning,
              and AI-ready resume output generation.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 6 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400">
              📋 Day 6
            </h3>
            <p className="text-gray-400 mt-4">
              Job Description Parsing System to convert employer job descriptions
              into structured AI-readable job requirement objects.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 7 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400">
              📊 Day 7
            </h3>
            <p className="text-gray-400 mt-4">
              Designed the AI data pipeline, storage architecture, metadata
              standards, and dataset versioning strategy for the Zecpath AI
              recruitment platform.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 8 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400">
              🧠 Day 8
            </h3>
            <p className="text-gray-400 mt-4">
              Resume Section Segmentation system to automatically identify
              and classify resume sections such as skills, experience,
              education, certifications, and projects using rule-based
              and NLP-based approaches.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 9 */}
          <div className="bg-slate-900 border border-indigo-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-indigo-400">
              🧠 Day 9
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Resume Skill Extraction Engine featuring
              synonym normalization, technology stack detection, confidence
              scoring, and structured skill output for downstream recruitment AI.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 10 */}
          <div className="bg-slate-900 border border-emerald-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-emerald-400">
              💼 Day 10
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Experience Parsing & Relevance Engine
              capable of extracting work experience, generating structured
              experience objects, and evaluating candidate experience relevance
              for target job roles.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 11 */}
          <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400">
              🎓 Day 11
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Education & Certification Parsing Engine
              capable of extracting academic qualifications, institutions,
              certifications, generating structured education profiles, and
              evaluating education relevance for AI recruitment systems.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 12 */}
          <div className="bg-slate-900 border border-pink-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-pink-400">
              🧠 Day 12
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Semantic Resume ↔ Job Matching Engine
              using Sentence Transformers to compute semantic similarity
              between resumes and job descriptions, enabling intelligent
              candidate-job matching beyond keyword-based approaches.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 13 */}
          <div className="bg-slate-900 border border-red-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-red-400">
              📈 Day 13
            </h3>
            <p className="text-gray-400 mt-4">
              Designed and implemented an AI-powered ATS Scoring Formula
              that evaluates candidates using configurable weighted
              parameters including skill match, experience relevance,
              education alignment, and semantic similarity to generate
              transparent and explainable ATS scores.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 14 */}
          <div className="bg-slate-900 border border-orange-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-orange-400">
              🏆 Day 14
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Candidate Ranking & Shortlisting Engine
              that automatically ranks candidates based on ATS scores,
              applies configurable shortlisting thresholds, classifies
              candidates into Shortlisted, Review, and Rejected categories,
              and generates recruiter-friendly ranking reports.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 15 */}
          <div className="bg-slate-900 border border-teal-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-teal-400">
              ⚖️ Day 15
            </h3>
            <p className="text-gray-400 mt-4">
              Developed an AI-powered Resume Normalization & Fairness Engine
              that standardizes resume data, identifies sensitive attributes,
              supports bias-aware candidate evaluation, and prepares fair,
              consistent inputs for AI-driven recruitment systems.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 16 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400">
              🚀 Day 16
            </h3>
            <p className="text-gray-400 mt-4">
              Developed a FastAPI-based ATS API layer that makes Zecpath AI
              recruitment functionality consumable by backend systems through
              standardized REST APIs, structured schemas, asynchronous job
              processing, centralized error handling, and API logging.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 17 */}
          <div className="bg-slate-900 border border-violet-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-violet-400">
              🧪 Day 17
            </h3>
            <p className="text-gray-400 mt-4">
              Tested and validated the ATS scoring and candidate shortlisting
              system using controlled candidate scenarios, boundary testing,
              FastAPI integration testing, accuracy evaluation, and improvement
              analysis.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 18 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-400">
              📊 Day 18
            </h3>
            <p className="text-gray-400 mt-4">
              Implemented and validated the ATS scoring and candidate
              evaluation workflow using role-specific scoring configuration,
              weighted evaluation logic, and API-based integration with
              the Zecpath AI recruitment platform.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 19 */}
          <div className="bg-slate-900 border border-amber-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-amber-400">
              🎯 Day 19
            </h3>
            <p className="text-gray-400 mt-4">
              Implemented the Candidate Shortlisting System by connecting
              ATS scores with automated recruitment decisions and validating
              the FastAPI endpoint using real candidate scoring scenarios,
              including Review and Rejected outcomes.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 20 */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-green-400">
              🏁 Day 20
            </h3>
            <p className="text-gray-400 mt-4">
              Completed the final ATS evaluation and production-readiness
              validation of the Zecpath AI recruitment platform, including
              skill extraction accuracy, ATS scoring, candidate ranking,
              shortlisting decisions, and API validation.
            </p>
            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 21 */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-purple-400">
              ⚙️ Day 21
            </h3>

            <p className="text-gray-400 mt-4">
              Eligibility Decision Engine
            </p>

            <p className="text-gray-400 mt-4">
              Implemented a rule-based eligibility engine that evaluates
              ATS score, mandatory skills, experience, location, and
              availability to classify candidates as Eligible, Review,
              or Rejected.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 22 */}
          <div className="bg-slate-900 border border-orange-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-orange-400">
              🤖 Day 22
            </h3>

            <p className="text-gray-400 mt-4">
              AI HR Screening & Interview Question Engine
            </p>

            <p className="text-gray-400 mt-4">
              Implemented an AI-powered HR screening workflow that generates
              structured interview questions across categories such as
              introduction, education, experience, skills, location, salary,
              and notice period. The system uses configurable screening rules
              and structured question objects to support automated candidate
              evaluation.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 23 */}
          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400">
              🎙️ Day 23
            </h3>

            <p className="text-gray-400 mt-4">
              Transcript Data Architecture
            </p>

            <p className="text-gray-400 mt-4">
              Designed and implemented the transcript data architecture for
              AI-powered candidate screening, including a structured voice
              transcript schema, metadata standards, transcript normalization,
              and screening interaction data structures.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

          {/* Day 24 */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-400">
              🌐 Day 24
            </h3>

            <p className="text-gray-400 mt-4">
              AI HR Screening Web Application
            </p>

            <p className="text-gray-400 mt-4">
              Integrated the AI HR screening workflow into a web application
              interface, connecting the recruitment screening components with
              a user-friendly frontend for candidate interaction, screening
              workflow visualization, and AI-powered recruitment operations.
            </p>

            <div className="mt-6 text-green-400 font-semibold">
              ✅ Completed
            </div>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;