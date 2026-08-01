import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Documentation.css";
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <Navbar />

      <div className="documentation pt-28">

        <h1>📚 Zecpath AI Internship Documentation</h1>

        <p>
          Browse all completed internship learning modules and documentation.
        </p>

        <div className="docs-grid">

          <Link to="/day1" className="doc-card">
            <span className="badge completed">Completed</span>

            <h2>📘 Day 1</h2>

            <p>Introduction to AI Engineering</p>
          </Link>

          <Link to="/day2" className="doc-card">
            <span className="badge completed">Completed</span>

            <h2>🤖 Day 2</h2>

            <p>AI System Architecture & Communication Design</p>
          </Link>

          <Link to="/day3" className="doc-card">
            <span className="badge completed">Completed</span>

            <h2>🚀 Day 3</h2>

            <p>Environment Setup & Repository Structure</p>
          </Link>

          <Link to="/day4" className="doc-card">
             <span className="badge completed">Completed</span>

           <h2>📊 Day 4</h2>

           <p>Data Understanding & Structuring</p>
          </Link>
        
        <Link to="/day5" className="doc-card">
          <span className="badge completed">Completed</span>

          <h2>📝 Day 5</h2>

          <p>Resume Text Extraction Engine</p>
          </Link>

          <Link to="/day6" className="doc-card">
  <span className="badge completed">Completed</span>

  <h2>📋 Day 6</h2>

  <p>Job Description Parsing System</p>
</Link>

<Link to="/day7" className="doc-card">
  <span className="badge completed">Completed</span>

  <h2>📊 Day 7</h2>

  <p>AI Data Pipeline & Storage Design</p>
</Link>


<Link to="/day8" className="doc-card">
  <span className="badge completed">Completed</span>

  <h2>🧠 Day 8</h2>

  <p>Resume Section Segmentation</p>
</Link>

<Link to="/day9" className="doc-card">
  <span className="badge completed">Completed</span>

  <h2>🧠 Day 9</h2>

  <p>Resume Skill Extraction Engine</p>
</Link>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Documentation;