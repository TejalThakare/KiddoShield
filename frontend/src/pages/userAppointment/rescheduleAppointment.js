import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "../../styles/scheduleVaccination.css";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import userService from "../../service/userService";
export default function RescheduleVaccination() {
  const [hasMounted, setHasMounted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { childdata } = location.state;
  const { aid } = useParams();
  const [formdetails, setFormDetails] = useState({
    cid: childdata.cid,
    email: childdata.email,
    date: "",
    time: "",
    contact: childdata.contact,
    vname: childdata.vname,
  });
  console.log(formdetails);
  const submitData = async () => {
    if (
      formdetails.cid === "" ||
      formdetails.date === "" ||
      formdetails.time === "" ||
      formdetails.contact === "" ||
      formdetails.vname === null ||
      ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        console.log(formdetails);
        const response = await userService.RescheduleVaccineAppointment(
          aid,
          formdetails
        );
        console.log(response);
        if (response.status === 200) {
          swal("Good job!", "Appointment  Booked Successfully!", "success");
          navigate("/");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("something went wrong");
        } else {
          // Handle other errors
          console.log(error);
          swal("An error occurred ,Please try again later.");
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="center-img" id="scheduleImage">
              <img src="/images/schedulVaccine.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <form className="form-schedule">
        <div id="schedule-vacc" className="container">
          <h2 className="text-center">
            <b>Reschedule Appointment</b>
          </h2>
          <label for="uname">Enter Email</label>
          <input
            disabled
            value={childdata?.email}
            type="text"
            className="form-control"
            id="user-name"
            aria-describedby="name"
            placeholder=" Enter email"
          />
          <label for="uname">Enter Children Id</label>
          <input
            readOnly
            type="number"
            className="form-control"
            id="user-name"
            aria-describedby="uname"
            placeholder=" Enter child id"
            value={childdata?.cid}
          />
          <label for="uname">Select Date</label>
          <input
            required
            type="date"
            className="form-control"
            id="date-time"
            aria-describedby="uname"
            placeholder=" Select date"
            onChange={(e) => {
              setFormDetails({
                ...formdetails,
                date: e.target.value,
              });
            }}
          />
          <label for="cnumber">Select Time</label>
          <input
            required
            style={{ fontSize: "150%" }}
            type="time"
            className="form-control"
            id="mob-num"
            aria-describedby="cnumber"
            placeholder="select time"
            onChange={(e) => {
              setFormDetails({
                ...formdetails,
                time: e.target.value,
              });
            }}
          />
          <label for="cnumber">Mobile number</label>
          <input
            required
            readOnly
            type="number"
            className="form-control"
            id="mob-num"
            aria-describedby="cnumber"
            placeholder="Enter mobile number"
            value={childdata?.contact}
          />
          <br></br>
          <label>Select Vaccination</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            readOnly
            value={childdata.vname}
            className="btn btn-secondary "
          >
            <option>Select</option>
            <option value={"update"}> DTap</option>
            <option value={"delete"}>Hib</option>
            <option value={"feedback"}>Hipatitis B</option>
            <option value={"Polio"}>Polio</option>
            <option value={"Rotavirus"}>Rotavirus</option>
            <option value={"Influenza"}>Influenza</option>
            <option value={"Chicken Pox"}>Chicken Pox</option>
            <option value={"Hipatitis A"}>Hipatitis A</option>
            <option value={"MMR"}>MMR</option>
            <option value={"HPV"}>HPV</option>
            <option value={"PCV"}>PCV</option>
            <option value={"Meningococcal"}>Meningococcal</option>
            <option value={"other"}>other</option>
          </select>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="center-btn">
                <button
                  type="button"
                  class="btn btn-info rounded-pill"
                  id="btn-sbt"
                  onClick={submitData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
