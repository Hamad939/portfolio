import React from "react";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import WhatsAppBubble from "./components/layout/WhatsappBubble";
import Footer from "./components/layout/Footer";
import InitialLoader from "./components/layout/InitialLoader";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-purple-950 bg-linear-to-bl from-purple-950 via-neutral-950 to-purple-950 text-slate-100 font-sans antialiased">
      {/* Immersive Loader Layer */}
      <AnimatePresence mode="wait">
        {isLoading && <InitialLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content Stream */}
      {!isLoading && (
        <div className="animate-fade-in">
          <Navbar />
          <WhatsAppBubble />

          <main className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8  overflow-hidden">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
}
