import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Animation component
const AnimatedSection = ({ children, delay = 0 }) => {
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
      }}
    >
      {children}
    </div>
  );
};

function Home2() {
  // Animation styles
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <AnimatedSection delay={0.2}>
              <h1 style={{ fontSize: '2.6em', marginBottom: '20px' }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <p className="home-about-body">
                I'm a passionate developer who believes in creating things that make a
                difference <span style={{
                  display: 'inline-block',
                  animation: 'bounce 2s infinite'
                }}>🌟</span>.
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
                  <b className="purple" style={{
                    display: 'inline-block',
                    animation: 'fadeIn 1s ease-out forwards',
                    animationDelay: '0.6s',
                    opacity: 0
                  }}>
                    "Build with passion, code with purpose."
                  </b>
                </i>
              </p>
            </AnimatedSection>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <AnimatedSection delay={0.6}>
              <h1>FIND ME ON</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <p>
                Let's <span className="purple" style={{
                  position: 'relative',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite'
                }}>build something amazing</span> together!
              </p>
            </AnimatedSection>


            <AnimatedSection delay={1.0} style={{ width: '100%' }}>
              <ul style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '25px',
                padding: 0,
                margin: '20px auto 0',
                listStyle: 'none',
                width: '100%',
                maxWidth: '300px',
                flexShrink: 0
              }}>
                {[
                  { icon: <AiFillGithub />, link: 'https://github.com/saharshkmr/' },
                  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/saharsh-kumar-a57059259/' },
                  { icon: <AiFillInstagram />, link: 'https://www.instagram.com/saharshrajputt/' }
                ].map((item, index) => (
                  <AnimatedSection 
                    key={index} 
                    delay={1.2 + (index * 0.15)}
                  >
                    <li className="social-icons">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          transition: 'all 0.3s ease',
                          fontSize: '24px',
                          color: 'white',
                          textDecoration: 'none',
                          ':hover': {
                            backgroundColor: 'rgba(128, 0, 128, 0.8)',
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        {item.icon}
                      </a>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// Add global styles for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .home-about-body {
    line-height: 1.8;
  }
`;
document.head.appendChild(style);

export default Home2;
