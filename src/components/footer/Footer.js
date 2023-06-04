import React from "react";
import "./footer.styles.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="styled-footer">
      <div className="footer-title">
        <span>get in touch</span>
      </div>

      <div className="link-container">
        <a href="mailto:karkibishal00@gmail.com" data-hover="Let's talk">
          Need a developer?
        </a>
      </div>

      <div className="footer-contacts">
        <div className="footer-contact">
          <p className="contact-header">Call me</p>
          <a href="tel:+61433982572" className="contact-link">
            +61433982572
          </a>
        </div>

        <div className="footer-contact">
          <p className="contact-header">Social</p>
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
              href="https://www.twitter.com/intime_73"
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
          <a href="tel:+61433982572" className="contact-link">
            karkibishal00@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-arrow-line">
        <hr className="footer-line" />
        <div className="arrow-to-top" title="Back to Top"></div>
      </div>

      <div className="copyright">
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

export default Footer;
