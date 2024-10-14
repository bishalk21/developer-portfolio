import parallaxImg from "../../assets/img/parallax/quote-background.jpg";
import "./parallax.css";

const Parallax = () => {
  return (
    <section className="react-parallax relative overflow-hidden w-full pr-20 pl-20">
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
    </section>
  );
};

export default Parallax;
