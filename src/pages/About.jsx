import wEmoji from "../components/about/image/work-emoji.png";
import mee from "../components/about/image/me1.jpeg";
import text from "../components/about/image/text.svg";
import resume from "../assets/resume/bishalresume.pdf";

const About = () => {
  return (
    <div className="bg-[#0d0e0e] text-[#aaa] p-8" id="about">
      <div className="about relative text-center">
        <h2 className="mb-12 text-center relative text-lg md:text-5xl font-bold z-10 text-[#d0d0d0] inline-block">
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
              Information Technology. I am a passionate front-end developer
              based in Australia.
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
    </div>
  );
};

export default About;
