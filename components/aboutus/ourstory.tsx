"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-xl"
        >
          <img
            src="/image/about3rdsec.png"
            alt="Our Story"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 px-4 py-1.5 text-xs tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Our Story
          </motion.button>

          {/* HEADING (SOLID PLUM COLOR) */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading leading-tight mb-6 text-plumMid"
          >
            Rooted in Tradition
            <br />
            Driven by Innovation
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-plumMid text-sm md:text-base leading-relaxed mb-6"
          >
            Xiimba was born in Ichalkaranji, a town known for its deep textile
            heritage. What started as a traditional weaving journey has now
            evolved into a forward-thinking manufacturing ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-plumMid text-sm md:text-base leading-relaxed mb-8"
          >
            By combining craftsmanship with intelligent processes, we are
            redefining how textiles are produced — ensuring quality, scalability,
            and innovation at every step.
          </motion.p>

          

        </div>

      </div>
    </section>
  );
}