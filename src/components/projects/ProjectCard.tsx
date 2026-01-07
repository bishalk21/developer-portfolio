import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const ProjectCard = ({ ...project }) => {
  return (
    <Card
      key={project.id}
      className="overflow-hidden group hover:border-[var(--accent)] transition-all hover:shadow-lg border-[var(--darkGray)] rounded-lg relative border shadow-bgPurple"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* <img
          className="w-full h-full object-contain relative"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <img
          className="transition-image absolute w-full h-full object-contain opacity-0"
          src={project.transitionImage}
          alt={project.title}
          loading="lazy"
        /> */}
      </div>
      <div className="p-6 space-y-4 text-left">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project?.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-[var(--accent)] text-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="hover:cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] border-[var(--accent)] hover:scale-105 transition-transform duration-200"
          >
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="hover:cursor-pointer hover:bg-[var(--bg-lightGreen)] hover:text-[var(--accent-foreground)] hover:scale-105 transition-transform duration-200 border-[var(--bg-lightGreen)] border"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </Card>
    // <article className="project-card bg-[#fff] group hover:border-accent transition-all hover:shadow-lg max-w-full flex items-center justify-center flex-col rounded relative overflow-hidden">
    //   <img
    //     className="w-full h-full object-contain relative"
    //     src={image}
    //     alt={title}
    //     loading="lazy"
    //   />
    //   <img
    //     className="transition-image absolute w-full h-full object-contain opacity-0"
    //     src={transitionImage}
    //     alt={title}
    //     loading="lazy"
    //   />
    //   <div className="project-details absolute text-left right-0 max-sm:top-0 left-0 max-md:top-28  pt-20 pb-20 text-[#fff] opacity-0 pointer-events-none z-50 group-hover:opacity-100 group-hover:pointer-events-auto transition-all px-5">
    //     <h3>{title}</h3>
    //     <p className="text-sm text-muted-foreground leading-relaxed mt-1 overflow-hidden max-[460px]:hidden">
    //       {project.description}
    //     </p>
    //     <a
    //       className="code-live-link absolute bottom-5 left-32 text-white text-sm flex items-center justify-center gap-2"
    //       href={codeLink}
    //     >
    //       <i className="fa-brands fa-github"></i>
    //       <span>Code</span>
    //     </a>
    //     <a
    //       className="code-live-link absolute bottom-5 left-12 text-white text-sm flex items-center gap-2"
    //       href={liveLink}
    //     >
    //       <i className="fa-solid fa-arrow-up-right-from-square"></i>
    //       <span>Demo</span>
    //     </a>
    //   </div>
    // </article>
  );
};

export default ProjectCard;
