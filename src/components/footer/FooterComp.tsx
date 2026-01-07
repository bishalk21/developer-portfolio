import { useState } from "react";
import "./footer.css";

const FooterComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with your actual email service)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const year = new Date().getFullYear();
  return (
    <footer className="styled-footer space-y-2" id="contact">
      <div className="contact-form-wrapper space-y-3">
        <div className="footer-title">
          <span>get in touch</span>
        </div>

        <div className="link-container text-center space-y-1">
          <a href="mailto:karkibishal00@gmail.com" data-hover="Let's talk">
            Need a developer?
          </a>
        </div>

        <div className="background-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>

        <div className="contact-card space-y-2">
          <p className="text-lg text-muted-foreground max-w-2xl font-serif">
            Have a project in mind? Let&apos;s discuss how I can help bring your
            ideas to life.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sending" && (
              <div className="status-message sending">
                Sending your message...
              </div>
            )}

            {status === "sent" && (
              <div className="status-message sent">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>

        <div className="footer-contacts">
          <div className="footer-contact">
            <p className="contact-header">Call me</p>
            <a href="tel:+61433982572" className="contact-link">
              <i className="fa-solid fa-mobile"></i> +61433982572
            </a>
          </div>

          <div className="footer-contact">
            <p className="contact-header">Socials</p>
            <span className="footer-socials">
              <a
                href="https://github.com/bishalk21"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className="fab fa-github"></i> Github
              </a>
              <a
                href="https://www.linkedin.com/in/bishalk21"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://x.com/_k_bishal"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </span>
          </div>

          <div className="footer-contact">
            <p className="contact-header">Let's grab a coffee.</p>
            <a href="mailto:karkibishal00@gmail.com" className="contact-link">
              <i className="fa-solid fa-envelope"></i> karkibishal00@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="copyright lg:text-center">
        <small>
          &copy; Copyright {year},{" "}
          <a
            href="https://github.com/bishalk21"
            target="_blank"
            rel="noopener noreferrer"
            className="small-link"
          >
            Bishal Karki
          </a>
        </small>
      </div>
    </footer>
  );
};

export default FooterComp;
