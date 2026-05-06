"use client";

import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Fashion & Apparel",
      desc: "Fabric solutions for modern fashion brands and garment manufacturers.",
    },
    {
      title: "Lifestyle & Home Textiles",
      desc: "Premium fabrics for home furnishings and decor.",
    },
    {
      title: "Uniforms & Workwear",
      desc: "Durable textiles for uniforms and industrial wear.",
    },
    {
      title: "Export & Global Markets",
      desc: "Supporting international clients with scalable production.",
    },
    {
      title: "Emerging Applications",
      desc: "Innovative textile solutions for new-age use cases.",
    },
  ];

  return (
   <section className="relative bg-gradient-to-b from-white to-lightStart -mt-32 z-20 py-16 px-6 overflow-hidden">
      {/*  SOFT BACKGROUND GLOW (TOP) */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 
      w-[700px] h-[700px] bg-gradient-to-r from-accent1 to-accent2 
      opacity-10 blur-[150px] rounded-full" />

      {/* SIDE GLOW */}
      <div className="absolute bottom-[-120px] right-[-80px] 
      w-[400px] h-[400px] bg-plumMid 
      opacity-10 blur-[120px] rounded-full" />

      {/*  VERY SUBTLE RADIAL TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] 
      bg-[radial-gradient(circle_at_20%_30%,#000_1px,transparent_1px)] 
      [background-size:30px_30px]" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* TAG BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 px-6 py-2 text-[11px] tracking-[0.25em] uppercase 
          bg-gradient-to-r from-plumStart to-plumEnd 
          text-white rounded-full shadow-md hover:opacity-90 transition"
        >
          Industries
        </motion.button>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-heading mb-20
          bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
          bg-clip-text text-transparent"
        >
          Industries We Serve
        </motion.h2>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {industries.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl text-center
              bg-gradient-to-br from-lightMid to-lightEnd
              border border-plumMid/20
              shadow-md
              hover:shadow-[0_20px_60px_rgba(59,28,63,0.15)]
              hover:-translate-y-2
              transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-3 text-charcoal">
                {item.title}
              </h3>

              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-5 h-[2px] w-10 mx-auto 
              bg-gradient-to-r from-plumStart to-plumEnd
              group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-center gap-8 flex-wrap">
          {industries.slice(3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group w-full md:w-[30%] p-8 rounded-2xl text-center
              bg-gradient-to-br from-lightMid to-lightEnd
              border border-plumMid/20
              shadow-md
              hover:shadow-[0_20px_60px_rgba(59,28,63,0.15)]
              hover:-translate-y-2
              transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-3 text-charcoal">
                {item.title}
              </h3>

              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-5 h-[2px] w-10 mx-auto 
              bg-gradient-to-r from-plumStart to-plumEnd
              group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}