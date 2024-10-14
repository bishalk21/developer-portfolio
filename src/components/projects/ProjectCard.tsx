const ProjectCard = ({ ...project }) => {
  const { image, transitionImage, title, codeLink, liveLink } = project;
  return (
    <article className="project-card bg-[#fff] max-w-full w-64 h-56 flex items-center justify-center flex-col rounded relative overflow-hidden">
      <img
        className="w-full h-full object-contain relative"
        src={image}
        alt={title}
        loading="lazy"
      />
      <img
        className="transition-image absolute w-full h-full object-contain opacity-0"
        src={transitionImage}
        alt={title}
        loading="lazy"
      />
      <div className="project-details absolute text-left right-0 bottom-0 left-0 pr-12 pl-8 pt-20 pb-20 text-[#fff] opacity-0 pointer-events-none mt-8 z-50">
        <span>{title}</span>
        <a
          className="code-live-link absolute bottom-8 left-32 text-white text-sm flex items-center justify-center gap-2"
          href={codeLink}
        >
          <i className="fa-brands fa-github"></i>
          <span>Code</span>
        </a>
        <a
          className="code-live-link absolute bottom-8 left-9 text-white text-sm flex items-center gap-2"
          href={liveLink}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Demo</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
