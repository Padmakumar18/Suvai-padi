import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    title: "Signature Pasta",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    title: "Sizzling Grill",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    title: "Chef’s Special Dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964974-7e8f4bfcaa3c?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    title: "Freshly Baked Breads",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-page py-5">
      <div className="container text-center">
        <motion.h2
          className="mb-4 display-5 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Culinary Gallery
        </motion.h2>
        <motion.p
          className="text-muted mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A glimpse into the flavors, textures, and ambiance we create at{" "}
          <strong>TasteNest</strong>.
        </motion.p>

        <div className="row g-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              className="col-sm-6 col-lg-4"
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="gallery-card">
                <img
                  src={img.src}
                  alt={img.title}
                  className="img-fluid rounded"
                />
                <div className="gallery-caption">
                  <h5>{img.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
