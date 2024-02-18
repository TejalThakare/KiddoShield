import React, { useState, useEffect } from "react";
import "../../styles/registration.css";
import userService from "../../service/userService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    address: "",
    contact: "",
  });
  // it will trigger only when username is present and showSuccessModel is true
  useEffect(() => {
    if (showSuccessModal && formdata.username) {
      userService.registerUser(formdata);
      navigate("/");
    }
  }, [showSuccessModal, formdata]);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const uname = document.getElementById("uname").value;
      const unumber = document.getElementById("unumber").value;
      const uaddress = document.getElementById("uaddress").value;
      const ufname = document.getElementById("ufname").value;
      const uemail = document.getElementById("uemail").value;
      const ulname = document.getElementById("ulname").value;
      const upassword = document.getElementById("upassword").value;
      setFormdata({
        fname: ufname,
        lname: ulname,
        username: uname,
        password: upassword,
        email: uemail,
        address: uaddress,
        contact: unumber,
      });
      console.log(uemail);
      // Validate mobile number
      if (!/^\d{7,15}$/.test(unumber)) {
        swal("Mobile number should be between 7 and 15 digits.");
        return; // Exit function if validation fails
      }

      // Validate email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uemail)) {
        swal("Please enter a valid email address.");
        return;
      }
      //password
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(upassword)) {
        swal(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
        );
        return;
      }

      // Proceed with form submission if validation passes
      if (uname && uaddress && ufname && ulname) {
        setShowSuccessModal(true);
      } else {
        swal("Please fill in all required fields.");
      }
    } catch (error) {
      swal("something went wrong");
      if (error.response && error.response.status === 404) {
        swal("Enter unique email ID");
      } else {
        swal("something went wrong");
        window.location.reload();
      }
    }
  };
  return (
    <>
      <h1
        id="header"
        style={{
          marginTop: "8%",
          fontFamily: "black",
          color: "#29293d",
          fontSize: "60px",
        }}
        className="text-center"
      >
        <strong> KiddoShield</strong>
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Register Yourself</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="uname">Username</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="uname"
                    aria-describedby="uname"
                    placeholder=" Enter username"
                  />
                  <label for="unumber">Mobile number</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="unumber"
                    aria-describedby="cnumber"
                    placeholder="Enter mobile number"
                  />

                  <label for="address">Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="uaddress"
                    placeholder="Enter your address"
                  />
                </div>
                <div class="col-sm">
                  <label for="fname">First name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="ufname"
                    aria-describedby="fname"
                    placeholder="Enter your first name"
                  />
                  <label for="email">Email address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="uemail"
                    aria-describedby="emailHelp"
                    placeholder="Tell us your email id"
                  />
                </div>
                <div class="col-sm">
                  <label for="lname">Last name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="ulname"
                    aria-describedby="lname"
                    placeholder="Enter your last name"
                  />
                  <label for="password">Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="upassword"
                    placeholder="create a password for your account"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={submitData}
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>

      {/* //when registration success then show modal */}
      <div
        className={`modal fade ${showSuccessModal ? "show" : ""}`}
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden={!showSuccessModal}
        style={{ display: showSuccessModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Success!
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowSuccessModal(false)}
              ></button>
            </div>
            <div className="modal-body" style={{ fontSize: "20px" }}>
              You are registered succefully!!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showSuccessModal ? "show" : ""}`}
        style={{ display: showSuccessModal ? "block" : "none" }}
      ></div>
    </>
  );
}
