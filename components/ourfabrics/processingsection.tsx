"use client";

import { motion } from "framer-motion";

const processes = [
  {
    title: "Dyeing",
    desc: "Advanced dyeing techniques ensure uniform color distribution and long-lasting vibrancy.",
  },
  {
    title: "Printing",
    desc: "Precision printing enhances design flexibility with high-definition patterns and textures.",
  },
  {
    title: "Finishing",
    desc: "Specialized treatments improve durability, texture, and performance of the fabric.",
  },
];

export default function ProcessingSection() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md text-white"
          >
            Processing
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading leading-tight max-w-3xl mx-auto"
          >
            Precision in Every Process
          </motion.h2>

        </div>

        {/* PROCESS FLOW */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">

            {processes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >

                {/* CIRCLE */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full 
                bg-white/10 backdrop-blur-md flex items-center justify-center 
                border border-white/20 shadow-lg">
                  <span className="text-lg font-semibold">
                    {i + 1}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}