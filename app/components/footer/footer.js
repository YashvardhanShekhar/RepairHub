import React from 'react'
import './footer.css'

const footer = () => {
  return (
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
  )
}

export default footer