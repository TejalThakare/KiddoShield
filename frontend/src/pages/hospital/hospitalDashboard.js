import "../../styles/hospitalDashboard.css";
import Navbar from "../../component/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HospitalLogin from "./hospitalLogin";
import swal from "sweetalert";
import axios from "axios";
export default function HosspitalDashboard() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [formdetails, setFormDetails] = useState({ email: "", password: "" });
  //------------------------------------------------------------------
  // for sign in
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8086/Hospital/loginhospital",
        formdetails
      );

      if (response.data.status === true) {
        // setIsLoggedIn(true);
        sessionStorage.setItem("hispitalLogin", true);
        navigate("/hospitalDashboard");
        swal("login success");
      } else {
        swal("Wrong password or email");
      }
    } catch (error) {
      swal("something went wrong");
    }
  };
  //---------------------------------------------------------------
  //for signout
  const signOut = () => {
    // setIsLoggedIn(false);
    sessionStorage.setItem("hispitalLogin", false);
    window.location.reload();
  };
  // -------------------------------------------------------------
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/images/kidLogo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            {sessionStorage.getItem("hispitalLogin") === "false" ? (
              <button
                data-toggle="modal"
                data-target="#modalopen"
                id="login__btn"
                type="button"
                className="btn btn-info rounded-pill px-4"
              >
                Click to login
              </button>
            ) : (
              <button
                className="btn btn-info rounded-pill px-4"
                onClick={signOut}
              >
                Signout
              </button>
            )}
          </li>
        </ul>
      </nav>
      {/* CARD-1 */}
      <div
        // dynamic class for when hospital login so hospital can access functionality
        className={`dashboard-container ${
          sessionStorage.getItem("hispitalLogin") === "true" ? "" : "blur"
        }`}
        style={{ marginBottom: "5%" }}
      >
        <div id="container-dashboard" className="container">
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top card-images"
                id="card-img"
                src="images/appointment.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">Appointments</h5>
              <p className="card-text">Click here to see the Appointments</p>

              <Link
                id="dashboard-button"
                to="/appointments"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>

          {/* CARD-2 */}
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top"
                src="images/doctor.jpg"
                alt="Card image cap"
                height={300}
                width={300}
              />
              <hr></hr>
              <h5 className="card-title">Doctors</h5>
              <p className="card-text">
                Doctors registration and doctor Details
              </p>
              <Link
                id="dashboard-button"
                to="/alldoctors"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>

        <div id="container-dashboard" className="container">
          {/* CARD-3 */}
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top"
                src="images/child.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">All Children</h5>
              <p className="card-text">All children information and history</p>
              <Link
                id="dashboard-button"
                to="/childrenInfo"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>
          {/* CARD-4 */}
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top"
                src="images/reminder.png"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">Children History</h5>
              <p className="card-text">see the history</p>
              <Link
                id="dashboard-button"
                to="/childhistory"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>

        <div id="container-dashboard" className="container">
          {/* CARD-5 */}
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top"
                src="images/vaccination.png"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">Vaccination</h5>
              <p className="card-text">See the vaccination</p>
              <Link
                id="dashboard-button"
                to="/availablevaccines"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>

          {/* CARD-6 */}
          <div id="hospital-dashboard" className="card border-info bg-info">
            <div className="card-body">
              <img
                class="card-img-top"
                src="images/feedback.jpg"
                alt="Card image cap"
                height={300}
                width={500}
              />
              <hr></hr>
              <h5 className="card-title">Feedback</h5>
              <p className="card-text">see all Feedbacks</p>
              <Link
                id="dashboard-button"
                to="/hospital/feedbacks"
                class="btn btn-outline-warning rounded-pill "
                onClick={() => window.scrollTo(0, 0)}
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* {open && <HospitalLogin></HospitalLogin>} */}

      {/* ---------------------------------------------- */}
      {/*--------------- login---------------------------- */}
      <div
        className="modal fade"
        id="modalopen"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ marginLeft: "35%" }}>
                <b> KiddoShield</b>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">╳</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="login-user">
                <div className="form-outline mb-4 w-50">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    placeholder="Enter email Id"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      marginTop: "6%",
                      borderRadius: "15px",
                    }}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        email: e.target.value,
                      });
                    }}
                  />
                  <label
                    className="form-label"
                    for="form2Example1"
                    style={{ fontSize: "14px", marginLeft: "50%" }}
                  >
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4 w-50 ">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    style={{
                      height: "30px",
                      marginLeft: "50%",
                      borderRadius: "15px",
                    }}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        password: e.target.value,
                      });
                    }}
                  />
                  <label
                    className="form-label"
                    for="password"
                    style={{
                      fontSize: "14px",
                      marginLeft: "50%",
                      marginBottom: "5%",
                    }}
                  >
                    Password
                  </label>
                </div>

                <div className="row mb-4" style={{ marginLeft: "35%" }}>
                  <div className="col" style={{ fontSize: "14px" }}>
                    <a href="/hospitalforgotpassword">Forgot password?</a>
                  </div>
                </div>
                <button
                  type="submit"
                  data-dismiss="modal"
                  className="btn btn-outline-primary btn-block mb-4 rounded-pill w-25"
                  style={{ marginLeft: "37%" }}
                  onClick={loginHandler}
                >
                  Sign in
                </button>

                <div className="text-center" style={{ fontSize: "14px" }}>
                  <p>
                    Not a member? <a href="/registrationhospital">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
