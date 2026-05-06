"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-4xl mx-auto text-center">

        {/* LABEL */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
          border border-white/30 rounded-full 
          bg-white/10 backdrop-blur-md"
        >
          Contact Us
        </motion.button>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading leading-tight mb-6"
        >
          Let’s Connect & Build Together
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-sm md:text-base max-w-2xl mx-auto"
        >
          Have a requirement or need assistance? Reach out to our team — 
          we’re here to help you with the right fabric solutions.
        </motion.p>

      </div>
    </section>
  );
}