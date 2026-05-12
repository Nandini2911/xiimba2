"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf7fb] px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-heading font-bold tracking-[0.2em] text-charcoal mb-4">
              XIIMBA
            </h2>

            <p className="text-sm text-charcoal/70 leading-relaxed max-w-xs">
              Intelligent textile manufacturing driven by design, precision,
              and scalability.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-charcoal mb-4 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-charcoal/70">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "What We Do", href: "/what-we-do" },
                { name: "Our Fabrics", href: "/ourfabrics" },
                { name: "Sustainability", href: "/sustainability" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-charcoal transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-charcoal mb-4 tracking-wide">
              Contact
            </h3>

            <p className="text-sm text-charcoal/70 leading-relaxed">
              B-32, 4th Floor, Sector -2,
              <br />
              Noida – 201301,
              <br />
              Uttar Pradesh, India
            </p>

            <p className="text-sm text-charcoal/70 mt-4">
              Email: xiimbaattires@gmail.com
            </p>

            <p className="text-sm text-charcoal/70">
              Phone: +91 8796931149
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/60 gap-2">

          <p>
            © {new Date().getFullYear()} Xiimba Attire Intelligence LLP. All
            rights reserved.
          </p>

          <p>
             developed by{" "}
            <a
              href="https://dtsworld.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition font-medium"
            >
              Double Trouble Studio
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}