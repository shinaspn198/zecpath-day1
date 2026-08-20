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

          {/* DAY 1 */}
          <Link to="/day1" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📘 Day 1</h2>
            <p>Introduction to AI Engineering</p>
          </Link>

          {/* DAY 2 */}
          <Link to="/day2" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🤖 Day 2</h2>
            <p>AI System Architecture & Communication Design</p>
          </Link>

          {/* DAY 3 */}
          <Link to="/day3" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🚀 Day 3</h2>
            <p>Environment Setup & Repository Structure</p>
          </Link>

          {/* DAY 4 */}
          <Link to="/day4" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📊 Day 4</h2>
            <p>Data Understanding & Structuring</p>
          </Link>

          {/* DAY 5 */}
          <Link to="/day5" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📝 Day 5</h2>
            <p>Resume Text Extraction Engine</p>
          </Link>

          {/* DAY 6 */}
          <Link to="/day6" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📋 Day 6</h2>
            <p>Job Description Parsing System</p>
          </Link>

          {/* DAY 7 */}
          <Link to="/day7" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📊 Day 7</h2>
            <p>AI Data Pipeline & Storage Design</p>
          </Link>

          {/* DAY 8 */}
          <Link to="/day8" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🧠 Day 8</h2>
            <p>Resume Section Segmentation</p>
          </Link>

          {/* DAY 9 */}
          <Link to="/day9" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🧠 Day 9</h2>
            <p>Resume Skill Extraction Engine</p>
          </Link>

          {/* DAY 10 */}
          <Link to="/day10" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>💼 Day 10</h2>
            <p>Experience Parsing & Relevance Engine</p>
          </Link>

          {/* DAY 11 */}
          <Link to="/day11" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🎓 Day 11</h2>
            <p>Education & Certification Parsing Engine</p>
          </Link>

          {/* DAY 12 */}
          <Link to="/day12" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🤝 Day 12</h2>
            <p>Semantic Resume–Job Matching Engine</p>
          </Link>

          {/* DAY 13 */}
          <Link to="/day13" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📈 Day 13</h2>
            <p>ATS Scoring Formula Design</p>
          </Link>

          {/* DAY 14 */}
          <Link to="/day14" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🏆 Day 14</h2>
            <p>Candidate Ranking & Shortlisting Engine</p>
          </Link>

          {/* DAY 15 */}
          <Link to="/day15" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>⚖️ Day 15</h2>
            <p>Resume Normalization & Fairness Engine</p>
          </Link>

          {/* DAY 16 */}
          <Link to="/day16" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🚀 Day 16</h2>
            <p>ATS API Specification & Integration</p>
          </Link>

          {/* DAY 17 */}
          <Link to="/day17" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🧪 Day 17</h2>
            <p>ATS Testing & Accuracy Evaluation</p>
          </Link>

          {/* DAY 18 */}
          <Link to="/day18" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>📊 Day 18</h2>
            <p>ATS Scoring & Candidate Evaluation</p>
          </Link>

          {/* DAY 19 */}
          <Link to="/day19" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🎯 Day 19</h2>
            <p>Candidate Shortlisting System</p>
          </Link>

          {/* DAY 20 */}
          <Link to="/day20" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🏁 Day 20</h2>
            <p>Final ATS Evaluation & Production Readiness</p>
          </Link>

          {/* DAY 21 */}
          <Link to="/day21" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>⚙️ Day 21</h2>
            <p>Eligibility Decision Engine</p>
          </Link>

          {/* DAY 22 */}
          <Link to="/day22" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🤖 Day 22</h2>
            <p>AI HR Screening & Interview Question Engine</p>
          </Link>

          {/* DAY 23 */}
          <Link to="/day23" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🎙️ Day 23</h2>
            <p>Transcript Data Architecture</p>
          </Link>

          {/* DAY 24 */}
          <Link to="/day24" className="doc-card">
            <span className="badge completed">Completed</span>
            <h2>🌐 Day 24</h2>
            <p>AI HR Screening Web Application</p>
          </Link>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Documentation;