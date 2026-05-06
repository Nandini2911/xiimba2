"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Yarn Preparation",
    desc: "Careful selection and preparation of yarn to ensure consistency and quality before weaving.",
  },
  {
    title: "Weaving",
    desc: "Advanced looms combine precision and efficiency to produce high-quality woven fabrics.",
  },
  {
    title: "Processing",
    desc: "Dyeing, printing, and finishing processes enhance durability, texture, and appearance.",
  },
  {
    title: "Quality Check",
    desc: "Strict inspection ensures every fabric meets performance and global standards.",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="w-full py-24 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Manufacturing Process
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading text-plumMid leading-tight"
          >
            From Yarn to Fabric
          </motion.h2>

        </div>

        {/* STACKED CARDS */}
        <div className="space-y-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm 
              hover:shadow-md transition"
            >

              {/* LEFT ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-plumMid rounded-l-xl"></div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-plumMid mb-3">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-700 text-sm leading-relaxed max-w-lg">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}