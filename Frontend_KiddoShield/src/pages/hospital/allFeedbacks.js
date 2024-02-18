import { useEffect, useState } from "react";
import hospitalService from "../../service/hospitalService";
import "../../styles/allFeedbackHosp.css";
import { Link } from "react-router-dom";

export default function AllFeedback() {
  const [data, setData] = useState();
  useEffect(() => {
    hospitalService.getAllFeedback().then((response) => {
      console.log(response);
      console.log(response.data);
      setData([...response.data]);
    });
  }, []);

  const handler = () => {
    console.log(data);
  };

  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <Link to="/hospitalDashboard">
          <img src="/images/kidLogo.png" style={{ width: "150px" }} />
        </Link>
      </nav>
      <div
        className="container"
        id="feedback-container"
        style={{ marginBottom: "10%" }}
      >
        <div className="leftFeedback">
          {/* Left portion */}
          <h2 className="feedbackHeader">Check out all feedback</h2>
          <div className="row" id="row--vaccine">
            <div className="col-sm"></div>
            <div className="col-sm"></div>
          </div>
        </div>

        <div className="rightFeedback">
          {/* Right portion */}
          {data?.map((item, index) => (
            <div
              id="card-feedback"
              key={index}
              className="card w-50"
              style={{ marginBottom: "-2%" }}
            >
              <div className="card-body">
                <h4>Feedback Id : {item.fid}</h4>
                <h5 className="card-title">
                  Date : {new Date(item.date).toLocaleDateString("en-IN")}
                </h5>
                <p style={{ fontSize: "large" }} className="card-text">
                  {item.msg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
