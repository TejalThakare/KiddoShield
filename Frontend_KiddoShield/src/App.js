import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/user_login_registration/registration";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import NavbarReg from "./pages/user_login_registration/navbarForReg";
import VaccineByAge from "./pages/vaccinInfoByage/vaccinesByAge";
import ChildHistory from "./pages/child/childHistory";
import ScheduleVaccination from "./pages/userAppointment/scheduleVaccine";
import ChildRegistration from "./pages/child/childRegistration";
import MonthlyCheckUp from "./pages/userAppointment/monthlyCheckUp";
import ChildDashboard from "./pages/child/childDashboard";
import HosspitalDashboard from "./pages/hospital/hospitalDashboard";
import ChildrenInfo from "./pages/hospital/childrenInfo";
import AppInfoHospital from "./pages/hospital/appInfoHospital";
import AvailableVaccines from "./pages/hospital/availableVaccination";
import UpdateChildrenInfo from "./pages/child/updateChildInfo";
import TempTable from "./pages/hospital/temptable";
import DietPlan from "./pages/DietPlan/dietplan";
import HospitalRegistration from "./pages/hospital/hospitalRegistration";
import HospitalLogin from "./pages/hospital/hospitalLogin";
import DoctorRegistration from "./pages/doctor/doctorRegistration";
import AllDoctors from "./pages/doctor/allDoctors";
import Feedback from "./pages/hospital/userFeedback";
import AllFeedback from "./pages/hospital/allFeedbacks";
import UpdateDoctor from "./pages/doctor/updateDoctor";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                <NavbarReg />
                <Registration />
              </>
            }
          />
          <Route
            path="/vaccinesByAge"
            element={
              <>
                <VaccineByAge />
              </>
            }
          ></Route>
          <Route path="/ChildDashboard/2" element={<ChildDashboard />}></Route>
          <Route
            path="/scheduleVaccine"
            element={<ScheduleVaccination />}
          ></Route>
          <Route
            path="/ChildRegistration"
            element={<ChildRegistration />}
          ></Route>
          <Route path="/monthlyCheckUp" element={<MonthlyCheckUp />}></Route>
          <Route path="/ChildHistory" element={<ChildHistory />}></Route>
          <Route
            path="/hospitalDashboard"
            element={
              <>
                <HosspitalDashboard />
              </>
            }
          ></Route>
          <Route
            path="/childrenInfo"
            element={
              <>
                <ChildrenInfo></ChildrenInfo>
              </>
            }
          ></Route>
          <Route
            path="/appointments"
            element={
              <>
                <AppInfoHospital></AppInfoHospital>
              </>
            }
          ></Route>
          <Route
            path="/availablevaccines"
            element={
              <>
                <AvailableVaccines></AvailableVaccines>
              </>
            }
          ></Route>
          <Route
            path="/updateChildInfo"
            element={
              <>
                <UpdateChildrenInfo></UpdateChildrenInfo>
              </>
            }
          ></Route>
          <Route
            path="/temptable"
            element={
              <>
                <TempTable></TempTable>
              </>
            }
          ></Route>
          <Route
            path="/dietplan"
            element={
              <>
                <DietPlan></DietPlan>
              </>
            }
          ></Route>
          <Route
            path="/registrationhospital"
            element={
              <>
                <HospitalRegistration></HospitalRegistration>
              </>
            }
          ></Route>
          <Route
            path="/doctorreg"
            element={
              <>
                <DoctorRegistration></DoctorRegistration>
              </>
            }
          ></Route>
          <Route
            path="/alldoctors"
            element={
              <>
                <AllDoctors></AllDoctors>
              </>
            }
          ></Route>
          <Route
            path="/user/feedback"
            element={
              <>
                <Feedback></Feedback>
              </>
            }
          ></Route>
          <Route
            path="/hospital/feedbacks"
            element={
              <>
                <AllFeedback></AllFeedback>
              </>
            }
          ></Route>
          <Route
            path="/update/:did"
            element={
              <>
                <UpdateDoctor></UpdateDoctor>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
