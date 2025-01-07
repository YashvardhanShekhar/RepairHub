"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Login from "../../../components/login/page.js";
import "./page.css";
import Navbar from "@/app/components/navbar/navbar.js";
import Footer from "@/app/components/footer/footer.js";

const ServiceView = ({ service }) => {
  const { data: session } = useSession();
  const [loginState, setLoginState] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const handleLoginState = () => {
    setLoginState(!loginState);
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

        <Navbar handleLoginState={handleLoginState} />

        <header className="section__container header__container" id="home">
          <div className="header__image">
            <img src={service.image} alt="header" />
          </div>
          <div className="header__content">
            <div>
              <h1>{service.name}</h1>
              {!btnState && (
                <button
                  id="first"
                  onClick={() => {
                    setBtnState(true);
                  }}
                  data-ico="￫"
                >
                  Book Service <i className="fa-solid fa-arrow-right"></i>
                </button>
              )}
              {btnState && (
                <button className="btnAfter">
                   Ordered !! {"     "}<i className="fa-solid fa-check"></i>
                </button>
              )}
            </div>
          </div>
        </header>

        <section className="section__container">
          <div className="descri">
            <h1>{service.heading}</h1>
            <p>{service.description}</p>
            { service.subServices.map(ser =>{
              <li>ser.title</li>
            })}
          </div>
        </section>

        <main>
          <div className="space"></div>
          <div className="vertical-container">
            <div className="box1">
              <div className="in-div1">
                <div className="in-div2">
                  <h1 className="title1">Select a service</h1>
                  <div className="services-grid1">
                    <div className="service-card1">
                      <img
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1726832630872-4108bf.jpeg"
                        alt="Packages"
                      ></img>
                      <p>Packages</p>
                    </div>
                    <div className="service-card1">
                      <img
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731489761102-deeee3.jpeg"
                        alt="Bathroom Cleaning"
                      ></img>
                      <p>Bathroom cleaning</p>
                    </div>
                    <div className="service-card1">
                      <img
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1727443108079-5c589e.jpeg"
                        alt="Kitchen Cleaning"
                      ></img>
                      <p>Kitchen cleaning</p>
                    </div>
                    <div className="service-card1">
                      <img
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731488885208-303fba.jpeg"
                        alt="Mini Services"
                      ></img>
                      <p>Mini services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box2">

              {service.subServices.map( (subService) => { 
                return (
              <div className="packages-container">
                <div className="package-card">
                  <div className="package-details">
                    <h3>{subService.title}</h3>
                    <div className="price-time">
                      <span className="price">₹{subService.price}</span>
                      <span className="original-price">₹{ subService.price * 1.5}</span>
                      <span className="time">• 2 hrs</span>
                    </div>
                    <div className="view-details">
                      <a href="#">View details</a>
                      <div className="details-box">
                        <p>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="add-button">Add</button>
                </div>

                <hr className="divider" />
              </div>
              )
              })}
            </div>

            <div className="box3">
              <div className="className3">
                <div className="card3">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{fontSize:"70px"}}
                  ></i>
                  <p className="message3">
                    {" "}
                    No items in your cart {" "}
                  </p>
                </div>
                <div className="card3">
                  <div className="cashback-content3">
                    <i className="fa-brands fa-amazon" style={{fontSize: "30px"}} ></i>
                    <div className="cashback-details3">
                      <p className="cashback-title3">Amazon cashback upto ₹50</p>
                      <p className="cashback-desc3">Get cashback via Amazon pay</p>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="uc-promise3">
                    <div className="promise-text3">
                      <h3 className="promise-title3">RH Promise</h3>
                      <ul className="promise-list3">
                        <li>
                          {" "}
                          <i className="fa-solid fa-check"></i>
                          Verified Professionals
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-check"></i>
                          Safe Chemicals
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-check"></i>
                          Superior Stain Removal
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1686898394662-4bf96e.jpeg"
                      alt="UC Promise Icon"
                      className="icon-medium3"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        
      </div>
    </>
  );
};

export default ServiceView;
