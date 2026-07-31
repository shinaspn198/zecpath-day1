import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day8() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />


      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center px-6">

        <p className="text-blue-400 uppercase tracking-widest">
          Day 8 Submission
        </p>


        <h1 className="text-6xl font-bold mt-4">
          Resume Section Segmentation
        </h1>


        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

          Developed an intelligent resume section detection system
          to automatically identify and classify important resume
          components such as skills, experience, education,
          certifications, and projects.

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
            href="#pipeline"
            className="px-8 py-4 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold transition"
          >
            Explore Pipeline
          </a>


        </div>

      </section>



      {/* PDF Section */}

      <section className="max-w-5xl mx-auto px-8 py-16">


        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">


          <p className="text-blue-400 uppercase tracking-widest">
            Internship Deliverables
          </p>


          <h2 className="text-4xl font-bold mt-4">
            📄 Documentation Report
          </h2>


          <p className="text-gray-400 mt-6">
            Complete Day 8 documentation including resume
            segmentation approach, implementation details,
            and accuracy analysis.
          </p>


          <div className="flex justify-center gap-5 mt-8">


            <a
              href={`${window.location.origin}/day8_completed.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold"
            >
              👁️ View Day 8 PDF
            </a>



            <a
              href={`${window.location.origin}/day8_completed.pdf`}
              download="day8_completed.pdf"
              className="px-6 py-3 border border-gray-600 hover:bg-slate-800 rounded-xl font-semibold"
            >
              ⬇️ Download Day 8
            </a>


          </div>


        </div>


      </section>





      {/* Pipeline */}

      <section
        id="pipeline"
        className="max-w-7xl mx-auto px-8 pb-24"
      >

        <div className="text-center mb-16">


          <p className="text-blue-400 uppercase tracking-widest">
            AI Processing Pipeline
          </p>


          <h2 className="text-5xl font-bold mt-4">
            Resume Understanding Workflow
          </h2>


          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            The system converts unstructured resume text into
            structured sections using rule-based detection and
            NLP classification techniques.

          </p>


        </div>




        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">


            <h3 className="text-2xl font-bold text-blue-400">
              📄 Text Extraction
            </h3>


            <p className="text-gray-400 mt-4">

              Extracts resume content from PDF and document
              formats for further processing.

            </p>


          </div>




          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition">


            <h3 className="text-2xl font-bold text-green-400">
              🧠 Section Detection
            </h3>


            <p className="text-gray-400 mt-4">

              Identifies resume headings and classifies
              content into meaningful categories.

            </p>


          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition">


            <h3 className="text-2xl font-bold text-purple-400">
              🏷️ Content Tagging
            </h3>


            <p className="text-gray-400 mt-4">

              Labels extracted text blocks with their
              corresponding resume sections.

            </p>


          </div>


        </div>


      </section>






      {/* Resume Sections */}

      <section className="max-w-7xl mx-auto px-8 pb-24">


        <div className="text-center mb-16">


          <p className="text-blue-400 uppercase tracking-widest">
            Detected Sections
          </p>


          <h2 className="text-5xl font-bold mt-4">
            Resume Classification Categories
          </h2>


        </div>




        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {[
            ["💻 Skills", "Identifies technical and professional skills."],
            ["💼 Work Experience", "Extracts previous roles and employment history."],
            ["🎓 Education", "Detects academic qualifications and degrees."],
            ["🏆 Certifications", "Finds professional certifications and courses."],
            ["🚀 Projects", "Separates project descriptions and achievements."],
            ["📑 Other Sections", "Handles additional resume information."]
          ].map((item,index)=>(

            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-bold text-blue-400">
                {item[0]}
              </h3>


              <p className="text-gray-400 mt-4">
                {item[1]}
              </p>


            </div>

          ))}


        </div>


      </section>





      {/* Deliverables */}

      <section className="max-w-5xl mx-auto px-8 pb-24">


        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">


          <h2 className="text-4xl font-bold text-center">
            📦 Day 8 Deliverables
          </h2>


          <div className="mt-8 text-gray-300 text-lg space-y-4">


            <p>✅ Resume Section Classifier Module</p>

            <p>✅ Labeled Resume Dataset Samples</p>

            <p>✅ Section Detection Accuracy Report</p>

            <p>✅ Rule-based + NLP-based Classification Logic</p>


          </div>


        </div>


      </section>






      {/* Completion */}

      <section className="max-w-5xl mx-auto px-8 pb-24">


        <div className="bg-green-900/20 border border-green-500 rounded-2xl p-10 text-center">


          <h2 className="text-4xl font-bold text-green-400">
            Day 8 Completed Successfully ✅
          </h2>


          <p className="text-gray-300 mt-6 text-lg">

            Resume section segmentation module has been implemented
            to transform unstructured resumes into structured AI-ready
            information.

          </p>


        </div>


      </section>



      <Footer />

    </div>
  );
}


export default Day8;