import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-3 fw-bold">
            Welcome to <span className="highlight">TasteNest</span>
          </h1>
          <p className="lead">Where every dish tells a story.</p>
          <motion.a
            href="#intro"
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline-light mt-3"
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
                alt="Restaurant Interior"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2>Experience Culinary Excellence</h2>
              <p>
                TasteNest blends tradition and innovation to serve you
                world-class cuisine with a homely twist.
              </p>
              <p>
                Join us in an immersive dining experience curated by passionate
                chefs and warm ambiance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 text-center bg-white">
        <div className="container">
          <h2 className="mb-4">Why Choose Us?</h2>
          <div className="row">
            {[
              {
                icon: "🍽️",
                title: "Delicious Menus",
                desc: "Handcrafted dishes with the finest ingredients.",
              },
              {
                icon: "🌿",
                title: "Fresh Ingredients",
                desc: "Locally sourced organic produce daily.",
              },
              {
                icon: "🎉",
                title: "Cozy Ambiance",
                desc: "Perfect for gatherings, dates, and celebrations.",
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4 mb-4"
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-4 border rounded shadow-sm h-100 feature-box">
                  <div className="display-4">{item.icon}</div>
                  <h4 className="mt-3">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
