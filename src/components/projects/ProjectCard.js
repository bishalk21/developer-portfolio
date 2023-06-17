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
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  id="myiframe"
                  src="https://www.youtube.com/embed/t663yKxsszU?rel=0&amp;autoplay=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                {/* <img src={project.image} alt={project.title} /> */}
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
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i> <span>Code</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Live</span>
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
