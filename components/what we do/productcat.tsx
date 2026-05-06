"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Woven Fabrics",
    items: [
      "Cotton fabrics",
      "Polyester blends",
      "Viscose and blended fabrics",
      "Custom weave developments",
    ],
  },
  {
    title: "Processed Fabrics",
    items: [
      "Dyed fabrics",
      "Printed fabrics",
      "Finished and treated textiles",
    ],
  },
  {
    title: "Specialized Offerings",
    items: [
      "Fabric development for fashion brands",
      "Bulk production for domestic and export markets",
      "Customization based on client requirements",
    ],
  },
  {
    title: "Manufacturing & Capabilities",
    items: [
      "Advanced weaving infrastructure",
      "Modern processing techniques",
      "Scalable production systems",
      "Strict quality control",
    ],
  },
];

export default function ProductCat() {
  return (
    <section className="w-full py-24 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd">

      <div className="max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            bg-white/10 border border-white/20 
            rounded-full backdrop-blur-md"
          >
            Product Categories
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading leading-tight"
          >
            Comprehensive Fabric Solutions
          </motion.h2>

        </div>

        {/* CATEGORY GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/20 
              rounded-xl p-8"
            >

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-5">
                {cat.title}
              </h3>

              {/* LIST */}
              <ul className="space-y-3">

                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-white"
                  >
                    {/* DOT */}
                    <span className="w-2 h-2 mt-2 rounded-full bg-white"></span>

                    {item}
                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}