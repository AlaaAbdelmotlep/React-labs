import React from 'react'
import './style.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-contact">
            <h2>contact me</h2>
            <p>Alaa Abd-elmotlep</p>
            <p>+201012824086</p>
        </div>
        <h3 className="footer-contact-me">Contact ME</h3>
        <div className="social">
            <ul>
                <li><i class="fab fa-linkedin"></i></li>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter"></i></li> 
            </ul>
            <p>copyright 2022</p>
        </div>
    </div>
  )
}

export default Footer