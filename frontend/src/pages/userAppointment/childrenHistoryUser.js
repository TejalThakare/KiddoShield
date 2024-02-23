import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import { Link, useLocation } from "react-router-dom";
import userService from "../../service/userService";
import swal from "sweetalert";

export default function ChildrenHistoryUser() {
  const [plist, setplist] = useState([]);
  const location = useLocation();
  const child = location?.state?.child;
  console.log(child);
  console.log(sessionStorage.getItem("userId"));
  //-----------------------------------------------------
  const fetchdata = () => {
    userService
      .getChildrenHistoryUser(sessionStorage.getItem("userId"))
      .then((result) => {
        console.log(result.data);
        setplist([...result.data]);
      })
      .catch((err) => {
        swal("something went wrong");
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  //----------------------------------------------------
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <Link to={"/"}>
          <h5> back</h5>
        </Link>
        <h5>Medical History of {child.cfname}</h5>
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
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Completed</th>
                <th scope="col">Pending</th>
                {/* <th  scope="col">Click</th> */}
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob, i) => (
                <tr>
                  <td>{ob[3]}</td>
                  <td>{ob[4]}</td>
                  <td>{ob[5]}</td>
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
