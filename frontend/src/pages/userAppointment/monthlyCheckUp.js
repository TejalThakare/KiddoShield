import { useEffect, useRef, useState } from "react";
import "../../styles/scheduleVaccination.css";
import hospitalService from "../../service/hospitalService";
import userEvent from "@testing-library/user-event";
import userService from "../../service/userService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import emailjs from "@emailjs/browser";
export default function MonthlyCheckUp() {
  const [list, setplist] = useState();
  const form = useRef();
  const [specialization, setSpecialization] = useState();
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [drId, setDrId] = useState();
  const navigate = useNavigate();
  const { uid } = useParams();
  const location = useLocation();
  const childdata = location?.state?.pdata;
  const user = location?.state?.user;

  console.log(uid, user);
  useEffect(() => {
    hospitalService.getDoctor().then((res) => {
      console.log(res.data);
      setplist(res.data);
    });
  }, []);
  useEffect(() => {
    hospitalService.getDoctor().then((res) => {
      console.log(res.data);
      //filter unique specialization
      const uniqueSpecializations = Array.from(
        new Set(res.data.map((doctor) => doctor.specialization))
      );
      setSpecialization(uniqueSpecializations);
      console.log(specialization);
    });
  }, []);

  const handleSpecializationChange = (e) => {
    const selectedSpecialization = e.target.value;
    setSelectedSpecialization(selectedSpecialization);

    // Filter doctors based on selected specialization
    const specializationData = list.filter(
      (item) => item.specialization === selectedSpecialization
    );

    setAvailableDoctors(specializationData);
  };
  const submithandler = async (e) => {
    const cid = document.getElementById("cid").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const specialization = document.getElementById("specialization").value;
    const did = document.getElementById("did").value;

    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (
      date === "" ||
      time === "" ||
      contact === "" ||
      specialization === "" ||
      did === ""
    ) {
      swal("please fill all the fields");
      return;
    }
    if (!/^\d{7,15}$/.test(contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    }
    if (selectedDate < currentDate) {
      swal("enter valid date");
      return;
    }
    let obj = {
      cid: childdata.cid,
      date: date,
      time: time,
      contact: contact,
      email: user.email,
      specialization: specialization,
      did: did,
    };
    console.log(obj);
    try {
      const response = await userService.consultDoctor(uid, obj);
      if (response.data === "appointment booked") {
        //----------------------------------------------
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

        swal("appointment booked successfully");
      }
    } catch (error) {
      swal("something went wrong");
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
              <h1 style={{ fontSize: "50px" }}>Consult A Doctor</h1>
            </div>
          </div>
        </div>
      </div>
      <form ref={form} className="form-schedule">
        <div
          id="schedule-vacc"
          className="container"
          style={{ marginTop: "1%" }}
        >
          <input hidden type="text" name="from_name" value={"kiddoShield"} />
          <label for="uname">Enter Children Id</label>
          <input
            readOnly
            name="to_name"
            style={{ fontSize: "150%" }}
            type="text"
            className="form-control"
            id="cid"
            value={childdata.cid}
            aria-describedby="uname"
            placeholder=" Enter child id"
          />
          <label for="uname">Select Date</label>
          <input
            name="message"
            style={{ fontSize: "150%" }}
            type="date"
            className="form-control"
            id="date"
            aria-describedby="uname"
            placeholder=" Select date"
          />
          <label for="cnumber">Select Time</label>
          <input
            name="message"
            style={{ fontSize: "150%" }}
            type="time"
            className="form-control"
            id="time"
            aria-describedby="cnumber"
            placeholder="select time"
          />
          <label for="cnumber">Mobile number</label>
          <input
            style={{ fontSize: "150%" }}
            type="number"
            className="form-control"
            id="contact"
            aria-describedby="cnumber"
            placeholder="Enter mobile number"
          />
          <label for="cnumber">Email</label>
          <input
            readOnly
            name="to_email"
            value={user.email}
            style={{ fontSize: "150%" }}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="cnumber"
            placeholder="Enter email"
          />
          <label>Specialization</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="message"
            id="specialization"
            // name="Specialization"
            style={{ fontSize: "20px", borderRadius: "10px" }}
            onChange={handleSpecializationChange}
          >
            <option value="">Specialization</option>
            {specialization?.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          {selectedSpecialization && (
            <div>
              <label>Select Doctor</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                id="did"
                onChange={(e) => setDrId(e.target.value)}
                name="Doctor"
                style={{ fontSize: "20px", borderRadius: "10px" }}
              >
                <option value="">Select Doctor</option>
                {availableDoctors?.map((doctor, index) => (
                  <option id={doctor.did} key={doctor.did} value={doctor.did}>
                    {doctor.dfname + " " + doctor.dlname}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="center-btn">
                <button
                  onClick={submithandler}
                  type="button"
                  class="btn btn-info rounded-pill"
                  id="btn-sbt"
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
