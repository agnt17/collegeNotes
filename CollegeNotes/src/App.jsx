import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Team from "./pages/team";
import AdminLogin from "./pages/admin-login";
import Logout from "./pages/logout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
