import {
  Link,
  json,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// import "../styles/childHistory.css";
import "../../styles/childHistory.css";
import { useEffect, useState } from "react";
import userService from "../../service/userService";
import axios from "axios";
import swal from "sweetalert";
export default function ChildDashboard() {
  const navigate = useNavigate();

  //get the key values from query string
  const { queryParam } = useParams();

  const paramsArray = queryParam.split("&");
  const userInfo = {};
  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    //use to decode the url like %
    userInfo[key] = decodeURIComponent(value);
  });

  //---------------------------------------------------------------------

  //to delete child from db
  const [cid, setId] = useState("");
  const handler = (e) => {
    setId(e.currentTarget.id);
    e.preventDefault();
  };
  let yesNoHandler = async (e) => {
    try {
      if (e.target.id === "Yes") {
        const response = await axios.delete(
          `http://localhost:8086/api/User/deletechild/${cid}` //cid child id
        );
        swal("success");
      }
    } catch (error) {
      swal("something went wrong");
    } finally {
      window.location.reload();
    }
  };

  //----------------------------------------------------------------------
  //to get all children from db
  const [plist, setplist] = useState([]);
  const fetchdata = () => {
    userService
      .getChildren(userInfo.uid) //user id
      .then((result) => {
        setplist([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  //----------------------------------------------------------------------
  //to delete user
  const userProfileHandler = async (e) => {
    if (e.target.value === "delete") {
      try {
        userService.deleteUser(userInfo.uid).then((res) => {
          console.log(res);
        });
        navigate("/");
        swal("success");
      } catch (error) {
        console.log(error);
        swal("something went wrong");
      } finally {
        window.location.reload();
      }
    } // for  update
    if (e.currentTarget.value === "update") {
      navigate("/updateuser/" + userInfo.uid, { state: { data: userInfo } });
    }
    if (e.currentTarget.value === "feedback") {
      navigate("/user/feedback/" + userInfo.uid, {
        state: { data: userInfo },
      });
    }
    if (e.target.value === "appointment") {
      navigate("/reschedulevaccine/" + userInfo.uid, {
        state: { data: userInfo },
      });
    }
  };
  // -------------------------------------------------------------
  //for showing appointment
  const [info, setInfo] = useState();
  const AppointmentHandler = async (e) => {
    console.log(userInfo.uid);
    try {
      const res = await userService.ShowVaccineAppointment(userInfo.uid);
      console.log(res);
      if (res.data.length === 1) {
        const responseData = res.data;
        const information = responseData?.map((data, index) => {
          return ` you have an appoinment on ${data.date}  at ${data.time},children Id ${data.cid}`;
        });
        setInfo(information);
      } else {
        const responseData = res.data;
        const information = responseData?.map((data, index) => {
          return (
            <div key={index}>
              <p>
                Appointment date: {data.date} at {data.time}, children ID{" "}
                {data.cid}
              </p>
            </div>
          );
        });

        setInfo(information);
      }
    } catch (error) {
      swal("something went wrong");
    }
  };

  //-----------------------------------------------------------------
  //reschedule handler
  const rescheduleHabdler = () => {
    navigate("/reschedulevaccine/" + userInfo.uid, {
      state: { data: userInfo },
    });
  };

  //--------------------------------------------------------------------
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
        {/* --------------------------------------------------------- */}
        {/* dropdown for select action */}
        <select onChange={userProfileHandler} className="btn btn-dark ">
          <option>Profile</option>
          <option value={"update"}>Update</option>
          <option value={"delete"}>Delete</option>
          <option value={"feedback"}>Feedback</option>
          <option value={"appointment"}>appointment</option>
          <option value={"signout"}>SignOut</option>
        </select>
      </nav>

      <div id="dashboard-card" className="card">
        <div style={{ backgroundColor: "black" }}>
          <div style={{ marginLeft: "1%" }}>
            <h2 className="text text-white">Welcome back {userInfo.fname}</h2>
          </div>
        </div>
        <div className="card-header" style={{ display: "flex" }}>
          <div>Children Datails</div>
          {/* -------------------------------------------------- */}
          {/* button for showing appointment */}
          <button
            style={{ marginLeft: "68%" }}
            type="button"
            class="btn btn-dark "
            data-toggle="modal"
            data-target="#appointment"
            onClick={AppointmentHandler}
          >
            Show Appointment
          </button>
          <div
            class="modal fade"
            id="appointment"
            tabindex="-1"
            role="dialog"
            aria-labelledby="appointment"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Appointments
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {/* printing the information about the appointments */}
                  <p>{info}</p>
                </div>
                <div class="modal-footer">
                  <button
                    data-dismiss="modal"
                    className="btn btn-dark"
                    onClick={rescheduleHabdler}
                  >
                    Reschedule
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <img src="/images/childID1.jpg" id="card-img-kid"></img>
        <div className="card-body" id="card-body">
          <blockquote style={{ marginTop: "-2%" }} className="blockquote mb-0">
            {/* add dynamically loaded children here */}

            {plist.map((child, index) => (
              <div
                id="card-body-dashboard"
                style={{
                  backgroundColor: "#C2CFD0",
                  borderRadius: "2%",
                }}
                className="card"
              >
                <div className="card-body">
                  <h5 className="card-title" id="">
                    <b>
                      {child.cfname.charAt(0).toUpperCase() +
                        child.cfname.slice(1)}
                    </b>
                  </h5>
                  <div key={index} className="child-dashboard">
                    <p>Date Of Birth : {child.dob}</p>
                    <p> Age : {child.age}</p>
                    <p id="childId">Child Id : {child.cid}</p>
                    <p>Weight: {child.weight}kg</p>
                    <p>Blood Group : {child.bloodgrp}</p>
                  </div>
                  <hr></hr>
                  <div id="history-app-btn" className="text-end">
                    <Link
                      to={`/updateChildInfo/${child.cid}`}
                      state={{ pdata: child, userinfo: userInfo }}
                      id="history-btn"
                      style={{ color: "#571365" }}
                      className="btn btn-warning btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Update
                    </Link>
                    <button
                      onClick={handler}
                      to={`/deleteChild/${child.cid}`}
                      id={`${child.cid}`}
                      // id="history-btn"
                      style={{ color: "#571365", marginRight: "4%" }}
                      className="btn btn-danger btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Remove
                    </button>
                    <Link
                      id="history-btn"
                      to={`/ChildHistory/${child.cid}`}
                      style={{ color: "#571365" }}
                      className="btn btn-success btn-sm"
                    >
                      View History
                    </Link>

                    {/* dropdown button for appoinment */}
                    <div className="btn-group">
                      <a
                        style={{ color: "#571365" }}
                        className="btn  btn-info btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Appoinment
                      </a>
                      <ul id="dropdown-menu" className="dropdown-menu">
                        <li id="vaccination" style={{ marginLeft: "5%" }}>
                          <Link
                            className="appointment-link"
                            to={"/scheduleVaccine/" + userInfo.uid}
                            state={{ pdata: child, user: userInfo }}
                          >
                            Vaccination
                          </Link>
                        </li>

                        <li id="monthlyCheckup" style={{ marginLeft: "5%" }}>
                          <Link
                            className="appointment-link"
                            to="/monthlyCheckUp"
                          >
                            Monthly checkup
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div id="dashboard-register-btn" className="text-center">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={`/ChildRegistration/${userInfo.uid}`}
                state={{ user: userInfo }}
                className="btn btn-outline-primary"
              >
                + Register
              </Link>
            </div>
          </blockquote>
        </div>
      </div>

      {/* modal for concent yes or no */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Remove
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style={{ fontSize: "15px" }}>
              Do you want to move forward ?
            </div>
            <div class="modal-footer">
              <button
                onClick={yesNoHandler}
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                id="Yes"
              >
                Yes
              </button>
              <button
                onClick={yesNoHandler}
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                id="No"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
