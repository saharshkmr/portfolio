import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Animation component
const AnimatedItem = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
                marginBottom: '20px'
            }}
        >
            {children}
        </div>
    );
};

function ContactInfo() {
    return (
        <div className="contact-info" style={{ textAlign: 'center' }}>
            <AnimatedItem delay={100}>
                <h3 className="purple" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Contact Information</h3>
            </AnimatedItem>

            <AnimatedItem delay={200}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', justifyContent: 'center' }}>
                    <AiOutlineMail style={{ color: '#64ffda', marginRight: '15px', fontSize: '1.5rem' }} />
                    <a href="mailto:kmrsaharsh@gmail.com" style={{ color: '#8892b0', textDecoration: 'none' }}>
                        kmrsaharsh@gmail.com
                    </a>
                </div>
            </AnimatedItem>

            <AnimatedItem delay={250}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', justifyContent: 'center' }}>
                    <FaWhatsapp style={{ color: '#64ffda', marginRight: '15px', fontSize: '1.5rem' }} />
                    <span style={{ color: '#8892b0' }}>+91 7061086913</span>
                </div>
            </AnimatedItem>

            <AnimatedItem delay={300}>
                <div style={{ marginTop: '40px' }}>
                    <h4 className="purple" style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Connect with me</h4>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a
                            href="https://github.com/saharshkmr"
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{
                                color: '#8892b0',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'inline-block',
                                padding: '10px',
                                lineHeight: '1'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#64ffda'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#8892b0'}
                            aria-label="GitHub Profile"
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saharsh-kumar-2a1b0b1b2/"
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{
                                color: '#8892b0',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'inline-block',
                                padding: '10px',
                                lineHeight: '1'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#64ffda'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#8892b0'}
                            aria-label="LinkedIn Profile"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            href="https://www.hackerrank.com/profile/saharushkmr"
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{
                                color: '#8892b0',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'inline-block',
                                padding: '10px',
                                lineHeight: '1'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#64ffda'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#8892b0'}
                            aria-label="HackerRank Profile"
                        >
                            <FaHackerrank />
                        </a>
                        <a
                            href="https://leetcode.com/saharshkmr/"
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{
                                color: '#8892b0',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'inline-block',
                                padding: '10px',
                                lineHeight: '1'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#64ffda'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#8892b0'}
                            aria-label="LeetCode Profile"
                        >
                            <SiLeetcode />
                        </a>
                    </div>
                </div>
            </AnimatedItem>
        </div>
    );
}

export default ContactInfo;
