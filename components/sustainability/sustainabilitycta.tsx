"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SustainabilityCTA() {
  return (
    <section className="w-full py-32 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-6xl mx-auto">

        {/* CTA CARD */}
        <div className="relative p-10 md:p-14 rounded-3xl 
        bg-white border border-gray-200 shadow-sm overflow-hidden">

          {/* SOFT GLOW */}
          <div className="absolute top-[-80px] right-[-60px] w-[250px] h-[250px] 
          bg-plumMid/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-heading text-plumMid leading-tight mb-4"
              >
                Build with Responsible Fabrics
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-600 text-sm md:text-base max-w-md"
              >
                Partner with Xiimba to create textile solutions that align with 
                your sustainability goals and performance expectations.
              </motion.p>

            </div>

            {/* RIGHT BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 md:justify-end"
            >


<div className="flex gap-4">

  {/* PRIMARY → PROJECT */}
  <Link
    href="/contact?intent=project"
    className="px-8 py-3 rounded-full 
    bg-plumMid text-white text-sm tracking-wide 
    hover:bg-plumEnd transition shadow-md inline-block"
  >
    Start a Project
  </Link>

  {/* SECONDARY → GENERAL CONTACT */}
  <Link
    href="/contact?intent=general"
    className="px-8 py-3 rounded-full 
    border border-plumMid text-plumMid text-sm tracking-wide 
    hover:bg-plumMid hover:text-white transition inline-block"
  >
    Contact Us
  </Link>

</div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}