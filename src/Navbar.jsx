import { Link } from "react-router-dom";
// import SmIcons from "src/assets/social-media-icons.png";

export function Navbar() {
  return (
    <>
      <nav className="navbar-rectangle">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/">Case Studies</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Recent Work</Link>
          <Link to="/">Get In Touch</Link>
        </div>
        {/* <div>
          <img
            src={SmIcons}
            alt="social-media-icons"
            className="Navbar-icons"
          />
        </div> */}
      </nav>
    </>
  );
}
