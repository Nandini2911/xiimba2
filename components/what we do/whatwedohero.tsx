"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatWeDoHero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/image/what-we-do-hero.webp"
        alt="What We Do"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* DARK OVERLAY (IMPORTANT for visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20 pt-24">
        <div className="max-w-xl text-white">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5"
          >
            What We Do
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-heading text-3xl md:text-5xl leading-tight mb-6"
          >
            Fabric Solutions Built
            <br />
            for Scale & Precision
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-md"
          >
            From advanced textile manufacturing to scalable fabric solutions,
            Xiimba delivers precision, consistency, and innovation at every stage
            of production.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-4"
          >

      

<div className="flex gap-4">

  {/* PRIMARY */}
  <Link
    href="/ourfabrics"
    className="px-6 py-2.5 text-sm font-semibold bg-white text-black rounded-md 
    hover:bg-white/90 transition duration-300 shadow-lg inline-block"
  >
    Explore Fabrics
  </Link>

  {/* SECONDARY */}
  <Link
    href="/contact"
    className="px-6 py-2.5 text-sm font-semibold text-white border border-white/70 
    rounded-md hover:bg-white hover:text-black transition duration-300 inline-block"
  >
    Get a Quote
  </Link>

</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}