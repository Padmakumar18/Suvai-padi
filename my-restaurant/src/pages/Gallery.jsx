import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Grilled Steak",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Chef’s Platter",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    title: "Pizza Delight",
  },
  {
    src: "https://images.unsplash.com/photo-1644515827331-21c25f85fdf2",
    title: "Tropical Cocktails",
  },
  {
    src: "https://images.unsplash.com/photo-1652862730768-106cd3cd9ee1",
    title: "Biryani Bowl",
  },
  {
    src: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a",
    title: "Rustic Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1660159675561-003c21a6ba21",
    title: "Sushi Selection",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Plated Dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Garden Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1651440204296-a79fa9988007",
    title: "Garden Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    title: "Dining Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Fresh Breads",
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
          <strong>Suvai பாடி</strong>.
        </motion.p>

        <div className="gallery-masonry">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="mb-4"
              style={{ breakInside: "avoid" }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="gallery-card">
                <img src={img.src} alt={img.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
