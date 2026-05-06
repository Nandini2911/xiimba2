"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd overflow-hidden">

      {/* SOFT GLOW */}
      <div className="absolute top-[-120px] right-[-80px] 
      w-[300px] sm:w-[400px] md:w-[500px] 
      h-[300px] sm:h-[400px] md:h-[500px] 
      bg-accent1/20 blur-[120px] sm:blur-[140px] 
      rounded-full opacity-40"></div>

      <div className="relative max-w-7xl mx-auto 
      grid grid-cols-1 md:grid-cols-2 
      gap-12 md:gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* TAG */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase 
            bg-white/10 text-white border border-white/20 
            rounded-full backdrop-blur-md"
          >
            About Xiimba
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-heading leading-tight mb-6 md:mb-8 text-white"
          >
            Where Craft Meets
            <br />
            Intelligent Manufacturing
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-[14px] sm:text-[15px] 
            leading-relaxed max-w-md mx-auto md:mx-0"
          >
            Built in the textile hub of Ichalkaranji, Xiimba blends traditional weaving expertise 
            with modern manufacturing intelligence to deliver scalable, high-quality fabric solutions 
            for global brands.
          </motion.p>

        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {[
            {
              title: "Design-Led",
              desc: "Fabric development tailored for modern brands.",
            },
            {
              title: "Scalable",
              desc: "Efficient systems for large-scale production.",
            },
            {
              title: "Global",
              desc: "Serving domestic and export markets.",
            },
            {
              title: "Integrated",
              desc: "End-to-end textile solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="group p-6 sm:p-8 rounded-xl 
              bg-white/5 backdrop-blur-lg
              border border-white/10
              hover:border-accent1/40
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(255,106,136,0.15)]
              transition-all duration-500"
            >

              {/* TITLE */}
              <h3 className="text-white font-semibold mb-2 sm:mb-3 
              text-base sm:text-lg tracking-wide">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              {/* LINE */}
              <div className="mt-3 sm:mt-4 h-[2px] w-0 
              bg-gradient-to-r from-accent1 to-accent2 
              transition-all duration-500 group-hover:w-12"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}