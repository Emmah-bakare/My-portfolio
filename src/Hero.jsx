import Navbar from "./Navbar";
import heroImage from "./assets/hero-image.jpeg";
import TechStack from "./Tech-stack";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <header className="full-hero-section">
        <Navbar />
        <div className="hero-section">
          <div className="header-text">
            <h1 className="h1-hero-text">Hi, I'm Oreoluwa Bakare</h1>
            <p className="hero-para">
              A frontend developer obsessed with interfaces that make people
              pause. I blend bold, thoughtful design with clean code to build
              sites that feel fast, intuitive, and personal. Need a frontend
              that looks sharp and genuinely connects with your users?
            </p>

            <div>
              <button className="hero-button">Let's build</button>
            </div>
            <div className="hero-past-clients-text">My Stack:</div>
          </div>

          <div>
            <img src={heroImage} alt="hero-image" className="hero-image" />
          </div>
        </div>

        <div>
          <TechStack />
        </div>
      </header>
    </>
  );
}
