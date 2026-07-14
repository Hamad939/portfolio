import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your image module asset directly so Vite hashes it perfectly for production
import certificate from "../../assets/certificate.jpeg";

const EXPERIENCE_LOG = [
  {
    id: 1,
    role: "Web Developer",
    company: "Freelancer.com",
    period: "2025 - Present",
    hasCertificate: false,
    certificateAsset: null,
    accent: "#ec4899", // Vivid Pink to blend with your background layout
    achievements: [
      "Engineered 5 custom user interface architectures, optimizing cross-platform layout responsiveness.",
      "Translated client system specifications into clean, semantically structured React components.",
      "Integrated active application states utilizing core modern Tailwind and CSS variables.",
      "Managed rapid pipeline deployments on remote hosting spaces with zero routing errors.",
    ],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "TEYZIX CORE",
    period: "2026",
    hasCertificate: true,
    certificateAsset: certificate,
    accent: "#a855f7", // Deep Purple Accent
    achievements: [
      "Gained hands-on experience in the Software Development Life Cycle under industry mentorship.",
      "Contributed to building modern frontend layouts, user-friendly forms, and reusable component blocks.",
      "Assisted in debugging interface layouts to maintain high cross-device rendering consistency.",
      "Wrote clean, efficient, and well-documented client code adhering to modern web practices.",
    ],
  },
];

export default function Experience() {
  const [modalImage, setModalImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const commitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      className="relative w-full px-4 py-24 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden"
    >
      <div className="mx-auto max-w-4xl w-full space-y-12">
        {/* Header Block */}
        <div className="flex items-end justify-between border-b border-purple-950/40 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
              Professional Journey
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
              Engineering History
            </h2>
          </div>
        </div>

        {/* Git-Log Vertical Timeline Layer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="relative border-l border-neutral-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12"
        >
          {EXPERIENCE_LOG.map((job) => (
            <motion.div
              key={job.id}
              variants={commitVariants}
              className="relative group space-y-4"
            >
              {/* Animated Core Timeline Node */}
              <span
                className="absolute -left-[31px] md:-left-[46px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 border-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: job.accent,
                  boxShadow: `0 0 10px ${job.accent}40`,
                }}
              />

              {/* Job Header Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/40 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {job.role}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-400 font-mono mt-0.5 sm:mt-0 sm:inline sm:before:content-['@'] sm:before:mx-2">
                    {job.company}
                  </p>
                </div>
                <span
                  className="font-mono text-xs font-bold px-3 py-1 rounded-md self-start sm:self-auto shadow-sm border"
                  style={{
                    color: job.accent,
                    backgroundColor: `${job.accent}08`,
                    borderColor: `${job.accent}20`,
                  }}
                >
                  {job.period}
                </span>
              </div>

              {/* Clean Structured Bullet Feed */}
              <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
                {job.achievements.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 group/bullet"
                  >
                    <span
                      className="font-mono text-xs mt-0.5 select-none transition-colors duration-200"
                      style={{ color: job.accent }}
                    >
                      #
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Action Layer: Document Viewer Trigger */}
              {job.hasCertificate && (
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setModalImage(job.certificateAsset)}
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 font-mono text-xs font-semibold text-white shadow-sm hover:bg-neutral-900 transition-all duration-200 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = job.accent;
                      e.currentTarget.style.boxShadow = `0 0 12px ${job.accent}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    View Certificate
                    <span className="text-[10px]" style={{ color: job.accent }}>
                      &rarr;
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glassmorphic Lightbox Modal Overlay */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full flex flex-col items-center gap-4"
            >
              {/* Floating Close Trigger */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute -top-10 right-0 font-mono text-xs font-bold text-neutral-400 hover:text-white cursor-pointer transition-colors"
              >
                Close ×
              </button>

              <img
                src={modalImage}
                alt="Certificate Verification Frame"
                className="w-full max-h-[75vh] object-contain rounded-xl border border-neutral-800 shadow-2xl"
              />

              <p className="font-mono text-xs text-neutral-400 tracking-wider text-center mt-2">
                Verified Internship Document
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
