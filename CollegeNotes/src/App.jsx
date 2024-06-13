import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Team from "./pages/team";
import Logout from "./pages/logoutPage";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import SignUp from "./pages/signupPage";
import Examspace from "./pages/examspace";
import LearnSpace from "./pages/learnspace";
import BtechYear from "./pages/exam-folder/Courses/B.tech/BtechYear";
import MtechYear from "./pages/exam-folder/Courses/M.tech/MtechYear";
import PhdYear from "./pages/exam-folder/Courses/PhD/PhdYear";
import McaYear from "./pages/exam-folder/Courses/MCA/McaYear";
import MbaYear from "./pages/exam-folder/Courses/MBA/MbaYear";
import MscYear from "./pages/exam-folder/Courses/MSc/MscYear";
import BtechBranch from "./pages/exam-folder/Courses/B.tech/Year/BtechBranch";
import SelectSemester from "./pages/exam-folder/Courses/B.tech/Year/1st/SelectSemester";
import MyDocument from "./pages/exam-folder/Courses/B.tech/Year/1st/pdf"; // Import your MyDocument component
import { PDFViewer } from '@react-pdf/renderer';

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
        <Route path="/semester" element={<SelectSemester />} />
        <Route path="/pdfviewer" element={<PdfViewerComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

// Component to render MyDocument inside PDFViewer
const PdfViewerComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <MyDocument/>
      </PDFViewer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
