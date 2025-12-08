import { Link } from "react-router-dom";
import SmIcons from "./assets/social-media-icon.png";

export default function Navbar() {
  const linkStyling = { color: "#9C9C9C", textDecoration: "none" };
  return (
    <>
      <nav className="navbar-rectangle">
        <div className="navbar-links">
          <Link style={linkStyling} to="/">
            Home
          </Link>
          <Link to="/Who-am-I" style={linkStyling}>
            Who am I?
          </Link>
          <Link style={linkStyling} to="/testimonials">
            Testimonials
          </Link>
          <Link style={linkStyling} to="/recent-work">
            Recent Work
          </Link>
          <Link style={linkStyling} to="/get-in-touch">
            Get In Touch
          </Link>

          <div>
            <img
              src={SmIcons}
              alt="social-media-icons"
              className="navbar-icons"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
