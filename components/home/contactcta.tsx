"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      {/* SOFT GLOW */}
      <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] 
      bg-white/10 blur-[120px] rounded-full opacity-40"></div>

      <div className="max-w-4xl mx-auto text-center relative">

        {/* TAG */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.25em] uppercase 
          bg-white/10 text-white border border-white/20 
          rounded-full backdrop-blur-md"
        >
          Get In Touch
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-heading text-white mb-6 leading-tight"
        >
          Let’s Build Your
          <br />
          Next Fabric Solution
        </motion.h2>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70 text-[15px] leading-relaxed mb-10"
        >
          Partner with Xiimba to develop high-quality, scalable fabric solutions 
          tailored to your brand and market requirements.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block px-10 py-4 text-sm font-semibold tracking-wide 
          bg-white text-plumStart rounded-full 
          shadow-lg hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300"
        >
          Contact Us
        </motion.a>

      </div>
    </section>
  );
}