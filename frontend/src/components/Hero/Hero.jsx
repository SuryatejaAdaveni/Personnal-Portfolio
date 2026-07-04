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
        <p className="hero-role">Software Engineer</p>
        <div className="hero-socials">
          <a
            href="https://github.com/SuryatejaAdaveni"
            target="_blank"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adaveni-surya-teja-851793317/"
            target="_blank"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="asurya2022@gmail.com"
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
