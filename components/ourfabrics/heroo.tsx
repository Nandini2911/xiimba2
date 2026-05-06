"use client";

import { motion } from "framer-motion";

export default function FabricsHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center 
    px-6 md:px-20 overflow-hidden
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] 
      bg-plumMid/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* SMALL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Our Fabrics
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-heading text-plumMid leading-tight mb-6"
          >
            Premium Fabrics <br />
            Engineered for Performance
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm md:text-base max-w-lg mb-10"
          >
            From cotton to advanced blends, we create high-quality fabrics designed 
            for durability, comfort, and global standards.
          </motion.p>

          {/* BUTTONS */}
          

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/image/hero-fabric.webp"
              alt="Fabric"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-plumMid/10 to-transparent rounded-2xl"></div>

        </motion.div>

      </div>
    </section>
  );
}