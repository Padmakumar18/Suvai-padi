import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-dark text-white py-3 mt-4">
    <Container className="text-center">
      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaFacebook />
        </a>
        <a href="mailto:your@email.com" className="text-white">
          <FaEnvelope />
        </a>
      </div>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} MyRestaurant. All rights reserved.
      </p>
    </Container>
  </footer>
);

export default Footer;
