"use client";
import "./page.css";
import { useState, useEffect } from "react";
import Login from "../components/login/page.js";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const page = () => {

  let [search, setSearch] = useState("");

  const { data: session } = useSession();

  function handleLoginState() {
    setLoginState(!loginState);
  }
  let [loginState, setLoginState] = useState(false);

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
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
            <Link href="/services/view/67777a395929c81184548b2a">
              <div className="product__card">
                <h4>Refrigerator Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700137613735-a7d95a.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a48dd30c98a3804c9d409">
              <div className="product__card">
                <h4>Cupboard Hinge Installation</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653892249137-8848bb.png"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a48f130c98a3804c9d40a">
              <div className="product__card">
                <h4>Tap Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652172643970-9ad67b.png"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a491b30c98a3804c9d40b">
              <div className="product__card">
                <h4>Geyser Installation</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701149716857-c1a5e4.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a5cdc30c98a3804c9d411">
              <div className="product__card">
                <h4>Jet Spray Installation/repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653890923765-57dea3.png"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a492a30c98a3804c9d40c">
              <div className="product__card">
                <h4>Door Lock Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653918245354-14a137.png"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a493930c98a3804c9d40d">
              <div className="product__card">
                <h4>Switchboard Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653632250914-ca15c6.png"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a5c7030c98a3804c9d410">
              <div className="product__card">
                <h4>Drill & Hang(wall decor)</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1727776710805-0ce8d7.jpeg"
                  alt="product"
                />
              </div>
            </Link>
            <Link href="/services/view/677a497130c98a3804c9d40e">
              <div className="product__card">
                <h4>Flush Tank Repair</h4>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653632276897-4194e1.png"
                  alt="product"
                />
              </div>
            </Link>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
};

export default page;
