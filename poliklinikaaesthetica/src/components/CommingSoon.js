import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/CommingSoon.css";
import dentistImage from "../media/CommingSoonImg.png";
import Logo from "../media/download.jfif"

export default function CommingSoon() {
  return (
    <div className="coming-container">

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com/poliklinikaaesthetica/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/artasinanajdemiri/?locale=sq_AL" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>

      {/* Card */}
      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={Logo} />
        <h1 className="title">Coming soon</h1>
        <p className="subtitle">
          We are launching our new dental and oral care clinic website.
        </p>
        <motion.button
          className="notify-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Notify me
        </motion.button>
      </motion.div>

      {/* Side Image */}
      <motion.img
        src={dentistImage}
        alt="Dentist"
        className="side-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}