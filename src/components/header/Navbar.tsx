import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import me from "../../assets/img/logo/me.png";
import "./header.css";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "@/utils/scrollToSection";
import CTAButton from "./CTAButton";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  // Memoize navigation links to prevent re-creation
  const navLinks = useMemo(
    () => [
      { id: "projects", label: "Projects", path: "/projects" },
      { id: "about", label: "About", path: "/about" },
      { id: "contact", label: "Contact", path: "/contact" },
    ],
    []
  );

  // Initialize theme from localStorage (runs once)
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   const prefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

  //   setIsDark(shouldBeDark);
  //   document.documentElement.classList.toggle("light", !shouldBeDark);
  // }, []);

  // Handle theme toggle with useCallback to prevent re-creation
  // const themeToggle = useCallback(() => {
  //   setIsDark((prev) => {
  //     const newTheme = !prev;
  //     document.documentElement.classList.toggle("light", newTheme);
  //     localStorage.setItem("theme", newTheme ? "light" : "dark");
  //     return newTheme;
  //   });
  // }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;
    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // return () => sections.forEach((s) => observer.unobserve(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Update active based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive("home");
    else if (path === "/projects") setActive("projects");
    else if (path === "/about") setActive("about");
    else if (path === "/contact") setActive("contact");
  }, [location.pathname]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setStickyNav(window.scrollY >= 8);
        timeoutId = null;
      }, 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const ScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLogoClick = useCallback(() => {
    ScrollToTop();
    if (isOpen) toggle();
  }, [isOpen, ScrollToTop, toggle]);

  const handleNavClick = useCallback(
    (id: string) => {
      setActive(id);
      scrollToSection(id);
      if (isOpen) toggle();
    },
    [isOpen, toggle]
  );

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
                onClick={handleLogoClick}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="text-sm">{isOpen ? "Close" : "Menu"}</span>
            {isOpen ? (
              <i className="fa-solid fa-xmark text-xl" />
            ) : (
              <div className="menu-icon">
                <div className="line w-6" />
                <div className="line" />
                <div className="line w-6 ml-2" />
              </div>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="flex gap-5 max-[768px]:hidden md:flex list-none items-center">
          {navLinks.map(({ id, label, path }) => (
            <li key={id} className="nav-list">
              <Link
                to={path}
                className={`styled-nav-links ${active === id ? "active" : ""}`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Theme Toggle */}
          {/* <li className="nav-list">
            <div className="flex items-center space-x-2">
              <input
                onChange={themeToggle}
                checked={!isDark}
                className="container_toggle"
                type="checkbox"
                id="switch"
                name="mode"
                aria-label="Toggle theme"
              />
              <label htmlFor="switch" className="cursor-pointer">
                Toggle
              </label>
            </div>
          </li> */}
        </ul>

        {/* CTA Button */}
        <CTAButton />
      </nav>

      <div className="relative h-full">
        <MobileMenu
          toggle={toggle}
          isOpen={isOpen}
          setActive={setActive}
          navLinks={navLinks}
        />
      </div>
    </>
  );
};

export default Navbar;
