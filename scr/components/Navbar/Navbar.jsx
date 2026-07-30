import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-wrapper">
            <span className="logo-text">S</span>
            <span className="logo-text logo-text-second">C</span>
          </div>
          <div className="logo-dot"></div>
          <div className="logo-ring"></div>
        </a>

        {/* Navigation Links */}
        <ul className="navbar-menu flex items-center gap-8">
          <li>
            <a href="#work" className="nav-link font-mono group text-lg">
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">Work</span>
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"> /&gt;</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link font-mono group text-lg">
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">About</span>
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"> /&gt;</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link font-mono group text-lg">
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">Contact</span>
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"> /&gt;</span>
            </a>
          </li>
          <li>
            <button className="connect-button font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-6 py-2 transition-all duration-300 group">
              <span className="text-purple-400 group-hover:text-purple-300">connect</span>
              <span className="text-gray-500 group-hover:text-gray-400">()</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;