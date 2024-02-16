import React, { useState } from "react";
import "../../styles/registration.css";
import HospitalLogin from "./hospitalLogin";
import hospitalService from "../../service/hospitalService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function HospitalRegistration() {
  const navigate = useNavigate();

  const [open, close] = useState(false); //for login pop up
  const modalHandler = () => {
    close(true);
  };
  const [formdetails, setFormDetails] = useState({
    address: "",
    contact: "",
    email: "",
    emergencynum: "",
    hname: "",
    password: "",
  });

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log(formdetails.hname);
    //validate password
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(
        formdetails.password
      )
    ) {
      swal(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    // Validate mobile number
    if (!/^\d{7,15}$/.test(formdetails.contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdetails.email)) {
      swal("Please enter a valid email address.");
      return;
    }

    if (
      formdetails.address == "" ||
      formdetails.emergencynum == "" ||
      formdetails.hname == ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        const response = await hospitalService.registerHospital(formdetails);
        if (response.status === 200) {
          swal("Good job!", "Registered Successfully!", "success");
          navigate("/hospitalDashboard");
          window.location.reload();
        }
        // Registration successfull, handle the response
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("Enter unique email ID");
        } else {
          // Handle other errors
          swal(
            "An error occurred while registering the hospital. Please try again later."
          );
        }
      }
    }
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
      <h1
        id="header"
        style={{
          marginTop: "8%",
          fontFamily: "black",
          color: "#29293d",
          fontSize: "70px",
        }}
        className="text-center"
      >
        <b> KiddoShield</b>
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Hospital Registration</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="fname">Hospital Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="hname"
                    aria-describedby="hname"
                    placeholder="Enter your Hospital Name"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        hname: e.target.value,
                      });
                    }}
                  />
                  <label for="cnumber">Emergency Number</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="enumber"
                    aria-describedby="enumber"
                    placeholder="Enter Emergency number"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        emergencynum: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="cnumber">Number</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="hnumber"
                    aria-describedby="hnumber"
                    placeholder="Enter Hospital number"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        contact: e.target.value,
                      });
                    }}
                  />
                  <label for="email">Email Address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Hospital Email Address"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="password">Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="create a password for your account"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        password: e.target.value,
                      });
                    }}
                  />

                  <label for="address">Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Hospital address"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        address: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              style={{ marginBottom: "13%" }}
              className="btn btn-info rounded-pill "
              id="signup"
              onClick={signUpHandler}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
      {open && <HospitalLogin></HospitalLogin>}
    </>
  );
}
