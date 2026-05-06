"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/image/banner1.webp",
    subtitle: "For Brands & Exporters",
    title: "Bulk Fabric Manufacturing\nWith Precision & Scale",
    desc: "High-quality woven and processed fabrics with scalable production, fast turnaround, and global standards.",
  },
  {
    image: "/image/banner3.webp",
    subtitle: "End-to-End Textile Solutions",
    title: "From Yarn To\nFinished Fabric",
    desc: "Integrated weaving, dyeing, and finishing — built for consistent quality and large-scale production.",
  },
  {
    image: "/image/fabric1.webp",
    subtitle: "Custom Fabric Development",
    title: "Engineered For Brands.\nBuilt For Scale.",
    desc: "From cotton to blends, we support fashion brands with sampling, customization, and bulk manufacturing.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGES */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="fabric"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
            ${
              index === current
                ? "translate-x-0 scale-105"
                : index < current
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>

    

      {/* CONTENT */}
      <div className="absolute inset-0 z-[2] flex items-center px-6 md:px-16">

        <div key={current} className="max-w-xl text-black">

          {/* SUBTITLE */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 opacity-80 animate-slideDown delay-1">
            {slides[current].subtitle}
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-heading leading-tight mb-6 whitespace-pre-line">
            {slides[current].title.split("\n").map((line, i) => (
              <span
                key={i}
                className={`block animate-slideDown delay-${i + 2}`}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base leading-relaxed mb-8 opacity-90 animate-slideDown delay-4">
            {slides[current].desc}
          </p>

     

<div className="flex gap-4">

  <Link
    href="/contact"
    className="bg-[#3b1c3f] text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition inline-block"
  >
    Get Quote
  </Link>

  <Link
    href="/contact"
    className="border border-[#3b1c3f] text-[#3b1c3f] px-6 py-3 text-sm tracking-wide hover:bg-[#3b1c3f] hover:text-white transition inline-block"
  >
    Request Sample
  </Link>

</div>

          {/* TRUST LINE */}
          <p className="text-xs mt-4 opacity-80 animate-slideDown delay-6">
            MOQ starting from 100 meters • Fast delivery • Export ready
          </p>

        </div>

      </div>

    </section>
  );
}