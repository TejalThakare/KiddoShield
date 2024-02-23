import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import { Link } from "react-router-dom";

export default function ChildrenInfo() {
  const ref = useRef(0);
  const [plist, setplist] = useState([]);

  //-----------------------------------------------------
  const fetchdata = () => {
    hospitalService
      .getChildren()
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
        <h2 className="navbar-heading">All Childrens</h2>
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
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Weight</th>
                {/* <th  scope="col">Click</th> */}
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob) => (
                <tr>
                  <td>{ob.cid}</td>
                  <td>{ob.cfname}</td>
                  <td>{ob.age}</td>
                  <td>{ob.gender}</td>
                  <td>{ob.bloodgrp}</td>
                  <td>{ob.weight}kg</td>
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
