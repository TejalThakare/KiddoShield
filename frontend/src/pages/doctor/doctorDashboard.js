import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import LoginToWebFirst from "../loginToWebFirst";
export default function DoctorDashboard() {
  const [plist, setplist] = useState([]);
  const navigate = useNavigate();
  const { did } = useParams();
  const doctorinfo = sessionStorage.getItem("doctorInfo");

  console.log(doctorinfo);

  //-----------------------------------------------------
  //   get all appointment  for doctor
  const fetchdata = async () => {
    const res = await hospitalService.getConsultantAppointment(did);
    setplist(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  //---------------------------------------------------
  return (
    <>
      {sessionStorage.getItem("loginStatus") == "true" ? (
        <nav
          className="navbar  fixed-top "
          id="navbar--id"
          style={{ background: "rgb(240, 240, 240)" }}
        >
          <Link to={"/doctorlogin"}>
            <h4>back</h4>
          </Link>
          <h2 className="navbar-heading">Appointments</h2>
          <button
            className="btn btn-dark rounded-pill"
            onClick={() => {
              sessionStorage.setItem("loginStatus", false);
              navigate("/doctorlogin");
            }}
          >
            Signout
          </button>
        </nav>
      ) : (
        <LoginToWebFirst></LoginToWebFirst>
      )}
      {sessionStorage.getItem("loginStatus") == "true" ? (
        <div className="tbl-container-outer" style={{ marginBottom: "-20%" }}>
          <h1 style={{ marginTop: "7%" }}>
            Hey {doctorinfo}, here are your appointment details.
          </h1>
          <div className="tbl-container-inner">
            <table
              style={{ fontSize: "15px", marginTop: "3%" }}
              id="history-table"
              className="table table-info table-bordered"
            >
              <thead
                className="thead-dark"
                style={{ fontSize: "20px" }}
                align="center"
              >
                <tr>
                  <th style={{ color: "#ffff" }} scope="col">
                    Appointment Id
                  </th>
                  <th style={{ color: "#ffff" }} scope="col">
                    Child Id
                  </th>
                  <th style={{ color: "#ffff" }} scope="col">
                    Date
                  </th>
                  <th style={{ color: "#ffff" }} scope="col">
                    Time
                  </th>
                  <th style={{ color: "#ffff" }} scope="col">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody align="center" style={{ fontSize: "19px" }}>
                {/* //may reqquire  change  here  */}
                {plist
                  ?.filter((ob) => new Date(ob.date) >= new Date())
                  .map((ob) => (
                    <tr>
                      <td>{ob.caid}</td>
                      <td>{ob.cid}</td>
                      <td>{ob.date}</td>
                      <td>{ob.time}</td>
                      <td>{ob.contact}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
}
