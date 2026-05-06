"use client";

import { motion } from "framer-motion";

const fabrics = [
  {
    name: "Cotton Twill",
    gsm: "180 GSM",
    comp: "100% Cotton",
    status: "In Stock",
    image: "/image/fabric1.webp",
  },
  {
    name: "Polyester Blend",
    gsm: "200 GSM",
    comp: "Poly-Cotton",
    status: "Limited",
    image: "/image/fabric2.webp",
  },
  {
    name: "Viscose Fabric",
    gsm: "160 GSM",
    comp: "Viscose Blend",
    status: "In Stock",
    image: "/image/fabric3.webp",
  },
  {
    name: "Cotton Satin",
    gsm: "150 GSM",
    comp: "Cotton Blend",
    status: "In Stock",
    image: "/image/fabric4.webp",
  },
];

export default function StockFabricGrid() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 px-5 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Available Stock
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading text-plumMid"
          >
            Explore Fabric Inventory
          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {fabrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition duration-500"
                />

                {/* STATUS BADGE */}
                <div className={`absolute top-3 left-3 px-3 py-1 text-[10px] uppercase rounded-full 
                  ${item.status === "In Stock" 
                    ? "bg-green-500 text-white" 
                    : "bg-yellow-400 text-black"}`}
                >
                  {item.status}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-md font-semibold text-plumMid mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-600 mb-1">
                  {item.gsm}
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  {item.comp}
                </p>

                {/* CTA */}
                <button className="text-xs text-plumMid font-medium 
                hover:underline">
                  View Details →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}