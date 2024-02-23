import React from "react";
import Navbar from "../../component/navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container py-5" style={{ marginTop: "5%" }}>
        <h2 className="text-center mb-4" style={{ color: "#007bff" }}></h2>
        <img
          className="img-fluid d-block mx-auto mb-4"
          src="/images/contactus.jpg"
          alt="Contact Us"
          style={{ maxWidth: "80%", height: "400px" }}
        />

        <h5 className="text-center mb-3" style={{ color: "#007bff" }}></h5>
        <div className="lead" style={{ fontSize: "1.8rem" }}>
          <p style={{ fontSize: "1.8rem" }}>
            Thank you for your interest in KiddoShield. We value your feedback,
            questions, and concerns. Please feel free to reach out to us using
            the following contact information:
          </p>

          <h5>General Inquiries:</h5>
          <ul>
            <li>Email: KiddoShield@gmail.com</li>
            <li>Phone: 8897369020</li>
            <li>Address: Sasoon Hospital, Pune</li>
          </ul>

          <h5>Technical Support:</h5>
          <ul>
            <li>Email: KiddoShield@gmail.com</li>
            <li>Phone: 8897369021</li>
          </ul>

          <p style={{ fontSize: "1.8rem" }}>
            We strive to respond to all inquiries in a timely manner. Thank you
            for contacting KiddoShield.
          </p>
        </div>
      </div>
    </>
  );
}
