import React from "react";
import { motion } from "framer-motion";

const Examples = () => {
  const images = [
    "/imgs/1.jpg",
    "/imgs/2.jpg",
    "/imgs/3.jpg",
    "/imgs/4.jpg",
    "/imgs/5.jpg",
    "/imgs/6.jpg",
    "/imgs/7.jpg",
    "/imgs/8.jpg",
    "/imgs/9.jpg",
    "/imgs/10.jpg",
    "/imgs/11.jpg",
    "/imgs/12.jpg",

  ];

  return (
    <div id="work" className="py-16 bg-gray-50">
          <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
      <div className="max-w-6xl mx-auto px-6 text-center">
 <h2 className="text-5xl font-extrabold mb-8 text-sky-700 border-b-4 border-sky-300 inline-block pb-3">
          Our Work
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {images.map((src, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition bg-white flex items-center justify-center"
    >
      <img
        src={src}
        alt={`Work ${index + 1}`}
        className="max-h-64 w-full object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>

      </div>
      </motion.div>
    </div>
  );
};

export default Examples;
