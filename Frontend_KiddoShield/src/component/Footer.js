import React, { useState } from "react";
import "../styles/Footer.css";
export default function Footer() {
 

  return (
    <>
    

      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              About
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <img src="images/kidlogo.png" alt="Logo" class="footer__logo" />
        <p class="footer__copyright">
          &copy; 2024 kiddoShield all rights reserved
        </p>
      </footer>
    </>
  );
}
