import React from "react";
import { motion } from "framer-motion";

const SKILLS_DATA = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    tagline:
      "Building high-performance client-side interfaces, custom layouts, and highly interactive viewports.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
    accent: "from-pink-500/20 to-transparent",
    border: "group-hover:border-pink-500/30",
    dot: "bg-pink-500",
  },
  {
    id: "backend",
    title: "Backend & Systems",
    tagline:
      "Constructing scalable server infrastructure, persistent database schemas, and secure API routes.",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"],
    accent: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/30",
    dot: "bg-purple-500",
  },
  {
    id: "tools",
    title: "Cloud & Deployment",
    tagline:
      "Managing professional version control pipelines, asset optimization wrappers, and cloud host clusters.",
    items: ["Git", "GitHub", "Vite", "Netlify", "Vercel"],
    accent: "from-cyan-500/20 to-transparent",
    border: "group-hover:border-cyan-500/30",
    dot: "bg-cyan-500",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full px-3 py-24 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden"
    >
      <div className="mx-auto max-w-5xl w-full space-y-10">
        {/* Header Block */}
        <div className="flex items-end justify-between border-b border-purple-950/40 pb-5">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest font-mono sm:text-xs">
              Technical Core
            </span>
            <h2 className="text-2xl font-black text-white sm:text-4xl tracking-tight">
              Skills & Expertise
            </h2>
          </div>
        </div>

        {/* 💻 FULL-WIDTH TIERED EXPOSURE STREAM */}
        <div className="flex flex-col gap-6 w-full">
          {SKILLS_DATA.map((row) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`group w-full rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-5 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300 bg-gradient-to-r ${row.accent} ${row.border}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
                {/* Left Metadata Branding (Takes 40% Width on Large Screens) */}
                <div className="space-y-2 lg:max-w-sm shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 rounded-full ${row.dot} animate-pulse`}
                    />
                    <h3 className="text-lg font-black text-white tracking-tight sm:text-xl">
                      {row.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed sm:text-sm">
                    {row.tagline}
                  </p>
                </div>

                {/* Right Large Skill Tags Collection (Takes 60% Width, Expanded Font Scale) */}
                <div className="flex flex-wrap gap-2 lg:justify-end items-center max-w-xl">
                  {row.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-neutral-950/90 px-4 py-3 font-mono text-xs font-bold text-white border border-neutral-800/80 shadow-md select-none transition-transform duration-200 hover:scale-103 hover:text-purple-300"
                    >
                      <span className="text-purple-500/40 font-normal mr-1.5">
                        #
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Overview Footer Panel */}
        {/* 💻 PREMIUM ACADEMIC TELEMETRY ROW (Perfectly matches your skill streams) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group w-full rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-5 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent hover:border-purple-500/30"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full">
            {/* Left Column: Academic Tracking Status */}
            <div className="space-y-2 lg:max-w-sm shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <h3 className="text-lg font-black text-white tracking-tight sm:text-xl">
                  University of Peshawar
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed sm:text-sm">
                Bachelor of Science in Computer Science (BSCS)
              </p>
            </div>

            {/* Right Column: High-Visibility Degree Status Tags */}
            <div className="flex flex-wrap gap-2 lg:justify-end items-center max-w-xl">
              <span className="rounded-lg bg-neutral-950/90 px-4 py-3 font-mono text-xs font-bold text-white border border-neutral-800/80 shadow-md select-none transition-transform duration-200 hover:scale-103 hover:text-purple-300">
                <span className="text-purple-500/40 font-normal mr-1.5">#</span>
                Computer_Science
              </span>
              <span className="rounded-lg bg-neutral-950/90 px-4 py-3 font-mono text-xs font-bold text-white border border-neutral-800/80 shadow-md select-none transition-transform duration-200 hover:scale-103 hover:text-purple-300">
                <span className="text-purple-500/40 font-normal mr-1.5">#</span>
                BSCS_Degree
              </span>
              <span className="rounded-lg bg-neutral-950/90 px-4 py-3 font-mono text-xs font-bold text-emerald-400 border border-neutral-800/80 shadow-md select-none transition-transform duration-200 hover:scale-103">
                <span className="text-emerald-500/30 font-normal mr-1.5">
                  ●
                </span>
                Completed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
