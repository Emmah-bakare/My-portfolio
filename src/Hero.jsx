import Navbar from "./Navbar";
import heroImage from "./assets/hero-image.jpeg";
import clientLogos from "./assets/clients-logo.png";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <header className="full-hero-section">
        <Navbar />
        <div className="hero-section">
          <div className="header-text">
            <h1 className="h1-hero-text">Oreoluwa Bakare</h1>
            <p className="hero-para">
              Hi, I’m Oreoluwa — a frontend developer obsessed with interfaces
              that make people pause. I blend bold, thoughtful design with clean
              code to build sites that feel fast, intuitive, and personal. Need
              a frontend that looks sharp and genuinely connects with your
              users? Let’s build it.
            </p>

            <div>
              <button className="hero-button">Let's get started</button>
            </div>
            <div className="hero-past-clients-text">Worked with</div>
          </div>

          <div>
            <img src={heroImage} alt="hero-image" className="hero-image" />
          </div>
        </div>

        <div>
          <img src={clientLogos} className="hero-past-clients-logo" />
        </div>
      </header>
    </>
  );
}
