"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      <div className="max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* BUTTON LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            bg-white/10 border border-white/20 
            rounded-full backdrop-blur-md text-white"
          >
            Our Foundation
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading leading-tight text-white"
          >
            Vision & Mission
          </motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 
            rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Vision
            </h3>

            <p className="text-white text-sm md:text-base leading-relaxed">
              To become a globally recognized textile manufacturing company
              that seamlessly blends traditional craftsmanship with modern
              innovation, setting new standards in quality, scalability, and
              intelligent production.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 
            rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Mission
            </h3>

            <p className="text-white text-sm md:text-base leading-relaxed">
              To deliver high-quality textile solutions through innovation,
              efficient processes, and a commitment to excellence — while
              preserving the heritage of weaving and empowering sustainable
              growth.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}