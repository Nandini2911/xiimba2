"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "Understanding your fabric requirements, design goals, and application needs.",
  },
  {
    title: "Sampling",
    desc: "Developing prototypes and samples to match your exact specifications.",
  },
  {
    title: "Production",
    desc: "Scaling efficiently with consistent quality and precision manufacturing.",
  },
];

export default function CustomDevelopment() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Custom Development
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-heading text-plumMid leading-tight mb-6"
          >
            From Concept to Creation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm md:text-base max-w-md mb-10"
          >
            We collaborate closely with brands to develop custom fabrics — 
            combining design, material expertise, and scalable production.
          </motion.p>

          {/* STEPS */}
          <div className="space-y-6">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >

                {/* DOT */}
                <div className="w-3 h-3 mt-2 rounded-full bg-plumMid"></div>

                {/* TEXT */}
                <div>
                  <h4 className="text-lg font-semibold text-plumMid mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE (IMAGE / VISUAL) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/image/custom-development1.webp"
              alt="Custom Fabric Development"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-plumMid/10 to-transparent rounded-2xl"></div>

        </motion.div>

      </div>
    </section>
  );
}