import React from 'react'
import "../styless/navbar.css"

const Navbar = () => {
  return (
    <>
    <nav>
        <a href="">
            <img src="./images/Icon.svg" alt="" />
            <h1>Nexcent</h1>
        </a>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Service</a>
            </li>
            <li>
                <a href="">Feature</a>
            </li>
            <li>
                <a href="">Product</a>
            </li>
            <li>
                <a href="">Testimonial</a>
            </li>
            <li>
                <a href="">FAQ</a>
            </li>
        </ul>
        <div>
            <button className='secondary-btn'>
                Login
            </button >
            <button className='primary-btn'>
                Sign Up
            </button>
        </div>
    </nav>
    
    
    </>
  )
}

export default Navbar