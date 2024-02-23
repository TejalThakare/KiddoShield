import React, { useState, useEffect } from "react";
import "../../styles/registration.css";
import userService from "../../service/userService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  const [formdata, setFormDetails] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    address: "",
    contact: "",
  });
  const submitData = async (e) => {
    e.preventDefault();

    //username validation
    if (!/^[a-zA-Z0-9]+$/.test(formdata.username)) {
      swal(
        "Username should contain only letters and numbers with no special characters."
      );
    }
    // //validate firt name
    if (!/^[a-zA-Z]+$/.test(formdata.fname)) {
      swal("Enter valid name");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(formdata.lname)) {
      swal("Enter valid name");
      return;
    }
    // Validate mobile number
    if (!/^\d{7,15}$/.test(formdata.contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    }

    // Validate email

    if (!/^[^#&\/\s@]+@[^#&\/\s@]+\.[^#&\/\s@]+$/.test(formdata.email)) {
      swal("Please enter a valid email address.");
      return;
    }
    //password
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(
        formdata.password
      )
    ) {
      swal(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    console.log(formdata);
    if (
      formdata.username === "" ||
      formdata.fname === "" ||
      formdata.address === "" ||
      formdata.lname === ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        const response = await userService.registerUser(formdata);
        if (response.status === 200) {
          swal("Good job!", "Registered Successfully!", "success");
          navigate("/");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("Enter unique email ID");
        } else {
          swal(
            "An error occurred while registering the User. Please try again later."
          );
        }
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
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        username: e.target.value,
                      });
                    }}
                  />
                  <label for="unumber">Mobile number</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="unumber"
                    aria-describedby="cnumber"
                    placeholder="Enter mobile number"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        contact: e.target.value,
                      });
                    }}
                  />

                  <label for="address">Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="uaddress"
                    placeholder="Enter your address"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        address: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        fname: e.target.value,
                      });
                    }}
                  />
                  <label for="email">Email address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="uemail"
                    aria-describedby="emailHelp"
                    placeholder="Tell us your email id"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        email: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        lname: e.target.value,
                      });
                    }}
                  />
                  <label for="password">Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="upassword"
                    placeholder="create a password for your account"
                    onChange={(e) => {
                      setFormDetails({
                        ...formdata,
                        password: e.target.value,
                      });
                    }}
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
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
