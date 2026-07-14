import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const WHATSAPP_NUMBER = "923187999004";
  const DEFAULT_MESSAGE = encodeURIComponent(
    "Hello! I saw your portfolio and would like to talk about a job opportunity.",
  );

  // Unstoppable App/Web Routing Core Logic
  const handleHireMeClick = (e) => {
    e.preventDefault();

    // 1. Direct device protocol fire (Instant lookup skip)
    window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${DEFAULT_MESSAGE}`;

    // 2. Continuous network fallback backup check
    setTimeout(() => {
      window.open(
        `https://whatsapp.com{WHATSAPP_NUMBER}&text=${DEFAULT_MESSAGE}`,
        "_blank",
      );
    }, 1200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-purple-500/15 bg-neutral-950/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Brand Identifier */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="font-mono text-sm font-black tracking-tight text-white transition-colors hover:text-purple-400 flex items-center gap-1.5"
        >
          <span className="text-purple-400 font-normal">&lt;</span>
          DEVELOPER
          <span className="text-purple-400 font-normal">/&gt;</span>
        </motion.a>

        {/* Desktop Navigation View */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-purple-300 transition-colors duration-200 relative py-1"
              whileHover="hover"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-purple-500 to-pink-500 origin-left"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              />
            </motion.a>
          ))}

          {/* Desktop "Hire Me" -> Direct Interactive Action Button */}
          <button
            onClick={handleHireMeClick}
            className="rounded-md bg-linear-to-b from-[#25D366] to-[#128C7E] hover:from-[#20ba57] hover:to-[#0e6b60] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-950/40 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile View layout controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile "Hire Me" -> Integrated Trigger */}
          <button
            onClick={handleHireMeClick}
            className="rounded-md bg-linear-to-b from-[#25D366] to-[#128C7E] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-white cursor-pointer"
          >
            Hire Me
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 cursor-pointer p-1 text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={
                isOpen
                  ? { rotate: 45, y: 5.5, backgroundColor: "#c084fc" }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              className="h-0.5 w-5 rounded-full"
            />
            <motion.div
              animate={
                isOpen
                  ? { opacity: 0 }
                  : { opacity: 1, backgroundColor: "#ffffff" }
              }
              className="h-0.5 w-5 rounded-full"
            />
            <motion.div
              animate={
                isOpen
                  ? { rotate: -45, y: -5.5, backgroundColor: "#c084fc" }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              className="h-0.5 w-5 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full border-b border-purple-500/20 bg-neutral-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white py-3.5 border-b border-neutral-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Menu Interactive Link Element Alternative */}
            <button
              onClick={(e) => {
                setIsOpen(false);
                handleHireMeClick(e);
              }}
              className="text-left font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 py-3.5 transition-colors cursor-pointer"
            >
              Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
