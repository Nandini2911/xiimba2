"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Deep Textile Expertise",
    desc: "Rooted in Ichalkaranji’s legacy, we bring generations of weaving knowledge into modern production.",
  },
  {
    title: "Modern Manufacturing",
    desc: "Advanced machinery and intelligent systems ensure precision, consistency, and scalability.",
  },
  {
    title: "Quality First Approach",
    desc: "Every fabric undergoes strict quality control to meet global standards and expectations.",
  },
  {
    title: "Scalable Solutions",
    desc: "From small batches to bulk production, we adapt seamlessly to your business needs.",
  },
];

export default function WhyyXiimba() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      <div className="max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* BUTTON LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            bg-white/10 border border-white/20 
            rounded-full backdrop-blur-md text-white"
          >
            Why Xiimba
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading leading-tight text-white"
          >
            What Sets Us Apart
          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-8">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/20 
              rounded-xl p-6 hover:border-white/40 transition"
            >

              {/* NUMBER */}
              <span className="absolute top-4 right-5 text-4xl font-bold text-white/10">
                {`0${i + 1}`}
              </span>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}