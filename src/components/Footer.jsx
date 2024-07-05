import React from 'react'
import '../styless/footer.css'
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoDribbble } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className='footer-top__container'>
            <h3>
            Pellentesque suscipit fringilla libero eu.
            </h3>
            <button className='footer-btn'>
            Get a Demo <BiRightArrowAlt className='arrow-icon'/>
            </button>
        </div>
        <div className="footer-bottom__container">
          <div className="copyright-content">
            <div className='copyright-logo'>
              <img src="../images/footericon.svg" alt="" />
              <h3>Nexcent</h3>
            </div>
            <p className='copyright-text'>Copyright © 2020 Nexcent ltd.</p>
            <p className='rights-text'>All rights reserved</p>
            <div className='copyright-icon__container'>
              <a href="">
              <div className='icon-content'>
                <BiLogoInstagram className='icons'/>
              </div>
              </a>
              
              <a href="">
              <div className='icon-content'>
                <BiLogoDribbble className='icons'/>
              </div>
              </a>
              <a href="">
              <div className='icon-content'>
                <BiLogoTwitter className='icons'/>
              </div>
              </a>
              <a href="">
              <div className='icon-content'>
                <BiLogoYoutube  className='icons'/>
              </div>
              </a>
            </div>
          </div>
          <div className='company-content__container'>
            <h3>Company</h3>
            <ol>
              <li>
                <a className='company-link' href="">About us</a>
              </li>
              <li>
                <a className='company-link' href="">Blog</a>
              </li>
              <li>
                <a className='company-link' href="">Contact us</a>
              </li>
              <li>
                <a className='company-link' href="">Pricing</a>
              </li>
              <li>
                <a className='company-link' href="">Testimonials</a>
              </li>
            </ol>
          </div>
          <div className='company-content__container'>
            <h3>Support</h3>
            <ol>
              <li>
                <a className='company-link' href="">Help center</a>
              </li>
              <li>
                <a className='company-link' href="">Terms of service</a>
              </li>
              <li>
                <a className='company-link' href="">Legal</a>
              </li>
              <li>
                <a className='company-link' href="">Privacy policy</a>
              </li>
              <li>
                <a className='company-link' href="">Status</a>
              </li>
            </ol>
          </div>
          <div className='email__container'>
            <h3>Stay up to date</h3>
            <div className='email-form'>
            <form action="">
              <input className='email' type="email" name='email'placeholder='Your email address' />
            </form>
            <a href="">
              <BiSend className='icons'/>
            </a>

            </div>
            

          </div>
        </div>

    </section>
    </>
  )
}

export default Footer
