"use client";

import { motion } from "framer-motion";

export default function SustainabilityHeader() {
  return (
    <section className="relative w-full min-h-[100vh] py-32 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd overflow-hidden">

      {/* BACKGROUND BIG TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[80px] md:text-[160px] font-bold text-plumMid/5 tracking-widest">
          SUSTAINABILITY
        </h1>
      </div>

      {/* SOFT GLOW */}
      <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] 
      bg-plumMid/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* BUTTON LABEL */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
          border border-plumMid/30 rounded-full 
          bg-white/60 backdrop-blur-sm text-plumMid"
        >
          Sustainability
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading text-plumMid leading-tight mb-6"
        >
          Responsible Textiles <br />
          Built for the Future
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
        >
          Sustainability is integrated into every stage of our process — from 
          responsible sourcing to efficient manufacturing and reduced environmental impact.
        </motion.p>

      </div>

    </section>
  );
}