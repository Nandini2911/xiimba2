
"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Fashion & Apparel",
    desc: "High-quality fabrics tailored for modern fashion brands and apparel manufacturers.",
  },
  {
    title: "Export Markets",
    desc: "Bulk production aligned with global textile standards and export demands.",
  },
  {
    title: "Uniform & Workwear",
    desc: "Durable fabrics designed for industrial, institutional, and daily wear use.",
  },
  {
    title: "Custom Requirements",
    desc: "Tailored textile solutions developed to meet specific client needs.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Industries
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading text-plumMid leading-tight max-w-3xl mx-auto"
          >
            Industries We Serve
          </motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl 
              bg-white border border-gray-200 shadow-sm 
              hover:shadow-md transition"
            >

              {/* TOP LINE ACCENT */}
              <div className="w-8 h-[2px] bg-plumMid mb-5"></div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-plumMid mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER EFFECT LINE */}
              <div className="w-0 group-hover:w-10 h-[2px] bg-plumMid mt-5 transition-all duration-300"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}