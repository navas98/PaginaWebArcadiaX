"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/text/links";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-black/40 backdrop-blur" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className="nes-text is-error tracking-widest text-sm">
            ARCADIAX
          </span>
         
        </Link>

        {/* LINKS HUD */}
        <ul className="hidden md:flex items-center gap-5">
          {links.map((link, index) => (
            <li key={link.href} className="flex items-center gap-5">
              <Link href={link.href}>
                <span
                  className="
                    nes-text is-disabled tracking-widest text-sm
                    hover:is-success transition-colors
                  "
                >
                  {link.label.toUpperCase()}
                </span>
              </Link>

              {/* Separador */}
              {index < links.length - 1 && (
                <span className="nes-text is-warning tracking-widest text-sm">
                  |
                </span>
              )}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};
