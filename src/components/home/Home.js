import React from "react";
import "./home.styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <Container>
          <Row className="content">
            <Col className="hero-text">
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
                <Link className="styled-btn projects">
                  <span>Projects</span>
                </Link>
                <Link className="styled-btn about-me secondary">
                  <span>About me</span>
                </Link>
              </div>
            </Col>
            <Col className="hero-img"></Col>
          </Row>
          <Row className="skills"></Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
