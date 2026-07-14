import React from "react";
import { motion } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
const PROJECTS_DATA = [
  {
    id: 1,
    title: "TrackStack",
    description:
      "A high-fidelity frontend management dashboard designed for e-commerce store synchronization. Features optimized client-side state architecture to mock multi-store inventory, order pipelines, and store status updates in a responsive workspace",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: project1,
    liveLink: "https://track-stack-azure.vercel.app/",
    accent: "#ec4899", // Pink highlight to match right-side gradient glow
  },
  {
    id: 2,
    title: "FINANCE DASHBOARD",
    description:
      " A mobile-first, high-speed dashboard engineered for seamless personal asset management and predictive cash flow telemetry.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Material UI"],
    image: project2,
    liveLink: "HTTPS://FINANCE-DASHBOARD-ETA-WELD.VERCEL.APP/",
    accent: "#06b6d4", // Cyber Cyan highlight
  },
  {
    id: 3,
    title: "SOFTWARE AS A SERVICE",
    description: "DESIGNED A MODERN, MOBILE-FIRST SAAS FOCUSED ON PERFORMANCE",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: project3,
    liveLink: "https://saa-s-project-beta.vercel.app/",
    accent: "#a855f7", // Deep Purple highlight
  },
  {
    id: 4,
    title: "E-COMMERCE STORE",
    description:
      "Built A MODERN, MOBILE-FIRST E-COMMERCE STORE FOCUSED ON PERFORMANCE",
    tags: ["React", "Tailwind CSS"],
    image: project4,
    liveLink: "https://lumina-luxe-mu.vercel.app/",
    accent: "#ec4899",
  },
  {
    id: 5,
    title: "ABHEE ARIA",
    description:
      "A sleek, modern web platform engineered to elevate local brand visibility and turn web traffic into foot traffic.",
    tags: ["HTML", " CSS"],
    image: project5,
    liveLink: "https://ui-theme-seven.vercel.app/",
    accent: "#06b6d4", // Deep Purple highlight
  },
  {
    id: 6,
    title: "ABHEE ARIA",
    description:
      "A high-speed, minimalist single-page layout crafted for maximum visual impact and instant reader retention.",
    tags: ["HTML", " CSS"],
    image: project6,
    liveLink: "https://client-project-livid.vercel.app/",
    accent: "#a855f7", // Deep Purple highlight
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full px-4 py-24 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden"
    >
      <div className="mx-auto max-w-5xl w-full space-y-12">
        {/* Header Block */}
        <div className="flex items-end justify-between border-b border-purple-950/40 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
              Exhibition Matrix
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="hidden sm:block font-mono text-[11px] text-purple-300/40 bg-purple-950/20 border border-purple-900/30 rounded-full px-4 py-1.5">
            PRODUCTION: <span className="text-emerald-400 font-bold">LIVE</span>
          </div>
        </div>

        {/* Asymmetric Responsive Grid Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-5 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Clean Image Viewport Container */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover   transition-all duration-500 ease-out"
                  />
                </div>

                {/* Content Block */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed min-h-15">
                    {project.description}
                  </p>
                </div>

                {/* Clean Technology Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neutral-950/80 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-300 border border-neutral-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Layer Button Anchor */}
              <div className="mt-6 pt-4 border-t border-neutral-800/30 flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                  DEPLOY_ID.0{project.id}
                </span>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-2 font-mono text-xs font-semibold text-white border border-neutral-800/80 hover:bg-neutral-900 shadow-sm transition-all duration-200"
                  style={{
                    "--hover-accent": project.accent,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.accent;
                    e.currentTarget.style.boxShadow = `0 0 12px ${project.accent}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  View Project
                  <span
                    className="text-[10px]"
                    style={{ color: project.accent }}
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
