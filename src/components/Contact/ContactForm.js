import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

// Animation component
const AnimatedInput = ({ children, delay = 0 }) => {
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
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
                marginBottom: '20px'
            }}
        >
            {children}
        </div>
    );
};

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <AnimatedInput delay={100}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control home-about-body"
                    placeholder="Your Name"
                    required
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        margin: '8px 0',
                        borderRadius: '4px',
                        border: '1px solid #233554',
                        backgroundColor: 'transparent',
                        color: '#a8b2d1',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                    }}
                />
            </AnimatedInput>

            <AnimatedInput delay={200}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control home-about-body"
                    placeholder="Your Email"
                    required
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        margin: '8px 0',
                        borderRadius: '4px',
                        border: '1px solid #233554',
                        backgroundColor: 'transparent',
                        color: '#a8b2d1',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                    }}
                />
            </AnimatedInput>

            <AnimatedInput delay={300}>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control home-about-body"
                    rows="5"
                    placeholder="Your Message"
                    required
                    style={{
                        width: '100%',
                        minHeight: '150px',
                        padding: '12px 15px',
                        margin: '8px 0',
                        borderRadius: '4px',
                        border: '1px solid #233554',
                        backgroundColor: 'transparent',
                        color: '#a8b2d1',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                    }}
                ></textarea>
            </AnimatedInput>

            <AnimatedInput delay={400}>
                <Button
                    type="submit"
                    variant="primary"
                    className="button home-about-body"
                    style={{
                        backgroundColor: 'transparent',
                        border: '2px solid #64ffda',
                        color: '#64ffda',
                        padding: '12px 30px',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease',
                        marginTop: '20px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        minWidth: '200px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '500',
                        outline: 'none'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                    }}
                >
                    Send Message
                </Button>
            </AnimatedInput>
        </form>
    );
}

export default ContactForm;
