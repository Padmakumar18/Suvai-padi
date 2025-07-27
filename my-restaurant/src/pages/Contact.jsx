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
    const toastId = toast.loading("Sending your message...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Message Sent! We’ll get back shortly 🍽️", { id: toastId });
      console.log("Form submitted:", formData);
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Oops! Something went wrong.", { id: toastId });
    }
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
        <h2 className="text-center mb-4 fw-bold">Let's Connect</h2>
        <p className="text-center text-muted mb-5">
          Got a question or want to make a reservation? Reach out and we’ll
          serve you with a smile!
        </p>

        <Row>
          <Col md={6} className="mb-4">
            <div className="p-4 rounded shadow-sm h-100 bg-light">
              <h4 className="fw-bold mb-3 text-center">Restaurant Info</h4>
              <p className="mb-3">
                <FaMapMarkerAlt className="me-2 text-danger" />
                123 Main Street, Udumalapet, Tamil Nadu
              </p>
              <p className="mb-3">
                <FaPhoneAlt className="me-2 text-primary" />
                <a
                  href="tel:+919944035088"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  +91 99440 35088
                </a>
              </p>
              <p className="mb-3">
                <FaInstagram className="me-2 text-danger" />
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
                <FaWhatsapp className="me-2 text-success" />
                <a
                  href="https://wa.me/919944035088"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#000" }}
                >
                  Chat with us on WhatsApp
                </a>
              </p>
            </div>
          </Col>

          <Col md={6}>
            <Form
              onSubmit={handleSubmit}
              className="p-4 rounded shadow-sm mb-4 bg-white"
            >
              <h4 className="fw-bold mb-3 text-center">Send a Message</h4>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Tell us how we can help you..."
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
          </Col>
        </Row>

        <div className="mt-5">
          <iframe
            title="Restaurant Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31375.834923742328!2d77.23562345119939!3d10.580786017726664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cc53593a4a43%3A0x2a25be82b1f743e9!2sUdumalaipettai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1753354889206!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </Container>
  );
};

export default Contact;
