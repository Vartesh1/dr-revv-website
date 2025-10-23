
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/assets/images/logo.png" alt="Dr. Revv Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
            <Nav.Link as={Link} to="/info#about">About</Nav.Link>
            <Nav.Link as={Link} to="/info#careers">Careers</Nav.Link>
            <Nav.Link as={Link} to="/info#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
