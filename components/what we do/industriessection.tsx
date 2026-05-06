"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Fashion & Apparel",
    desc: "High-quality fabrics tailored for modern fashion brands and apparel manufacturers.",
  },
  {
    title: "Export Markets",
    desc: "Bulk production capabilities aligned with global textile standards and export demands.",
  },
  {
    title: "Uniform & Workwear",
    desc: "Durable and performance-driven textiles designed for industrial and institutional use.",
  },
  {
    title: "Custom Development",
    desc: "Collaborative fabric solutions developed to meet specific client requirements.",
  },
];

export default function Industries() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-6xl mx-auto">

      {/* HEADER */}
        <div className="text-center mb-20">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md text-white"
          >
            Industries
          </motion.button>

        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-4xl md:text-6xl font-heading leading-tight 
  max-w-3xl mx-auto text-center"
>
  Designed for Real-World Applications
</motion.h2>

        </div>

        {/* LIST */}
        <div className="border-t border-white/10">

          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid md:grid-cols-2 gap-10 py-10 border-b border-white/10 cursor-pointer"
            >

              {/* LEFT BIG TITLE */}
              <div>
                <h3 className="text-2xl md:text-3xl font-medium 
                group-hover:translate-x-2 transition duration-300">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT DESC */}
              <div className="md:opacity-70 group-hover:opacity-100 transition duration-300">
                <p className="text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}