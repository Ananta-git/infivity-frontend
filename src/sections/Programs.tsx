"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Mic,
  Brain,
  LineChart,
  Globe,
  Megaphone,
  Video,
  Palette,
  BarChart3,
  Bot,
} from "lucide-react";

const leftPrograms = [
  { title: "Coding", icon: Code },
  { title: "Apps Development", icon: Smartphone },
  { title: "IoT Robotics", icon: Cpu },
  { title: "Public Speaking", icon: Mic },
  { title: "Artificial Intelligence", icon: Brain },
  { title: "Machine Learning", icon: LineChart },
];

const rightPrograms = [
  { title: "Web & App Development", icon: Globe },
  { title: "Digital Marketing", icon: Megaphone },
  { title: "Video Editing", icon: Video },
  { title: "Graphics Design", icon: Palette },
  { title: "Business Analytics", icon: BarChart3 },
  { title: "Chatbot Integration", icon: Bot },
];

function ProgramCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 420 }}
      className="group relative rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 border border-[color:var(--color-gold-soft)/20] hover:border-[color:var(--color-gold)] transition"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute -inset-px rounded-2xl bg-[color:var(--color-gold)] opacity-[0.08] blur-xl" />
      </div>


      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-gold-soft)/30]">
          <Icon size={20} />
        </div>

        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our Programs
          </h2>
          <p className="mt-4 opacity-80 max-w-2xl mx-auto">
            Carefully designed programs to build creativity,
            confidence, and future-ready digital skills.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {leftPrograms.map((item) => (
              <ProgramCard key={item.title} title={item.title} icon={item.icon} />
            ))}
          </motion.div>


          {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {rightPrograms.map((item) => (
            <ProgramCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </motion.div>

        </div>
      </div>
    </section>
  );
}
