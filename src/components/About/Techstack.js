import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiDart
} from "react-icons/di";
import {
  SiMysql,
  SiFirebase,
  SiPhpmyadmin,
  SiXampp
} from "react-icons/si";

function Techstack() {
  const techStack = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiDart />, name: "Dart" },
    { icon: <SiXampp />, name: "XAMPP" },
    { icon: <SiPhpmyadmin />, name: "phpMyAdmin" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`}>
                {tech.name}
              </Tooltip>
            }
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
