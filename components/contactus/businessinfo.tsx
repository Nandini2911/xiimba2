"use client";

import { motion } from "framer-motion";

const info = [
  {
    title: "Address",
    content:
      "B-32, 4th Floor, Sector -2, Noida. 201301. U.P.",
    icon: "📍",
  },
  {
    title: "Phone",
    content: "+91 8796931149",
    icon: "📞",
  },
  {
    title: "Email",
    content: "xiimbaattires@gmail.com",
    icon: "✉️",
  },
];

export default function BusinessInfo() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md"
          >
            Business Information
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading leading-tight"
          >
            Reach Us Directly
          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {info.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-md hover:bg-white/10 transition text-center"
            >

              {/* ICON */}
              <div className="text-2xl mb-4">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* CONTENT */}
              <p className="text-white/80 text-sm leading-relaxed">
                {item.content}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 
              bg-white/5 blur-xl transition rounded-2xl"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}