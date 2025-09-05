import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import portfolio_logo from "../../Assets/portfolio_logo.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <div className="image-container">
        <Link to="/" onClick={closeMenu}>
          <img src={portfolio_logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-container">
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link
            to="/"
            className={`nav-link${location.pathname === "/" ? " active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`nav-link${
              location.pathname === "/profile" ? " active" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className={`nav-link${
              location.pathname === "/projects" ? " active" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav-link${
              location.pathname === "/contact" ? " active" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
        {/* Hamburger icon for mobile */}
        <div
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " show" : ""}`}>
          <Link
            to="/"
            className={`mobile-link${
              location.pathname === "/" ? " active" : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`mobile-link${
              location.pathname === "/profile" ? " active" : ""
            }`}
            onClick={closeMenu}
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className={`mobile-link${
              location.pathname === "/projects" ? " active" : ""
            }`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`mobile-link${
              location.pathname === "/contact" ? " active" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
