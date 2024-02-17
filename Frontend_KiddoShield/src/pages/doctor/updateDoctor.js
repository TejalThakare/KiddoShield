import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import hospitalService from "../../service/hospitalService";

export default function UpdateDoctor() {
  const navigate = useNavigate();
  const location = useLocation(); //taking data from other component
  const drId = useParams(); //take data from url

  const [formdetails, setFormDetails] = useState({
    did: drId,
    contact: "",
    dfname: "",
    dlname: "",
    email: "",
    specialization: "",
  });
  const data = location.state.pdata;

  //
  let obj = {
    did: data.did,
    contact: data.contact,
    dfname: data.dlname,
    dlname: data.dlname,
    email: data.email,
    specialization: data.specialization,
  };
  console.log(obj);
  useEffect(() => {
    setFormDetails({ ...obj });
  }, []);
  const signUpHandler = async (e) => {
    e.preventDefault();

    console.log(formdetails);
    // Validate mobile number
    if (!/^\d{7,15}$/.test(formdetails.contact)) {
      swal("Mobile number should be between 7 and 15 digits.");
      return; // Exit function if validation fails
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdetails.email)) {
      swal("Please enter a valid email address.");
      return;
    }

    if (
      formdetails.specialization === "" ||
      formdetails.dfname === "" ||
      formdetails.dlname === "" ||
      formdetails.contact === null ||
      ""
    ) {
      swal("Please fill all the fields");
    } else {
      try {
        console.log(formdetails);
        const response = await hospitalService.updateDoctor(
          drId.id,
          formdetails
        );
        console.log(response);
        if (response.status === 200) {
          swal("Good job!", "Registered Successfully!", "success");
          navigate("/hospitalDashboard");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          swal("Enter unique email ID");
        } else {
          // Handle other errors
          swal(
            "An error occurred while registering the Doctor. Please try again later."
          );
        }
      }
    }
  };
  return (
    <>
      {/* ------------------------------------------------------------- */}
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
      </nav>
      {/* ------------------------------------------------------------- */}
      <h1
        id="header"
        style={{
          marginTop: "8%",
          fontFamily: "black",
          color: "#29293d",
          fontSize: "70px",
        }}
        className="text-center"
      >
        <b> KiddoShield</b>
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Update Doctor information</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="dfname">Enter First Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="hname"
                    aria-describedby="dfname"
                    placeholder="Enter Name"
                    value={formdetails.dfname}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        dfname: e.target.value,
                      });
                    }}
                  />
                  <label for="cnumber">Enter Last Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="dlname"
                    aria-describedby="dlname"
                    placeholder="Enter Last Name"
                    value={formdetails.dlname}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        dlname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="cnumber">Contact</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="contact"
                    aria-describedby="contact"
                    placeholder="Enter Contact number"
                    value={formdetails.contact}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        contact: e.target.value,
                      });
                    }}
                  />
                  <label for="email">Email Address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    value={formdetails.email}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="col-sm">
                  <label for="drid">Dr Id</label>
                  <input
                    disabled
                    className="form-control"
                    id="drid"
                    value={drId.did}
                    // placeholder="create a password for your account"
                  />

                  <label for="specialization">Specialization</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="specialization"
                    placeholder="Enter Specialization"
                    value={formdetails.specialization}
                    onChange={(e) => {
                      setFormDetails({
                        ...formdetails,
                        specialization: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              style={{ marginBottom: "13%" }}
              className="btn btn-info rounded-pill "
              id="signup"
              onClick={signUpHandler}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
