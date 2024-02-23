import { useEffect, useRef, useState, useSyncExternalStore } from "react";
//css
import "../../styles/childHistory.css";
import hospitalService from "../../service/hospitalService";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function AvailableVaccines() {
  const [plist, setplist] = useState([]);
  const [name, setname] = useState();
  //-----------------------------------------------------------------------
  //add new vaccine

  const addNewvaccineBtn = () => {
    const avdoses = document.getElementById("avldoses").value;
    const vname = document.getElementById("vaccinename").value;
    if (avdoses < 0) {
      swal("Enter a positive number");
      return;
    }
    if (vname === "") {
      swal("please fill all the field");
    }
    if (avdoses && vname) {
      let obj = {
        avdoses,
        vname,
      };
      hospitalService
        .addVaccine(obj)
        .then((Response) => {
          swal("Done!", "Doses added!", "success");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          swal("Error!", "Failed to add doses!", "error");
        });
    } else {
      swal("Please fill the field correctly");
    }
  };

  //------------------------------------------------------------------------
  // add vaccine dosses
  const addVacine = (vid, vname) => {
    setname({ vaccineID: vid, vaccineName: vname });
  };
  const addDosesbtn = async (e) => {
    const avdoses = +document.getElementById("doses").value;

    if (avdoses < 0) {
      swal("Enter a positive number");
      return;
    }
    if (avdoses) {
      hospitalService
        .updateVaccineDoses(avdoses, name.vaccineID)
        .then((Response) => {
          window.location.reload();
          swal("Done!", "Doses added!", "success");
        })
        .catch((error) => {
          console.error(error);
          swal("Error!", "Failed to add doses!", "error");
        });
    } else {
      swal("Please fill the field correctly");
    }
  };

  //-------------------------------------------------------------------------
  //get all vacine from db
  const fetchdata = () => {
    hospitalService
      .getVaccine()
      .then((result) => {
        console.log(result.data);
        setplist([...result.data]);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  //-------------------------------------------------------------------------
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
        <h2 className="navbar-heading">Available Vaccines</h2>
        {/* modal button to add vaccine  */}
        <button
          className="btn btn-outline-info rounded-pill"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add Vaccine
        </button>
      </nav>
      <div className="tbl-container-outer" style={{ marginBottom: "-20%" }}>
        <div className="tbl-container-inner">
          <table
            style={{ fontSize: "15px" }}
            id="history-table"
            className="table table-primary table-bordered"
          >
            <thead
              className="thead-dark"
              style={{ fontSize: "20px" }}
              align="center"
            >
              <tr>
                <th scope="col">Vaccine Id</th>
                <th scope="col">Name</th>
                <th scope="col">Available Doses</th>
                <th scope="col">Add Doses</th>
                {/* <th  scope="col">Click</th> */}
              </tr>
            </thead>
            <tbody align="center" style={{ fontSize: "19px" }}>
              {plist?.map((ob) => (
                <tr>
                  <td>{ob.vid}</td>
                  <td>{ob.vname}</td>
                  <td>{ob.avdoses}</td>
                  <td>
                    {/* modal button to add doses  */}
                    <button
                      className="btn btn-info rounded-pill"
                      id="username"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      // button will give vid and vname when click and modal will open
                      onClick={() => addVacine(ob.vid, ob.vname)}
                    >
                      Update Doses
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* -------------------------------------------------------------------------------------------------------- */}
        {/* modal for  adding doses to vaccines */}

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Doses Here
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="modal-body"
                style={{ fontSize: "17px", marginLeft: "5%" }}
              >
                Vaccine Id :{name?.vaccineID} <br></br>Vaccine Name{" "}
                {name?.vaccineName}
                <hr></hr>
                <form>
                  <label for="doses">Enter the number</label>
                  <input
                    required
                    id="doses"
                    className="form-control"
                    type="number"
                    placeholder="Default input"
                    min="0"
                  ></input>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  // update the number of doses
                  onClick={addDosesbtn}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------- */}
        {/* modal for adding vaccine */}

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add new vaccine
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
              <div class="modal-body">
                <form className="login-user">
                  <div className="form-outline mb-4 w-50">
                    <label
                      className="form-label"
                      for="avldoses"
                      style={{ fontSize: "14px", marginLeft: "50%" }}
                    >
                      Enter Doses
                    </label>
                    <input
                      type="number"
                      id="avldoses"
                      className="form-control"
                      placeholder="Enter Number of doses"
                      style={{
                        height: "30px",
                        marginLeft: "50%",
                        marginTop: "6%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4 w-50 ">
                    <label
                      className="form-label"
                      for="vaccinename"
                      style={{
                        fontSize: "14px",
                        marginLeft: "50%",
                        marginBottom: "5%",
                      }}
                    >
                      Enter Name
                    </label>
                    <input
                      type="text"
                      id="vaccinename"
                      className="form-control"
                      placeholder="Enter Name"
                      style={{
                        height: "30px",
                        marginLeft: "50%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {/* add new vaccine btn */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={addNewvaccineBtn}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
