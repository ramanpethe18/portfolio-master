// Navbar.js
import React from 'react';
import './navbar.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Raman</div>
      <div className="social-icons">
        <a href="https://www.instagram.com/raman_18113114/"><FaInstagram /></a>
        <a href="https://x.com/PetheRaman23408"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/raman-pethe-b0ba602aa/"><FaLinkedin /></a>
        <a href="https://github.com/ramanpethe18/"><FaGithub /></a>
      </div>
    </nav>
  );
};

export default Navbar;
