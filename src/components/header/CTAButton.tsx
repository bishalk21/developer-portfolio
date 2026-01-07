const CTAButton = () => {
  return (
    <>
      <a
        className="styled-cta mobile-button group bg-primary text-primary-foreground duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 hover:bg-primary relative px-6 py-3 rounded-lg min-w-fit uppercase text-base font-serif inline-flex transition-colors font-medium overflow-hidden  max-[768px]:hidden"
        // className="group relative min-w-fit px-6 py-3 rounded-lg font-semibold text-sm overflow-hidden bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        href="mailto:karkibishal00@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get in touch via email"
      >
        {/* <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"> */}
        <span className="relative overflow-hidden text-white">
          {/* <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"> */}
          {/* <span className="overflow-hidden flex items-center gap-2"> */}
          <span className="relative flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            get in touch
          </span>
        </span>
        {/* </span> */}
      </a>
    </>
  );
};

export default CTAButton;
