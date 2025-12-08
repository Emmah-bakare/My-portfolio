import { Link } from "react-router-dom";
import img1 from "./assets/client-1.jpeg";
import img2 from "./assets/client-2.jpeg";
import img3 from "./assets/client-3.jpeg";
import img4 from "./assets/client-4.jpeg";
import "./testimonials.css";
import Navbar from "./Navbar";

export default function Testimonials() {
  return (
    <>
      <div className="testimonial-body">
        <nav>
          <Navbar />
          <Link to="/">
            <button className="home-btn-testimonials">❮</button>
          </Link>
        </nav>
        <div>
          <h1 className="testimonials-h1-heading">Testimonials</h1>

          <p className="testimonials-intro">
            {" "}
            Don't take my word for it! The word on the street is that...{" "}
          </p>
        </div>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <p className="testimonial-para">
              Every time I open our site, I smile. Ore gave us a design that
              feels warm, human, and so easy to use. Our customers noticed the
              difference immediately.
            </p>
            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img1} alt="a-woman" />

              <p className="testimonial-name">Miss Iyin A. </p>
            </div>
          </div>

          <div className="testimonial-container">
            <p className="testimonial-para">
              Ore doesn’t just ‘do the frontend’, she thinks about the
              experience, the message, and the tiny details I didn’t even know
              mattered. The result was beyond what I imagined.
            </p>
            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img2} alt="a-man" />

              <p className="testimonial-name">Miss Ayomide O.</p>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <p className="testimonial-para">
              Ore took my rough concept and quietly transformed it into
              something polished, fast, and genuinely engaging. It felt less
              like hiring a developer and more like gaining a creative partner.
            </p>
            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img3} alt="a-woman" />

              <p className="testimonial-name">Mrs Seyi B.</p>
            </div>
          </div>

          <div className="testimonial-container">
            <p className="testimonial-para">
              Working with Oreoluwa felt like having a mind reader on the team.
              She turned my scattered ideas into a clean, beautiful interface
              that my users actually compliment me on.
            </p>
            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img4} alt="a-man" />

              <p className="testimonial-name">Miss Dami A.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
