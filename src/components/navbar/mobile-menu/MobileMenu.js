import React from "react";
import "./mobileMenu.styles.css";
import { Link } from "react-scroll";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div
      className={`${isOpen ? "open" : ""} mobile-menu-container`}
      toggle={toggle}
    >
      <div className="icon" onClick={toggle}>
        <span className="close-text">Close</span>
        <div className="close-icon">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <ul className="mobile-menu-list">
        <Link to="home" onClick={toggle} className="mobile-menu-link">
          Home
        </Link>
        <Link to="projects" onClick={toggle} className="mobile-menu-link">
          Projects
        </Link>
        <Link to="about" onClick={toggle} className="mobile-menu-link">
          About
        </Link>
        <Link to="playground" onClick={toggle} className="mobile-menu-link">
          Blogs
        </Link>
        <a
          className="mobile-button"
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              get in touch
            </span>
          </span>
        </a>
      </ul>

      <div className="mobile-socials">
        <a
          href="mailto:karkibishal00@gmail.com"
          className="mobile-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-envelope"></i> GM
        </a>
        <a
          href="https://github.com/bishalk21"
          className="mobile-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i> GH
        </a>
        <a
          href="https://www.linkedin.com/in/bishalk21/"
          className="mobile-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i> LI
        </a>
      </div>

      <span className="mobile-quote">Namaste 🙏</span>
    </div>
  );
};

export default MobileMenu;
