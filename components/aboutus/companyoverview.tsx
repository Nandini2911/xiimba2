"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">

          <div className="[&_*]:!text-white">

            {/* GLASS LABEL */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase 
              bg-white/10 border border-white/20 
              rounded-full backdrop-blur-md"
            >
              Company Overview
            </motion.button>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-4xl font-heading leading-snug mb-6"
            >
              Building the Future of Textile Manufacturing
            </motion.h2>

            {/* PARAGRAPH 1 */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm md:text-base leading-relaxed mb-6"
            >
              Xiimba is a forward-thinking textile company rooted in the rich
              heritage of Ichalkaranji. We combine decades of craftsmanship with
              modern manufacturing intelligence to create scalable and efficient
              textile solutions.
            </motion.p>

            {/* PARAGRAPH 2 (UPGRADED) */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base leading-relaxed mb-6"
            >
              Our approach integrates innovation, quality control, and data-driven
              production to serve evolving global demands while maintaining the
              essence of traditional weaving excellence. Serving both domestic and
              international markets, Xiimba is built for scalable textile solutions.
            </motion.p>

            {/* COMPANY SNAPSHOT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              <span className="px-4 py-2 text-xs bg-white/10 border border-white/20 rounded-lg backdrop-blur-md">
                Est. 2024
              </span>
              <span className="px-4 py-2 text-xs bg-white/10 border border-white/20 rounded-lg backdrop-blur-md">
                LLPIN: ACE-7552
              </span>
              <span className="px-4 py-2 text-xs bg-white/10 border border-white/20 rounded-lg backdrop-blur-md">
                ₹17.25 Cr Capital
              </span>
              <span className="px-4 py-2 text-xs bg-white/10 border border-white/20 rounded-lg backdrop-blur-md">
                Ichalkaranji, India
              </span>
            </motion.div>

          </div>

          

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-xl"
        >
          <img
            src="/image/about2ndsec.png"
            alt="Textile Manufacturing"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        </motion.div>

      </div>
    </section>
  );
}