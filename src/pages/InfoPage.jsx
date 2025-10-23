
import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';

const InfoPage = () => {
  return (
    <Container className="mt-5">
      <section id="about" className="mb-5">
        <h1 className="text-center mb-4">About Dr. Revv</h1>
        
        <Row className="mb-5">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to revolutionize the automotive industry through artificial intelligence. We are empowering garages with predictive maintenance tools and providing drivers with a transparent and seamless service experience. We are committed to extending vehicle lifespan, reducing costs, and enhancing road safety.
            </p>
          </Col>
          <Col md={6}>
            <Image src="https://images.unsplash.com/photo-1554672454-9e8727288f2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>Our Vision</h2>
            <p>
              We envision a future where vehicle maintenance is proactive, not reactive. Our AI-powered platform will connect vehicle owners and garages, creating a world where breakdowns are a thing of the past. We are committed to building a sustainable and efficient automotive ecosystem.
            </p>
          </Col>
        </Row>

        <h2 className="text-center mb-4">Our Values</h2>
        <Row className="text-center mb-5">
          <Col md={4}>
            <h4>Innovation</h4>
            <p>We are constantly pushing the boundaries of what is possible, developing cutting-edge AI solutions to solve the industry's biggest challenges.</p>
          </Col>
          <Col md={4}>
            <h4>Integrity</h4>
            <p>We believe in transparency and honesty in everything we do. We are committed to building trust with our customers and partners.</p>
          </Col>
          <Col md={4}>
            <h4>Excellence</h4>
            <p>We strive for excellence in all aspects of our business, from our technology to our customer service.</p>
          </Col>
        </Row>

        <h2 className="text-center mb-4">Meet the Team</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Founder & CEO</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>Chief Technology Officer (CTO)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="careers" className="mb-5">
        <h1 className="text-center mb-4">Careers</h1>
        <p className="lead text-center">Join a team of passionate innovators who are dedicated to pushing the boundaries of automotive technology.</p>
        {/* Add job openings here */}
      </section>

      <section id="contact">
        <h1 className="text-center mb-4">Contact Us</h1>
        <Row>
          <Col md={6} className="mb-4">
            <h2>Request a Demo</h2>
            <p>Interested in our Workshop AI Assistant? Fill out the form below to request a demo.</p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupCompany">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your company name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter your job title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Tell us about your needs" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Request Demo
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Contact Information</h2>
            <p><strong>General Inquiries:</strong> <a href="mailto:contact@drrevv.com">contact@drrevv.com</a></p>
            <p><strong>Investor Relations:</strong> <a href="mailto:investors@drrevv.com">investors@drrevv.com</a></p>
            <p><strong>Careers:</strong> <a href="mailto:careers@drrevv.com">careers@drrevv.com</a></p>
            <hr />
            <h5>Business Hours</h5>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default InfoPage;
