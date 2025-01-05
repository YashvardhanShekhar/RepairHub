"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style.css";
import { useSession, signIn, signOut } from "next-auth/react";

const logIn = ({ handleLoginState }) => {
  const URL = process.env.URL;

  const { data: session } = useSession();

  const boxRef = useRef(null);

  useEffect(() => {
    const signUpForm = document.querySelector("#sign-up-1");
    const logInButton = document.querySelector("#log-in");
    const goToSignUpButton = document.querySelector("#go-to-signup");
    const backButton = document.querySelector("#back");

    signUpForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".form-1").classList.remove("goback");
      document.querySelector(".form-1").classList.add("submitted");
      document.querySelector(".form-2").classList.remove("push");
      document.querySelector(".form-2").classList.add("pull");
    });

    logInButton?.addEventListener("click", () => {
      document.querySelector(".form-3").classList.add("active");
    });

    goToSignUpButton?.addEventListener("click", () => {
      document.querySelector(".form-3").classList.remove("active");
    });

    backButton?.addEventListener("click", () => {
      document.querySelector(".form-1").classList.remove("submitted");
      document.querySelector(".form-1").classList.add("goback");
      document.querySelector(".form-2").classList.remove("pull");
      document.querySelector(".form-2").classList.add("push");
    });

    const handleClickOutside = (event) => {
      if (boxRef.current && event.target.contains(boxRef.current)) {
        handleLoginState(); // Close the box if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up listeners to avoid memory leaks
      signUpForm?.removeEventListener("submit", () => {});
      logInButton?.removeEventListener("click", () => {});
      goToSignUpButton?.removeEventListener("click", () => {});
      backButton?.removeEventListener("click", () => {});
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignin = async () => {
    await signIn("google", { callbackUrl: URL });
  };

  function handleSignUp(ev) {
    ev.preventDefault();
    console.log(ev.target.id);
    console.log(ev.target[0].value);
    console.log(ev.target[1].value);
    ev.target.id !== "sign-up-1" && handleLoginState();
  }

  return (
    <div className="absolute loginBody z-40">
      <div ref={boxRef} className="form-container form-1">
        <div className="form-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 148">
            <path
              fill="white"
              fillRule="evenodd"
              d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
              transform="matrix(-1 0 0 1 1600 0)"
            />
          </svg>
        </div>
        <div className="padding-wrap">
          <h1 className="text-2xl font-bold">Create an Account </h1>

          <form id="sign-up-1" onSubmit={handleSignUp}>
            <div className="form-group">
              <input required id="name" type="text" />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group">
              <input required id="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>

            <input
              className="inputBtn bg-black"
              type="submit"
              value="Get Started"
            />
          </form>

          <span className="login">
            Already have an account? <a id="log-in">Log in.</a>
          </span>
          <br></br>
          <hr></hr>
          <br></br>
          <div onClick={handleSignin}>
            <input
              className="inputBtn bg-black"
              type="submit"
              value="Sign in using Google"
            />
          </div>
        </div>
      </div>

      <div ref={boxRef} className="form-container form-2">
        <div className="form-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 148">
            <path
              fill="white"
              fillRule="evenodd"
              d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
              transform="matrix(-1 0 0 1 1600 0)"
            />
          </svg>
        </div>
        <div className="padding-wrap">
          <h1 className="text-2xl font-bold">Set Your Password</h1>

          <form id="sign-up-2" onSubmit={handleSignUp}>
            <div className="form-group">
              <input required id="pass" type="password" />
              <label htmlFor="pass">Password</label>
            </div>

            <div className="form-group">
              <input required id="pass2" type="text" />
              <label htmlFor="pass2">Confirm Password</label>
            </div>

            <input type="submit" value="Sign Up" aria-disabled />
          </form>

          <span id="back" className="login">
            <a>Go back.</a>
          </span>
          <br></br>
          <hr></hr>
          <br></br>
          <div onClick={handleSignin}>
            <input
              className="inputBtn bg-black"
              type="submit"
              value="Sign in using Google"
            />
          </div>
        </div>
      </div>

      <div ref={boxRef} className="form-container form-3">
        <div className="form-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 148">
            <path
              fill="white"
              fillRule="evenodd"
              d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
              transform="matrix(-1 0 0 1 1600 0)"
            />
          </svg>
        </div>
        <div className="padding-wrap">
          <h1 className="text-2xl font-bold">Login</h1>

          <form id="log-in-1" onSubmit={handleSignUp}>
            <div className="form-group">
              <input required id="emailin" type="text" />
              <label htmlFor="emailin">Email</label>
            </div>

            <div className="form-group">
              <input required id="passin" type="password" />
              <label htmlFor="passin">Password</label>
            </div>

            <input type="submit" value="Log in" />
          </form>

          <span className="login">
            No account? <a id="go-to-signup">Sign up.</a>
          </span>
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <br></br>
          <hr></hr>
          <br></br>
          <div onClick={handleSignin}>
            <input
              className="inputBtn bg-black"
              type="submit"
              value="Sign in using Google"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default logIn;
