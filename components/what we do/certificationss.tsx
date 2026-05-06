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
    desc: "Global Organic Textile Standard certification for eco-friendly textile production.",
  },
  {
    title: "Export Compliance",
    desc: "Aligned with international export regulations and global textile standards.",
  },
];

export default function Certificationss() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md text-white"
          >
            Certifications
          </motion.button>

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
        <div className="grid md:grid-cols-2 gap-10">

          {certifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-8 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-md hover:bg-white/10 transition shadow-lg"
            >

              {/* ICON CIRCLE */}
              <div className="w-12 h-12 rounded-full bg-white/10 
              flex items-center justify-center mb-6">
                ✓
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}