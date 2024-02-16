import "../../styles/scheduleVaccination.css";
export default function MonthlyCheckUp() {
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="center-img" id="scheduleImage">
              <img src="./images/monthlyCheckup.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <form className="form-schedule">
        <div
          id="schedule-vacc"
          className="container"
          style={{ marginTop: "1%" }}
        >
          <label for="uname">Enter Children Id</label>
          <input
            style={{ fontSize: "150%" }}
            type="text"
            className="form-control"
            id="user-name"
            aria-describedby="uname"
            placeholder=" Enter username"
          />
          <label for="uname">Select Date</label>
          <input
            style={{ fontSize: "150%" }}
            type="date"
            className="form-control"
            id="date-time"
            aria-describedby="uname"
            placeholder=" Select date"
          />
          <label for="cnumber">Select Time</label>
          <input
            style={{ fontSize: "150%" }}
            type="time"
            className="form-control"
            id="mob-num"
            aria-describedby="cnumber"
            placeholder="Enter mobile number"
          />
          <label for="cnumber">Mobile number</label>
          <input
            style={{ fontSize: "150%" }}
            type="number"
            className="form-control"
            id="mob-num"
            aria-describedby="cnumber"
            placeholder="Enter mobile number"
          />
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="center-btn">
                <button
                  type="button"
                  class="btn btn-info rounded-pill"
                  id="btn-sbt"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
