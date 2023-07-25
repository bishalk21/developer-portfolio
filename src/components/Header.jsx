import { useState } from "react";
import { Link } from "react-router-dom";
import me from "../assets/logo/me.png";

const Header = () => {
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
      <nav
        className={`relative top-0 left-0 right-0 flex justify-between items-center h-28 p-0 pr-20 pl-20 z-[999] bg-[#0d0e0e] max-[768px]:pr-10 max-[768px]:pl-10 ${
          stickyNav
            ? "fixed top-0 left-0 right-0 h-20 bg-[#0d0e0e] z-[999]"
            : ""
        }`}
      >
        <div className="title">
          <Link to="/">
            <img
              src={me}
              alt="logo"
              className="cursor-pointer text-red-700"
              width="43px"
              height="43px"
              onClick={ScrollToTop}
            />
          </Link>
        </div>
        <ul className="flex list-none gap-5 flex-1 m-0 mr-8 ml-20 max-[768px]:hidden">
          <li className="nav-list">
            <Link
              to="home"
              smooth="true"
              duration={0}
              delay={0}
              spy="true"
              spythrottle={0}
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
              smooth="true"
              duration={0}
              delay={0}
              spy="true"
              spythrottle={0}
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
              smooth="true"
              duration={0}
              delay={0}
              spy="true"
              spythrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="contact"
              smooth="true"
              duration={0}
              delay={0}
              spy="true"
              spythrottle={0}
              exact="true"
              offset={-85.26}
              className="styled-nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          className="styled-cta p-3 min-w-fit uppercase text-sm font-semibold relative overflow-hidden rounded-lg max-[768px]:hidden"
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative overflow-hidden">
            <span className="overflow-hidden flex items-center gap-2">
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
        <div className="flex items-center justify-center flex-row gap-1 md:hidden">
          <span className="md:hidden">Menu</span>
          <div
            className="cursor-pointer md:hidden max-[768px]:block"
            onClick={() => toggle()}
          >
            <div className="line w-6"></div>
            <div className="line"></div>
            <div className="line w-6 ml-2" width="1.5rem"></div>
          </div>
        </div>
        {/* <MobileMenu isOpen={isOpen} toggle={toggle} /> */}
        <div
          className={`mobile-menu-container ${
            isOpen ? "opacity-100 top-0" : ""
          }`}
          onClick={() => toggle()}
        >
          <div className="h-28 p-0 pr-20 pl-20 flex items-center justify-between">
            <div className="title">
              <Link to="/">
                <img
                  src={me}
                  alt="logo"
                  className="cursor-pointer text-red-700"
                  width="43px"
                  height="43px"
                  onClick={ScrollToTop}
                />
              </Link>
            </div>
            <div
              className="flex gap-2 items-center justify-center cursor-pointer text-white"
              onClick={toggle}
            >
              <span className="close-text">Close</span>
              <div className="close-icon text-xl">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>

          <ul className="flex flex-col items-center justify-center h-4/6 gap-8">
            <Link to="home" onClick={toggle} className="mobile-menu-link">
              Home
            </Link>
            <Link to="projects" onClick={toggle} className="mobile-menu-link">
              Projects
            </Link>
            <Link to="about" onClick={toggle} className="mobile-menu-link">
              About
            </Link>
            <Link to="contact" onClick={toggle} className="mobile-menu-link">
              Contact
            </Link>
            <a
              className="mobile-button font-serif text-base overflow-hidden bg-[#111] rounded-lg relative text-white uppercase font-medium"
              href="mailto:karkibishal00@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span className="flex items-center gap-3 relative overflow-hidden">
                <span className="flex items-center gap-3 overflow-hidden">
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

          <div className="absolute bottom-8 right-10 flex gap-6">
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
              <i className="fa-brands fa-github"></i> GH
            </a>
            <a
              href="https://www.linkedin.com/in/bishalk21/"
              className="mobile-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i> LI
            </a>
          </div>

          <span className="font-serif font-bold absolute bottom-8 left-10">
            Namaste 🙏
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
