import { useState } from "react";
import userService from "../../service/userService.js";
import swal from "sweetalert";
import "../../styles/forgotpassword.css";

export default function UserForgotPassword() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const unameHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const pwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const resetuserpword = {
      username: username,
      password: password,
      email: email,
    };
    console.log(resetuserpword);
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(
        resetuserpword.password
      )
    ) {
      swal(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }
    try {
      const response = await userService.forgotUserPassword(resetuserpword);
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
        // Handle other errors
        swal("An error occurred");
      }
    }
  };

  return (
    <div
      className="forgot-password-container"
      style={{ marginTop: "10%", marginRight: "15%" }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card resetpword-card" style={{ width: "20%" }}>
          <div className="card-body">
            <h2 className="card-title">Forgot User Password</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label> Enter Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={unameHandler}
                  placeholder="Username"
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
    </div>
  );
}
