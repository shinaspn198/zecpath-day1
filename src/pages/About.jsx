import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center">

          <p className="text-blue-400 uppercase tracking-widest">
            About the Project
          </p>

          <h1 className="text-5xl font-bold mt-4">
            About Zecpath AI
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            This documentation portal showcases my AI Engineering internship
            journey at Zecpath AI, including daily learning, technical
            documentation, system architecture, AI recruitment workflows,
            and project deliverables.
          </p>

        </div>


        {/* Main Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Objectives */}
          <div className="bg-slate-900 border border-blue-500 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-blue-400 mb-6">
              🎯 Objectives
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li>✅ Document daily internship learning</li>
              <li>✅ Build a professional documentation portal</li>
              <li>✅ Learn AI Engineering workflows</li>
              <li>✅ Develop AI recruitment components</li>
              <li>✅ Integrate AI modules through REST APIs</li>
              <li>✅ Track project progress and deliverables</li>

            </ul>

          </div>


          {/* Technologies */}
          <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-green-400 mb-6">
              🛠 Technologies
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li>⚛️ React.js</li>
              <li>⚡ Vite</li>
              <li>🎨 Tailwind CSS</li>
              <li>🛣️ React Router</li>

              <li>🐍 Python</li>
              <li>🤖 Machine Learning</li>
              <li>🧠 Natural Language Processing (NLP)</li>

              <li>📄 Resume Parsing & Text Extraction</li>
              <li>🔎 NLP-based Section Classification</li>
              <li>🔤 TF-IDF & Text Vectorization</li>

              <li>⚙️ FastAPI</li>
              <li>📊 Pandas & NumPy</li>
              <li>🤖 Scikit-learn</li>

              <li>📊 ATS Scoring Engine</li>
              <li>⚖️ Weighted Scoring Algorithms</li>
              <li>📄 JSON Configuration</li>
              <li>🧮 Explainable AI Scoring</li>

              <li>🏆 Candidate Ranking Engine</li>
              <li>✅ Candidate Shortlisting Automation</li>
              <li>🎯 Candidate Evaluation Workflow</li>

              <li>⚖️ Resume Normalization</li>
              <li>🛡️ Fairness & Bias Detection</li>
              <li>👤 Sensitive Attribute Masking</li>
              <li>📋 Standardized Resume Processing</li>

              <li>🔗 REST API Development</li>
              <li>🗄️ Database & Data Storage</li>

              <li>🤖 AI HR Screening</li>
              <li>❓ Interview Question Generation</li>
              <li>📋 Configurable Screening Rules</li>
              <li>🧠 Structured AI Conversation Objects</li>

              {/* Day 24 Technologies */}
              <li>🎙️ Voice Interview Processing</li>
              <li>📝 Transcript Processing</li>
              <li>🧠 Candidate Response Analysis</li>
              <li>📊 Structured Interview Evaluation</li>

              {/* Day 25 Technologies */}
              <li>🧠 Intent Classification</li>
              <li>🔎 Answer Understanding</li>
              <li>🛠️ Skill Extraction & Integration</li>
              <li>💼 Experience Extraction & Integration</li>
              <li>⏱️ Availability Extraction & Integration</li>
              <li>💰 Salary Extraction</li>
              <li>❓ Vague Answer Detection</li>
              <li>🔗 Final Response Integration</li>
              <li>🧪 AI Screening Integration Testing</li>

              <li>🐙 Git & GitHub</li>
              <li>🚀 Vercel Deployment</li>

            </ul>

          </div>


          {/* Timeline */}
          <div className="bg-slate-900 border border-purple-500 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              📅 Internship Timeline
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li>📘 Day 1 – Completed</li>
              <li>🤖 Day 2 – Completed</li>
              <li>🚀 Day 3 – Completed</li>
              <li>📊 Day 4 – Completed</li>
              <li>📝 Day 5 – Completed</li>
              <li>📋 Day 6 – Completed</li>
              <li>📊 Day 7 – Completed</li>
              <li>🧠 Day 8 – Completed</li>
              <li>🧠 Day 9 – Completed</li>
              <li>💼 Day 10 – Completed</li>
              <li>🎓 Day 11 – Completed</li>
              <li>🧠 Day 12 – Completed</li>
              <li>📈 Day 13 – Completed</li>
              <li>🏆 Day 14 – Completed</li>
              <li>⚖️ Day 15 – Completed</li>
              <li>🚀 Day 16 – Completed</li>
              <li>🧪 Day 17 – Completed</li>
              <li>📊 Day 18 – Completed</li>
              <li>🎯 Day 19 – Completed</li>
              <li>🏁 Day 20 – Completed</li>
              <li>⚙️ Day 21 – Completed</li>
              <li>🤖 Day 22 – Completed</li>
              <li>🎙️ Day 23 – Completed</li>
              <li>🌐 Day 24 – Completed</li>
              <li>🧠 Day 25 – Completed</li>

            </ul>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default About;