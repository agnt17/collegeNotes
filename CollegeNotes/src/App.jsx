import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Team from "./pages/team";
import Logout from "./pages/logout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Examspace from "./pages/examspace";
import LearnSpace from "./pages/learnspace";
import BtechYear from "./pages/exam-folder/Courses/B.tech/BtechYear";
import MtechYear from "./pages/exam-folder/Courses/M.tech/MtechYear";
import PhdYear from "./pages/exam-folder/Courses/PhD/PhdYear";
import McaYear from "./pages/exam-folder/Courses/MCA/McaYear";
import MbaYear from "./pages/exam-folder/Courses/MBA/MbaYear";
import MscYear from "./pages/exam-folder/Courses/MSc/MscYear";
import BtechBranch from "./pages/exam-folder/Courses/B.tech/Year/BtechBranch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/examspace" element={<Examspace />} />
        <Route path="/learnspace" element={<LearnSpace />} />
        <Route path="/btech_year" element={<BtechYear />} />
        <Route path="/mtech_year" element={<MtechYear />} />
        <Route path="/phd_year" element={<PhdYear />} />
        <Route path="/mca_year" element={<McaYear />} />
        <Route path="/mba_year" element={<MbaYear />} />
        <Route path="/msc_year" element={<MscYear />} />
        <Route path="/btech_branch" element={<BtechBranch />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
