import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    type: "", // "success", "error", or "sending"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending your message...", type: "sending" });

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK (status 200-299)
      if (response.ok) {
        const data = await response.json();
        setStatus({
          message: "Message sent successfully! I'll get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Handle different error statuses
        if (response.status === 0) {
          // Network error or CORS issue
          throw new Error(
            "Cannot connect to server. Please check if the backend is running on port 5000.",
          );
        } else {
          // Server returned an error
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Server error: ${response.status}`,
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        message:
          error.message || "Error sending message. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="heading">
        <h1>GET IN TOUCH</h1>
        <div className="underline"></div>
        <p>
          Thank you for visiting my portfolio. I'm actively seeking Software
          Engineer opportunities where I can contribute, learn, and grow. If
          your company is looking for a motivated developer with a strong
          foundation in Java, React, JavaScript, and SQL, I'd be delighted to
          discuss how I can add value to your organization.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-information">
          <div className="information-list">
            <div className="contact-item">
              <a
                href="mailto:asurya2022@gmail.com"
                className="contact-icon email"
                title="Send Email"
              >
                <FaEnvelope />
              </a>
              <div className="contact-details">
                <div className="contact-label">EMAIL</div>
                <div className="contact-value">asurya2022@gmail.com</div>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="tel:+919032325810"
                className="contact-icon phone"
                title="Call"
              >
                <FaPhone />
              </a>
              <div className="contact-details">
                <div className="contact-label">PHONE</div>
                <div className="contact-value">+91 9032325810</div>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="https://www.google.com/maps/place/Rainbow+CoLiving+pg/@12.924557,77.6090904,1698m/data=!3m2!1e3!5s0x3bae14553cb77dc3:0xdc9e9d555bab3b14!4m6!3m5!1s0x3bae157875c64cdd:0x28008e9eb93e9979!8m2!3d12.9246087!4d77.6090774!16s%2Fg%2F11l_1bgns1?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon location"
                title="View Location"
              >
                <FaMapMarkerAlt />
              </a>
              <div className="contact-details">
                <div className="contact-label">LOCATION</div>
                <div className="contact-value">Chennai, India</div>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/vijaya-bhaskar-reddy-venna-41025a234/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon linkedin"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <div className="contact-details">
                <div className="contact-label">LINKEDIN</div>
                <div className="contact-value">Surya Teja Adaveni</div>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="https://github.com/VIJAYREDDYVENNA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon github"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <div className="contact-details">
                <div className="contact-label">GITHUB</div>
                <div className="contact-value">Surya Teja Adaveni</div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name *
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
              />
            </label>

            <label>
              Email *
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
              />
            </label>
          </div>

          <label>
            Subject *
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
            />
          </label>

          <label>
            Message *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
            />
          </label>

          <button
            type="submit"
            className="send-message-btn"
            disabled={status.type === "sending"}
          >
            {status.type === "sending" ? (
              <>
                Sending... <FaPaperPlane />
              </>
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.type === "success" ? (
                <FaCheckCircle />
              ) : status.type === "error" ? (
                <FaExclamationCircle />
              ) : null}
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
