import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

const Navbar = () => (
  <BSNavbar expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
      <BSNavbar.Brand as={Link} to="/">
        Suvai பாடி
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/menus">
            Menus
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
