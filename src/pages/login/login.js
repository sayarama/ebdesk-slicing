import React from "react";
import "./login.css";
import Logo from "../../assets/logo.svg";
import Diagram from "../../assets/diagram-login.svg";

function login() {
  return (
    <main className="login-main">
      <section className="login-left">
        <img src={Logo} width={150} height={150} />
        <img src={Diagram} width={400} height={400} />
        <span>
        <h1>Services</h1>
        <p>
          An expert team helop ypu to analyze your polticalt power.<br/> An expert team.
        </p>
        </span>
        <p>©2020 All Rights Reserved. PT Indonesia Indicator</p>
      </section>
      <section className="login-right">
        <div className="login-right-card">
          <h1>Welcome to Logo ipsum</h1>
          <p style={{marginBottom: "30px"}}>Don't have an account? <span>Sign Up</span></p>
          <label>Username<span style={{color: "#2161D5"}}>*</span></label>
          <input type="text"/>
          <label>Password<span style={{color: "#2161D5"}}>*</span></label>
          <input type="password"/>
          <span>
          <input type="checkbox"/>
          <p>Remember Me</p>
          </span>
          <button>Log In</button>
        </div>
      </section>
    </main>
  );
}

export default login;
