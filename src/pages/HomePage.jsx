
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css';

// Custom hook to detect when an element is in the viewport
const useOnScreen = (options) => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const Section = ({ children }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center" style={{ 
        background: 'url(/assets/images/welcome_background.png) no-repeat center center', 
        backgroundSize: 'cover', 
        padding: '100px 0' 
      }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '60px 30px', borderRadius: '15px' }}>
          <h1 className="display-4">The Future of Driving is Connected</h1>
          <p className="lead">Introducing Drive Assist and Garage Assist: The AI-powered platform that connects motorists and garages for a seamless vehicle maintenance experience.</p>
          <Button variant="primary" as={Link} to="/solutions" size="lg">Learn More</Button>
        </div>
      </div>

      {/* Drive Assist Section */}
      <Container className="mt-5">
        <Section>
          <h2 className="text-center mb-4">Drive Assist</h2>
          <p className="lead text-center mb-5">Your smart driving companion.</p>
          <Row>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-heart-pulse feature-icon mb-3"></i>
              <h4>Proactive Health Monitoring</h4>
              <p>Connects to your vehicle's OBD-II port to monitor key health metrics in real-time.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-wrench feature-icon mb-3"></i>
              <h4>Predictive Maintenance</h4>
              <p>Notifies you of potential issues before they become major problems.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-calendar-check feature-icon mb-3"></i>
              <h4>Seamless Booking</h4>
              <p>Find, get quotes from, and book appointments with service providers in the Dr. Revv network.</p>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" as={Link} to="/drive-assist">Learn More</Button>
          </div>
        </Section>
      </Container>

      {/* Garage Assist Section */}
      <div className="light-gray-bg mt-5">
        <Container>
          <Section>
            <h2 className="text-center mb-4">Garage Assist</h2>
            <p className="lead text-center mb-5">The AI-powered workshop.</p>
            <Row>
              <Col md={4} className="text-center mb-4">
                <i className="bi bi-robot feature-icon mb-3"></i>
                <h4>AI-Powered Diagnostics</h4>
                <p>Assists technicians in diagnosing issues based on data from the Drive Assist App.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <i className="bi bi-git feature-icon mb-3"></i>
                <h4>Workflow Optimization</h4>
                <p>Streamlines the booking, repair, and payment process.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <i className="bi bi-people feature-icon mb-3"></i>
                <h4>Customer Management</h4>
                <p>Manages customer information and communication.</p>
              </Col>
            </Row>
            <div className="text-center">
              <Button variant="primary" as={Link} to="/garage-assist">Learn More</Button>
            </div>
          </Section>
        </Container>
      </div>

      {/* About Us Section */}
      <Container className="mt-5">
        <Section>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>About Us</h2>
              <p>We are a team of passionate innovators dedicated to revolutionizing the automotive industry through artificial intelligence. Our mission is to create a seamless and transparent experience for both vehicle owners and garages.</p>
              <Button variant="outline-primary" as={Link} to="/info#about">Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="https://images.unsplash.com/photo-1554672454-9e8727288f2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="img-fluid rounded" />
            </Col>
          </Row>
        </Section>
      </Container>

      {/* Contact Us Section */}
      <div className="light-gray-bg mt-5">
        <Container>
          <Section>
            <Row className="align-items-center">
              <Col md={6}>
                <img src="https://images.unsplash.com/photo-1556742212-5b321f3c26a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" className="img-fluid rounded" />
              </Col>
              <Col md={6}>
                <h2>Contact Us</h2>
                <p>Have a question or want to learn more about our solutions? Get in touch with us today. We would love to hear from you.</p>
                <Button variant="outline-primary" as={Link} to="/info#contact">Contact Us</Button>
              </Col>
            </Row>
          </Section>
        </Container>
      </div>

      {/* For Careers Section */}
      <Container className="mt-5">
        <Section>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <h2>For Careers</h2>
              <p>Join a team of passionate innovators who are dedicated to pushing the boundaries of automotive technology. At Dr. Revv, you will have the opportunity to work with cutting-edge technology and make a real impact.</p>
              <Button variant="outline-primary" as={Link} to="/info#careers">Learn More</Button>
            </Col>
          </Row>
        </Section>
      </Container>
    </div>
  );
};

export default HomePage;
