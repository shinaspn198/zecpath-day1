import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import Day8 from "./pages/Day8";
import Day9 from "./pages/Day9";
import About from "./pages/About";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7" element={<Day7 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;