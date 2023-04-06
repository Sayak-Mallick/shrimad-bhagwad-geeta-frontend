import React from 'react'
import "../Styles/main.css";
import logo from "../images/primary-logo.svg"
import { AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
     
      <div className="footer-section">
       
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