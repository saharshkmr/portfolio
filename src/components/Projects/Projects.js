import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sakhuwa from "../../Assets/Projects/sakhuwa.png";
import llrbmsss from "../../Assets/Projects/llrbmsss.png";
import nestern from "../../Assets/Projects/nestern.png";
import sbualumninetwork from "../../Assets/Projects/sbualumninetwork.png";
import taurusai from "../../Assets/Projects/taurusai.png";
import solar from "../../Assets/Projects/solar.png";

// Animation component
const AnimatedSection = ({ children, delay = 0, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <AnimatedSection delay={0.2}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <p style={{ color: "white", marginBottom: '30px' }}>
            Here are a few projects I've worked on recently.
          </p>
        </AnimatedSection>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AnimatedSection delay={0.4}>
              <ProjectCard
                imgPath={sakhuwa}
                isBlog={false}
                title="Sakhuwa"
                description="A registered private non-profit organization dedicated to driving positive change in society. The foundation works across areas such as community development, education, healthcare, and social welfare, aiming to uplift underprivileged communities and create sustainable impact. Governed by a five-member board, Sakhuwa Foundation is committed to delivering grassroots solutions that empower individuals and foster inclusive growth."
                // ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://sakhuwa.org/"
              />
            </AnimatedSection>
          </Col>

          <Col md={4} className="project-card">
            <AnimatedSection delay={0.6}>
              <ProjectCard
                imgPath={llrbmsss}
                isBlog={false}
                title="LLRBMSS School"
                description="A professional digital platform created to represent the school's identity and streamline communication with students, parents, and staff. It provides structured access to information such as announcements, events, and resources in a user-friendly format. The website enhances the school's online presence and strengthens engagement within the academic community."
                // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://saharshkmr.github.io/llrsss_web/"
              />
            </AnimatedSection>
          </Col>

          <Col md={4} className="project-card">
            <AnimatedSection delay={0.8}>
              <ProjectCard
                imgPath={nestern}
                isBlog={false}
                title="Nestern"
                description="A career and internship platform that connects students with opportunities while enabling employers to post internships, jobs, and learning courses. It provides role-based access and real-time updates to ensure a seamless experience. The platform bridges the gap between learning and employment, empowering students to grow professionally."
                ghLink="https://github.com/saharshkmr/nestern"
                demoLink="https://nestern-1be70.web.app/"
              />
            </AnimatedSection>
          </Col>

          <Col md={4} className="project-card">
            <AnimatedSection delay={0.4}>
              <ProjectCard
                imgPath={sbualumninetwork}
                isBlog={false}
                title="SBU Alumni Network"
                description="A community-driven platform that bridges the gap between alumni, students, and faculty. It facilitates mentorship, networking, and collaboration while keeping members informed about events and opportunities. The platform strengthens alumni engagement and fosters long-term professional connections."
                ghLink="https://github.com/saharshkmr/sbualumninet"
                demoLink="https://sbualumninet.netlify.app/"
              />
            </AnimatedSection>
          </Col>

          <Col md={4} className="project-card">
            <AnimatedSection delay={0.6}>
              <ProjectCard
                imgPath={taurusai}
                isBlog={false}
                title="Taurus AI"
                description="A career-focused platform that helps students and professionals access internships, job opportunities, and skill-building courses. It combines learning with practical exposure, guiding users to enhance their career prospects. The platform serves as a bridge between knowledge, experience, and employment."
                // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                demoLink="https://taurusai-bba31.web.app/"
              />
            </AnimatedSection>
          </Col>

          <Col md={4} className="project-card">
            <AnimatedSection delay={0.8}>
              <ProjectCard
                imgPath={solar}
                isBlog={false}
                title="Solar System"
                description="An interactive web experience that immerses users in our planetary neighborhood through dynamic navigation and detailed planetary facts. It presents celestial bodies with engaging visuals and structured content, offering a rich educational overview of each planet and dwarf planet. The platform invites curious learners to explore the solar system in an intuitive, user-friendly interface."
                ghLink="https://github.com/saharshkmr/solar_system"
                demoLink="https://saharshkmr.github.io/solar_system/"
              />
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// Add global styles for animations if not already present
const style = document.createElement('style');
if (!document.head.querySelector('style[data-animations]')) {
  style.setAttribute('data-animations', 'true');
  style.textContent = `
    .project-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
}

export default Projects;
