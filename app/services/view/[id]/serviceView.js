"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Login from "../../../components/login/page.js";
import "./page.css";

const ServiceView = ({ service }) => {
  const { data: session } = useSession();
  const [loginState, setLoginState] = useState(false);
  const [btnState,setBtnState] = useState(false);

  const handleLoginState = () => {
    setLoginState(!loginState);
  };

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    if (loginState) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loginState]);

  return (
    <>
      {loginState && <Login handleLoginState={handleLoginState} />}
      <div className="wholeBody">
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#" className="logo">
                Repair Hub
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            {session && (
              <li>
                <a onClick={handleLogout} href="#signout">
                  Sign Out
                </a>
              </li>
            )}
            {!session && (
              <li>
                <a onClick={handleLoginState} href="#signin">
                  Sign In
                </a>
              </li>
            )}
          </ul>
        </nav>

        <header className="section__container header__container" id="home">
          <div className="header__image">
            <img src={service.image} alt="header" />
          </div>
          <div className="header__content">
            <div>
              <h1>{service.name}</h1>
              { !btnState && <button id="first" onClick={()=>{setBtnState(true)}} data-ico="￫">
                Book Service <i className="fa-solid fa-arrow-right"></i>
              </button>}
              { btnState && <button className="btnAfter" ><i className="fa-solid fa-check"></i>  Ordered !! </button>}
            </div>
          </div>
        </header>

        <section className="section__container deals__container">
          <div className="descri">
            <h1>{service.heading}</h1>
            <p>{service.description}</p>
          </div>
        </section>

        <footer className="footer" id="contact">
          <div className="section__container footer__container">
            <div className="footer__col">
              <div className="footer__logo">
                <a href="#" className="logo">
                  Repair Hub
                </a>
              </div>
              <p>Where reliable solutions meet your doorstep.</p>
              <ul className="footer__socials">
                <li>
                  <a href="#">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <ul className="footer__links">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Payrol</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Resources</h4>
              <ul className="footer__links">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Support</h4>
              <ul className="footer__links">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Cancelation Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bar">
            Copyright © 2024 Repair Hub. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServiceView;
