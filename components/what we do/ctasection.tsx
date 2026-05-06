"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-heading text-plumMid leading-tight mb-6"
        >
          Let’s Build Something Exceptional Together
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10"
        >
          Partner with us for high-quality fabric solutions tailored to your business needs — from development to bulk production.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >


<div className="flex gap-4">

  {/* PRIMARY → CONTACT */}
  <Link
    href="/contact"
    className="px-8 py-3 rounded-full 
    bg-plumMid text-white text-sm tracking-wide 
    hover:bg-plumEnd transition shadow-md inline-block"
  >
    Get in Touch
  </Link>

  {/* SECONDARY → FABRICS */}
  <Link
    href="/ourfabrics"
    className="px-8 py-3 rounded-full 
    border border-plumMid text-plumMid text-sm tracking-wide 
    hover:bg-plumMid hover:text-white transition inline-block"
  >
    View Products
  </Link>

</div>

        </motion.div>

      </div>
    </section>
  );
}