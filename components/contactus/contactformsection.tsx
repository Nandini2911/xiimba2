"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setLoading(true);
    setSuccess("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      fabricType: formData.get("fabricType"),
      quantity: formData.get("quantity"),
      application: formData.get("application"),
      timeline: formData.get("timeline"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("Message sent successfully ✅");
        form.reset();
      } else {
        setSuccess(result.error || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Error sending message ❌");
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-32 px-6 md:px-20 bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl font-heading text-plumMid mb-6">
            Start Your Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input name="name" required placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg" />

            <input name="email" type="email" required placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg" />

            <input name="phone" required placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg" />

            {/* Fabric Type */}
            <select name="fabricType" className="w-full px-4 py-3 border rounded-lg">
              <option value="">Select Fabric Type</option>
              <option>Woven Fabrics</option>
              <option>Cotton Fabrics</option>
              <option>Polyester Blends</option>
              <option>Viscose & Blends</option>
              <option>Custom Development</option>
            </select>

            {/* Application */}
            <select name="application" className="w-full px-4 py-3 border rounded-lg">
              <option value="">Application</option>
              <option>Shirting</option>
              <option>Suiting</option>
              <option>Ethnic Wear</option>
              <option>Technical Textile</option>
            </select>

            {/* Quantity */}
            <input name="quantity" placeholder="Quantity (e.g. 5000 meters)"
              className="w-full px-4 py-3 border rounded-lg" />

           

            <textarea name="message" rows={4} placeholder="Additional Details"
              className="w-full px-4 py-3 border rounded-lg" />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-plumMid text-white hover:bg-plumEnd"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {success && <p className="text-sm text-green-600">{success}</p>}

          </form>
        </motion.div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-3xl font-heading text-plumMid mb-4">
            Let’s Build Your Fabric Solution
          </h3>
          <p className="text-gray-600">
            Tell us your requirements and our team will get back within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
}