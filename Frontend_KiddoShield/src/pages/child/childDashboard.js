import { Link, useLinkClickHandler, useParams } from "react-router-dom";
// import "../styles/childHistory.css";
import "../../styles/childHistory.css";
import { useEffect, useState } from "react";
import userService from "../../service/userService";
import axios from "axios";
import swal from "sweetalert";
export default function ChildDashboard() {
  //---------------------------------------------------------------------
  //to delete child ffrom db
  const [id, setId] = useState("");
  const handler = (e) => {
    setId(e.currentTarget.id);
    e.preventDefault();
  };
  const yesNoHandler = async (e) => {
    try {
      if (e.target.id === "Yes") {
        const response = await axios.delete(
          `http://localhost:8086/api/User/deletechild/${id}`
        );
      }
      swal("success");
    } catch (error) {
      console.error("Error deleting child:", error);
    } finally {
      window.location.reload();
    }
  };

  //----------------------------------------------------------------------
  //to get all children from db
  const [plist, setplist] = useState([]);
  const fetchdata = () => {
    userService
      .getChildren()
      .then((result) => {
        console.log(result.data);
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
      <div id="dashboard-card" className="card">
        <div className="card-header">Children Datails</div>

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
                      // onClick={handler}
                      id="history-btn"
                      to={`/updateChildInfo/${child.cid}`}
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
                            to="/scheduleVaccine"
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
                to="/ChildRegistration"
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
