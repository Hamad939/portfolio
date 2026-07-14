import React from "react";
import { motion } from "framer-motion";

import image from "../../assets/profileImage.png";
import cv from "../../assets/cv.pdf";

export default function Hero() {
  // Text waits 0.8 seconds to start so the image can arrive first
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.8,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  // Image starts completely off-screen (-800px) and flies in quickly
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -800,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-between w-full">
        {/* Portrait Component (Fires instantly on mount) */}
        {/* Portrait Component + Name Below It */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative order-1 flex flex-col items-center gap-4 lg:order-2"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-purple-500/20 bg-neutral-900 p-2 shadow-2xl transition-all duration-500 hover:border-purple-400 sm:h-72 sm:w-72 lg:h-85 lg:w-85">
            <img
              src={image}
              alt="Developer Portrait Avatar"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-104"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden absolute inset-0 flex-col items-center justify-center bg-neutral-950 p-4 text-center">
              <span className="text-3xl">💻</span>
            </div>
          </div>

          {/* Name rendered right underneath the card */}
          <h2 className="text-xl font-bold tracking-wide text-neutral-200 sm:text-2xl font-mono">
            Muhammad Hamad Khan
          </h2>
        </motion.div>

        {/* Text Content Layout (Waits for the image delay rule) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center text-center order-2 lg:order-1 lg:items-start lg:text-left max-w-xl space-y-5"
        >
          <motion.span
            variants={textItemVariants}
            className="font-mono text-xs font-bold tracking-widest text-purple-400 uppercase"
          >
            Full-Stack Developer
          </motion.span>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-tight"
          >
            Engineering Fast,{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Responsive
            </span>{" "}
            Websites
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-sm leading-relaxed text-neutral-300 sm:text-base"
          >
            Architecting clean frontend interfaces and scalable backend systems.
            Focused on building high-performance, mobile-first web applications.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-white hover:bg-neutral-200 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors shadow-sm"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href={cv}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-neutral-800 bg-neutral-950/40 backdrop-blur-xs px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-900 transition-colors"
            >
              View CV / Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
