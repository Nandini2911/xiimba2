"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Eco-Conscious Materials",
    desc: "Responsible sourcing ensures reduced environmental impact without compromising quality.",
  },
  {
    title: "Efficient Processing",
    desc: "Optimized dyeing and finishing minimize water, energy, and chemical usage.",
  },
  {
    title: "Waste Reduction",
    desc: "Production processes are designed to reduce waste and improve material efficiency.",
  },
  {
    title: "Compliance & Standards",
    desc: "Aligned with global certifications and responsible textile manufacturing standards.",
  },
];

export default function SustainabilityPillars() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE - BIG STATEMENT */}
        <div className="flex flex-col justify-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-heading leading-tight mb-6"
          >
            Sustainability <br />
            Is Built Into <br />
            Every Fabric
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm md:text-base max-w-md"
          >
            From sourcing to production, we integrate responsible practices 
            that reduce environmental impact while maintaining performance and quality.
          </motion.p>

        </div>

        {/* RIGHT SIDE - FLOWING PILLARS */}
        <div className="space-y-12">

          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative pl-8

              ${i === 1 ? "ml-6" : ""}
              ${i === 2 ? "ml-2" : ""}
              ${i === 3 ? "ml-10" : ""}
              `}
            >

              {/* LEFT LINE */}
              <div className="absolute left-0 top-2 w-[2px] h-full bg-white/20"></div>

              {/* DOT */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 bg-white rounded-full"></div>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}