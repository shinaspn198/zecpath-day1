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
import Day10 from "./pages/Day10";
import Day11 from "./pages/Day11";
import Day12 from "./pages/Day12";
import Day13 from "./pages/Day13";
import Day14 from "./pages/Day14";
import Day15 from "./pages/Day15";
import Day16 from "./pages/Day16";
import Day17 from "./pages/Day17";
import Day18 from "./pages/Day18";
import Day19 from "./pages/Day19";
import Day20 from "./pages/Day20";
import Day21 from "./pages/Day21";
import Day22 from "./pages/Day22";
import Day23 from "./pages/Day23";
import Day24 from "./pages/Day24";
import Day25 from "./pages/Day25";

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
        <Route path="/day10" element={<Day10 />} />
        <Route path="/day11" element={<Day11 />} />
        <Route path="/day12" element={<Day12 />} />
        <Route path="/day13" element={<Day13 />} />
        <Route path="/day14" element={<Day14 />} />
        <Route path="/day15" element={<Day15 />} />
        <Route path="/day16" element={<Day16 />} />
        <Route path="/day17" element={<Day17 />} />
        <Route path="/day18" element={<Day18 />} />
        <Route path="/day19" element={<Day19 />} />
        <Route path="/day20" element={<Day20 />} />
        <Route path="/day21" element={<Day21 />} />
        <Route path="/day22" element={<Day22 />} />
        <Route path="/day23" element={<Day23 />} />
        <Route path="/day24" element={<Day24 />} />
        <Route path="/day25" element={<Day25 />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;