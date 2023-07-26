import { Link } from "react-router-dom";
import Technologies from "../components/technologies/Technologies";
import { Projects } from "./Projects";

const Home = () => {
  const today = new Date();
  const hour = today.getHours();

  return (
    <div className="flex flex-col">
      <div
        className="home relative max-[392px]:h-[90vh] max-[456px]:h-[87vh] max-[580px]:h-[97vh] max-[900px]:h-[92vh] h-[75vh] w-full bg-[#0d0e0e] text-[#aaa] flex flex-col items-center pr-20 pl-20 p-10 max-[900px]:p-2 md:pl-10 md:pr-10"
        id="home"
      >
        <div className="container mx-auto hero-main relative flex items-center justify-center">
          <div className="row flex relative h-auto items-center justify-center gap-4 w-full max-[900px]:flex-col-reverse">
            <div className="w-3/5 flex flex-col max-w-3xl relative max-[900px]:text-center">
              {/* <div className="col hero-text" md={4}> */}
              <h1 className="text-[#f7f7f7] text-4xl m-0 mt-4 mb-4 font-bold max-[456px]:text-2xl">
                A Passionate Software Developer
                <span className="hand-wave">👋</span>
              </h1>
              <p className="text-[#fff9f9] font-sans text-xl font-medium max-[456px]:text-sm">
                Hi, I'm Bishal Karki, Front-End React Developer based in Sydney,
                Australia. 📍
              </p>
              <h3 className="mt-3 font-semibold max-[456px]:text-sm">
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

              <div className="mt-11 max-[768px]:text-left max-[768px]:mt-5 text-center flex gap-4 items-center max-[900px]:items-center max-[900px]:justify-center">
                <Link
                  className="styled-btn projects"
                  to="projects"
                  duration={0}
                  delay={0}
                  spy="true"
                  spythrottle={0}
                  exact="true"
                  offset={-50}
                >
                  <span>Projects</span>
                </Link>
                <Link
                  className="styled-btn about-me secondary"
                  to="about"
                  duration={0}
                  delay={0}
                  spy="true"
                  spythrottle={0}
                  exact="true"
                  offset={-50}
                >
                  <span>About me</span>
                </Link>
              </div>

              <hr className="w-20 absolute -bottom-24 bg-[#aaa] border-none h-0.5 rounded-3xl max-[900px]:-bottom-8 max-[900px]:-left-8" />
              <p className="absolute -bottom-32 text-[#aaa] max-[900px]:-bottom-16 max-[900px]:-left-8">
                have a great{" "}
                <span>
                  {hour < 12
                    ? " morning  🌄"
                    : hour < 18
                    ? " afternoon  ☀️"
                    : " evening  🌇"}
                </span>
              </p>

              <div className="socials flex flex-col gap-7 absolute -right-80 -bottom-48 max-[900px]:flex max-[900px]:flex-row max-[900px]:-right-8 md:-right-68 max-[900px]:-bottom-16">
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

              <span className="absolute -right-[10%] -bottom-1/4 max-[900px]:-right-8 max-[900px]:-bottom-8 max-[900px]:text-xs text-[#94929d] text-xs font-medium">
                Don't wish for it! Work for it!
              </span>
            </div>
            {/* <Col className="hero-img" md={8}></Col> */}
            <div className="w-2/5 hero-img max-[768px]:w-3/5"></div>
          </div>
        </div>
      </div>
      <Technologies />
      <Projects />
    </div>
  );
};

export default Home;
