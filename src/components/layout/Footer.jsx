import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-purple-500/15 bg-neutral-950/40 py-8 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Clean Brand Copyright */}
        <p className="font-mono text-xs text-neutral-500">
          © {currentYear} DEVELOPER<span className="text-purple-500">.CORE</span>. All rights reserved.
        </p>

        {/* Right Side: Operational Telemetry Status Panel */}
        <div className="flex items-center gap-6 font-mono text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-500">PORTFOLIO:</span>
            <span className="text-emerald-400 font-bold tracking-wider">ONLINE</span>
          </div>
          <span className="text-neutral-700">|</span>
          <p className="text-neutral-500">
            LOCATED: <span className="text-white font-semibold">PESHAWAR</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
