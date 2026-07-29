import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

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
            documentation, system architecture, and project deliverables.
          </p>

        </div>
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
      <li>✅ Track project progress</li>
    </ul>

  </div>

  {/* Technologies */}

  <div className="bg-slate-900 border border-green-500 rounded-2xl p-8">

    <h2 className="text-2xl font-bold text-green-400 mb-6">
      🛠 Technologies
    </h2>

    <ul className="space-y-3 text-gray-300">
      <li>⚛️ React</li>
      <li>⚡ Vite</li>
      <li>🎨 Tailwind CSS</li>
      <li>🛣 React Router</li>
      <li>🐙 Git & GitHub</li>
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
  </ul>

</div>

</div>
      </section>
    
      <Footer />

    </div>
  );
}

export default About;