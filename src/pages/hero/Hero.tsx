import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "./hero.css";
import { scrollToSection } from "@/utils/scrollToSection";

const Hero = () => {
  const today = new Date();
  const hour = today.getHours();

  return (
    <section id="home">
      <div className="home relative container mx-auto hero-main flex flex-col row items-center justify-center gap-4 w-full ">
        <ScrollAnimation animateIn="fadeInUp" delay={0}>
          <p className=" font-sans text-lg font-medium max-[456px]:text-sm">
            Hello <span className="hand-wave">👋</span>, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <h1 className="text-4xl font-bold p-3 pl-0">Bishal Karki</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h3 className="text-xl font-bold p-2 pl-0 text-center">
            <span className="text-green-500 ">Full Stack Developer</span> based
            in Sydney, Australia. 📍
          </h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <h3 className="mt-3 font-semibold text-base">
            I <span className="change-text"></span>{" "}
            <span className="responsive">r</span>
            <span className="responsive">e</span>
            <span className="responsive">s</span>
            <span className="responsive">p</span>
            <span className="responsive">o</span>
            <span className="responsive">n</span>
            <span className="responsive">s</span>
            <span className="responsive">i</span>
            <span className="responsive">v</span>
            <span className="responsive">e</span> websites.
          </h3>
        </ScrollAnimation>

        <div className="mt-11 max-[768px]:text-left max-[768px]:mt-5 text-left flex gap-4 items-start max-[900px]:items-start max-[900px]:justify-center">
          <Link
            className="styled-btn projects"
            to="projects"
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            <span>Projects</span>
          </Link>
          <Link
            className="styled-btn about-me secondary"
            to="about"
            onClick={() => {
              scrollToSection("about");
            }}
          >
            <span>About me</span>
          </Link>
        </div>
        <hr className="w-20 absolute -bottom-12 left-1 bg-[#aaa] border-none h-0.5 rounded-3xl" />
        <p className="absolute -bottom-20 text-[#aaa] left-1">
          have a great{" "}
          <span>
            {hour < 12
              ? " morning  🌄"
              : hour < 18
              ? " afternoon  ☀️"
              : " evening  🌇"}
          </span>
        </p>
        <div className="socials flex flex-row gap-7 absolute right-1 -bottom-14">
          <a
            href="mailto:karkibishal00@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.github.com/bishalk21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bishalk21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <span className="absolute right-1 -bottom-1/4 text-[#94929d] text-xs font-medium">
          Don't wish for it! Work for it!
        </span>
      </div>
    </section>
  );
};

export default Hero;
