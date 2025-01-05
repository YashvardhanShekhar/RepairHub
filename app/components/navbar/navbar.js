/**
 * The function defines a React component for a navigation bar with links and a login button.
 * @returns The `navbar` component is being returned. It is a functional React component that renders a
 * navigation bar with links for Home, About, Services, Contact, and Login. The `handleLoginState`
 * function is passed as a prop to handle the login action when the "Login" link is clicked.
 */

"use client";
import React from "react";
import "./navbar.css";

const navbar = ({ handleLoginState }) => {
  return (
    <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#" class="logo">
            Repair Hub
          </a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#product">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a onClick={handleLoginState} href="#">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
