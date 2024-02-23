import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import { Link } from "react-router-dom";

export default function ChildrenHistory() {
  const [plist, setplist] = useState([]);

  //-----------------------------------------------------
  const fetchdata = () => {
    hospitalService
      .getChildHistory()
      .then((result) => {
        setplist([...result.data]);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  let date = new Date();
  let yyyy = date.getFullYear();
  let dd = date.getDate();
  let mm = date.getMonth();
  let hh = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let dateToday = `${mm + 1}-${dd}-${yyyy}`;
  let timeToday = `${hh}:${min}:${sec}`;

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
        <h2 className="navbar-heading">Children History</h2>
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
                <th scope="col">Child Id</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">completed</th>
                <th scope="col">Pending</th>
                {/* <th  scope="col">Click</th> */}
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob, i) => (
                <tr>
                  <td>{ob[1]}</td>
                  <td>{ob[9]}</td>
                  <td>{ob[3]}</td>
                  <td>{ob[5]}</td>
                  <td>{ob[6]}</td>
                  <td>
                    {ob[3] < new Date().toISOString().slice(0, 10)
                      ? "Complete"
                      : ""}
                  </td>
                  <td>
                    {ob[3] < new Date().toISOString().slice(0, 10)
                      ? ""
                      : "Pending"}
                  </td>
                  {/* <td>
                    <button className="btn btn-outline-info" id="username">
                      Click Here
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
