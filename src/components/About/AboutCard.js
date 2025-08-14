import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saharsh Kumara </span>
            from <span className="purple"> Ranchi, India.</span>
            <br />
            I am currently working as a Full - Stack Developer at Mantravat.
            <br />
            I have completed Bachelor's of Computer Applications at SBU
            Ranchi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, and let your work leave the world better than you found it!"{" "}
          </p>
          <footer className="blockquote-footer">Saharsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
