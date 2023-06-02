import React from "react";
import "./project.styles.css";
import ProjectCard from "./ProjectCard.js";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="project-content">
          <h2>portfolio</h2>
          <h3>Each project is a unique piece of development 🧩</h3>
          <p className="styled-paragraph">
            Selected projects I've worked on recently.{" "}
            <a
              href="https://github.com/bishalk21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want to see more?
            </a>
          </p>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
