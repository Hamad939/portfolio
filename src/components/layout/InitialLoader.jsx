import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth countdown progress tracker loop
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 14) + 4;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimeout = setTimeout(() => {
        onComplete();
      }, 300);

      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0b090f] px-6 text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-radial-[at_top_right] from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Structural Tech Grid Layer Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), 
                            linear-gradient(to right, rgba(168,85,247,0.5) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="w-full max-w-sm space-y-5 relative z-10">
        <div className="flex items-baseline justify-between select-none">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-purple-400">
            System Load
          </div>
          <div className="font-sans text-7xl font-black tracking-tighter text-white tabular-nums">
            {Math.min(progress, 100)}
            <span className="text-purple-500 text-5xl">.</span>
          </div>
        </div>

        <div className="relative h-[3px] w-full bg-neutral-900/60 rounded-full overflow-hidden border border-neutral-800/20">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />
        </div>

        <div className="flex items-center justify-between font-mono text-[9px] tracking-wider text-neutral-500 uppercase pt-1">
          <span>Peshawar Core Node</span>
          <span>v4.0.0 // Ready</span>
        </div>
      </div>
    </motion.div>
  );
}
