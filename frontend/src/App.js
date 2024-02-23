import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import UpdateUser from "./pages/user_login_registration/updateUser";
import RescheduleVaccination from "./pages/userAppointment/rescheduleAppointment";
import HospitalAllAppointment from "./pages/hospital/appInfoHospital";
import Login from "./pages/user_login_registration/login";
import LoginToWebFirst from "./pages/loginToWebFirst";
import { useEffect } from "react";
import SendEmail from "./pages/userAppointment/sendEmail";
import ChildrenHistory from "./pages/hospital/childrenHistory";
import ChildrenHistoryUser from "./pages/userAppointment/childrenHistoryUser";
import UserForgotPassword from "./pages/forgotPassword/user";
import HospitalForgotPassword from "./pages/forgotPassword/hospital";
import DoctorForgotPassword from "./pages/forgotPassword/doctor";
import DoctorLogin from "./pages/doctor/doctorLogin";
import DoctorDashboard from "./pages/doctor/doctorDashboard";
import About from "./pages/footer/about";
import ContactUs from "./pages/footer/contactus";
import RescheduleDoctorApp from "./pages/userAppointment/rescheduleDrAppointment";
function App() {
  console.log(sessionStorage.getItem("loginID"));
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
                <Footer></Footer>
              </div>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                <NavbarReg />
                <Registration />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/vaccinesByAge"
            element={
              <>
                <VaccineByAge />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/ChildDashboard/:queryParam"
            element={
              <>
                <ChildDashboard />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/scheduleVaccine/:uid"
            element={
              <>
                <ScheduleVaccination />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/ChildRegistration/:uid"
            element={
              <>
                <ChildRegistration />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/monthlyCheckUp/:uid"
            element={
              <>
                <MonthlyCheckUp />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/childhistory"
            element={
              <>
                <ChildrenHistory></ChildrenHistory>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/hospitalDashboard"
            element={
              <>
                <HosspitalDashboard />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/childrenInfo"
            element={
              <>
                <ChildrenInfo></ChildrenInfo>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/appointments"
            element={
              <>
                <HospitalAllAppointment></HospitalAllAppointment>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/availablevaccines"
            element={
              <>
                <AvailableVaccines></AvailableVaccines>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/updateChildInfo/:did"
            element={
              <>
                <UpdateChildrenInfo></UpdateChildrenInfo>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/temptable"
            element={
              <>
                <TempTable></TempTable>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/dietplan"
            element={
              <>
                <DietPlan></DietPlan>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/registrationhospital"
            element={
              <>
                <HospitalRegistration></HospitalRegistration>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/doctorreg"
            element={
              <>
                <DoctorRegistration></DoctorRegistration>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/alldoctors"
            element={
              <>
                <AllDoctors></AllDoctors>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/user/feedback/:uid"
            element={
              <>
                <Feedback></Feedback>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/hospital/feedbacks/"
            element={
              <>
                <AllFeedback></AllFeedback>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/update/:did"
            element={
              <>
                <UpdateDoctor></UpdateDoctor>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/updateuser/:uid"
            element={
              <>
                <UpdateUser></UpdateUser>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/reschedulevaccine/:aid"
            element={
              <>
                <RescheduleVaccination></RescheduleVaccination>

                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/email"
            element={
              <>
                <SendEmail></SendEmail>
              </>
            }
          ></Route>
          <Route
            path="/childhistoryuser/:cid"
            element={
              <>
                <ChildrenHistoryUser></ChildrenHistoryUser>
              </>
            }
          ></Route>
          <Route
            path="/userforgotpassword"
            element={
              <>
                <UserForgotPassword></UserForgotPassword>
              </>
            }
          ></Route>
          <Route
            path="/hospitalforgotpassword"
            element={
              <>
                <HospitalForgotPassword></HospitalForgotPassword>
              </>
            }
          ></Route>
          <Route
            path="/doctorlogin"
            element={
              <>
                <DoctorLogin></DoctorLogin>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/doctorforgotpassword"
            element={
              <>
                <DoctorForgotPassword></DoctorForgotPassword>
              </>
            }
          ></Route>
          <Route
            path="/doctordashboard/:did"
            element={
              <>
                <DoctorDashboard></DoctorDashboard>
              </>
            }
          ></Route>
          <Route
            path="/aboutus"
            element={
              <>
                <About></About>
              </>
            }
          ></Route>
          <Route
            path="/contactus"
            element={
              <>
                <ContactUs></ContactUs>
              </>
            }
          ></Route>
          <Route
            path="/rescheduleconsult/:caid"
            element={
              <>
                <RescheduleDoctorApp></RescheduleDoctorApp>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
