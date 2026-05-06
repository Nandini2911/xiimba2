"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Fabric Weaving",
    desc: "Combining traditional craftsmanship with modern machinery.",
  },
  {
    title: "Processing",
    desc: "Advanced finishing techniques for durability and performance.",
  },
  {
    title: "Quality Control",
    desc: "Strict inspection systems ensuring global standards.",
  },
  {
    title: "Custom Solutions",
    desc: "Tailored textile solutions for diverse industries.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="w-full py-24 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Core Capabilities
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading text-plumMid leading-tight"
          >
            Built Around Process,
            <br />
            Driven by Precision
          </motion.h2>

        </div>

        {/* HORIZONTAL STRIP */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-plumMid/20"></div>

          <div className="grid md:grid-cols-4 gap-10">

            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >

                {/* DOT */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-plumMid mb-6"></div>

                {/* NUMBER */}
                <div className="text-5xl font-bold text-plumMid/10 mb-3">
                  {`0${i + 1}`}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-plumMid mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-700 text-sm leading-relaxed">
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