import React, { useState } from "react";
import { motion } from "framer-motion";

function ComingSoon() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white">

      {/* Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center"
      >

        {/* Logo */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-black font-bold">LOGO</span>
          </div>
        </div>

        {/* Badge */}
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
          Launching Soon
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">Coming Soon</h1>

        {/* Subtitle */}
        <p className="text-purple-200 mb-4">
          Our ENT & Dental Clinic is preparing something exceptional for you.
        </p>

        {/* Description */}
        <p className="text-sm text-purple-300 mb-6">
          Advanced care, modern technology, and a patient-first approach —
          your trusted destination for ENT and dental excellence.
        </p>

        {/* Form */}
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
          />
          <button className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold transition duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.9)] hover:scale-105">
            Get Notified
          </button>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center gap-6 mt-6 text-yellow-300 text-xl">
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🦻
          </motion.span>
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          >
            🦷
          </motion.span>
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            ✚
          </motion.span>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-sm text-purple-300">
          <p>📞 +383 XX XXX XXX</p>
          <p>✉ info@clinic.com</p>
          <p>📍 Prishtinë, Kosovë</p>
        </div>

      </motion.div>
    </div>
  );
}

export default ComingSoon;