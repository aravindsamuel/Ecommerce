import React from "react";
import '../App.css';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'

function Contact() {
  return (
    <>
      <div className="contact-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79476032653!2d80.04419755738196!3d13.047807813409872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699024674959!5m2!1sen!2sin"
                width="600"
                height="450"
                className="bg-white p-3 rounded w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-3">
              <div className="contact-inner-wrapper d-flex flex-wrap justify-content-center gap-3">
                <div className="contact">
                  <h3 className="contact-title mb-2">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea 
                        name="" 
                        id="" 
                        className="w-100 form-control"
                        cols="30" 
                        rows="4"
                        placeholder="Comments"> 
                      </textarea>
                    </div>
                    <div className="text-center mt-2">
                      <button className="button">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="contact">
                  <h3 className="contact-title mb-4 gitws">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-1 d-flex gap-2"><AiOutlineHome className="fs-5" />
                      <address>Hno:86, Near Porur, chennai, TamilNadu</address>
                      </li>
                      <li className="mb-3 d-flex gap-2"><BiPhoneCall className="fs-5" />
                      <a href="tel:+91 9087890436">+91 9087890436</a>
                      </li>
                      <li className="mb-3 d-flex gap-2"><AiOutlineMail className="fs-5" />
                      <a href="mailto:aravindsamuel33@gmail.com">aravindsamuel33@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-2"><BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday (10 AM - 8 PM)</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
