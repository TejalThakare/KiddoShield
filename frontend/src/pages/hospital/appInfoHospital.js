import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
export default function HospitalAllAppointment() {
  const [plist, setplist] = useState([]);
  const [reminder, setReminder] = useState();
  const form = useRef();
  let currentDate = new Date();
  //-----------------------------------------------------
  const fetchdata = () => {
    hospitalService
      .getAppointment()
      .then((result) => {
        setplist([...result.data]);
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };

  // const sendReminder = () => {

  // };

  useEffect(() => {
    fetchdata();
    // sendReminder();
  }, []);

  const reminderHandler = () => {
    console.log("clickedd");
    hospitalService
      .getAppointment()
      .then((result) => {
        const list = result.data;
        list.forEach((element) => {
          const appDate = element.date;
          const convertAppDate = new Date(appDate);
          const timediference = convertAppDate - currentDate;
          let hoursDifference = (timediference / (1000 * 60 * 60)).toFixed(1);
          console.log(hoursDifference);
          if (hoursDifference <= "40.0") {
            console.log(result);
            const temlateParam = {
              to_email: element.email,
              message: `reminder!!!!!! your appointment for ${element.vname} is scheduled on ${element.date}`,
              from_name: "kiddoShield",
            };
            emailjs
              .send(
                "service_ayycpun",
                "template_w3inmv5",
                temlateParam,
                "w-hlJ1RqHPuR_Pq3A"
              )
              .then(
                () => {
                  console.log("SUCCESS!");
                },
                (error) => {
                  console.log("FAILED...", error.text);
                }
              );
          }
        });
      })
      .catch((error) => {
        swal("something went wrong");
      });
  };

  //----------------------------------------------------
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <Link to={"/hospitalDashboard"}>
          <h5> back</h5>
        </Link>
        <h2 className="navbar-heading">All Appointment</h2>
        <button className="btn btn-success" onClick={reminderHandler}>
          Send Reminder
        </button>
      </nav>

      <div className="tbl-container-outer">
        <div className="tbl-container-inner">
          <table
            style={{ fontSize: "15px" }}
            id="history-table"
            className="table table-striped table-bordered"
          >
            <thead
              className="thead-dark"
              style={{ fontSize: "20px" }}
              align="center"
            >
              <tr>
                <th scope="col">Appoinment id</th>
                <th scope="col">Child Id</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Contact</th>
                <th scope="col">Vaccine </th>
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob) => (
                <tr>
                  <td>{ob.aid}</td>
                  <td>{ob.cid}</td>
                  <td>{ob.date}</td>
                  <td>{ob.time}</td>
                  <td>{ob.contact}</td>
                  <td>{ob.vname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
