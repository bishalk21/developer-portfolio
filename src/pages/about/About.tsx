import wEmoji from "../../assets/img/about/work-emoji.png";
import mee from "../../assets/img/about/me1.jpeg";
import text from "../../assets/img/about/text.svg";
import resume from "../../assets/resume/bishal_software_dev.pdf";
import "./about.css";

const About = () => {
  return (
    <section className="p-8" id="about">
      <div className="about relative text-center">
        <h2 className="mb-12 text-center relative text-5xl font-bold z-10 inline-block">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#8a8a8a5a] text-8xl">
            02
          </span>{" "}
          About Myself
        </h2>
      </div>
      <div className="m-0 mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between max-[950px]:flex-col flex-row gap-4 w-full">
          <div className="img-side relative ">
            <img src={wEmoji} alt="emoji" className="work-emoji" />
            <img src={mee} alt="mee" className="__main-img" />
            <span>
              <img src={text} alt="text" />
            </span>
          </div>
          <div className="text-side max-[950px]:text-center max-[950px]:w-[80%]">
            <div className="styled-paragraph">
              {" "}
              My name is Bishal Karki, graduated student of Bachelor of
              Information Technology. I am an aspiring front-end developer with
              a passion for creating beautiful and user-friendly websites.
            </div>
            <div className="styled-paragraph">
              I love to design and create responsive websites or web apps from
              scratch. The technologies, tools and languages I am using to build
              my projects are HTML, CSS, JavaScript, REACT JS, Bootstrap, Git
              and GitHub, Figma, and VS Code.
            </div>
            <div className="para-3 styled-paragraph">
              {" "}
              I have eagerness to learn something new every day and I love to
              share my knowledge to my fellow front-end developers. And I am
              looking forward to talk with you!
            </div>

            <div className="resume">
              <a href={resume} download="resume-of-bishal-karki">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
