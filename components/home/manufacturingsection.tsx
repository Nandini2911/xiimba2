"use client";

import { motion } from "framer-motion";

export default function ManufacturingSection() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-plumStart via-plumMid to-plumEnd overflow-hidden">

      {/* SOFT GLOW */}
      <div className="absolute bottom-[-120px] left-[-80px] w-[500px] h-[500px] bg-accent2/20 blur-[140px] rounded-full opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <img
            src="/image/fabric4.webp"
            alt="manufacturing"
            className="w-full h-[500px] object-cover rounded-xl"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />

        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
<div>

  {/* TAG */}
  <motion.button
    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-6 px-6 py-2 text-[11px] tracking-[0.25em] uppercase 
    bg-white/10 text-white border border-white/20 
    rounded-full backdrop-blur-md"
  >
    Manufacturing
  </motion.button>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.8, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-heading text-white leading-snug mb-6"
  >
    Advanced Textile Manufacturing
    <br />
    Built for Precision & Scale
  </motion.h2>

  {/* DESCRIPTION */}
  <motion.p
    initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-white/70 text-[15px] leading-relaxed mb-10"
  >
    Xiimba integrates modern weaving infrastructure, advanced processing systems, 
    and strong supply chain networks to deliver consistent, high-quality textile production.
  </motion.p>

</div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-5 text-sm">

            {[
              "Advanced Weaving Infrastructure",
              "Integrated Processing Units",
              "Strong Supply Chain Network",
              "Quality Control Systems",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                className="p-4 rounded-lg 
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-white/80
                hover:border-accent1/40
                hover:-translate-y-1
                transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}