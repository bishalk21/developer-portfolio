import { scrollToSection } from "@/utils/scrollToSection";
import { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  toggle: () => void;
  isOpen: boolean;
  setActive: (active: string) => void;
  navLinks: { id: string; label: string; path: string }[];
}

const MobileMenu = ({
  toggle,
  isOpen,
  setActive,
  navLinks,
}: MobileMenuProps) => {
  // Memoize social links
  const socialLinks = useMemo(
    () => [
      {
        href: "mailto:karkibishal00@gmail.com",
        icon: "fa-solid fa-envelope",
        label: "GM",
        ariaLabel: "Email",
      },
      {
        href: "https://github.com/bishalk21",
        icon: "fa-brands fa-github",
        label: "GH",
        ariaLabel: "GitHub Profile",
      },
      {
        href: "https://www.linkedin.com/in/bishalk21/",
        icon: "fa-brands fa-linkedin",
        label: "LI",
        ariaLabel: "LinkedIn Profile",
      },
    ],
    []
  );

  // Memoized handler for navigation clicks
  const handleNavClick = useCallback(
    (id: string) => {
      setActive(id);
      scrollToSection(id);
      toggle();
    },
    [setActive, toggle]
  );

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Don't render anything if menu is closed (performance)
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`${
          isOpen
            ? "fixed z-50 opacity-90 top-24 flex items-center justify-center backdrop-blur-md"
            : "-top-full opacity-0"
        } mobile-menu-container relative`}
        onClick={toggle}
      >
        <ul className="flex flex-col items-center justify-center gap-8">
          {navLinks.map(({ id, label, path }) => (
            <li key={id}>
              <Link
                to={path}
                className="mobile-menu-link text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => {
                  handleNavClick(id);
                  toggle();
                }}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* CTA Button */}
          <li className="mt-4">
            <a
              className="styled-cta mobile-button relative px-6 py-3 rounded-lg font-serif text-base text-white uppercase font-medium  inline-flex items-center gap-3 hover:bg-primary transition-colors"
              href="mailto:karkibishal00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to get in touch"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              <span>Get in touch</span>
            </a>
          </li>
        </ul>

        <div
          className="absolute bottom-28 right-10 flex gap-6"
          role="complementary"
          aria-label="Social media links"
        >
          {socialLinks.map(({ href, icon, label, ariaLabel }) => (
            <a
              key={href}
              href={href}
              className="mobile-social hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
            >
              <i className={icon} aria-hidden="true" />
              <span className="ml-1">{label}</span>
            </a>
          ))}
        </div>

        <span className="namaste font-serif font-bold absolute bottom-28 left-10">
          Namaste 🙏
        </span>
      </div>
    </>
  );
};

export default MobileMenu;
