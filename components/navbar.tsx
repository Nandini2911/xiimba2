"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "./auth/AuthContext";
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Fabrics", href: "/ourfabrics" },
 
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6">

      {/* CONTAINER */}
      <div
        className={`w-full max-w-[1200px] mx-auto rounded-2xl border transition-all duration-500
        ${
          scrolled
            ? "bg-white/90 border-black/10 backdrop-blur-xl shadow-xl"
            : "bg-white/80 border-black/10 backdrop-blur-md"
        }`}
      >

        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 h-14 md:h-16">

        <Link href="/" className="flex items-center">
  <Image
    src="/image/logo1.png"
    alt="Xiimba Logo"
    width={160}
    height={60}
    priority
    className="h-10 md:h-12 w-auto object-contain"
  />
</Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8 font-heading text-[13px] xl:text-[14px]">

              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.name} className="relative group">
                    <Link href={link.href} className="relative px-2 py-1 block">

                      {/* TEXT */}
                      <span
                        className={`relative z-10 font-semibold transition-all duration-300
                        bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
                        bg-clip-text text-transparent
                        ${
                          isActive
                            ? "opacity-100 scale-105"
                            : "opacity-80 group-hover:opacity-100 group-hover:scale-105"
                        }`}
                      >
                        {link.name}
                      </span>

                      {/* UNDERLINE */}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px]
                        bg-gradient-to-r from-plumStart to-plumEnd
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />

                    </Link>
                  </li>
                );
              })}

            </ul>
          </nav>

          {/* LOGIN/LOGOUT BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm font-semibold text-gray-700">Hello, {user.name}</span>
                {user.role === 'customer' && (
                  <Link href="/tracking" className="px-4 py-2 bg-plumMid text-white rounded-lg hover:bg-plumEnd transition">
                    My Orders
                  </Link>
                )}
                {user.role === 'staff' && (
                  <Link href="/admin" className="px-4 py-2 bg-plumMid text-white rounded-lg hover:bg-plumEnd transition">
                    Admin Panel
                  </Link>
                )}
                <button onClick={logout} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-plumMid text-white rounded-lg hover:bg-plumEnd transition">
                Login
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[4px]"
          >
            <span className="w-6 h-[2px] bg-plumMid"></span>
            <span className="w-6 h-[2px] bg-plumMid"></span>
            <span className="w-6 h-[2px] bg-plumMid"></span>
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-6 pt-2">
            <ul className="flex flex-col gap-4 text-center font-heading text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2
                    bg-gradient-to-r from-plumStart via-plumMid to-plumEnd 
                    bg-clip-text text-transparent font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                {user ? (
                  <>
                    <span className="block py-2 text-gray-700">Hello, {user.name}</span>
                    {user.role === 'customer' && (
                      <Link href="/tracking" onClick={() => setMenuOpen(false)} className="block py-2 bg-plumMid text-white rounded-lg text-center">
                        My Orders
                      </Link>
                    )}
                    {user.role === 'staff' && (
                      <Link href="/admin" onClick={() => setMenuOpen(false)} className="block py-2 bg-plumMid text-white rounded-lg text-center">
                        Admin Panel
                      </Link>
                    )}
                    <button onClick={() => { logout(); setMenuOpen(false); }} className="block py-2 bg-gray-500 text-white rounded-lg text-center w-full">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="block py-2 bg-plumMid text-white rounded-lg text-center">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}