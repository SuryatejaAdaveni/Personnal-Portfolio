import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profileImg from "../../Assets/Profile1.png"; // Use your image path
import "./Profile.css";
import resume from "../../Assets/SuryaTeja_Adaveni_Resume.pdf";
import html from "../../Assets/html-logo.webp";
import css from "../../Assets/css-logo.png";
import js from "../../Assets/js-logo.png";
import java from "../../Assets/java-logo.png";
import mysql from "../../Assets/mysql-logo.png";
import react from "../../Assets/react-logo.png";

export default function Profile() {
  return (
    <div className="profile-page">
      {/* Left Column */}
      <div className="profile-left">
        <img src={profileImg} alt="Profile" className="profile-avatar" />
        <h2 className="profile-name">
          Surya Teja
          <br />
          Adaveni
        </h2>
        <div className="profile-title">Software Engineer</div>
        <div className="profile-contact">
          <div>
            <FaEnvelope /> asurya2022@gmail.com
          </div>
          <div>
            <FaPhone /> +91 90323 25810
          </div>
          <div>
            <FaGithub /> https://github.com/SuryatejaAdaveni
          </div>
          <div>
            <FaLinkedin />{" "}
            https://www.linkedin.com/in/adaveni-suryateja-851793317
          </div>
          <div>
            <FaMapMarkerAlt /> Bangalore ,Karnataka , India
          </div>
        </div>
        <a
          href={resume} // Or your actual resume path
          download
          className="download-resume-btn"
        >
          <span className="download-icon">&#8681;</span>{" "}
          {/* Unicode down arrow icon */}
          Download Resume
        </a>
      </div>
      {/* Right Content */}
      <div className="profile-right">
        {/* About Section */}
        <div className="about-section">
          <h3 className="section-title">ABOUT ME</h3>
          <div className="section-underline"></div>
          <p>
            Hello. My name is Surya Teja Adaveni, and I am a Software Engineer.
            I am passionate about creating applications, and I bring a strong
            background in both front-end and back-end technologies.
          </p>
          <p>
            With experience in designing and implementing complex web
            applications , I’ve developed strong skills in both frontend and
            backend technologies including Java, HTML, CSS, Bootstrap,
            JavaScript, ReactJS, mongodb, nodejs and MySQL.
          </p>
          <p>
            I’m detail-oriented, adaptable, and always eager to take on new
            challenges that push me to grow professionally. my passion for
            software development gives me a unique perspective in creating
            technical solutions.
          </p>
        </div>

        {/* Technical Skills Section */}
        {/* Technical Skills Section */}
        <div className="skills-section">
          <h3 className="section-title">TECHNICAL SKILLS</h3>
          <div className="section-underline"></div>
          <div className="skills-boxes">
            <div className="skill-box">
              <img src={java} alt="Java" className="skill-logo" />
              <span>Java</span>
            </div>
            <div className="skill-box">
              <img src={mysql} alt="MySQL" className="skill-logo" />
              <span>MySQL</span>
            </div>
            <div className="skill-box">
              <img src={html} alt="HTML" className="skill-logo" />
              <span>HTML5</span>
            </div>
            <div className="skill-box">
              <img src={css} alt="CSS" className="skill-logo" />
              <span>CSS3</span>
            </div>
            <div className="skill-box">
              <img src={js} alt="JavaScript" className="skill-logo" />
              <span>JavaScript</span>
            </div>
            <div className="skill-box">
              <img src={react} alt="ReactJS" className="skill-logo" />
              <span>ReactJS</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="section-title">EDUCATION</h3>
          <div className="section-underline"></div>
          <ul className="education-list">
            <li>
              <strong>B.Tech in COMPUTER SCIENCE AND ENGINEERING</strong>
              <br />
              Bharath University, 2022 – 2026
              <br />
              Percentage :87%
              <br />
              Chennai, TamilNadu, India.
            </li>
            <li>
              <strong>Intermediate (MPC)</strong>
              <br />
              Sri Chaitanya Junior College, 2020 – 2022
              <br />
              Percentage :96%
              <br />
              Kurnool, Andhra Pradesh, India.
            </li>
            <li>
              <strong>SSC (10th)</strong>
              <br />
              ZPHS, 2015
              <br />
              Percentage :99.5%
              <br />
              Atmakur, Andhra Pradesh, India.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
