const ProjectCard = ({ ...project }) => {
  const { image, transitionImage, title, codeLink, liveLink } = project;
  return (
    <article className="project-card bg-[#fff] w-sm h-96 flex items-center justify-center flex-col rounded relative overflow-hidden">
      <img
        className="w-full h-full object-cover relative"
        src={image}
        alt={title}
      />
      <img
        className="transition-image absolute w-full h-full object-contain opacity-0"
        src={transitionImage}
        alt={title}
      />
      <div className="project-details absolute text-left right-0 bottom-0 left-0 pr-12 pl-12 pt-20 pb-20 text-[#fff] opacity-0 pointer-events-none mt-8 z-[5]">
        <span>{title}</span>
        <a
          className="code-live-link absolute bottom-8 left-36 text-white text-sm flex items-center gap-2"
          href={codeLink}
        >
          <i className="fa-brands fa-github"></i>
          <span>GitHub Code</span>
        </a>
        <a
          className="code-live-link absolute bottom-8 left-11 text-white text-sm flex items-center gap-2"
          href={liveLink}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Live Demo</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
