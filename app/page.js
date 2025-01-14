"use client";
import "./page.css";
import { useState, useEffect } from "react";
import Login from "./components/login/page.js";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Script from "next/script";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer";

export default function Home() {
  const { data: session } = useSession();

  function handleLoginState() {
    setLoginState(!loginState);
  }
  let [loginState, setLoginState] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    if (loginState) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup when the component unmounts
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
            <img
              src="https://images.pexels.com/photos/29955109/pexels-photo-29955109.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="header"
            />
          </div>
          <div className="header__content">
            <div>
              <h1>Hassle-Free Home Repairs</h1>
              <p>
                Because <b> {session ? `${session.user.name}` : `You`} </b>{" "}
                {session ? `Deserves` : `Deserve`} Peace of Mind.
                <br />
                Trusted by Homeowners
              </p>
            </div>
          </div>
        </header>

        <section className="section__container deals__container">
          <div className="deals__card">
            <h2 className="section__header">Hot 🔥 deals for you</h2>
          </div>
          <div className="deals__card">
            <span>
              <i className="ri-cash-line"></i>
            </span>
            <h4>Seasonal Discounts</h4>
            <p>Get 20% off on all repair services this winter!</p>
          </div>
          <div className="deals__card">
            <span>
              <i className="ri-calendar-schedule-line"></i>
            </span>
            <h4>First-Time User Offers</h4>
            <p>Sign up today and get 10% off your first service!</p>
          </div>
          <div className="deals__card">
            <span>
              <i className="ri-money-rupee-circle-line"></i>
            </span>
            <h4>Save money</h4>
            <p>Discover unbeatable prices and save big money!</p>
          </div>
        </section>

        <section className="section__container about__container" id="about">
          <div className="about__header">
            <div>
              <h2 className="section__header">About us</h2>
              <p className="section__description">
                Our passion for exceptional craftsmanship drives us to curate
                the best pieces for every room in your house.
              </p>
            </div>
          </div>
          <div className="about__content">
            <div className="about__grid">
              <div className="about__card">
                <h3>1.</h3>
                <h4>Who we are</h4>
                <p>
                  We are a platform that simplifies home repair by connecting
                  homeowners with trusted professionals.
                </p>
              </div>
              <div className="about__card">
                <h3>2.</h3>
                <h4>What do we do</h4>
                <p>
                  Our platform provides quick access to reliable repair experts
                  for plumbing, electrical, and appliance issues.
                </p>
              </div>
              <div className="about__card">
                <h3>3.</h3>
                <h4>How do we help</h4>
                <p>
                  Instant connections to nearby professionals. Verified experts
                  with transparent pricing. Real-time availability and customer
                  reviews for informed choices.
                </p>
              </div>
              <div className="about__card">
                <h3>4.</h3>
                <h4>Create success story</h4>
                <p>
                  We transform repair hassles into seamless experiences, helping
                  homeowners save time, money, and stress. Join us and create
                  your success story!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__container product__container" id="product">
          <h2 className="section__header">Services</h2>

          <div className="product__grid">
            <Link href="/services/view/677a487e30c98a3804c9d406">
              <div className="product__card">
                <h4>Microwave Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700142193374-61370a.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a48cb30c98a3804c9d408">
              <div className="product__card">
                <h4>Washing Machine</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700142017541-7905b3.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a48bb30c98a3804c9d407">
              <div className="product__card">
                <h4>Water purifier</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700141956384-2e00b1.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="services">
              <button className="button-57" role="button">
                <span className="text">More Services..</span>
                <span>Click Here!!</span>
              </button>
            </Link>
          </div>
        </section>

        <Footer/>
        
      </div>

      <Script src="https://unpkg.com/scrollreveal"/>
          <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"/>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
          <Script src="main.js"/>
    </>
  );
}
