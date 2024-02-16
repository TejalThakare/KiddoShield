import { useState } from "react";
// import "../styles/Navbar.css";
import "../../styles/Navbar.css";
import Login from "./login";
export default function NavbarReg() {
  const [open, close] = useState(false);
  const modalHandler = () => {
    close(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <a href="/">
          <img
            src="/images/kidLogo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </a>
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#section--3">
              Help
            </a>
          </li>
          <li className="nav__item">
            {/* event listner to open modal */}
            <button
              data-toggle="modal"
              data-target="#modalopen"
              id="login__btn"
              type="button"
              className="btn btn-info rounded-pill px-4"
              onClick={modalHandler}
            >
              Click to login
            </button>
          </li>
        </ul>
      </nav>
      {open && <Login />}
    </>
  );
}
