import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import userService from "../../service/userService";
import swal from "sweetalert";
import queryString from "query-string";

export default function Login() {
  const location = useLocation();
  let loginid;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    const uemail = document.getElementById("uemail").value;
    const upassword = document.getElementById("upassword").value;
    let obj = {
      email: uemail,
      password: upassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:8086/api/User/loginuser",
        obj
      );

      if (response.data.status === true) {
        const res = await axios.get(
          "http://localhost:8086/api/User/loginuser/" + obj.email
        );
        const data = res.data;
        console.log(data);

        //taking only issntial information to url ,fname,password
        const filteredData = Object.keys(data)
          .filter((key) => ["uid", "fname", "password", "email"].includes(key))
          .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
          }, {});
        //here the url will be encoded
        const queryString = Object.keys(filteredData)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                filteredData[key]
              )}`
          )
          .join("&");

        navigate("/childDashboard/" + queryString);
        swal("login success");
      } else {
        swal("Wrong password");
      }
    } catch (error) {
      swal("something went wrong");
    }
  };
  return (
    <>
      <div
        className={"modal fade"}
        id="modalopen"
        tabindex="-1"
        role="dialog"
        // aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ marginLeft: "35%" }}>
                <b> KiddoShield</b>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">╳</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="login-user">
                <div className="form-outline mb-4 w-50">
                  <input
                    type="email"
                    id="uemail"
                    className="form-control"
                    placeholder="Enter email Id"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      marginTop: "6%",
                      borderRadius: "15px",
                    }}
                  />
                  <label
                    className="form-label"
                    for="form2Example1"
                    style={{ fontSize: "14px", marginLeft: "50%" }}
                  >
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4 w-50 ">
                  <input
                    type="password"
                    id="upassword"
                    className="form-control"
                    placeholder="Enter Password"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      borderRadius: "15px",
                    }}
                  />
                  <label
                    className="form-label"
                    for="password"
                    style={{
                      fontSize: "14px",
                      marginLeft: "50%",
                      marginBottom: "5%",
                    }}
                  >
                    Password
                  </label>
                </div>

                <div className="row mb-4" style={{ marginLeft: "7%" }}>
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        for="checkbox"
                        style={{ fontSize: "14px" }}
                      >
                        {" "}
                        Remember me{" "}
                      </label>{" "}
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox"
                        style={{ width: "1.8em;", height: "1.8em" }}
                      />
                    </div>
                  </div>

                  <div className="col" style={{ fontSize: "14px" }}>
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block mb-4 rounded-pill w-25"
                  style={{ marginLeft: "37%" }}
                  data-dismiss="modal"
                  onClick={loginHandler}
                >
                  Sign in
                </button>

                <div className="text-center" style={{ fontSize: "14px" }}>
                  <p>
                    Not a member?{" "}
                    <Link
                      to="/registration"
                      onClick={() => {
                        window.location.href = "/registration";
                      }}
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
