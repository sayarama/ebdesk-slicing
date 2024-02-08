import React from 'react'
import "./404.css"
import Navbar from '../navbar/navbar'
import error from "../../assets/404.svg"
function ErrorPage() {
  return (
    <main className='error-main'>
        {/* Navbar */}
        <Navbar/>
        <section className='error-hero'>
            <div className='error-child'>
                <h1>Oops! <br/> Page Not Found</h1>
                <p>This page doesn't exist or was removed <br/> We suggest you back to home</p>
                <button>Learn More</button>
            </div>
            <div>
                <img src={error}/>
            </div>
        </section>
    </main>
  )
}

export default ErrorPage