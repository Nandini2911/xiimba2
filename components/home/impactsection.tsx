"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  const items = [
    {
      title: "Woven Fabrics",
      desc: "Cotton, polyester blends, viscose and custom weave developments.",
      img: "/image/woven-fabric.webp",
    },
    {
      title: "Processed Fabrics",
      desc: "Dyed, printed and finished textiles with high precision.",
      img: "/image/processed-fabrics.webp",
    },
    {
      title: "Custom Development",
      desc: "Tailored fabric solutions for modern fashion brands.",
      img: "/image/custom-development.webp",
    },
    {
      title: "Bulk Production",
      desc: "Scalable manufacturing for domestic and export markets.",
      img: "/image/banner.webp",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-lightStart py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TEXT BLOCK */}
        <div className="mb-20 max-w-2xl">

          {/* TAG */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 px-5 py-2 text-[11px] tracking-[0.25em] uppercase 
            bg-gradient-to-r from-plumStart to-plumEnd 
            text-white rounded-full shadow-md"
          >
            Our Capabilities
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading leading-tight mb-6
            bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
            bg-clip-text text-transparent"
          >
            Fabric Solutions Built
            <br />
            for Scale & Precision
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-charcoal/80 text-[15px] leading-relaxed"
          >
            From weaving to finishing, Xiimba delivers complete textile solutions
            tailored for modern brands and global markets.
          </motion.p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl 
              border border-gray-200 bg-white shadow-sm
              hover:shadow-xl transition-all duration-500"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[340px] object-cover 
                transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 
              bg-gradient-to-t from-black/60 via-black/20 to-transparent 
              opacity-70 group-hover:opacity-90 transition duration-500" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-6">

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500">
                  {item.desc}
                </p>

              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-xl border border-transparent 
              group-hover:border-plumMid/40 transition duration-500"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}