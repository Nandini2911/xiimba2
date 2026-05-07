"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    title: "Woven Fabrics",
    images: ["/image/woven.webp", "/image/woven1.webp", "/image/woven2.webp","/image/woven3.webp","/image/woven4.webp","/image/woven5.webp"],
  },
  {
    title: "Cotton Fabrics",
    images: ["/image/cotton.webp", "/image/cotton1.webp","/image/cotton2.webp","/image/cotton3.webp","/image/cotton4.webp","/image/cotton5.webp"],
  },
  {
    title: "Polyester Blends",
    images: ["/image/Polyester.webp", "/image/Polyester1.webp", "/image/Polyester3.webp","/image/polyester4.webp","/image/polyester5.webp","/image/polyester6.webp"],
  },
  {
    title: "Viscose & Blends",
    images: ["/image/Viscose.webp", "/image/Viscose1.webp","/image/Viscose2.webp","/image/Viscose3.webp","/image/Viscose4.webp","/image/Viscose5.webp"],
  },
  {
    title: "Custom Weave Developments",
    images: ["/image/custom.webp", "/image/custom1.webp","/image/Custom-weave1.webp","/image/custom-weave2.webp","/image/custom-weave3.webp","/image/custom-weave4.webp"],
  },
  {
    title: "Processed Fabrics",
    images: ["/image/Processed.webp", "/image/Processed1.webp","/image/Processed2.webp","/image/Processed3.webp","/image/processed4.webp","/image/processed5.webp"],
  },
  {
    title: "Dyed Fabrics",
    images: ["/image/dyed.webp", "/image/dyed6.webp","/image/dyed3.webp","/image/dyed4.webp","/image/dyed5.webp","/image/dyed7.webp"],
  },
  {
    title: "Printed Fabrics",
    images: ["/image/printed.webp", "/image/printed1.webp","/image/printed2.webp","/image/printed3.webp","/image/printed4.webp","/image/printed5.webp"],
  },
  {
    title: "Finished & Treated",
    images: ["/image/Finished.webp", "/image/Finished1.webp", "/image/Finished2.png", "/image/Finished3.png", "/image/Finished4.png", "/image/finished5.webp"],
  },
];

export default function FabricCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading">
            Explore Our Fabric Range
          </h2>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition
              ${
                activeCategory.title === cat.title
                  ? "bg-white text-black"
                  : "bg-white/10 border-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* IMAGES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {activeCategory.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt="fabric"
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
