import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-card">
        <h1>
          Hello There, I'm
          <span className="hero-name"> Surya Teja Adaveni</span>
        </h1>
        <p className="hero-role">Software Engineer | Fullstack Developer</p>
        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your_email@example.com"
            aria-label="Email"
            data-tooltip="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
