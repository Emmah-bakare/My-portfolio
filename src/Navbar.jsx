import { Link } from "react-router-dom";
import SmIcons from "./assets/social-media-icon.png";

export function Navbar() {
  const linkStyling = { color: "#9C9C9C", textDecoration: "none" };
  return (
    <>
      <nav className="navbar-rectangle">
        <div className="navbar-links">
          <Link style={linkStyling} to="/">
            Home
          </Link>
          <Link style={linkStyling} to="/">
            Case Studies
          </Link>
          <Link style={linkStyling} to="/">
            Testimonials
          </Link>
          <Link style={linkStyling} to="/">
            Recent Work
          </Link>
          <Link style={linkStyling} to="/">
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
