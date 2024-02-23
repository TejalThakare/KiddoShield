import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "../../styles/scheduleVaccination.css";
import { useRef, useState } from "react";
import swal from "sweetalert";
import userService from "../../service/userService";
import emailjs from "@emailjs/browser";
export default function ScheduleVaccination() {
  const form = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const childData = location.state.pdata;
  const userData = location.state.user;
  const queryString = Object.keys(userData)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(userData[key])}`
    )
    .join("&");
  console.log(childData.cid);
  const [formdetails, setFormDetails] = useState({
    cid: childData.cid,
    email: userData.email,
    date: "",
    time: "",
    contact: "",
    vname: "",
  });
  const selectedDate = new Date(formdetails.date);
  const currentDate = new Date();
  const submitData = async () => {
    if (
      formdetails.date === "" ||
      formdetails.time === "" ||
      formdetails.contact === "" ||
      formdetails.vname === null ||
      ""
    ) {
      swal("Please fill all the fields");
    } else if (selectedDate < currentDate) {
      swal("enter valid date");
      return;
    } else if (!/^\d{7,15}$/.test(formdetails.contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    } else {
      try {
        console.log(formdetails);
        const response = await userService.vaccineAppointment(
          userData.uid,
          formdetails
        );
        console.log(response.data);
        if (response.data == "appointment booked") {
          swal("Good job!", "Appointment  Booked Successfully!", "success");

          //------------------------------------------------------------------
          //email sending
          console.log(form.current.to_email.value);
          emailjs
            .sendForm("service_ayycpun", "template_w3inmv5", form.current, {
              publicKey: "w-hlJ1RqHPuR_Pq3A",
              to_email: form.current.to_email.value,
            })
            .then(
              () => {
                console.log("SUCCESS!");
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );

          //-------------------------------------------------------------------------
          navigate("/Childdashboard/" + queryString);
        }
        if (response.data == "appointment is not booked") {
          swal("vaccine not available at the moment try again after some time");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("something went wrong");
        } else {
          // Handle other errors
          console.log(error);
          swal("Vaccine not available");
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
      <form ref={form} className="form-schedule">
        <div id="schedule-vacc" className="container">
          <label for="uname">Enter Email</label>
          <input
            name="to_email"
            // disabled
            value={userData.email}
            type="email"
            className="form-control"
            id="user-name"
            aria-describedby="name"
            placeholder=" Enter email"
            onChange={(e) => {
              setFormDetails({
                ...formdetails,
                email: e.target.value,
              });
            }}
          />
          <input hidden type="text" name="from_name" value={"kiddoShield"} />
          <label for="uname">Enter Children Id</label>
          <input
            name="to_name"
            disabled
            type="text"
            value={childData.cid}
            className="form-control"
            id="user-name"
            aria-describedby="uname"
            placeholder=" Enter Id"
          />
          <label for="uname">Select Date</label>
          <input
            name="message"
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
            name="message"
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
            type="number"
            className="form-control"
            id="mob-num"
            aria-describedby="cnumber"
            placeholder="Enter mobile number"
            onChange={(e) => {
              setFormDetails({
                ...formdetails,
                contact: e.target.value,
              });
            }}
          />
          <br></br>
          <label>Select Vaccination</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="message"
            onChange={(e) => {
              setFormDetails({
                ...formdetails,
                vname: e.target.value,
              });
            }}
            className="btn btn-secondary "
          >
            <option>Select</option>
            <option value={"DTaP"}> DTap</option>
            <option value={"Hib"}>Hib</option>
            <option value={"Hipatitis B"}>Hipatitis B</option>
            <option value={"Polio"}>Polio</option>
            <option value={"Rotavirus"}>Rotavirus</option>
            <option value={"Influenza"}>Influenza</option>
            <option value={"Chickenpox"}>Chickenpox</option>
            <option value={"Hepatitis A"}>Hepatitis A</option>
            <option value={"MMR"}>MMR</option>
            <option value={"HPV"}>HPV</option>
            <option value={"Pneumococcal vaccine"}>Pneumococcal vaccine</option>
            <option value={"Meningococcal"}>Meningococcal</option>
            <option value={"other"}>other</option>
          </select>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="center-btn">
                <button
                  value="Send"
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
