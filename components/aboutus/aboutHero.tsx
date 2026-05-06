"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/image/about-us-hero.webp"
        alt="Xiimba Textile Manufacturing"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/15 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20 pt-24">
        <div className="max-w-lg">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5"
          >
            About Xiimba
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-heading text-2xl md:text-4xl leading-snug mb-5 drop-shadow-md"
          >
            <span className="block">Heritage Weaving Meets</span>
            <span className="block text-white/90">
              Intelligent Manufacturing
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/75 text-base leading-relaxed mb-6"
          >
            Xiimba Attire Intelligence LLP is a forward-looking textile company
            rooted in Ichalkaranji’s weaving legacy, evolving into a modern,
            scalable manufacturing ecosystem.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-4"
          >

        

<div className="flex gap-4">

  {/* EXPLORE → FABRICS PAGE */}
  <Link
    href="/ourfabrics"
    className="px-6 py-2.5 text-sm font-semibold bg-white text-black rounded-md 
    hover:bg-white/90 transition duration-300 shadow-lg inline-block"
  >
    Explore
  </Link>

  {/* CONTACT → CONTACT PAGE */}
  <Link
    href="/contact"
    className="px-6 py-2.5 text-sm font-semibold text-white border border-white/70 
    rounded-md hover:bg-white hover:text-black transition duration-300 backdrop-blur-sm inline-block"
  >
    Contact
  </Link>

</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}