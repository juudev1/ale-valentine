import React from 'react';
import { motion } from 'framer-motion';

const Flower = ({ delay, duration, x }) => (
  <motion.div
    initial={{ y: -20, x, rotate: 0, opacity: 0 }}
    animate={{ 
      y: '100vh', 
      x: x + (Math.random() * 100 - 50), 
      rotate: 360, 
      opacity: [0, 1, 1, 0] 
    }}
    transition={{ 
      duration, 
      delay, 
      ease: "linear", 
      repeat: Infinity 
    }}
    className="absolute text-pink-300 pointer-events-none"
    style={{ fontSize: Math.random() * 20 + 20 }}
  >
    🌸
  </motion.div>
);

export const FallingFlowers = () => {
  const flowers = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5,
    x: Math.random() * window.innerWidth
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowers.map(flower => (
        <Flower key={flower.id} {...flower} />
      ))}
    </div>
  );
};
