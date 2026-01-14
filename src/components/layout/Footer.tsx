'use client';

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="mt-32">
      {/* Contact Strip */}
      <div className="bg-[color:var(--color-gold)] text-black">
        <div className="mx-auto max-w-7xl px-6 py-6 grid gap-4 md:grid-cols-4 text-sm font-medium">
          <div>
            📞 <span className="ml-1">023-590843</span>
          </div>
          <div>
            🌐 <span className="ml-1">www.infivity.com.np</span>
          </div>
          <div>
            ✉️ <span className="ml-1">infivity.lab@gmail.com</span>
          </div>
          <div>
            💬 <span className="ml-1">+977 976010057</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[color:var(--color-primary)] border-t border-[color:var(--color-gold-soft)/20]">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80"
        >
        <p>© {new Date().getFullYear()} INFIVITY. All rights reserved.</p>
        <p>Igniting Infinite Creativity From Childhood</p>
        </motion.div>
      </div>
    </footer>
  );
}
