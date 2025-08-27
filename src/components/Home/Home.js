import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

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

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <AnimatedSection delay={0.2}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave" style={{
                    display: 'inline-block',
                    animation: 'wave 2s infinite'
                  }}>
                    👋🏻
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name" style={{
                    display: 'inline-block',
                    position: 'relative'
                  }}> SAHARSH KUMAR</strong>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.6} style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </AnimatedSection>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <AnimatedSection delay={0.8}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid floating"
                  style={{ 
                    maxHeight: "450px",
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
              </AnimatedSection>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

// Add global styles for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);

export default Home;
