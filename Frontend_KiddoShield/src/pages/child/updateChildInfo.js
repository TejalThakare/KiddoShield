import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../service/userService";

export default function Registration() {
  const [formdetails, setformdetails] = useState({
    cid: "",
    cfname: "",
    age: "",
    weight: "",
    bloodgrp: "",
    gender: "",
    dob: "",
  });
  const navigate = useNavigate();
  const addChild = (e) => {
    e.preventDefault();
    if (
      formdetails.cid === "" ||
      formdetails.cfname === "" ||
      formdetails.age === "" ||
      formdetails.weight === "" ||
      formdetails.bloodgrp === "" ||
      formdetails.gender === "" ||
      formdetails.dob === ""
    ) {
      console.log(
        formdetails.cid,
        formdetails.cfname,
        formdetails.age,
        formdetails.weight,
        formdetails.bloodgrp,
        formdetails.gender,
        formdetails.dob
      );
      alert("pls fill all the fieds");
      return;
    }
    userService
      .registerChild(formdetails)
      .then((res) => {
        setformdetails({
          cid: "",
          cfname: "",
          age: "",
          weight: "",
          bloodgrp: "",
          gender: "",
          dob: "",
        });
        navigate("/ChildDashboard/2");
      })
      .catch((err) => {
        alert("something went wrong");
      });
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
          fontSize: "40px",
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
                  <label for="fname">Child First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="childname"
                    aria-describedby="fname"
                    placeholder="Enter your first name"
                    value={formdetails.cfname}
                    onChange={(event) => {
                      setformdetails({
                        ...formdetails,
                        cfname: event.target.value,
                      });
                    }}
                  />

                  <label for="age">Weight</label>
                  <input
                    type="number"
                    className="form-control"
                    id="childweight"
                    aria-describedby="emailHelp"
                    placeholder="enter Weight of your child"
                    value={formdetails.weight}
                    onChange={(event) => {
                      setformdetails({
                        ...formdetails,
                        weight: event.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="childage"
                    aria-describedby="emailHelp"
                    placeholder="enter age of your child"
                    value={formdetails.age}
                    onChange={(event) => {
                      setformdetails({
                        ...formdetails,
                        age: event.target.value,
                      });
                    }}
                  />
                  <label for="fname">Child Id</label>
                  <input
                    disabled
                    type="number"
                    className="form-control"
                    id="childId"
                    aria-describedby="childid"
                    placeholder="Enter Children id"
                    value={formdetails.cid}
                    onChange={(event) => {
                      setformdetails({
                        ...formdetails,
                        cid: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
              onClick={addChild}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

{
}
