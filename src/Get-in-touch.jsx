import { useState } from "react";
import { Link } from "react-router-dom";
import "./get-in-touch.css";
import Navbar from "./Navbar";

export default function GetInTouch() {
  // 1. Initialize state for each input field
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  // 2. Handle input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // 3. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setMobile("");
    setMessage("");
    alert(`Email: ${email}, Mobile: ${mobile}, Message: ${message}`);
  };

  return (
    <>
      <body className="contact-form-bg">
        <nav>
          <Navbar />
          <Link to="/">
            <button className="home-btn">❮</button>
          </Link>
        </nav>

        <div>
          <h1 className="h1-form-heading">Get In Touch</h1>

          <p className="form-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="entry-field-div">
            <div>
              <label className="label" htmlFor="email">
                Email:
              </label>
            </div>

            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={email} // Value is controlled by React state
              onChange={(event) => handleEmailChange(event)} // Update state on change
            />
          </div>

          <div className="entry-field-div">
            <div>
              <label className="label" htmlFor="mobile">
                Mobile:
              </label>
            </div>

            <input
              className="input"
              type="tel"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(event) => handleMobileChange(event)}
            />
          </div>

          <div className="entry-field-div">
            <div>
              <label className="label" htmlFor="message">
                Message:
              </label>
            </div>

            <input
              className="message-input"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(event) => handleMessageChange(event)}
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit ❯
          </button>
        </form>
      </body>
    </>
  );
}
