import { useState } from "react";
import "../styles/Navbar.css";
// import Login from "../pages/user_login_registration/login";
import Login from "../pages/user_login_registration/login";
import { Link, useParams } from "react-router-dom";
export default function Navbar() {
  const { uid } = useParams();
  const [open, close] = useState(false); //for login pop up
  const modalHandler = () => {
    close(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/images/kidLogo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <Link className="nav__link" to={`/ChildDashboard/ ${uid}`}>
              Profile
            </Link>
          </li>
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
      {/* Conditional rendering for login modal */}
      {open && <Login />}
    </>
  );
}
