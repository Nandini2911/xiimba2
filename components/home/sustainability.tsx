"use client";

import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const points = [
    {
      title: "Responsible Sourcing",
      desc: "Partnering with trusted suppliers to ensure ethical and sustainable raw material sourcing.",
    },
    {
      title: "Efficient Processes",
      desc: "Optimizing manufacturing systems to reduce waste, energy usage, and environmental impact.",
    },
    {
      title: "Quality & Longevity",
      desc: "Producing durable fabrics that reduce lifecycle waste and promote long-term usability.",
    },
    {
      title: "Compliance & Standards",
      desc: "Aligning with global textile certifications and sustainability benchmarks.",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      {/* SOFT GLOW */}
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px]
      bg-white/10 blur-[140px] rounded-full opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* TAG */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.25em] uppercase
            bg-white/10 text-white border border-white/20
            rounded-full backdrop-blur-md"
          >
            Sustainability
          </motion.button>

          {/* HEADING — fixed: was opacity: 1 (typo), now opacity: 0 */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading leading-tight mb-6 text-white"
          >
            Responsible Textile
            <br />
            Manufacturing
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/70 text-[15px] leading-relaxed max-w-md"
          >
            At Xiimba, sustainability is embedded across our entire textile value chain —
            from sourcing to production — ensuring efficiency, responsibility, and long-term impact.
          </motion.p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-12">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-10"
            >

              {/* DOT */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white/70" />

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              {/* LINE */}
              <div className="mt-6 h-[1px] w-full
              bg-gradient-to-r from-white/20 to-transparent" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
