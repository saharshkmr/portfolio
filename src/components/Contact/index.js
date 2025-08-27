import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

function Contact() {
  return (
    <section className="home-section" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Container fluid className="home-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Particle />
        <Container className="contact-content" style={{ maxWidth: '1200px', width: '100%' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 className="heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p className="home-about-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200} style={{ display: 'flex', justifyContent: 'center' }}>
            <Row className="contact-row" style={{ width: '100%', justifyContent: 'center' }}>
              <Col md={6} className="contact-form" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '500px' }}>
                  <ContactForm />
                </div>
              </Col>
              <Col md={5} className="contact-info" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                  <ContactInfo />
                </div>
              </Col>
            </Row>
          </AnimatedSection>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
