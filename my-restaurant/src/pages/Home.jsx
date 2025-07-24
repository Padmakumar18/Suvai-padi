import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: "url('/images/Home-page-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
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

      <section id="intro" className="intro-section">
        <div className="container py-5">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/Home-page-content-image-1.webp"
                alt="Restaurant Interior"
                className="img-fluid rounded shadow-lg intro-image"
              />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="display-6 fw-bold ">
                Experience Culinary Excellence
              </h2>
              <p className="lead text-dark mt-3">
                <strong>Suvai பாடி</strong> blends tradition and innovation to
                serve you world-class cuisine with a homely twist.
              </p>
              <p className="text-muted">
                Join us in an immersive dining experience curated by passionate
                chefs, an intimate atmosphere, and unforgettable flavors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="intro" className="intro-section">
        <div className="container py-5">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="display-6 fw-bold">
                Discover the Art of Fine Dining
              </h2>
              <p className="lead text-dark mt-3">
                At <strong>Suvai பாடி</strong>, timeless flavors meet modern
                culinary craftsmanship. Every dish is a tribute to our roots
                prepared with love, precision, and authentic ingredients.
              </p>
              <p className="text-muted">
                Join us to indulge in a sensory journey where tradition is
                reimagined, the ambiance feels like home, and every bite tells a
                story of heritage and harmony.
              </p>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/Home-page-content-image-2.webp"
                alt="Restaurant Interior"
                className="img-fluid rounded shadow-lg intro-image"
              />
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
          <div className="row text-center g-4">
            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="rounded-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                  minHeight: "220px",
                }}
              >
                <i className="bi bi-star-fill fs-2"></i>
                <h5 className="mt-3">Top-Rated Chefs</h5>
                <p>
                  Our chefs bring global flavors with local love to your plate.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div
                className="rounded-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
                  minHeight: "220px",
                }}
              >
                <i className="bi bi-award fs-2"></i>
                <h5 className="mt-3">Award-Winning Ambience</h5>
                <p>Experience luxurious dining in a warm, elegant setting.</p>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div
                className="rounded-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
                  minHeight: "220px",
                }}
              >
                <i className="bi bi-clock-history fs-2"></i>
                <h5 className="mt-3">Timely Service</h5>
                <p>Our staff ensures a delightful experience, every time.</p>
              </div>
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
