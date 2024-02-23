import { useState } from "react";
import "../styles/Navbar.css";
// import Login from "../pages/user_login_registration/login";
import Login from "../pages/user_login_registration/login";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
export default function Navbar() {
  const { uid } = useParams();
  const [open, close] = useState(false); //for login pop up
  const modalHandler = () => {
    close(true);
  };
  const signOutHandler = () => {
    sessionStorage.setItem("loginID", false);
    swal("Sign out Successfully");
    window.location.reload();
  };
  console.log(sessionStorage.getItem("urlstring"));

  if (sessionStorage.getItem("loginID") === true) {
  }

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
            {sessionStorage.getItem("loginID") === "true" ? (
              <Link
                className="nav__link"
                to={`/ChildDashboard/${sessionStorage.getItem("urlstring")}`}
              >
                Profile
              </Link>
            ) : null}
          </li>
          <li className="nav__item">
            {/* event listner to open modal */}
            {sessionStorage.getItem("loginID") === "true" ? (
              <button
                type="button"
                className="btn btn-info rounded-pill px-4"
                onClick={signOutHandler}
              >
                SignOut
              </button>
            ) : (
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
            )}
          </li>
        </ul>
      </nav>
      {/* Conditional rendering for login modal */}
      {open && <Login />}
    </>
  );
}
