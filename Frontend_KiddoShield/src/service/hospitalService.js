import axios from "axios";
let baseUrl = "http://localhost:8086/Hospital";
class HospitalService {
  //hospital registration
  registerHospital(data) {
    return axios.post(baseUrl + "/Registerhospital", data);
  }

  //hospital login
  loginHospital(data) {
    return axios.post(baseUrl + "/loginhospital", data);
  }

  //get all children
  getChildren() {
    let hid = 1;
    return axios.get(baseUrl + "/children/" + hid);
  }

  //get all vaccine
  getVaccine() {
    let hid = 1;
    return axios.get(baseUrl + "/vaccines/" + hid);
  }

  //update vaccine doses
  updateVaccineDoses(avdoses, vid) {
    return axios.put(baseUrl + `/vaccines/${vid}`, { avdoses });
  }

  //adding vaccine
  addVaccine(data) {
    let hid = 1;
    return axios.post(baseUrl + `/registervaccine/${hid}`, data);
  }

  //get all doctors
  getDoctor() {
    let hid = 1;
    return axios.get(baseUrl + `/doctors/${hid}`);
  }

  //register doctors
  registerDoctor(data) {
    let hid = 1;
    return axios.post(baseUrl + "/RegisterDoctor/" + hid, data);
  }

  //delete doctor
  removeDoctor(did) {
    return axios.delete(baseUrl + "/deletedoctor/" + did);
  }
  updateDoctor(did, data) {
    return axios.put(baseUrl + "/updatedoctor/" + did, data);
  }

  //get all feedback
  getAllFeedback() {
    let hid = 1;
    return axios.get(baseUrl + "/feedbacks/" + hid);
  }
}
export default new HospitalService();
