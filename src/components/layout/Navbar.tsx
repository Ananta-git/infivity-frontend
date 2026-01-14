"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Our Program", href: "#programs" },
  { title: "About Us", href: "#hero" }, // can point to hero or custom section
  { title: "Our Services", href: "#programs" },
  { title: "Contact Us", href: "#contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="
  fixed top-0 w-full z-50
  bg-white/70 backdrop-blur-xl
  border-b border-black/5
  ">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[color:var(--color-primary)] text-xl font-bold tracking-wide">
          INFIVITY
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.title} className="hover:text-primary transition cursor-pointer">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Login */}
        <button className="
          rounded-xl
          bg-[color:var(--color-accent)]
          px-4 py-2
          text-black
          font-medium
          hover:brightness-105
          transition
        ">
          Login
        </button>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden text-xl bg-[color:var(--color-bg)] border-t border-[color:var(--color-gold-soft)/20]"
          >
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item.title} className="hover:text-[color:var(--color-gold-soft)] cursor-pointer transition" onClick={() => setOpen(false)}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
            <button className="mt-2 ...">Login</button>
          </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
