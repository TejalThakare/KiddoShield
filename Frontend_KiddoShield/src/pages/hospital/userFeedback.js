import swal from "sweetalert";
import userService from "../../service/userService";

export default function Feedback() {
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
        const response = await userService.giveFeedback(obj);
        console.log(response);
        if (response.status == 200) {
          swal("Successful");
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
      <h1 className="text-center" style={{ marginTop: "8%", fontSize: "60px" }}>
        <b> Feedback</b>
      </h1>
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
            <label for="feedback">Give Password</label>
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
