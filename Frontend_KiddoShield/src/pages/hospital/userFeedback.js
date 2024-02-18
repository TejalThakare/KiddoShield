import swal from "sweetalert";
import userService from "../../service/userService";
import { useLocation, useNavigate } from "react-router-dom";

export default function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  console.log(data);

  const queryString = Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
  console.log(queryString);

  const submitFeedback = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const date = document.getElementById("feedbackdate").value;
    const msg = document.getElementById("feedback").value;

    if (msg && date !== "") {
      let obj = {
        msg,
        date,
      };

      console.log(obj);
      try {
        const response = await userService.giveFeedback(data.uid, obj);
        console.log(response);
        if (response.status == 200) {
          swal("Successful");
          navigate("/Childdashboard/" + queryString);
        }
      } catch (error) {
        swal("Something went wrong");
      }
    } else {
      swal("please fill all the fields");
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <a href="/">
          <img
            src="/images/kidLogo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </a>
      </nav>
      <h6 className="text-center" style={{ marginTop: "8%", fontSize: "30px" }}>
        <b> Hey {data.fname} here's your feedback form</b>
      </h6>
      <div className="card " style={{ height: "100%" }}>
        <form>
          <div className="form-group ">
            <label for="feedbackdate">Select Date</label>
            <input
              type="date"
              className="form-control"
              id="feedbackdate"
              aria-describedby="emailHelp"
              placeholder="Select date"
            />
          </div>
          <div className="form-group">
            <label for="feedback">Give Feedback</label>
            <textarea
              rows={10}
              className="form-control"
              id="feedback"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary text-center"
              style={{ marginBottom: "2%", marginTop: "2%" }}
              onClick={submitFeedback}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
