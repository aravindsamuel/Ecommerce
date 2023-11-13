import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {

  return (
    <>
    <footer className='text-white footer-top'>
      <div className="footertop-left">
        <img className='footertopicon' src="images/newsletter.png" alt="newsletter" />
        <h3 className='footertopleft-text'>Sign Up for Newsletter</h3>
      </div>
      <div className="footertop-right">
        <div className="footer-input input-group">
          <input type="text" className="form-control" 
          placeholder="Your Email Address"
          aria-label="Your Email Address" aria-describedby="basic-addon2"
            />
            <span className='input-group-text p-2' id='basic-addon2'>Subscribe</span>
        </div>
      </div>
    </footer>
    <footer className='pb-3 footer-middle'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <h4 className='text-white mt-4'>Contact us</h4>
            <div>
              <address className='text-white fs-6'>Address: 277 Near Porur,<br/> Chennai, Tamilnadu 
                <br />PinCode: 600116
              </address>
              <a href="tel:+91 9087890436" className='mt-3 d-block mb-1 text-white'>+91 9087890436</a>
              <a href="mailto:aravindsamuel33@gmail.com" className='mt-2 d-block mb-0 text-white'>aravindsamuel33@gmail.com</a>
            </div>
            <div className="socialicons d-flex align-items-center gap-30 mt-3">
              <a className='text-white' href="https://www.linkedin.com/in/aravindsamuel/"><BsLinkedin className='fs-4'/></a>
              <a className='text-white' href="https://github.com/aravindsamuel"><BsGithub className='fs-4'/></a>
              <a className='text-white' href="/"><BsInstagram className='fs-4'/></a>
              <a className='text-white' href="/"><BsYoutube className='fs-4'/></a>
            </div>

          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h4 className='text-white mt-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2'>Privacy Policy</Link>
              <Link  className='text-white py-2'>Shipping Policy</Link>
              <Link  className='text-white py-2'>Terms & conditions</Link>
              <Link className='text-white py-2'>Refund Policy</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h4 className='text-white mt-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2'>About Us</Link>
              <Link to={"/contact"} className='text-white py-2'>Contact</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <h4 className='text-white mt-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/laptop' className='text-white py-2'>Laptops</Link>
              <Link to='/headphone' className='text-white py-2'>Headphones</Link>
              <Link to='/tablet' className='text-white py-2'>Tablets</Link>
              <Link to='/watch' className='text-white py-2'>Watch</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
    <footer className='text-white footer-bottom'>
      <p className='datecopyrights'>Copyright {new Date().getFullYear()} Aravind</p>
    </footer>
    </>
  )
}

export default Footer