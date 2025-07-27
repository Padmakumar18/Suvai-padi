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
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/zablanca_clicks-7jERG_ACcQs-unsplash.webp",
    },
    {
      id: 2,
      title: "Veg Biryani",
      category: "Rice Dishes",
      description: "Aromatic basmati rice cooked with fresh vegetables.",
      price: "₹150",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/mario-raj-n1z3gc9gJ8I-unsplash%20(1).webp",
    },
    {
      id: 3,
      title: "Masala Dosa",
      category: "South Indian",
      description: "Crispy dosa filled with spiced potato mash.",
      price: "₹90",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/deepal-tamang-5oF7d_hPJG4-unsplash.webp",
    },
    {
      id: 4,
      title: "Gobi Manchurian",
      category: "Indo-Chinese",
      description: "Crispy cauliflower tossed in spicy sauce.",
      price: "₹130",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/close-up-delicious-asian-food.webp",
    },
    {
      id: 5,
      title: "Veg Pulao",
      category: "Rice Dishes",
      description: "Fragrant rice cooked with vegetables and spices.",
      price: "₹140",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/white-rice-with-vegetables-black-bowl-wooden-table.webp",
    },
    {
      id: 6,
      title: "Palak Paneer",
      category: "North Indian",
      description: "Spinach-based gravy with paneer cubes.",
      price: "₹170",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/delicious-pakistani-dish-high-angle.webp",
    },
  ],
  nonVeg: [
    {
      id: 7,
      title: "Chicken Chettinad",
      category: "South Indian",
      description: "Spicy chicken curry from Tamil Nadu.",
      price: "₹220",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/bowl-homemade-stew-close-up.webp",
    },
    {
      id: 8,
      title: "Fish Fry",
      category: "Seafood",
      description: "Crispy shallow-fried marinated fish.",
      price: "₹200",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/front-view-tasty-fried-fish-dark-surface-meal-pepper-cooking-fry-seafood-sea-meat-food-salad-dish.webp",
    },
    {
      id: 9,
      title: "Butter Chicken",
      category: "North Indian",
      description: "Creamy tomato-based chicken curry with butter.",
      price: "₹240",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/goulash-soup-wood.webp",
    },
    {
      id: 10,
      title: "Chicken Biryani",
      category: "Rice Dishes",
      description: "Aromatic rice with tender chicken pieces.",
      price: "₹210",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/high-angle-pakistan-meal-composition.webp",
    },
    {
      id: 11,
      title: "Tandoori Chicken",
      category: "Tandoor",
      description: "Chicken marinated in spices and grilled in tandoor.",
      price: "₹230",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/side-view-chicken-kebab-with-red-onion-greens-dried-barberry-pita.webp",
    },
    {
      id: 12,
      title: "Kadai Chicken",
      category: "North Indian",
      description: "Chicken cooked in spicy kadai masala.",
      price: "₹230",
      image:
        "https://xbjnwlnzkqzmikxtvlvu.supabase.co/storage/v1/object/public/restaurant-images/restaurant-images/Menu/chicken-stir-fried-chili-along-with-bell-pepper-tomatoes-carrots.webp",
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
