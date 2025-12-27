"use client";

import { useEffect, useState } from "react";
import {links} from "@/text/links";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur bg-black/60" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="font-orbitron tracking-widest text-[#F5F5F5]">
          <a href="#">ARCADIAX</a>
        </span>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-[#8A8A8A]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#00FF9C] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};
