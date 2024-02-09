import React, {useEffect, useState} from "react";
import "./sidebar.css";
import Logo from "../../assets/logo-white.svg";
import Dashboard from "../../assets/dashboard-logo.svg";
import { BrowserRouter, Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import {
  FaSlack,
  FaArchive,
  FaWifi,
  FaFigma,
  FaGetPocket,
  FaRegMoon
} from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiLayout } from "react-icons/fi";
import axios from "axios";

function Sidebar() {
  const [profile, setProfile] = useState([])

  const getData = () => {
    if (localStorage.getItem("token")) {
      axios
          .get("https://dummyjson.com/user/me", {
            headers: {
              Authorization: `Bearer ${accToken}`
            },
          })
          .then((response) => {
            setProfile(response?.data)
          })
          .catch((err) => {
            console.log("Inierr ==>", err)
          })
    } else{

    }
  }

  // get token
  const accToken = localStorage.getItem("token")

  useEffect(() => {
    getData();
  }, [])
  return (
    <main className="main-dashboard">
      <div className="sidebar">
        <img src={Logo} />
        <Link to="dashboard" style={{textDecoration: "none", color: "white"}}>
          
        <div className="logo-container">
          <img src={Dashboard} alt="Logo" className="logo" />
          <h3>Dashboard</h3>
        </div>
          </Link>
        <ul>
          <b>DATA</b>
          <li>
            <FaSlack />
            <p>Visualization</p>
          </li>
          <li>
            <FaArchive />
            <p>Case</p>
          </li>
          <li>
            <FaServer />
            <p>Data Set</p>
          </li>
          <Link to="users" style={{textDecoration: "none", color: "rgba(166, 176, 207, 1)"}}>
          <li>
            <GoDatabase />
            <p>Data Source</p>
          </li>
          </Link>
          <li>
            <FaWifi />
            <p>Connection</p>
          </li>
          <b>ASSETS</b>
          <li>
            <FaFigma />
            <p>Icon</p>
          </li>
          <li>
            <CiImageOn />
            <p>Image</p>
          </li>
          <b>AUTHORIZATION</b>
          <li>
            <CgProfile />
            <p>Account</p>
          </li>
          <li>
            <FaGetPocket />
            <p>Role</p>
          </li>
          <li>
            <FiLayout />
            <p>Workspace</p>
          </li>
        </ul>
      </div>
      {/* Right */}
      <section className="rightbar">
       <div className="right-navbar">
        <MdOutlineSubject className="hamburger"/>
         <span>
         <FaRegMoon/>
         <img src={profile.image}/>
         <p>{profile.firstName}</p>
         <p>{profile.lastName}</p>
       </span>
       </div>
       <div className="main-admin">
       <Outlet/>
       </div>
      </section>
    </main>
  );
}

export default Sidebar;
