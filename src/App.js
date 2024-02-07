import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroImg from "./assets/hero-image.svg";
import Data from "./assets/data.svg";
import Tech from "./assets/technology.svg";
import Service from "./assets/service.svg";
import Scribble from "./assets/scribble-1.svg";
import OvTOP from "./assets/overview-top.png"
import GridTOP from "./assets/grid-top.svg"
import OvMid from "./assets/overview-mid.png"
import ScribMid from "./assets/scribble-2.svg"
import OvBot from "./assets/overview-bottom.png"
import cardGeo from "./assets/geo.png"
import Gift from "./assets/gift.png"
import Check from "./assets/check.svg"

function App() {
  return (
    <>
    <main className="main-container">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="main-hero">
        <article className="left-hero">
          <h1>
            Observe Your <br /> <span>Power</span>
          </h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button>See a Demo</button>
        </article>
        <figure>
          <img className="hero-img" src={HeroImg} />
        </figure>
      </section>
      {/* Article Section */}
      <section className="main-article">
        <article className="article-child">
          <h1>Why Choose Us?</h1>
          <p>
            We provide to you the best choiches for you. The leading political
            campaign intelligence platform
          </p>
        </article>
        {/* Card Section */}
        <section className="main-card">
          {/* box 1 */}
          <article className="article-card">
            <section className="article-box">
              <img src={Data} />
              <h3>Data</h3>
              <p>The biggest regional data, development, and POI data.</p>
            </section>
          </article>
          {/* box 2 */}
          <article className="article-card">
            <section className="article-box">
              <img src={Tech} />
              <h3>Technology</h3>
              <p>
                Geospatial platform with advanced analysis that suit your
                neetds.
              </p>
            </section>
          </article>
          {/* box 3 */}
          <article className="article-card">
            <section className="article-box">
              <img src={Service} />
              <h3>Services</h3>
              <p>An expert team help you to analyze your poltical power.</p>
            </section>
          </article>
        </section>
        <button>Learn more</button>
      </section>
    </main>

    <main className="main-overview">
      {/* Top */}
      <section className="overview-top">
        <article className="overview-top-left">
          <img src={Scribble}/>
          <img src={OvTOP}/>
        </article>
        <article className="overview-top-right">
          <img src={GridTOP}/>
         <div className="overview-top-text">
         <h2>App Overview 1</h2>
          <p>Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign. </p>
          <button>Learn More</button>
         </div>
        </article>
      </section>
      {/* Middle */}
      <section className="overview-mid">
        <article className="overview-mid-left">
        <div className="overview-mid-text">
        <h2>App Overview 2</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button>Learn More</button>
        </div>
        </article>
        <article className="overview-mid-right">
        <img src={ScribMid}/>
        <img src={OvMid}/>
        
        </article>
      </section>
      {/* Bottom */}
      <section className="overview-bottom">
      <article className="overview-bottom-left">
      <img src={Scribble}/>
          <img src={OvBot}/>
        </article>
        <article className="overview-bottom-right">
         <div className="overview-bottom-text">
         <h2>App Overview 3</h2>
          <p>Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign. </p>
          <button>Learn More</button>
         </div>
        </article>
      </section>
    </main>
    {/* Demo */}
    <main className="demo-container">
      <section className="title-demo">
        <h2>How It Works For You</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button>
          See a Demo
        </button>
      </section>
      {/* Card Demo Section */}
      <section className="card-flex">
        {/* Card 1 */}
        <div className="card">
          <img src={cardGeo}/>
          <h3>Geographic Segmentation</h3>
          <p>Consist of creating different groups of customers based on geographic boundaries.</p>
        </div>
        {/* Card 2 */}
        <div className="card">
          <img src={cardGeo}/>
          <h3>Geographic Segmentation</h3>
          <p>Consist of creating different groups of customers based on geographic boundaries.</p>
        </div>
        {/* Card 3 */}
        <div className="card">
          <img src={cardGeo}/>
          <h3>Geographic Segmentation</h3>
          <p>Consist of creating different groups of customers based on geographic boundaries.</p>
        </div>
        {/* Card 4 */}
        <div className="card">
          <img src={cardGeo}/>
          <h3>Geographic Segmentation</h3>
          <p>Consist of creating different groups of customers based on geographic boundaries.</p>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="main-pricing">
          <article className="pricing-title">
          <h1>Plans and Pricing</h1>
          <p>We provide to you the best choiches for you. The leading
political campaign intelligence platform</p>
        </article>

        {/* pricing box */}
        <div className="pricing-flex">
        <article className="pricing-box">
            <img src={Gift}/>
          <h3>Individual Plan</h3>
          <div className="box-child">
          <div>
            <img src={Check}/>
            <p>1 User</p>
          </div>
          <div>
            <img src={Check}/>
            <p>1 Basic Analysis</p>
          </div>
          <div>
            <img src={Check}/>
            <p>Unlimited Select Services</p>
          </div>
          </div>
         <div className="pricing-cta">
         <h1><span>$99 </span> /mo</h1>
         <button>
          Select
         </button>
         </div>
        </article>
        <article className="pricing-box">
            <img src={Gift}/>
          <h3>Individual Plan</h3>
          <div className="box-child">
          <div>
            <img src={Check}/>
            <p>1 User</p>
          </div>
          <div>
            <img src={Check}/>
            <p>1 Basic Analysis</p>
          </div>
          <div>
            <img src={Check}/>
            <p>Unlimited Select Services</p>
          </div>
          </div>
         <div className="pricing-cta">
         <h1><span>$500 </span> /mo</h1>
         <button>
          Select
         </button>
         </div>
        </article>
        </div>
      </section>
    </main>
    </>
    
  );
}

export default App;
