import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            📊 Day 4 – Data Understanding & Structuring
          </h1>

          <p className="text-center text-gray-300 text-lg mb-12">
            Built structured AI-ready data models by analyzing resumes and job
            descriptions and designing reusable schemas for intelligent hiring
            systems.
          </p>


          <div className="grid md:grid-cols-2 gap-8">


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🎯 Objective
              </h2>

              <p className="text-gray-300">
                Convert unstructured resumes and job descriptions into
                structured, AI-ready data using JSON schemas and reusable
                entities.
              </p>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📦 Deliverables
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>Resume Structured Schema</li>
                <li>Job Description Schema</li>
                <li>AI Data Entity Design</li>

              </ul>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🛠 Technologies Used
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>JSON</li>
                <li>Python</li>
                <li>Resume Parsing Concepts</li>
                <li>Data Modeling</li>

              </ul>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📖 Key Learnings
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>Resume data structuring</li>
                <li>Job description analysis</li>
                <li>Entity modeling</li>
                <li>AI-ready data representation</li>

              </ul>

            </div>


          </div>


          <div className="mt-12 flex justify-center gap-6 flex-wrap">


            <a
              href="/day4_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 View Report
            </a>


            <a
              href="/day4_completed.pdf"
              download
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              ⬇ Download PDF
            </a>


          </div>


        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Day4;