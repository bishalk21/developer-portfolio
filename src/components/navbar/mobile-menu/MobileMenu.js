import React from "react";
import "./mobileMenu.styles.css";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-container">
      <div className="icon"></div>
      <ul className="mobile-menu-list">
        <li className="mobile-menu-link">Home</li>
        <li className="mobile-menu-link">Projects</li>
        <li className="mobile-menu-link">About</li>
        <li className="mobile-menu-link">Blogs</li>
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
          <i className="fa-solid fa-envelope"></i> GM
        </a>
        <a
          href="https://github.com/bishalk21"
          className="mobile-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-github"></i> GH
        </a>
        <a
          href="https://www.linkedin.com/in/bishalk21/"
          className="mobile-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-linkedin"></i> LI
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
