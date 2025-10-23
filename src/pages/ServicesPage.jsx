
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Solutions</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Workshop AI Assistant (B2B)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">For Garages</Card.Subtitle>
              <Card.Text>
                Our AI-powered diagnostic and workflow optimization tool helps garages increase efficiency and profitability. By integrating with real-time vehicle data, our assistant provides predictive intelligence, enabling technicians to identify and resolve issues faster than ever before. We also offer computer vision capabilities for accurate accident damage assessment.
              </Card.Text>
              <h5>Key Benefits:</h5>
              <ul>
                <li>Increased Operational Efficiency</li>
                <li>Enhanced Diagnostic Accuracy</li>
                <li>Streamlined Customer Communication</li>
                <li>New Customer Acquisition</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Driver Companion App (B2C)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">For Vehicle Owners</Card.Subtitle>
              <Card.Text>
                Our mobile app provides proactive vehicle health monitoring and predictive maintenance alerts, helping you prevent unexpected breakdowns and reduce maintenance costs. The app also tracks MOT compliance, allows for seamless garage booking, and provides real-time insights into your vehicle's health.
              </Card.Text>
              <h5>Key Benefits:</h5>
              <ul>
                <li>Prevent Unexpected Breakdowns</li>
                <li>Reduce Maintenance Costs</li>
                <li>Extend Vehicle Lifespan</li>
                <li>Peace of Mind</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
