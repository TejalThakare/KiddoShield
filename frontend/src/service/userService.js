import axios from "axios";
let baseUrl = "http://localhost:8086/api/User/";
class UserService {
  //register user
  registerUser(user) {
    let hid = 1;
    return axios.post(baseUrl + "Registeruser/" + hid, user);
  }
  //update user
  updateUser(uid, user) {
    console.log(user);
    return axios.put(baseUrl + "updateuser/" + uid, user);
  }
  //delete user
  deleteUser(uid) {
    return axios.delete(baseUrl + "deleteuser/" + uid);
  }
  //register child
  registerChild(uid, child) {
    return axios.post(baseUrl + "Registerchild/" + uid, child);
  }
  //get children info
  getChildren(uid) {
    return axios.get(baseUrl + "children/" + uid);
  }
  //update children information
  updateChildInfo(cid, data) {
    return axios.put(baseUrl + "updatechild/" + cid, data);
  }
  //delete children information
  deleteChildren(cid) {
    return axios.delete(baseUrl + "children/" + cid);
  }
  //give feedback to hospital
  giveFeedback(uid, feedback) {
    let hid = 1;
    return axios.post(baseUrl + `loginuser/${hid}/${uid}`, feedback);
  }
  vaccineAppointment(uid, appt) {
    let hid = 1;
    return axios.post(baseUrl + `appointment/${hid}/${uid}`, appt);
  }
  ShowVaccineAppointment(uid) {
    return axios.get(baseUrl + `appointments/${uid}`);
  }
  RescheduleVaccineAppointment(aid, data) {
    console.log(aid);
    return axios.post(baseUrl + `rescheduleappointment/${aid}`, data);
  }
  getChildrenHistoryUser(uid) {
    return axios.get(baseUrl + `childhistory/${uid}`);
  }
  consultDoctor(uid, obj) {
    return axios.post(baseUrl + `consultappointment/${uid}`, obj);
  }
  RescheduledoctorAppointment(uid, obj) {
    return axios.put(baseUrl + `rescheduleconsultappointment/${uid}`, obj);
  }
  //get doctor appointment
  getDrConsultApp(caid) {
    return axios.get(baseUrl + `consultappointments/${caid}`);
  }
  //cancel doctor app
  cancelDrConsultApp(caid) {
    return axios.delete(baseUrl + `consultappointment/${caid}`);
  }
  //cancel vaccine app
  cancelVaccineApp(aid) {
    return axios.delete(baseUrl + `appointment/${aid}`);
  }
  forgotUserPassword(forgetUserPword) {
    return axios.post(baseUrl + "forgotpassword", forgetUserPword);
  }
}
export default new UserService();
