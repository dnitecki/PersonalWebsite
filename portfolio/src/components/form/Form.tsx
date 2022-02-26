import "./Form.scss";
import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fgqcf6g",
        "template_r2ej0ii",
        e.target,
        "user_YGWBKQ0TxdOqra3kZl7jl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <div className="label">Name</div>
        <div>
          <input className="input" type="text" name="name" required />
        </div>
        <div className="label">Email</div>
        <div>
          <input className="input" type="email" name="email" required />
        </div>
        <div className="label">Message</div>
        <div>
          <textarea className="text-area" name="message" required />
        </div>
        <button className="submit-button" type="submit" value="SendMessage">
          <img
            className="button-icon"
            src="./assets/mail-send-email.svg"
            alt="icon"
          />
          <div className="button-label"> Send Message </div>
        </button>
      </form>
    </div>
  );
}
