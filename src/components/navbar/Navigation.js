import React, { useState } from "react";
import "./navigation.styles.css";
import MobileMenu from "./mobile-menu/MobileMenu";
import me from "../../assets/logo/me.png";
import { Link } from "react-scroll";

const Navigation = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const stickyNavFunc = () => {
    window.scrollY >= 65 ? setStickyNav(true) : setStickyNav(false);
  };

  window.addEventListener("scroll", stickyNavFunc);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`${stickyNav ? "sticky" : ""} styled-navbar`}>
        <div className="title">
          <Link>
            <img
              src={me}
              alt="logo"
              className="nav-logo"
              width="43px"
              height="43px"
              onClick={ScrollToTop}
            />
          </Link>
        </div>
        <ul className="nav-menu-list">
          <li className="nav-list">
            <Link
              to="home"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="projects"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              Projects
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="about"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="playground"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              Blogs
            </Link>
          </li>
        </ul>
        <a
          className="styled-cta"
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <div className="rightToggleMenu">
          <span>Menu</span>
          <div className="menu" onClick={() => toggle()}>
            <div className="line line1"></div>
            <div className="line"></div>
            <div className="line line3" width="1.5rem" ml="0.5rem"></div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
      </nav>
    </>
  );
};

export default Navigation;
