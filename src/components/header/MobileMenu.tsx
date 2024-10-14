import { Link } from "react-router-dom";

interface MobileMenuProps {
  toggle: () => void;
  ScrollToTop: () => void;
  isOpen: boolean;
  stickyNav: boolean;
}

const MobileMenu = ({ toggle, isOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`${
          isOpen
            ? "fixed bg-red-700 z-50 opacity-90 top-24 flex items-center justify-center backdrop-blur-md"
            : "-top-full opacity-0"
        } mobile-menu-container relative`}
        onClick={() => toggle()}
      >
        <ul className="flex flex-col items-center justify-center gap-8">
          <Link to="/" className="mobile-menu-link" onClick={toggle}>
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
            className="mobile-button font-serif text-base bg-[#111] rounded-lg relative text-white uppercase font-medium"
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

        <div className="absolute bottom-28 right-10 flex gap-6">
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

        <span className="font-serif font-bold absolute bottom-28 left-10">
          Namaste 🙏
        </span>
      </div>
    </>
  );
};

export default MobileMenu;
