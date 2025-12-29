import React from 'react'
import './Footer.css'
import auranest from '../Assets/auranest.png'
import whatsapp from '../Assets/whatsapp.png'
import instagram from '../Assets/instagram.png'
import printrest from '../Assets/printrest.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={auranest} alt="Auranest Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Links */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={whatsapp} alt="WhatsApp" />
        </div>
        <div className="footer-icons-container">
          <img src={instagram} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={printrest} alt="Pinterest" />
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
