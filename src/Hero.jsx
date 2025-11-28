import { Navbar } from "./Navbar";
import heroImage from "./assets/hero-image.jpeg";
import clientLogos from "./assets/clients-logo.png";

export function Hero() {
  return (
    <>
      <header className="full-hero-section">
        <Navbar />
        <div className="hero-section">
          <div className="header-text">
            <h1 className="h1-hero-text">Oreoluwa Bakare</h1>
            <p className="hero-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              mollitia eaque ipsam illum quos nesciunt ex cum beatae temporibus
              rem. Esse assumenda obcaecati eligendi explicabo voluptatem magnam
              aperiam architecto accusamus.
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
