import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer who believes in creating things that make a
              difference 🌟.
              <br />
              <br />I am skilled in
              <i>
                <b className="purple"> C++, React, Python, HTML, CSS, Laravel, Dart, Node.js, and MySQL </b>
              </i>
              and always eager to explore new tools and technologies.
              <br />
              <br />
              My areas of interest include building impactful&nbsp;
              <i>
                <b className="purple">Web Applications, Scalable Products</b>
              </i>{" "}
              and exploring fields like{" "}
              <b className="purple">
                Cloud Computing and Virtualization
              </b>.
              <br />
              <br />
              I channel my creativity into developing real-world solutions using
              <b className="purple"> Flutter & Firebase </b> along with
              <i>
                <b className="purple"> modern frameworks and technologies</b>
              </i>
              &nbsp;to turn ideas into experiences people love to use.
              <br />
              <br />
              <i>
                <b className="purple">
                  "Build with passion, code with purpose."
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">build something amazing</span> together!
            </p>


            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saharshkmr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/saharshkmr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/saharsh-kumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saharshrajputt/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
