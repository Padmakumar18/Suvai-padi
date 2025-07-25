import toast, { Toaster } from "react-hot-toast";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
  Form,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "./Menus.css";
import React, { useState } from "react";

const menuItems = {
  veg: [
    {
      id: 1,
      title: "Paneer Butter Masala",
      category: "North Indian",
      description: "Cottage cheese in a rich tomato-based gravy.",
      price: "₹180",
      image: "/images/Menu/Menu-page-content-image-1.WebP",
    },
    {
      id: 2,
      title: "Veg Biryani",
      category: "Rice Dishes",
      description: "Aromatic basmati rice cooked with fresh vegetables.",
      price: "₹150",
      image: "/images/Menu/Menu-page-content-image-2.WebP",
    },
    {
      id: 3,
      title: "Masala Dosa",
      category: "South Indian",
      description: "Crispy dosa filled with spiced potato mash.",
      price: "₹90",
      image: "/images/Menu/Menu-page-content-image-3.WebP",
    },
    {
      id: 4,
      title: "Gobi Manchurian",
      category: "Indo-Chinese",
      description: "Crispy cauliflower tossed in spicy sauce.",
      price: "₹130",
      image: "/images/Menu/Menu-page-content-image-4.WebP",
    },
    {
      id: 5,
      title: "Veg Pulao",
      category: "Rice Dishes",
      description: "Fragrant rice cooked with vegetables and spices.",
      price: "₹140",
      image: "/images/Menu/Menu-page-content-image-5.WebP",
    },
    {
      id: 6,
      title: "Palak Paneer",
      category: "North Indian",
      description: "Spinach-based gravy with paneer cubes.",
      price: "₹170",
      image: "/images/Menu/Menu-page-content-image-6.WebP",
    },
    {
      id: 7,
      title: "Sambar Idli",
      category: "South Indian",
      description: "Soft idlis soaked in hot sambar.",
      price: "₹80",
      image: "/images/Menu/Menu-page-content-image-7.WebP",
    },
    {
      id: 8,
      title: "Chole Bhature",
      category: "North Indian",
      description: "Spicy chickpeas served with deep-fried bhature.",
      price: "₹160",
      image: "/images/Menu/Menu-page-content-image-8.WebP",
    },
    {
      id: 9,
      title: "Hakka Noodles",
      category: "Indo-Chinese",
      description: "Stir-fried noodles with vegetables and sauces.",
      price: "₹120",
      image: "/images/Menu/Menu-page-content-image-9.WebP",
    },
    {
      id: 10,
      title: "Paneer Tikka",
      category: "Tandoor",
      description: "Grilled paneer marinated with spices.",
      price: "₹190",
      image: "/images/Menu/Menu-page-content-image-10.WebP",
    },
  ],
  nonVeg: [
    {
      id: 11,
      title: "Chicken Chettinad",
      category: "South Indian",
      description: "Spicy chicken curry from Tamil Nadu.",
      price: "₹220",
      image: "/images/Menu/Menu-page-content-image-11.WebP",
    },
    {
      id: 12,
      title: "Fish Fry",
      category: "Seafood",
      description: "Crispy shallow-fried marinated fish.",
      price: "₹200",
      image: "/images/Menu/Menu-page-content-image-12.WebP",
    },
    {
      id: 13,
      title: "Butter Chicken",
      category: "North Indian",
      description: "Creamy tomato-based chicken curry with butter.",
      price: "₹240",
      image: "/images/Menu/Menu-page-content-image-13.WebP",
    },
    {
      id: 14,
      title: "Prawn Masala",
      category: "Seafood",
      description: "Juicy prawns cooked in spicy masala gravy.",
      price: "₹260",
      image: "/images/Menu/Menu-page-content-image-14.WebP",
    },
    {
      id: 15,
      title: "Chicken Biryani",
      category: "Rice Dishes",
      description: "Aromatic rice with tender chicken pieces.",
      price: "₹210",
      image: "/images/Menu/Menu-page-content-image-15.WebP",
    },
    {
      id: 16,
      title: "Tandoori Chicken",
      category: "Tandoor",
      description: "Chicken marinated in spices and grilled in tandoor.",
      price: "₹230",
      image: "/images/Menu/Menu-page-content-image-16.WebP",
    },
    {
      id: 17,
      title: "Egg Curry",
      category: "Semi Gravy",
      description: "Boiled eggs simmered in spicy curry.",
      price: "₹150",
      image: "/images/Menu/Menu-page-content-image-17.WebP",
    },
    {
      id: 18,
      title: "Crab Roast",
      category: "Seafood",
      description: "Fresh crab roasted in spicy masala.",
      price: "₹280",
      image: "/images/Menu/Menu-page-content-image-18.WebP",
    },
    {
      id: 19,
      title: "Kadai Chicken",
      category: "North Indian",
      description: "Chicken cooked in spicy kadai masala.",
      price: "₹230",
      image: "/images/Menu/Menu-page-content-image-19.WebP",
    },
    {
      id: 20,
      title: "Mutton Curry",
      category: "South Indian",
      description: "Tender mutton in a rich, spicy curry.",
      price: "₹270",
      image: "/images/Menu/Menu-page-content-image-20.WebP",
    },
  ],
};

const Section = ({ title, items, handleOrderClick }) => (
  <>
    <h3 className="mt-5 text-center fw-bold">{title}</h3>
    <Row className="mt-4">
      {items.map((item) => (
        <Col md={4} sm={6} xs={12} className="mb-4" key={item.id}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-sm rounded-4 border-0 h-100">
              <Card.Img
                variant="top"
                src={item.image}
                className="rounded-top-4"
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Badge
                  bg={title.includes("Vegetarian") ? "success" : "danger"}
                  className="mb-2"
                >
                  {item.category}
                </Badge>
                <Card.Text className="text-muted">{item.description}</Card.Text>
                <Card.Text className="fw-semibold">{item.price}</Card.Text>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={() =>
                    handleOrderClick(
                      item,
                      title.includes("Vegetarian") ? "Veg" : "Non-Veg"
                    )
                  }
                >
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </>
);

const Menus = () => {
  const [show, setShow] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishType, setDishType] = useState("");
  const [form, setForm] = useState({ mobile: "", address: "" });

  const handleOrderClick = (dish, type) => {
    setSelectedDish(dish);
    setDishType(type);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setForm({ mobile: "", arrival: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
🍽️ Order Confirmation  
Restaurant: My Restaurant  
Dish: ${selectedDish.title}  
Type: ${dishType}  
📍 Address: ${form.address}    
📞 Contact: +91 9944035088  
Thank you for your order! See you soon 😊
    `;
    console.log("📲 Message Sent:", message);
    toast.success("Order Confirmed! Check your phone for details.");
    handleClose();
  };

  return (
    <Container className="py-5">
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center mb-4 fw-bold">Our Signature Menu</h2>
        <p className="text-center mb-5 text-muted">
          Discover our curated selection of flavorful dishes—crafted with
          authenticity, passion, and local ingredients.
        </p>
      </motion.div>

      <Section
        title="🌿 Vegetarian Dishes"
        items={menuItems.veg}
        handleOrderClick={handleOrderClick}
      />
      <Section
        title="🍗 Non-Vegetarian Delights"
        items={menuItems.nonVeg}
        handleOrderClick={handleOrderClick}
      />

      {/* Modal for Order Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order: {selectedDish?.title}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="success">
              Confirm Order
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Menus;
