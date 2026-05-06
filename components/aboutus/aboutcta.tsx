"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full py-24 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-4xl mx-auto text-center">

        {/* LABEL */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
          bg-white/10 border border-white/20 
          rounded-full backdrop-blur-md text-white"
        >
          Get Started
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading leading-tight mb-6"
        >
          Let’s Build the Future of Textiles Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Partner with Xiimba to experience innovation-driven textile manufacturing,
          where tradition meets scalability and precision.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >

     

<div className="flex gap-4">

  {/* PRIMARY → CONTACT */}
  <Link
    href="/contact"
    className="px-7 py-3 text-sm font-semibold bg-white text-black rounded-md 
    hover:bg-white/90 transition duration-300 shadow-lg inline-block"
  >
    Contact Us
  </Link>

  {/* SECONDARY → FABRICS / PRODUCTS */}
  <Link
    href="/ourfabrics"
    className="px-7 py-3 text-sm font-semibold text-white border border-white/70 
    rounded-md hover:bg-white hover:text-black transition duration-300 inline-block"
  >
    Explore Products
  </Link>

</div>

        </motion.div>

      </div>
    </section>
  );
}