"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const strengths = [
  {
    title: "Advanced Weaving Infrastructure",
    desc: "Modern looms and machinery ensuring precision and high production efficiency.",
    image: "/image/advanced-weaving-infrastructure.webp",
  },
  {
    title: "Integrated Processing Units",
    desc: "Seamless dyeing, printing, and finishing capabilities under one ecosystem.",
    image: "/image/integrated-processing-units.webp",
  },
  {
    title: "/image/strong-supply-chain.webp",
    desc: "Reliable vendor network supporting consistent material sourcing and delivery.",
    image: "/image/strong-supply-chain.webp",
  },
  {
    title: "Quality Control Systems",
    desc: "Strict inspection processes aligned with global textile standards.",
    image: "/image/quality-control-systems.webp",
  },
];

export default function ManufacturingStrength() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/20 rounded-full bg-white/10 backdrop-blur-md"
          >
            Manufacturing Strength
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading leading-tight"
          >
            Built for Scale, Precision & Consistency
          </motion.h2>

        </div>

        {/* PANELS */}
        <div className="flex flex-col md:flex-row gap-4 h-[400px] group">

          {strengths.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`relative flex-1 rounded-2xl cursor-pointer 
              transition-all duration-500 overflow-hidden

              ${active === i ? "flex-[2]" : "flex-[1]"}`}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover 
                transition duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">

                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 text-sm"
                >
                  {item.desc}
                </motion.p>

              </div>

              {/* BORDER */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}