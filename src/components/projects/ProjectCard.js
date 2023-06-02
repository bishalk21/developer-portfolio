import React from "react";
import "./project-card.styles.css";
import { projectsData } from "./projectsData";

const ProjectCard = () => {
  return (
    <div className="projects-grid">
      {projectsData.map((project) => {
        return (
          <div
            className={`pro pro__1 ${
              project?.reverseProj ? "reversed-proj " : ""
            }`}
            key={project.id}
          >
            <div className="pro__img">
              <a href={project.liveLink}>
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            <div className="pro__text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                <p>{project.stack[0]}</p>
                <p>{project.stack[1]}</p>
              </div>
              <div className="links">
                <a href={project.codeLink}>
                  Code <i class="fa-brands fa-github"></i>
                </a>
                <a href={project.liveLink}>
                  Live Demo{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
