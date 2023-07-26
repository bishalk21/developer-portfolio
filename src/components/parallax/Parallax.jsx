import parallaxImg from "./image/quote-background.jpg";

const Parallax = () => {
  return (
    <div className="react-parallax relative overflow-hidden w-full pr-20 pl-20 p-4">
      <img
        src={parallaxImg}
        alt="background-img"
        loading="eager"
        className="parallax-img"
      />
      <div className="react-parallax-content relative">
        <div className="parallax-container">
          <h3 className="parallax-text">
            Success comes to <br />
            those who dare to begin.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
