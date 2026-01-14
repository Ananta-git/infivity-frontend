"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // Motion values for cursor (initially zero)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springed motion for rotateX/Y
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  // Only enable cursor tracking on client
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      // Normalize cursor to range [-10, 10]
      const x = (e.clientX / window.innerWidth) * 20 - 10;
      const y = 10 - (e.clientY / window.innerHeight) * 20;

      rotateX.set(y);
      rotateY.set(x);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [rotateX, rotateY]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0 flex justify-center"
      >
        <div className="w-[500px] h-[500px] bg-[color:var(--color-gold)] opacity-10 blur-[120px] rounded-full mt-[-100px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Igniting Infinite Creativity <br />
          <span className="text-[color:var(--color-gold-soft)]">
            From Childhood
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-base md:text-lg opacity-80"
        >
          Empowering young minds with coding, AI, robotics,
          and future-ready digital skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button className="rounded-2xl bg-[color:var(--color-gold)] px-6 py-3 text-black font-medium hover:scale-105 transition">
            Explore Programs
          </button>

          <button className="rounded-2xl border border-[color:var(--color-gold)] px-6 py-3 hover:bg-[color:var(--color-gold)] hover:text-black transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
