// import { useState } from "react";
import "../styles/contact.css";

const ContactForm = () => {
  // const [errors, setErrors] = useState({
  //   name: false,
  //   email: false,
  //   message: false,
  // });
  // const [state, setState] = useState({ name: "", email: "", message: "" });

  // function validate() {}

  return (
    <div className="contact-form mt-2">
      <h1 className="title">Contact Me</h1>

      <form className="contact-form__form">
        <div className="contact-form__group">
          <label htmlFor="name">Name:</label>
          <br />
          <input name="name" type="text" placeholder="John Doe" />
        </div>
        <div className="contact-form__group mt-4">
          <label htmlFor="email">email:</label>
          <br />
          <input name="email" placeholder="johndoe@email.com" />
        </div>
        <div className="contact-form__group mt-4">
          <label htmlFor="message">message:</label>
          <br />
          <textarea
            name="message"
            placeholder="John Doe"
            spellCheck="false"
          ></textarea>
        </div>
        <div className="contact-form__group mt-6">
          <button className="btn font-bold">send message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
