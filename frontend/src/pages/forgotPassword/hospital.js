import { useState } from "react";
import userService from "../../service/userService.js";
import swal from "sweetalert";
import "../../styles/forgotpassword.css";
import hospitalService from "../../service/hospitalService.js";

export default function HospitalForgotPassword() {
  const [hospital, setHospital] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hnameHandler = (event) => {
    setHospital(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const pwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const resethospitalpword = {
      hname: hospital,
      password: password,
      email: email,
    };
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(
        resethospitalpword.password
      )
    ) {
      swal(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }
    try {
      const response = await hospitalService.forgotHospitalPassword(
        resethospitalpword
      );
      console.log(response.data);
      if (response.data === "please enter new password.") {
        swal("enter new password");
      }
      if (response.data === "password reset successfully") {
        swal("Done password reset successfully");
      }
      if (response.data === "Request failed with status code 401") {
        swal("something went wrong");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        swal("Please check your credentials.");
      } else {
        console.log(error);
        // Handle other errors
        swal("An error occurred");
      }
    }
  };

  return (
    <>
      <div
        className="forgot-password-container"
        style={{ marginLeft: "30%", marginTop: "10%" }}
      >
        <div class="card resetpword-card" style={{ width: "30%" }}>
          <div class="card-body">
            <h2 class="card-title">Forgot Hospital Password</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label> Enter hospital:</label>
                <input
                  type="text"
                  value={hospital}
                  onChange={hnameHandler}
                  placeholder="hospital"
                  class="form-control"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label> Enter Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={emailHandler}
                  placeholder="Email"
                  class="form-control"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label> Enter Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={pwordHandler}
                  placeholder="Confirm Password"
                  class="form-control"
                  required
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                id="resetpword-btn"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
