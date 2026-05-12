"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Sanjay Sharma",
    role: "Designated Partner",
    image: "/image/leader1.png",
  },
  {
    name: "Vikram Jugalkishor Agarwal",
    role: "Designated Partner",
    image: "/image/leader2.jpeg",
  },
];

export default function Leadership() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
          border border-plumMid/30 rounded-full 
          bg-white/60 backdrop-blur-sm text-plumMid"
        >
          Leadership
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading leading-tight text-plumMid mb-12"
        >
          Leadership Driving Xiimba Forward
        </motion.h2>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-center gap-10">

          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[320px] bg-white/70 backdrop-blur-md 
              border border-gray-200 rounded-2xl overflow-hidden 
              shadow-sm hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <div className="w-full h-[280px] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-plumMid mb-1">
                  {leader.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {leader.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}