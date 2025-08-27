import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

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

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <AnimatedSection delay={0.2}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <Aboutcard />
            </AnimatedSection>
          </Col>
          <Col
            md={5}
            style={{ 
              paddingTop: "120px", 
              paddingBottom: "50px",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="about-img"
          >
            <AnimatedSection delay={0.6}>
              <img 
                src={laptopImg} 
                alt="about" 
                className="img-fluid floating"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </AnimatedSection>
          </Col>
        </Row>
        
        <AnimatedSection delay={0.8}>
          <h1 className="project-heading" style={{ marginTop: '50px' }}>
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <h1 className="project-heading" style={{ marginTop: '50px' }}>
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </AnimatedSection>

        <AnimatedSection delay={1.2}>
          <Github />
        </AnimatedSection>
      </Container>
    </Container>
  );
}

// Add global styles for animations if not already present
const style = document.createElement('style');
if (!document.head.querySelector('style[data-animations]')) {
  style.setAttribute('data-animations', 'true');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    .floating {
      animation: float 6s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}

export default About;
