"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FabricsCTA() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] 
      bg-plumMid/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-heading text-plumMid leading-tight mb-6"
        >
          Let’s Create the Right Fabric for Your Brand
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10"
        >
          From concept to large-scale production, we help you develop fabrics 
          that match your vision, quality standards, and market needs.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >

         

       

<Link
  href="/contact"
  className="px-8 py-3 rounded-full 
  border border-plumMid text-plumMid text-sm tracking-wide 
  hover:bg-plumMid hover:text-white transition inline-block"
>
  Contact Us
</Link>

        </motion.div>

      </div>
    </section>
  );
}