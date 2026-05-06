"use client";

import { motion } from "framer-motion";

export default function WhyXiimba() {
  const points = [
    {
      title: "Design-Led Manufacturing",
      desc: "Creative fabric development aligned with modern brand needs.",
    },
    {
      title: "Integrated Value Chain",
      desc: "Seamless control from weaving to processing.",
    },
    {
      title: "Scalable Production",
      desc: "Infrastructure built for domestic and global demand.",
    },
    {
      title: "Quality & Precision",
      desc: "Consistent output backed by strong quality systems.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-lightStart py-32 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* TAG */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.25em] uppercase 
          bg-gradient-to-r from-plumStart to-plumEnd 
          text-white rounded-full"
        >
          Why Xiimba
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-heading mb-20
          bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
          bg-clip-text text-transparent"
        >
          Built for Scale.
          <br />
          Designed for Excellence.
        </motion.h2>

        {/* FEATURES */}
        <div className="grid md:grid-cols-4 gap-10">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="group text-center"
            >

              {/* NUMBER */}
              <div className="text-4xl font-heading font-bold mb-4
              bg-gradient-to-r from-plumStart to-plumEnd 
              bg-clip-text text-transparent">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.desc}
              </p>

              {/* LINE */}
              <div className="mt-6 h-[2px] w-8 mx-auto 
              bg-gradient-to-r from-plumStart to-plumEnd
              group-hover:w-14 transition-all duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}