import React from "react";
import "./home.styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

const Home = () => {
  const today = new Date();
  const hour = today.getHours();
  return (
    <>
      <section className="home" id="home">
        <Container className="hero-main">
          <Row className="content">
            <Col className="hero-text" md={4}>
              <h1>
                Front-End Developer <span className="hand-wave">👋</span>
              </h1>
              <p>
                Hi, I'm Bishal Karki. A passionate Front-end React Developer
                based in Sydney, Australia. 📍
              </p>
              <h3>
                I <span className="change-text"></span>{" "}
                <span className="responsive">r</span>
                <span className="responsive">e</span>
                <span className="responsive">s</span>
                <span className="responsive">p</span>
                <span className="responsive">o</span>
                <span className="responsive">n</span>
                <span className="responsive">s</span>
                <span className="responsive">i</span>
                <span className="responsive">v</span>
                <span className="responsive">e</span> websites.
              </h3>

              <div className="styled-btn-container">
                <Link
                  className="styled-btn projects"
                  to="projects"
                  duration={0}
                  delay={0}
                  spy={true}
                  spyThrottle={0}
                  exact="true"
                  offset={-50}
                >
                  <span>Projects</span>
                </Link>
                <Link
                  className="styled-btn about-me secondary"
                  to="about"
                  duration={0}
                  delay={0}
                  spy={true}
                  spyThrottle={0}
                  exact="true"
                  offset={-50}
                >
                  <span>About me</span>
                </Link>
              </div>

              <hr className="lines" />
              <p className="greeting">
                have a great{" "}
                <span>
                  {hour < 12
                    ? " morning"
                    : hour < 18
                    ? " afternoon"
                    : " evening"}
                </span>
                .
              </p>

              <div className="socials">
                <a href="mailto:karkibishal00@gmail.com" target="_blank">
                  email
                </a>
                <a href="https://www.github.com/bishalk21">Github</a>
                <a href="https://www.linkedin.com/in/bishalk21">LI</a>
              </div>
            </Col>
            <Col className="hero-img" md={8}></Col>
          </Row>
          <Row className="skills"></Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
