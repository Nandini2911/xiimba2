"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Shirting Fabrics",
    desc: "Premium fabrics crafted for comfort, durability, and refined style.",
    image: "/image/febric6.webp",
  },
  {
    title: "Suiting Fabrics",
    desc: "Elegant materials engineered for performance and modern tailoring.",
    image: "/image/febric7.webp",
  },
  {
    title: "Technical Textiles",
    desc: "Advanced textile solutions for industrial and specialized use.",
    image: "/image/febric8.webp",
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      <div className="max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            bg-white/10 border border-white/20 
            rounded-full backdrop-blur-md"
          >
            Product Categories
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading"
          >
            Crafted for Every Application
          </motion.h2>

        </div>

        {/* UNIQUE GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[380px] rounded-xl overflow-hidden group"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover 
                group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 w-full">

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* HOVER REVEAL TEXT */}
                <p className="text-sm text-white/80 opacity-0 translate-y-4 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition duration-500">
                  {item.desc}
                </p>

                {/* UNDERLINE EFFECT */}
                <div className="mt-4 w-10 h-[2px] bg-white 
                group-hover:w-20 transition-all duration-300"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}