"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Design & Development",
      desc: "Understanding client needs and developing custom fabric solutions.",
    },
    {
      title: "Weaving",
      desc: "High-quality fabric production using advanced weaving infrastructure.",
    },
    {
      title: "Processing",
      desc: "Dyeing, printing, and finishing with precision and consistency.",
    },
    {
      title: "Delivery",
      desc: "Timely delivery supported by strong logistics and supply chain.",
    },
  ];

  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 
        w-[700px] h-[700px] bg-gradient-to-r from-plumStart to-plumEnd 
        opacity-10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl font-heading mb-20
        bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
        bg-clip-text text-transparent">
          From Concept to Fabric Delivery
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="relative group h-full"
            >

              {/* GLOW BEHIND CARD */}
              <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-br from-plumStart to-plumEnd 
              blur-xl opacity-20 group-hover:opacity-30 transition" />

              {/* CARD */}
              <div className="relative flex flex-col justify-between 
              h-[260px] p-8 rounded-2xl
              bg-gradient-to-br from-plumStart via-plumMid to-plumEnd
              text-white
              shadow-[0_20px_50px_rgba(59,28,63,0.2)]
              hover:-translate-y-2
              transition-all duration-500">

                {/* TOP */}
                <div>
                  <div className="text-4xl font-heading font-bold mb-4 opacity-25">
                    0{i + 1}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="h-[3px] w-10 
                bg-gradient-to-r from-accent1 to-accent2 
                group-hover:w-16 transition-all duration-500" />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}