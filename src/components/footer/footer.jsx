import React from "react";
import "./footer.css";
import geolabs from "../../assets/geolabs.svg";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";

function footer() {
  return (
    <main className="footer-main">
      <section className="footer-child">
        <div className="left-footer">
          <img src={geolabs} />
          <p>
            <b>Geolabs</b> is a private virtual network that has <br /> unique
            features and has high security
          </p>
          <div>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
          <p>©2020EBDESK</p>
        </div>
        <div className="product">
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Contries</p>
          <p>Blog</p>
        </div>
        <div className="engage">
          <p>Geolabs ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policies</p>
          <p>Terms of Services</p>
        </div>
        <div className="money">
          <p>Affilate</p>
          <p>Become Partner</p>
        </div>
      </section>
    </main>
  );
}

export default footer;
