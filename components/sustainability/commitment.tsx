"use client";

import { motion } from "framer-motion";

export default function SustainabilityCommitment() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-5xl mx-auto">

        {/* PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 md:p-14 rounded-3xl 
          bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden"
        >

          {/* TOP LABEL */}
          <div className="mb-6">

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
              border border-white/30 rounded-full 
              bg-white/10 backdrop-blur-md"
            >
              Our Commitment
            </motion.button>

          </div>

          {/* MAIN STATEMENT */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-4xl font-heading leading-tight mb-6"
          >
            Sustainability is not an add-on — it is built into every stage of how 
            we design, produce, and deliver our fabrics.
          </motion.h2>

          {/* SUPPORT TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm md:text-base max-w-2xl"
          >
            At Xiimba, we continuously refine our processes to reduce environmental 
            impact while maintaining performance, consistency, and global quality standards.
          </motion.p>

          {/* SIDE ACCENT LINE */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-white/30"></div>

          {/* SOFT GLOW */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 
          bg-white/5 blur-2xl transition"></div>

        </motion.div>

      </div>
    </section>
  );
}