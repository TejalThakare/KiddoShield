import React, { useState, useEffect } from "react";
import "../../styles/registration.css";
import userService from "../../service/userService";
import swal from "sweetalert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
export default function UpdateUser() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    uid: data.uid,
    fname: "",
    lname: "",
    username: "",
    email: "",
    address: "",
    contact: "",
  });

  const submitData = async (e) => {
    e.preventDefault();

    // Validate mobile number
    if (!/^\d{7,15}$/.test(formdata.contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      swal("Please enter a valid email address.");
      return;
    }

    if (
      formdata.fname === "" ||
      formdata.lname === "" ||
      formdata.username === "" ||
      formdata.address === ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        console.log(data.uid);
        const response = await userService.updateUser(data.uid, formdata);
        console.log(response.status);
        if (response.status == 200) {
          swal("Good job!", "Updated Successfully!", "success");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 404) {
          swal("Enter unique email ID");
        } else {
          // Handle other errors
          swal(
            "An error occurred while updating information. Please try again later."
          );
        }
      }
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top "
        id="navbar--id"
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
      </nav>
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
            <b style={{ fontSize: "80%" }}>Update Information</b>
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
                    value={formdata.username}
                    onChange={(e) => {
                      setFormdata({
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
                    value={formdata.contact}
                    onChange={(e) => {
                      setFormdata({
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
                    value={formdata.address}
                    onChange={(e) => {
                      setFormdata({
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
                    value={formdata.fname}
                    onChange={(e) => {
                      setFormdata({
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
                    value={formdata.email}
                    onChange={(e) => {
                      setFormdata({
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
                    value={formdata.lname}
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        lname: e.target.value,
                      });
                    }}
                  />
                  <label for="uid">User ID</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="uid"
                    placeholder="uid"
                    value={formdata.uid}
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
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
