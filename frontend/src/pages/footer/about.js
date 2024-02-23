import React from "react";
import Navbar from "../../component/navbar";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container py-5" style={{ marginTop: "5%" }}>
        <h2
          className="text-center mb-4"
          style={{ color: "#007bff", fontSize: "2.5rem", marginTop: "3%" }}
        >
          About Us
        </h2>
        <img
          className="img-fluid d-block mx-auto mb-4"
          src="./images/sasoon.jpg"
          alt="About Us"
          style={{ maxWidth: "80%", height: "400px" }}
        />
        <h5
          className="text-center mb-3"
          style={{ color: "#007bff", fontSize: "1.8rem" }}
        >
          About Us
        </h5>
        <p
          className="lead "
          style={{ fontSize: "2.2rem", lineHeight: "1.6", textAlign: "left" }}
        >
          Welcome to KiddoShield, where we prioritize the health and well-being
          of children through vaccination, Diet Plan, and Doctor Consult.
          <br />
          <br />
          At KiddoShield, we understand the importance of protecting our little
          ones from preventable diseases. Our mission is to provide parents and
          caregivers with accurate information and resources to make informed
          decisions about childhood immunization.
          <br />
          <br />
          With years of experience and expertise in pediatric healthcare, our
          team is dedicated to promoting vaccine awareness and education. We
          believe that every child deserves a healthy start in life, free from
          the threat of vaccine-preventable illnesses.
          <br />
          <br />
          Through our platform, we aim to debunk myths, address concerns, and
          empower parents with the knowledge they need to confidently vaccinate
          their children on schedule, Diet plans, and monthly Appointments. We
          collaborate with healthcare professionals, researchers, and
          organizations to ensure that our content reflects the latest
          scientific evidence and recommendations.
          <br />
          <br />
          At KiddoShield, we strive to create a supportive community where
          parents can share experiences, ask questions, and find support in
          their journey to safeguarding their child's health. Together, we can
          build a world where every child is protected from vaccine-preventable
          diseases.
        </p>
        <br />
        <br />
        <p
          className="text-center"
          style={{ fontSize: "1.2rem", lineHeight: "1.6" }}
        >
          Thank you for joining us in our commitment to protecting the health of
          our children. Together, we can make a difference, one vaccination at a
          time, diet plan, and Doctor consult.
        </p>
      </div>
    </>
  );
}
