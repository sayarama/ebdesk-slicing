import React from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.svg"

function navbar() {
  return (
    <main>
        <nav className='nav-container'>
            <img src={Logo}/>
            <div className='middle-nav'>
                <p>Home</p>
                <p>Product</p>
                <p>Blog</p>
                <p>Pricing</p>
                <p>Contact</p>
                <p>About Us</p>
            </div>
            <div className='cta-nav'>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    </main>
  )
}

export default navbar