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
    const msg = document.getElementById("feedback").value;

    if (msg !== "") {
      let obj = {
        msg,
      };

      if (obj.msg === "") {
        swal("please fill all the fields");
        return;
      }
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
          <div className="form-group">
            <label for="feedback">Give Feedback</label>
            <textarea
              maxLength="400"
              rows={10}
              title="Upto 400 characters allowed"
              className="form-control"
              id="feedback"
              placeholder="feedback (Upto 400 characters allowed)"
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
