import axios from "axios";
let baseUrl = "http://localhost:8086/api/User/";
class UserService {
  registerUser(user) {
    return axios.post(baseUrl + "Registeruser/1", user);
  }
  registerChild(child) {
    return axios.post(baseUrl + "Registerchild/2", child);
  }
  getChildren() {
    let uid = 2;
    return axios.get(baseUrl + "children/" + uid);
  }
  deleteChildren(cid) {
    return axios.delete(baseUrl + "children/" + cid);
  }
}
export default new UserService();
