import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Message Sent Successfully", { id: toastId });
      console.log("Form submitted:", formData);

      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  const cardStyle = {
    color: "#000",
    textAlign: "center",
  };

  return (
    <Container className="py-5">
      <Toaster position="top-center" />
      <motion.div
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5" style={{ color: "#333" }}>
          Contact Our Restaurant
        </h2>
        <Row>
          <Col md={6} className="mb-4">
            <div
              className="p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-center"
              style={cardStyle}
            >
              <h4 className="mb-3 fw-bold">Get in Touch</h4>
              <p>
                <FaMapMarkerAlt className="me-2" /> 123 Main Street, Coimbatore,
                Tamil Nadu
              </p>
              <p>
                <FaPhoneAlt className="me-2" /> +91 98765 43210
              </p>
              <p>
                <FaInstagram className="me-2" />
                <a
                  href="https://instagram.com/sassy_sceptic_"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#000" }}
                >
                  @sassy_sceptic_
                </a>
              </p>
              <p>
                <FaWhatsapp className="me-2" />
                <a
                  href="https://wa.me/9944035088"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#000" }}
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </Col>

          <Col md={6}>
            <Form
              onSubmit={handleSubmit}
              className="p-4 rounded shadow-sm mb-4"
              style={cardStyle}
            >
              <h4 className="fw-bold mb-3">Send Us a Message</h4>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#ff6600", border: "none" }}
              >
                Send Message
              </Button>
            </Form>

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31375.834923742328!2d77.23562345119939!3d10.580786017726664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cc53593a4a43%3A0x2a25be82b1f743e9!2sUdumalaipettai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1753354889206!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;
