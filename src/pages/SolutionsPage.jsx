
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Solutions</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title>Drive Assist</Card.Title>
              <Card.Text>
                Your smart driving companion. Proactive vehicle health monitoring, predictive maintenance alerts, and seamless garage booking.
              </Card.Text>
              <Button variant="primary" as={Link} to="/drive-assist">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title>Garage Assist</Card.Title>
              <Card.Text>
                The AI-powered workshop. Streamline diagnostics, optimize workflows, and connect with more customers.
              </Card.Text>
              <Button variant="primary" as={Link} to="/garage-assist">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SolutionsPage;
