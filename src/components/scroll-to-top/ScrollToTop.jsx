import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollBtnActive, setScrollBtnActive] = useState(false);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      setScrollBtnActive(window.scrollY > 500);
    });
  };

  useEffect(() => {
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className={`scrollToTop-btn flex justify-center items-center fixed bg-white text-black w-10 h-10 right-0 bottom-2 text-xl text-center rounded-sm cursor-pointer opacity-0 pointer-events-none ${
        scrollBtnActive
          ? "right-11 bottom-8 opacity-100 pointer-events-auto"
          : ""
      }`}
      onScroll={handleScroll}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
};

export default ScrollToTop;
