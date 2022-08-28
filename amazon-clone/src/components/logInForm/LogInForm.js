import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

import "./LogIn.css";

const LogInForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="loginForm">
      <Link to="/">
        <div>
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </div>
      </Link>
      <div className="login_cotainer">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Fake Clone Conditions of Use
          sale.please see our Private Notice,our Cookings Noties and our
          Interest-Based Ads Notice.
        </p>
        <form>
          <button className="login_registerButton" onClick={register}>
            Create Amazone Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
