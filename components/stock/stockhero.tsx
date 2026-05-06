"use client";

import { motion } from "framer-motion";

const fabrics = [
  "/image/fabric1.webp",
  "/image/fabric2.webp",
  "/image/fabric3.webp",
  "/image/fabric4.webp",
  "/image/fabric5.webp",
];

export default function StockFabricsHero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center 
    px-6 md:px-20 bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10">

          {/* BUTTON LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md"
          >
            Stock Fabrics
          </motion.button>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading leading-tight mb-6"
          >
            Fabric Inventory <br />
            Ready to Move
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-sm md:text-base max-w-md mb-10"
          >
            Explore our ready stock fabrics with consistent quality, 
            available for immediate dispatch and bulk supply.
          </motion.p>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 rounded-full 
            bg-white text-plumMid text-sm hover:bg-white/90 transition">
              Browse Stock
            </button>

            <button className="px-8 py-3 rounded-full 
            border border-white text-white text-sm 
            hover:bg-white hover:text-plumMid transition">
              Enquire Now
            </button>
          </div>

        </div>

        {/* RIGHT SIDE (SCROLL STRIP) */}
        <div className="relative overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...fabrics, ...fabrics].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="fabric"
                className="w-[180px] h-[240px] object-cover rounded-xl shadow-lg"
              />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}