import React from 'react'
import "../Styles/main.css";

import { AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
   <footer className='footer'>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="col-md-4">
        <h3>Contact Us</h3>
        <ul class="list-unstyled">
          <li>1234 Main St.</li>
          <li>Anytown, USA 12345</li>
          <li>Phone: 123-456-7890</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3>Follow Us</h3>
        <ul class="list-inline social-icons">
          <li><a href="#"><i class="fab fa-facebook"> <AiFillFacebook /></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"> <AiOutlineTwitter /> </i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"> <AiFillLinkedin /> </i></a></li>
          <li><a href="#"><i class="fab fa-instagram"> <AiFillInstagram /> </i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer