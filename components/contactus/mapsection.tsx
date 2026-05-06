"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-7xl mx-auto relative">

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps?q=B-32,4th Floor,Sector-2,Noida,201301&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>

        {/* OVERLAY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block absolute bottom-6 left-6 
          bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-xs"
        >

          <h3 className="text-lg font-semibold text-plumMid mb-2">
            Xiimba Attire Intelligence LLP
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            B-32, 4th Floor, Sector -2,
            <br />
            Noida – 201301,
            <br />
            Uttar Pradesh, India
          </p>

          <a
            href="https://www.google.com/maps?q=B-32,4th Floor,Sector-2,Noida,201301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-plumMid font-medium hover:underline"
          >
            View on Google Maps →
          </a>

        </motion.div>

      </div>
    </section>
  );
}