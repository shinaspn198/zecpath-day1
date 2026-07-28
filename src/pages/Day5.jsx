import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            📝 Day 5 – Resume Text Extraction Engine
          </h1>

          <p className="text-center text-gray-300 text-lg mb-12">
            Developed a Resume Text Extraction Engine to read PDF and DOCX
            resumes, extract text, clean formatting issues, and generate
            AI-ready outputs for intelligent recruitment systems.
          </p>


          <div className="grid md:grid-cols-2 gap-8">


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🎯 Objective
              </h2>

              <p className="text-gray-300">
                Build a resume extraction engine capable of reading resumes,
                extracting raw text, cleaning it, and storing structured
                AI-ready outputs.
              </p>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📦 Deliverables
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>Resume Text Extraction Engine</li>
                <li>Cleaned Resume Outputs</li>
                <li>Test Result Logs</li>

              </ul>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                🛠 Technologies Used
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>Python</li>
                <li>pdfplumber</li>
                <li>python-docx</li>
                <li>Regular Expressions (re)</li>

              </ul>

            </div>


            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-4">
                📖 Key Learnings
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2">

                <li>PDF and DOCX parsing</li>
                <li>Text preprocessing</li>
                <li>Data cleaning techniques</li>
                <li>Building reusable AI preprocessing pipelines</li>

              </ul>

            </div>


          </div>


          <div className="mt-12 flex justify-center gap-6 flex-wrap">


            <a
              href="/day5_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 View Report
            </a>


            <a
              href="/day5_completed.pdf"
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

export default Day5;