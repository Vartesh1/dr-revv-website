
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">From the Blog</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1614026480209-5cb8a7c24503?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>The Future of ECU Remapping</Card.Title>
              <Card.Text>
                Discover the latest trends and innovations in the world of automotive performance tuning.
              </Card.Text>
              <Button variant="link" as={Link} to="/blog/future-of-remapping">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1580475426293-3488b5184b35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>5 Ways to Boost Your Car's Fuel Efficiency</Card.Title>
              <Card.Text>
                Learn how our remapping services can help you save money at the pump.
              </Card.Text>
              <Button variant="link" as={Link} to="/blog/fuel-efficiency">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>Why Choose a Mobile Remapping Service?</Card.Title>
              <Card.Text>
                The convenience and benefits of having our experts come to you.
              </Card.Text>
              <Button variant="link" as={Link} to="/blog/mobile-remapping">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
