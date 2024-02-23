import React, { useState } from "react";
import "../../styles/registration.css";
import hospitalService from "../../service/hospitalService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { formToJSON } from "axios";
export default function HospitalRegistration() {
  const navigate = useNavigate();

  const [open, close] = useState(false); //for login pop up
  const modalHandler = () => {
    close(true);
  };
  const [formdetails, setFormDetails] = useState({
    contact: "",
    dfname: "",
    dlname: "",
    email: "",
    password: "",
    specialization: "",
  });

  const signUpHandler = async (e) => {
    console.log(formdetails.contact);
    e.preventDefault();
    //validate name
    if (!/^[a-zA-Z]+$/.test(formdetails.dfname)) {
      swal("Enter valid name");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(formdetails.dlname)) {
      swal("Enter valid name");
      return;
    }
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

    if (!/^[^#&\/\s@]+@[^#&\/\s@]+\.[^#&\/\s@]+$/.test(formdetails.email)) {
      swal("Please enter a valid email address.");
      return;
    }
    if (
      formdetails.specialization === "" ||
      formdetails.dfname === "" ||
      formdetails.dlname === "" ||
      formdetails.contact === null ||
      ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        console.log(formdetails);
        const response = await hospitalService.registerDoctor(formdetails);
        console.log(response);
        if (response.status === 200) {
          swal("Good job!", "Registered Successfully!", "success");
          navigate("/hospitalDashboard");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("Enter unique email ID");
        } else {
          // Handle other errors
          swal(
            "An error occurred while registering the Doctor. Please try again later."
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
            <b style={{ fontSize: "80%" }}>Register Doctors</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="dfname">Enter First Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="hname"
                    aria-describedby="dfname"
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        dfname: e.target.value,
                      });
                    }}
                  />
                  <label for="cnumber">Enter Last Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="dlname"
                    aria-describedby="dlname"
                    placeholder="Enter Last Name"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        dlname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="cnumber">Contact</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="contact"
                    aria-describedby="contact"
                    placeholder="Enter Contact number"
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
                    placeholder="Enter Email Address"
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

                  <label for="specialization">Specialization</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="specialization"
                    placeholder="Enter Specialization"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        specialization: e.target.value,
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
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
