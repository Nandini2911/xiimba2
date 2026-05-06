"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "ISO 9001:2015",
    desc: "Certified quality management system ensuring consistent product standards.",
  },
  {
    title: "OEKO-TEX® Standard 100",
    desc: "Textiles tested for harmful substances, ensuring safety and sustainability.",
  },
  {
    title: "GOTS Certified",
    desc: "Global Organic Textile Standard for eco-friendly production processes.",
  },
  {
    title: "Export Compliance",
    desc: "Aligned with international export regulations and global textile standards.",
  },
];

export default function Certificationsss() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/20 rounded-full 
            bg-white/10 backdrop-blur-md"
          >
            Certifications
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading leading-tight max-w-3xl mx-auto"
          >
            Standards That Define Our Quality
          </motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {certifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-md hover:bg-white/10 
              transition text-center"
            >

              {/* ICON BADGE */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-full 
              bg-white/10 flex items-center justify-center 
              text-white text-xl">
                ✓
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* SUBTLE GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
              group-hover:opacity-100 bg-white/5 blur-xl transition"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}