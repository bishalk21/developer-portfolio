import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import me from "../../assets/img/logo/me.png";
import "./header.css";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "@/utils/scrollToSection";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const stickyNavFunc = () => {
      if (window.scrollY >= 10) {
        setStickyNav(true);

        if (window.scrollY >= 0 && window.scrollY < 400) {
          setActive("home");
        } else if (window.scrollY >= 665 && window.scrollY <= 1150) {
          setActive("projects");
        } else if (window.scrollY >= 1150 && window.scrollY < 2510) {
          setActive("about");
        } else if (window.scrollY >= 2510) {
          setActive("contact");
        }
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", stickyNavFunc);

    return () => {
      window.removeEventListener("scroll", stickyNavFunc);
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const themeToggle = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  };

  return (
    <>
      <nav
        className={`relative px-10 top-0 left-0 z-[999] right-0 py-8 flex justify-between items-center gap-3 ${
          stickyNav
            ? "sticky top-0 z-50 left-0 right-0 shadow-md backdrop-blur-lg backdrop-filter"
            : ""
        }`}
      >
        <div
          className={`${"opacity-100 w-full flex justify-between items-center"}`}
        >
          <div className="logo">
            <Link to="/">
              <img
                src={me}
                alt="Bishal Karki"
                loading="lazy"
                className="w-10 h-10 rounded-full cursor-pointer text-red-700"
                width="43px"
                height="43px"
                onClick={() => {
                  ScrollToTop();
                  if (isOpen) toggle();
                }}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center  flex-row gap-1 md:hidden">
            {isOpen ? (
              <span className="">Close</span>
            ) : (
              <span className="">Menu</span>
            )}
            <div
              className="cursor-pointer max-[768px]:block"
              onClick={() => toggle()}
            >
              {isOpen ? (
                <>
                  <div className="close-icon text-xl">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </>
              ) : (
                <div className="text-bgBlack">
                  <div className="line w-6 "></div>
                  <div className="line"></div>
                  <div className="line w-6 ml-2"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <ul className="flex gap-5 max-[768px]:hidden list-none items-center ">
          <li className="nav-list">
            <Link
              to="/projects"
              className={`styled-nav-links ${
                active === "projects" ? "active" : ""
              }`}
              onClick={() => {
                setActive("projects");
                scrollToSection("projects");
              }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="/about"
              className={`styled-nav-links ${
                active === "about" ? "active" : ""
              }`}
              onClick={() => {
                setActive("about");
                scrollToSection("about");
              }}
            >
              About
            </Link>{" "}
          </li>
          <li className="nav-list">
            <Link
              to="/contact"
              className={`styled-nav-links ${
                active === "contact" ? "active" : ""
              }`}
              onClick={() => {
                setActive("contact");
                scrollToSection("contact");
              }}
            >
              Contact
            </Link>{" "}
          </li>
          <li className="nav-list">
            <div className="flex items-center space-x-2">
              <input
                onChange={themeToggle}
                className="container_toggle"
                type="checkbox"
                id="switch"
                name="mode"
              />
              <label htmlFor="switch">Toggle</label>
            </div>
          </li>
        </ul>

        <a
          className="styled-cta p-3 min-w-fit uppercase text-sm font-semibold relative overflow-hidden rounded-lg max-[768px]:hidden"
          href="mailto:karkibishal00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative overflow-hidden text-white">
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
      </nav>

      <div className="relative h-full">
        <MobileMenu toggle={toggle} isOpen={isOpen} setActive={setActive} />
      </div>
    </>
  );
};

export default Navbar;
