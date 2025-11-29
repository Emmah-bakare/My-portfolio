import { useState } from "react";
import "./get-in-touch.css";

export function GetInTouch() {
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
    event.preventDefault(); // Prevent default browser form submission
    alert(`Email: ${email}, Mobile: ${mobile}, Message: ${message}`);
    // You can also send this data to an API or perform other actions
  };

  return (
    <>
      <body className="contact-form-bg">
        <div>
          <h1 className="h1-form-heading">Get In Touch</h1>

          <p className="form-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email-field">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={email} // Value is controlled by React state
              onChange={handleEmailChange} // Update state on change
            />
          </div>

          <div className="mobile-field">
            <label className="label" htmlFor="mobile">
              Mobile:
            </label>
            <input
              className="input"
              type="number"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={handleMobileChange}
            />
          </div>

          <div className="message-field">
            <label className="label" htmlFor="message">
              Message:
            </label>
            <input
              className="message-input"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
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
