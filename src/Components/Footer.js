import React from 'react'
import "../Styles/main.css";
import logo from "../images/primary-logo.svg"
import { AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
     
      <div className="footer-section">
        <footer className="section bg-footer">
          <div className="container-fluid">
            <div className="text-center py-3">
              <img src="https://distancecoding.agency/assets/images/logo-light.png" className="footer_logo" alt="" />
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-12">
                <div className="links">
                  <a href="https://www.distancecoding.agency">
                    https://www.distancecoding.agency
                  </a>
                  <p>
                    <i className="fas fa-mobile-alt"></i> +1 (404) 999-0803
                  </p>
                  <p>
                    <i className="fab fa-whatsapp"></i> +91 8777062003
                  </p>
                </div>
              </div>
              <div className="contact-us">
                <a href="mailto:contactus@distancecoding.agency">
                  contactus@distancecoding.agency
                </a>
              </div>
            </div>

            {/* <!-- End row --> */}
          </div>
          {/* <!-- End container --> */}
        </footer>
        {/* <!-- end footer --> */}

        {/* <!-- FOOTER-ALT --> */}
        <div className="footer-alt pt-4 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0 fs-15 text-white copyright-text">
                    © 2023 Distance Coding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Footer