"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white relative overflow-hidden">

      {/* SOFT GLOW */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] 
      bg-white/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* LABEL */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
          border border-white/30 rounded-full 
          bg-white/10 backdrop-blur-md"
        >
          Get Started
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-heading leading-tight mb-6"
        >
          Ready to Work With Us?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-10"
        >
          Connect with our team to explore fabric solutions, request samples, 
          or discuss your project requirements.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >

          {/* PRIMARY */}
          <button className="px-8 py-3 rounded-full 
          bg-white text-plumMid text-sm tracking-wide 
          hover:bg-white/90 transition shadow-md">
            Request Fabric Sample
          </button>

          {/* SECONDARY */}
          <button className="px-8 py-3 rounded-full 
          border border-white text-white text-sm tracking-wide 
          hover:bg-white hover:text-plumMid transition">
            Contact Team
          </button>

        </motion.div>

      </div>
    </section>
  );
}