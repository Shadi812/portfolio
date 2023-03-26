import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_07s9jkd",
        "template_q92vfq3",
        form.current,
        "KrNtIgQUC5DfB_vdb"
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
  };

  return (
    <>
      <section id="contact">
        <h1 className="reach-me"> Contact</h1>
        <br />

        <div className="container ">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />

            <textarea name="message" rows="7" placeholder="Message" required />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
