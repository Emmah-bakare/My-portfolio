import img1 from "./assets/client-testimonial-1.png";
import img2 from "./assets/client-testimonial-2.png";
import img3 from "./assets/client-testimonial-3.png";
import img4 from "./assets/client-testimonial-4.png";
import "./testimonials.css";

export function Testimonials() {
  return (
    <>
      <div className="testimonial-body">
        <div>
          <h1 className="testimonials-h1-heading">Testimonials</h1>

          <p className="testimonials-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img1} alt="a-woman" />

              <p className="testimonial-name">Mrs Shoo</p>
            </div>
          </div>

          <div className="testimonial-container">
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img2} alt="a-man" />

              <p className="testimonial-name">Mr Sham</p>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img3} alt="a-woman" />

              <p className="testimonial-name">Mrs Shoo</p>
            </div>
          </div>

          <div className="testimonial-container">
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="testimonial-img-and-name">
              <img className="testimonial-image" src={img4} alt="a-man" />

              <p className="testimonial-name">Mr Sham</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
