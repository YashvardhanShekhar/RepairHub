"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import "./navbar.css";

const navbar = ({ handleLoginState }) => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#" className="logo">
            <h4> Repair Hub </h4>
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul 
        className={`nav__links ${isMenuOpen ? 'open' : ''}`} 
        id="nav-links"
      >
        <li>
          <a href="/" onClick={closeMenu}>
            <p> Home </p>
          </a>
        </li>
        <li>
          <a href="/services" onClick={closeMenu}>
            <p> Services </p>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            <p> Contact </p>
          </a>
        </li>
        {session && (
          <li>
            <a onClick={() => { handleLogout(); closeMenu(); }} href="#signout">
              <p> Sign Out </p>
            </a>
          </li>
        )}
        {!session && (
          <li>
            <a onClick={() => { handleLoginState(); closeMenu(); }} href="#signin">
              <p> Sign In </p>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default navbar;
