import React, { useState, useEffect } from "react";
import "../styles/Header.css"

import Logo from "../media/download.jfif"

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">

        {/* LOGO */}
        <div className="logo">
          <img src={Logo} alt="Logo Poliklinika Aesthetica" />
          <span>Poliklinika Aesthetica</span>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${openMenu ? "open" : ""}`}>
          <a href="/">Kreu</a>
          <a href="/about">Rreth Nesh</a>
          <a href="/services">Shërbimet</a>
          <a href="/team">Ekipi</a>
          <a href="/tips">Këshilla</a>
          <a href="/blog">Blog</a>
        </nav>

        {/* CONTACT BUTTON */}
        <div className="contact-btn">
          <button>Cakto Terminin</button>
        </div>

        {/* BURGER MENU ICON */}
        <div
          className={`burger ${openMenu ? "open" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}