import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    // Standard JavaScript Object payload formatted cleanly for Web3Forms API
    const jsonPayload = {
      access_key: "5eb0dab8-d472-4b6e-a01a-36dba8c0fff0",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(jsonPayload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("API Rejected Submission:", data.message);
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Network connection failure:", error);
      setStatus("ERROR");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full px-4 py-24 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden"
    >
      <div className="mx-auto max-w-4xl w-full space-y-12">
        {/* Header Block */}
        <div className="flex items-end justify-between border-b border-purple-950/40 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
              Get In Touch
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
              Connect With Me
            </h2>
          </div>
        </div>

        {/* Main Interface Core Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full rounded-xl border border-neutral-800/40 bg-neutral-900/30 p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Left Form (7 Columns) */}
          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg bg-neutral-950/80 border border-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg bg-neutral-950/80 border border-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="manager@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-300">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-lg bg-neutral-950/80 border border-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "SENDING"}
                className="w-full sm:w-auto rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-50"
              >
                {status === "IDLE" && "Send Message →"}
                {status === "SENDING" && "Sending..."}
                {status === "SUCCESS" && "Message Sent ✓"}
                {status === "ERROR" && "Failed. Try Again"}
              </button>
            </div>
          </form>

          {/* Right Direct Channels Panel (5 Columns) */}
          <div className="md:col-span-5 rounded-lg bg-neutral-950/50 border border-neutral-800/40 p-6 flex flex-col justify-between shadow-inner">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Have a specific role or freelance project in mind? Reach out
                  directly via email or drop a message through the workspace
                  form.
                </p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                    Email
                  </p>
                  <a
                    href="mailto:hk7092194@gmail.com"
                    className="text-white hover:text-purple-400 font-sans text-sm transition-colors block break-all font-semibold"
                  >
                    hk7092194@gmail.com
                  </a>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-white font-sans text-sm font-semibold">
                    Peshawar, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/40 text-[10px] text-neutral-600 font-mono tracking-wider">
              AVAILABILITY: AVAILABLE_NOW
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
