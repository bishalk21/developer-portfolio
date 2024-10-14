import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/components/projects/projectsData";
import "./projects.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pt-0 text-center relative flex items-center justify-center flex-col mb-10"
    >
      <h2 className="mb-2 relative text-5xl font-extrabold capitalize z-10 inline-block">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#8a8a8a5a] text-8xl">
          01
        </span>{" "}
        Projects
      </h2>
      <p className="mt-2 mb-4 text-xl text-center">
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
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
