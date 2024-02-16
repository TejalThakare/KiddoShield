// import { Link, useLinkClickHandler, useParams } from "react-router-dom";
// // import "../styles/childHistory.css";
// import "../../styles/childHistory.css";
// import AppDropDownBtn from "../userAppointment/appointmentDropdownBtn";
// import { useEffect, useState } from "react";
// import userService from "../../service/userService";
// export default function ChildDashboard() {
//   const params = useParams();
//   const [children, setChildren] = useState([]);

//   useEffect(() => {
//     userService
//       .getChildren()
//       .then((result) => {
//         console.log(result);
//         setChildren(result.data); // Assuming result.data is an array of child objects
//       })
//       .catch((err) => {
//         console.log("error occurred", err);
//       });
//   }, []);

//   const renderChildren = () => {
//     return children.map((child, index) => (
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">{child.cfname}</h5>
//           <div key={index} className="child-dashboard">
//             <p>Date Of Birth : {child.dob}</p>
//             <p> Age : {child.age}</p>
//             <p>Child Id : {child.cid}</p>
//             <p>Weight: {child.weight}kg</p>
//           </div>
//           <hr></hr>
//           <div id="history-app-btn" className="text-end">
//             <Link
//               id="history-btn"
//               to={`/ChildHistory/${child.cid}`}
//               className="btn btn-outline-info btn-sm"
//             >
//               View History
//             </Link>
//             <AppDropDownBtn></AppDropDownBtn>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg navbar-light fixed-top "
//         id="navbar--id"
//         style={{ background: "rgb(240, 240, 240)" }}
//       >
//         <a href="/">
//           <img
//             src="/images/kidLogo.png"
//             alt="Logo"
//             className="nav__logo"
//             id="logo"
//           />
//         </a>
//       </nav>
//       <div id="dashboard-card" className="card">
//         <div className="card-header">Children Datails</div>

//         <img
//           // onClick={handler}
//           src="/images/childID1.jpg"
//           id="card-img-kid"
//         ></img>
//         <div className="card-body" id="card-body">
//           <blockquote className="blockquote mb-0">
//             {renderChildren()}
//             {/* <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Children name 1</h5>
//                 <div className="child-dashboard">
//                   <p>Date Of Birth : dobbbbbb</p>
//                   <p> Age : ageeeeeee</p>
//                   <p>Child Id : Iddddddddddd</p>
//                   <p>Weight:Weightttttttttt</p>
//                 </div>

//                 <hr></hr>
//                 <div id="history-app-btn" className="text-end">
//                   <Link
//                     id="history-btn"
//                     to="/ChildHistory"
//                     className="btn btn-outline-info btn-sm"
//                   >
//                     View History
//                   </Link>
//                   <AppDropDownBtn></AppDropDownBtn>
//                 </div>
//               </div>
//             </div> */}
//             {/* <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Children name 2</h5>
//                 <div className="child-dashboard">
//                   <p>Date Of Birth : dobbbbbb</p>
//                   <p> Age : ageeeeeee</p>
//                   <p>Child Id : Iddddddddddd</p>
//                   <p>Weight:Weightttttttttt</p>
//                 </div>
//                 <hr></hr>
//                 <div id="history-app-btn" className="text-end">
//                   <Link
//                     id="history-btn"
//                     to="/ChildHistory"
//                     className="btn btn-outline-info btn-sm"
//                   >
//                     View History
//                   </Link>
//                   <AppDropDownBtn></AppDropDownBtn>
//                 </div>
//               </div>
//             </div> */}
//             <div id="dashboard-register-btn" className="text-center">
//               <Link to="/ChildRegistration" className="btn btn-outline-primary">
//                 + Register
//               </Link>
//             </div>
//           </blockquote>
//         </div>
//       </div>
//     </>
//   );
// }
