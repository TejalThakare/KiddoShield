import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import userService from "../../service/userService";
import swal from "sweetalert";

export default function UpdateChildrenInfo() {
  const location = useLocation(); //taking data from other component
  const cid = useParams(); //take data from url
  const [formdetails, setformdetails] = useState({
    cid: "",
    cfname: "",
    age: "",
    weight: "",
    bloodgrp: "",
    gender: "",
    dob: "",
  });

  const data = location.state.pdata;
  const user = location.state.userinfo;
  console.log(user);
  const queryString = Object.keys(user)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(user[key])}`)
    .join("&");
  console.log(queryString);
  //
  let obj = {
    cid: data.cid,
    age: data.age,
    bloodgrp: data.bloodgrp,
    cfname: data.cfname,
    dob: data.dob,
    gender: data.gender,
    weight: data.weight,
  };
  useEffect(() => {
    setformdetails({ ...obj });
  }, []);
  console.log(obj);
  const navigate = useNavigate();
  const addChild = async (e) => {
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
      swal("pls fill all the fieds");
      return;
    }
    if (formdetails.age === "" || parseFloat(formdetails.age) <= 0) {
      swal("Please enter a valid age.");
      return;
    }
    if (formdetails.weight === "" || parseFloat(formdetails.weight) <= 0) {
      swal("Please enter a valid weight.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(formdetails.cfname)) {
      swal("Enter valid name");
      return;
    } else {
      try {
        const response = await userService.updateChildInfo(
          cid.cid,
          formdetails
        );
        if (response.status === 200) {
          swal("Good job!", "Updated Successfully!", "success");
          navigate("/ChildDashboard/" + queryString);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("something went wrong try agin later");
        } else {
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
          fontSize: "40px",
        }}
        className="text-center"
      >
        <strong> KiddoShield</strong>
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Update Child Information</b>
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
                  <label for="bloodgrp">Blood Group</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="bloodgrp"
                    aria-describedby="bloodgrp"
                    placeholder="bloodgrp"
                    value={formdetails.bloodgrp}
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
                  <label for="gender">Gender</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="gender"
                    aria-describedby="gender"
                    placeholder="Gender"
                    value={formdetails.gender}
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
