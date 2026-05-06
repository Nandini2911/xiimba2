"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Advanced Machinery",
    desc: "Equipped with modern looms and precision-driven equipment for consistent output and quality.",
  },
  {
    title: "Quality Control",
    desc: "Strict quality checks at every stage ensure durability, finish, and performance of fabrics.",
  },
  {
    title: "Scalable Production",
    desc: "Efficient processes designed to handle both small batches and large-scale manufacturing.",
  },
];

export default function Manufacturing() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Manufacturing
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading leading-tight text-plumMid"
          >
            Precision in Every Thread
          </motion.h2>

        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-xl group"
          >
            <img
              src="/image/manufacturing.webp"
              alt="Manufacturing Process"
              className="w-full h-full object-cover rounded-xl 
              group-hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white/70 border border-gray-200 rounded-lg p-6 shadow-sm 
                hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-plumMid mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}