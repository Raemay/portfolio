import { useState } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/NAvbar";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";

const pages = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

function App() {
  const routePaths = {};
  pages.forEach((page) => {
    routePaths[page.name] = page.path;
  });
  return (
    <BrowserRouter>
      <Navbar routePaths={routePaths} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/testimonals" element={<Testimonials/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
