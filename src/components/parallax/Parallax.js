import React from "react";
import "./parallax.styles.css";
import parallaxImg from "./image/quote-background.jpg";

const Parallax = () => {
  return (
    <section className="react-parallax">
      <img
        src={parallaxImg}
        alt="background-img"
        loading="eager"
        className="parallax-img"
      />
      <div className="react-parallax-content">
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
