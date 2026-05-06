"use client";

import { motion } from "framer-motion";

const practices = [
  "Low-Impact Dyes",
  "Water-Efficient Processing",
  "Reduced Chemical Usage",
  "Energy Optimization",
  "Waste Minimization",
];

export default function SustainabilityPractices() {
  return (
    <section className="w-full py-16 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-6xl mx-auto">

        {/* TITLE (SMALL) */}
<div className="w-full flex justify-center">

  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-10 px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
    border border-plumMid/30 rounded-full 
    bg-white/60 backdrop-blur-sm text-plumMid"
  >
    Sustainable Practices
  </motion.button>

</div>

        {/* STRIP */}
        <div className="flex flex-wrap justify-center gap-4">

          {practices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="px-5 py-2 rounded-full 
              bg-white border border-gray-200 
              text-sm text-gray-700 
              shadow-sm hover:shadow-md transition flex items-center gap-2"
            >

              {/* ICON DOT */}
              <span className="w-2 h-2 bg-plumMid rounded-full"></span>

              {item}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}