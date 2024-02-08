import React from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <main className='navbar-container'>
        <nav className='nav-container'>
            <img src={Logo}/>
            <div className='middle-nav'>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <p>Home</p>
                </Link>
                <p>Product</p>
                <p>Blog</p>
                <p>Pricing</p>
                <p>Contact</p>
                <Link to="/about" style={{textDecoration: 'none'}}>
                <p>About Us</p>
                </Link>
            </div>
            <div className='cta-nav'>
                <button>
                  <Link to="/sign-in" style={{textDecoration: "none", color: "#2161D5"}}>
                  Sign In
                  </Link>
                </button>
                <button>Sign Up</button>
            </div>
        </nav>
    </main>
  )
}

export default navbar