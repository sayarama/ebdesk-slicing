import React, {useEffect, useState} from "react";
import "./login.css";
import Logo from "../../assets/logo.svg";
import Diagram from "../../assets/diagram-login.svg";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    axios
        .post("https://dummyjson.com/auth/login", {
          username,
          password
        })
        .then((result) => {
          // console.log(result?.data.token)
          const token = result?.data.token

          localStorage.setItem("token", token)

          setTimeout(() => {
            window.location.reload();
          });
        })
        .catch((err) => {
          console.log("thisiserror =>", err)
        })
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/dashboard")
    }
  }, [])


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
          <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          <label>Password<span style={{color: "#2161D5"}}>*</span></label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <span>
          <input type="checkbox"/>
          <p>Remember Me</p>
          </span>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </section>
    </main>
  );
}

export default Login;
