import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Grilled Steak" },
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", title: "Chef’s Platter" },
  { src: "https://images.unsplash.com/photo-1529042410759-befb1204b468", title: "Pizza Delight" },
  { src: "https://images.unsplash.com/photo-1565895405130-6d5d8c7f8248", title: "Tropical Cocktails" },
  { src: "https://images.unsplash.com/photo-1613145993484-94d37b37e6be", title: "Biryani Bowl" },
  { src: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a", title: "Rustic Dining" },
  { src: "https://images.unsplash.com/photo-1613141431742-46bcfcb360ed", title: "Sushi Selection" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", title: "Plated Dessert" },
  { src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f", title: "Garden Ambiance" },
  { src: "https://images.unsplash.com/photo-1604145559206-3e8db6d67c5d", title: "Pasta Serving" },
  { src: "https://images.unsplash.com/photo-1633113212235-3ffbd794c0b9", title: "Mocktail Vibes" },
  { src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90", title: "Dining Ambiance" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", title: "Fresh Breads" },
  { src: "https://images.unsplash.com/photo-1615484477860-7f042159f5db", title: "Table Setup" },
  { src: "https://images.unsplash.com/photo-1514514784547-38bf0f58faab", title: "Classic Burger" }
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
