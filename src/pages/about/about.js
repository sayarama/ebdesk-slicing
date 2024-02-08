import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/navbar";
import LogoWhite from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
import Quote from "../../assets/quote.svg";
import Grid from "../../assets/grid-top.svg";
import Xavier from "../../assets/xavier.png";
import Sara from "../../assets/sara.png";
import Brandon from "../../assets/brandon.png";
import Airlangga from "../../assets/airlangga.png";
import Jokowi from "../../assets/jokowi.png";
import Puan from "../../assets/puan.png";
import Footer from "../../components/footer/footer"

function about() {
  return (
    // Main Nav
    <>
      <section className="about-hero">
        <main className="navbar-about">
          <nav className="nav-about">
            <img src={LogoWhite} />
            <div className="middle-about">
              <Link to="/" style={{textDecoration: "none", color:"white"}}>Home</Link>
              <p>Product</p>
              <p>Blog</p>
              <p>Pricing</p>
              <p>Contact</p>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <p>About Us</p>
              </Link>
            </div>
            <div className="cta-about">
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </nav>
        </main>

        <article className="about-article">
          <h1>About Us</h1>
          <p>
            A small company offering data-driven solutions for campaign
            effectiveness using spatial data and detailed analysis of target
            audience (voters). Use technology that unites spatial data science
            and political science.
          </p>
          <button>Contact Us</button>
        </article>
      </section>

      {/* Quote */}
      <section className="quote-main">
        <div>
          <span>
            <img src={Quote} />
            <p>
              In just small steps you’ll connected directly to our technology.{" "}
              <br />
              Knowledge about your own-power, your rivals, <br />
              your voters, and your region in Election.
            </p>
          </span>
        </div>
        <div>
          <span>
            <img src={Grid} />
          </span>
        </div>
      </section>
      {/* Advisor */}

      <section className="main-advisor">
        <article>
          <h1>Our Advisors</h1>
        </article>
        <article className="main-advisor-card">
          <div className="advisor-card">
            <img src={Xavier} />
            <h1>Xavier Oswald</h1>
            <p>CO-FOUNDER, DEVELOPER</p>
          </div>
          <div className="advisor-card">
            <img src={Sara} />
            <h1>Xavier Oswald</h1>
            <p>CO-FOUNDER, DEVELOPER</p>
          </div>
          <div className="advisor-card">
            <img src={Brandon} />
            <h1>Xavier Oswald</h1>
            <p>PROJECT MANAGER</p>
          </div>
        </article>
        <article>
          <h1>What Political Figure Say</h1>
          <p>
            These are the stories of political figure who have joined us with
            great pleasure when using this crazy feature.
          </p>
        </article>
       <section className="card-container">
       <article className="political-card">
            <div>
              <img src={Airlangga} />
              <span>
              <h5>Airlangga Hartanto</h5>
              <p>Menteri Koordinator dan Perekonomian RI</p>
              </span>
            </div>
            <span>
              Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan
              kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan
              penggalangan opini masyarakat
            </span>
        </article>
        <article className="political-card">
            <div>
              <img src={Jokowi} />
              <span>
              <h5>Jokowi Dodo</h5>
              <p>Presiden RI</p>
              </span>
            </div>
            <span>
            Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan 
            </span>
        </article>
        <article className="political-card">
            <div>
              <img src={Puan} />
              <span>
              <h5>Puan Maharani</h5>
              <p>Ketua DPR dan Fraksi PDI Perjuangan</p>
              </span>
            </div>
            <span>
            Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketikaproses demokratisasi berlangsung.
            </span>
        </article>
       </section>
      </section>

      {/* CTA */}
      <section className="cta">
          <div>
            <h1>Subscribe Now for  <br/> Get Special Features!</h1>
            <p>Lets's subscribe with us and find the fun.</p>
          </div>
          <div>
            <button>Subscribe Now</button>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
    </>
  );
}

export default about;
