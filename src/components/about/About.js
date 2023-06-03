import React from "react";
import "./about.styles.css";
import wEmoji from "./image/work-emoji.png";
import mee from "./image/me1.jpeg";
import text from "./image/text.svg";
import resume from "../../assets/resume/bishalresume.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h2>About Myself</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={wEmoji} alt="emoji" className="work-emoji" />
            <img src={mee} alt="mee" className="__main-img" />
            <span>
              <img src={text} alt="text" />
            </span>
          </div>
          <div className="text-side">
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
    </section>
  );
};

export default About;
