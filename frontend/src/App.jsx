import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BodyClassController() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-body");
      document.body.classList.remove("other-body");
    } else {
      document.body.classList.add("other-body");
      document.body.classList.remove("home-body");
    }
  }, [location]);

  return null; // This component only manages body classes
}

export default function App() {
  return (
    <Router>
      <BodyClassController />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
