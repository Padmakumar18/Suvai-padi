import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
// import "./Menus.css";

const foodItems = [
  {
    id: 1,
    title: "Grilled Chicken",
    description: "Tender chicken grilled to perfection.",
    price: "$12",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    description: "Creamy pasta with rich sauce.",
    price: "$10",
    image: "https://via.placeholder.com/150",
  },
  // More items...
];

const Menus = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Our Menu</h2>
    <Row>
      {foodItems.map((item) => (
        <Col md={4} className="mb-4" key={item.id}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <strong>{item.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Menus;
