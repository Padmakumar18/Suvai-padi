import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-3 fw-bold">
            Welcome to <span className="highlight">Suvai பாடி</span>
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
                Suvai பாடி blends tradition and innovation to serve you
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

      <section className="choose-us-section py-5 bg-light">
        <div className="container">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose TasteNest?
          </motion.h2>
          <div className="row text-center">
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <i className="bi bi-star-fill fs-2 text-warning"></i>
              <h5 className="mt-3">Top-Rated Chefs</h5>
              <p>
                Our chefs bring global flavors with local love to your plate.
              </p>
            </motion.div>
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <i className="bi bi-award fs-2 text-success"></i>
              <h5 className="mt-3">Award-Winning Ambience</h5>
              <p>Experience luxurious dining in a warm, elegant setting.</p>
            </motion.div>
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <i className="bi bi-clock-history fs-2 text-primary"></i>
              <h5 className="mt-3">Timely Service</h5>
              <p>Our staff ensures a delightful experience, every time.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="specials-section py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Today's Specials
          </motion.h2>
          <div className="row g-4">
            {[
              {
                title: "Truffle Mushroom Risotto",
                img: "https://images.unsplash.com/photo-1606914469220-0b1f47f7854b",
              },
              {
                title: "Butter Garlic Prawns",
                img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
              },
              {
                title: "Chocolate Lava Cake",
                img: "https://images.unsplash.com/photo-1599785209707-f348b32f31f0",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section bg-light py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            What Our Guests Say
          </motion.h2>
          <div className="row justify-content-center">
            <motion.div
              className="col-md-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <blockquote className="blockquote text-center">
                <p className="mb-4">
                  "A spectacular dining experience! The ambience, flavors, and
                  hospitality made our evening unforgettable."
                </p>
                <footer className="blockquote-footer">
                  Riya Sharma, Mumbai
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="cta-section text-white py-5"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container text-center">
          <motion.h2
            className="mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Ready for a Taste Adventure?
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Reserve your table now and indulge in a world of culinary delight.
          </motion.p>
          <motion.a
            href="/contact"
            className="btn btn-outline-light px-4"
            whileHover={{ scale: 1.05 }}
          >
            Book a Table
          </motion.a>
        </div>
      </section>

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
