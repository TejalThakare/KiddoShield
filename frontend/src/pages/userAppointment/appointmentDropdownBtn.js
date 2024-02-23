import { Link } from "react-router-dom";
import "../../styles/appDropdownBtn.css";
export default function AppDropDownBtn() {
  return (
    <>
      <div className="btn-group">
        <a
          style={{ color: "#571365" }}
          className="btn  btn-info btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Appoinment
        </a>
        <ul id="dropdown-menu" className="dropdown-menu">
          <li id="vaccination" style={{ marginLeft: "5%" }}>
            <Link className="appointment-link" to="/scheduleVaccine">
              Vaccination
            </Link>
          </li>

          <li id="monthlyCheckup" style={{ marginLeft: "5%" }}>
            <Link className="appointment-link" to="/monthlyCheckUp">
              Consult doctor
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
