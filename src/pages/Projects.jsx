// import {
//   ProjectsContainer,
//   StyledProjects,
// } from "../../style/projects/ProjectStyles";
// import {
//   SectionHeading,
//   SectionTitle,
// } from "../../style/projects/sectionHeading";
// import {
//   StyledLink,
//   StyledParagraph,
// } from "../../style/projects/TypographyStyle";
// import ProjectCardComponent from "../components/projects/projectCard";
// import { projectsData } from "../components/projects/projectsData";

import ProjectCard from "../components/projects/ProjectCard";
import { projectsData } from "../components/projects/projectsData";

export const Projects = () => {
  return (
    <>
      <div className="bg-[#ffffff] text-[#111] pr-20 pl-20 p-4">
        <div className="text-center relative flex items-center justify-center flex-col mb-10">
          <h2 className="mb-2 relative md:text-5xl text-3xl font-extrabold capitalize z-10 inline-block text-[#262637]">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#00000016] text-6xl md:text-8xl">
              01
            </span>{" "}
            Projects
          </h2>
          <p className="mb-4 text-lg md:text-xl text-center text-[#262637]">
            {" "}
            Selected projects I've worked on recently.{" "}
            <a
              href="https://github.com/bishalk21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4353ff] hover:text-[#2323a6] max-[768px]:block"
            >
              Want to see more?
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>

    // =========== projects =============
    // <StyledProjects id="projects">

    //   {/* ========== Projects ========== */}
    //   <ProjectsContainer>
    //     {projectsData.map((project) => {
    //       return <ProjectCardComponent key={project.id} {...project} />;
    //     })}
    //   </ProjectsContainer>
    // </StyledProjects>
  );
};
