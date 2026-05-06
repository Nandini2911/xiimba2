"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Breathable Fabrics",
    desc: "Designed for comfort with superior air circulation and moisture control.",
  },
  {
    title: "Durability",
    desc: "Engineered to withstand repeated use while maintaining quality and strength.",
  },
  {
    title: "Color Fastness",
    desc: "Advanced dyeing techniques ensure long-lasting and vibrant colors.",
  },
  {
    title: "Custom Finishes",
    desc: "Tailored finishes to meet specific performance and design requirements.",
  },
];

export default function FabricFeatures() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE (TEXT BLOCK) */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Fabric Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-heading text-plumMid leading-tight mb-6"
          >
            Engineered for Performance <br /> Designed for Comfort
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm md:text-base max-w-md"
          >
            Our fabrics combine advanced material science with textile expertise 
            to deliver durability, comfort, and consistent performance across applications.
          </motion.p>

        </div>

        {/* RIGHT SIDE (FLOATING CARDS) */}
        <div className="grid sm:grid-cols-2 gap-6">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-2xl 
              bg-white border border-gray-200 shadow-sm 
              hover:shadow-md transition"
            >

              {/* TOP ACCENT LINE */}
              <div className="w-8 h-[2px] bg-plumMid mb-4"></div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-plumMid mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}