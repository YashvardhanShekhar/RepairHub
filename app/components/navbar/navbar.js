
"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import "./navbar.css";

const navbar = ({ handleLoginState }) => {
  
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#" className="logo">
            <h4> Repair Hub </h4>
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li>
          <a href="/">
            {" "}
            <p> Home </p>{" "}
          </a>
        </li>
        <li>
          <a href="/services">
            {" "}
            <p> Services </p>{" "}
          </a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <p> Contact </p>{" "}
          </a>
        </li>
        {session && (
          <li>
            <a onClick={handleLogout} href="#signout">
              {" "}
              <p> Sign Out </p>
            </a>
          </li>
        )}
        {!session && (
          <li>
            <a onClick={handleLoginState} href="#signin">
              {" "}
              <p> Sign In </p>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default navbar;
