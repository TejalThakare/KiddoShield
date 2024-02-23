import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function SendEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ayycpun", "template_w3inmv5", form.current, {
        publicKey: "w-hlJ1RqHPuR_Pq3A",
        to_email: form.current.to_email.value, // Get the value from the "to_email" input field
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Recipient's Email</label>
        <input type="email" name="to_email" />{" "}
        {/* Input field for recipient's email */}
        <label>Message</label>
        <input type="text" name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
