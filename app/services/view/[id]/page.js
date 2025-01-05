// // "use client";
// import React from "react";
// import "./page.css";
// import { useState, useEffect } from "react";
// import Login from "..../components/login/page.js";
// import Link from "next/link";
// import { useSession, signIn, signOut } from "next-auth/react";

// const page = async ({ params }) => {
//   const { id } = await params;
//   const res = await fetch("http://localhost:3000/api/services/" + id);
//   let data = await res.json();
//   data = data.service;
//   console.log(data);

//   const { data: session } = useSession();

//   function handleLoginState() {
//     setLoginState(!loginState);
//   }
//   let [loginState, setLoginState] = useState(false);

//   const handleLogout = async () => {
//     await signOut();
//   };

//   const handleSearchChange = (ev) => {
//     setSearch(ev.target.value);
//   };

//   useEffect(() => {
//     if (loginState) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling
//     }

//     // Cleanup when the component unmounts
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [loginState]);

//   return (
//     <>
//       {loginState && <Login handleLoginState={handleLoginState} />}
//       <div className="wholeBody">
//         <nav>
//           <div class="nav__header">
//             <div class="nav__logo">
//               <a href="#" class="logo">
//                 Repair Hub
//               </a>
//             </div>
//             <div class="nav__menu__btn" id="menu-btn">
//               <i class="ri-menu-line"></i>
//             </div>
//           </div>
//           <ul class="nav__links" id="nav-links">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/services">Services</a>
//             </li>
//             {session && (
//               <li>
//                 <a onClick={handleLogout} href="#signout">
//                   {" "}
//                   Sign Out{" "}
//                 </a>
//               </li>
//             )}
//             {!session && (
//               <li>
//                 <a onClick={handleLoginState} href="#signin">
//                   {" "}
//                   Sign In{" "}
//                 </a>
//               </li>
//             )}
//           </ul>
//         </nav>

//         <header class="section__container header__container" id="home">
//           <div class="header__image">
//             <img src={data.image} alt="header" />
//           </div>
//           <div class="header__content">
//             <div>
//               <h1>{data.name}</h1>
//               <button id="first" data-ico="￫">
//                 Book SERVICE <i class="fa-solid fa-arrow-right"></i>
//               </button>
//               <i class="fa-solid fa-arrow-right"></i>
//               {/* <button><i class="fa-solid fa-check"></i>  Ordered !! </button> */}
//             </div>
//           </div>
//         </header>

//         <section class="section__container deals__container">
//           <div class="descri">
//             <h1>{data.heading}</h1>
//             <p> {data.description} </p>
//           </div>
//         </section>

//         <footer class="footer" id="contact">
//           <div class="section__container footer__container">
//             <div class="footer__col">
//               <div class="footer__logo">
//                 <a href="#" class="logo">
//                   Repair Hub
//                 </a>
//               </div>
//               <p>Where reliable solutions meet your doorstep.</p>
//               <ul class="footer__socials">
//                 <li>
//                   <a href="#">
//                     <i class="ri-facebook-fill"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i class="ri-twitter-fill"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i class="ri-linkedin-fill"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div class="footer__col">
//               <h4>Services</h4>
//               <ul class="footer__links">
//                 <li>
//                   <a href="#">Contact Us</a>
//                 </li>
//                 <li>
//                   <a href="#">Press</a>
//                 </li>
//                 <li>
//                   <a href="#">Payrol</a>
//                 </li>
//                 <li>
//                   <a href="#">Library</a>
//                 </li>
//                 <li>
//                   <a href="#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Help Center</a>
//                 </li>
//               </ul>
//             </div>
//             <div class="footer__col">
//               <h4>Resources</h4>
//               <ul class="footer__links">
//                 <li>
//                   <a href="#">Pricing</a>
//                 </li>
//                 <li>
//                   <a href="#">FAQs</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact Support</a>
//                 </li>
//                 <li>
//                   <a href="#">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Terms</a>
//                 </li>
//               </ul>
//             </div>
//             <div class="footer__col">
//               <h4>Support</h4>
//               <ul class="footer__links">
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//                 <li>
//                   <a href="#">Affiliates</a>
//                 </li>
//                 <li>
//                   <a href="#">Sitemap</a>
//                 </li>
//                 <li>
//                   <a href="#">Cancelation Policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Security</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div class="footer__bar">
//             Copyright © 2024 Repair Hub. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default page;



import React from "react";
import ServiceView from "./serviceView";

async function Page({ params }) {
  const { id } = await params;

  // Fetch data during server-side rendering
  const res = await fetch(`http://localhost:3000/api/services/${id}`);
  const data = await res.json();
  const service = data.service;

  return (
    <ServiceView service={service} />
  );
}

export default Page;
