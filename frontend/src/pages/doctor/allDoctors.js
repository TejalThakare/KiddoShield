import { useEffect, useRef, useState } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function AllDoctors() {
  const [plist, setplist] = useState([]);
  const navigate = useNavigate();

  //-----------------------------------------------------
  //get All doctors
  const fetchdata = () => {
    hospitalService
      .getDoctor()
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
  //delete doctor

  const deletehandler = async (id) => {
    console.log(id);
    const response = await hospitalService.removeDoctor(id);
    try {
      if (response.status === 200) {
        swal("Done", "Deleted Successfully!", "success");
        window.location.reload();
        navigate("/allDoctors");
      }
    } catch (error) {
      swal(
        "An error occurred while Deleting the Doctor. Please try again later."
      );
    }
  };

  //---------------------------------------------------
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <Link to={"/hospitalDashboard"}>
          <h4>back</h4>
        </Link>
        <h2 className="navbar-heading">All Doctors</h2>
        <button
          className="btn btn-dark rounded-pill"
          onClick={() => navigate("/doctorreg")}
        >
          Doctor Registration
        </button>
      </nav>

      <div className="tbl-container-outer" style={{ marginBottom: "-20%" }}>
        <div className="tbl-container-inner">
          <table
            style={{ fontSize: "15px", marginTop: "8%" }}
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
                  Doctor ID
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  First Name
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Last Name
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Email
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Specialization
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Contact
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Remove
                </th>
                <th style={{ color: "#ffff" }} scope="col">
                  Update Info
                </th>
                {/* <th  scope="col">Click</th> */}
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob) => (
                <tr>
                  <td>{ob.did}</td>
                  <td>{ob.dfname}</td>
                  <td>{ob.dlname}</td>
                  <td>{ob.email}</td>
                  <td>{ob.specialization}</td>
                  <td>{ob.contact}</td>
                  <td>
                    <button
                      className="btn btn-outline-dark rounded-pill"
                      id="username"
                      onClick={(e) => deletehandler(ob.did)}
                    >
                      Click Here
                    </button>
                  </td>
                  <td>
                    <Link
                      className="btn btn-outline-dark rounded-pill"
                      to={`/update/${ob.did}`}
                      state={{ pdata: ob }}
                    >
                      Click Here
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
