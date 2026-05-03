"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // At the very top of the page
      setAtTop(currentY < 20);

      // Hide when scrolling DOWN more than 8px, show when scrolling UP
      if (delta > 8 && currentY > 80) {
        setHidden(true);
        setMenuOpen(false);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill navbar wrapper */}
      <div
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 transition-transform duration-500 ease-in-out",
          hidden ? "-translate-y-[130%]" : "translate-y-0"
        )}
      >
        <header
          className={cn(
            "w-full max-w-3xl rounded-full transition-all duration-300",
            atTop
              ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
              : "bg-[rgba(15,15,30,0.72)] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
          )}
        >
          <nav className="flex items-center justify-between px-6 h-14">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-sm tracking-widest uppercase flex items-center gap-2 group"
            >
              <span
                className={cn(
                  "transition-colors duration-300",
                  atTop ? "text-foreground" : "text-white"
                )}
              >
                MY
              </span>
              <span
                className={cn(
                  "font-black transition-colors duration-300",
                  atTop ? "text-primary" : "text-[#6C8EFF]"
                )}
              >
                PORTFOLIO
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full font-medium transition-all duration-200",
                      atTop
                        ? "text-foreground/70 hover:text-foreground hover:bg-black/5"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              className={cn(
                "md:hidden p-2 rounded-full transition-colors duration-200",
                atTop ? "hover:bg-black/5" : "hover:bg-white/10"
              )}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={cn(
                  "block w-5 h-0.5 mb-1.5 rounded-full transition-all duration-300",
                  menuOpen ? "rotate-45 translate-y-2" : "",
                  atTop ? "bg-foreground" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 mb-1.5 rounded-full transition-all duration-300",
                  menuOpen ? "opacity-0 scale-x-0" : "",
                  atTop ? "bg-foreground" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 rounded-full transition-all duration-300",
                  menuOpen ? "-rotate-45 -translate-y-2" : "",
                  atTop ? "bg-foreground" : "bg-white"
                )}
              />
            </button>
          </nav>

          {/* Mobile dropdown */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              menuOpen ? "max-h-64 pb-4" : "max-h-0"
            )}
          >
            <ul className="flex flex-col gap-1 px-4 pt-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 rounded-full font-medium transition-all duration-200",
                      atTop
                        ? "text-foreground/70 hover:text-foreground hover:bg-black/5"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
