import React, { useState } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <Link
              className="footer__link"
              to={"/aboutus"}
              onClick={window.scrollTo(0, 0)}
            >
              About
            </Link>
          </li>
          <li className="footer__item">
            <Link
              className="footer__link"
              to={"/contactus"}
              onClick={window.scrollTo(0, 0)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img src="./images/kidlogo.png" alt="Logo" class="footer__logo" />
        <p class="footer__copyright">
          &copy; 2024 kiddoShield all rights reserved
        </p>
      </footer>
    </>
  );
}
