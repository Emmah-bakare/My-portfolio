import img1 from "./assets/client-testimonial-1.png";
import img2 from "./assets/client-testimonial-2.png";
import img3 from "./assets/client-testimonial-3.png";
import img4 from "./assets/client-testimonial-4.png";
export function Testimonials() {
  return (
    <>
      <div>
        <h1>Testimonials</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <section>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div>
              <img src={img1} alt="a-woman" />

              <p>Mrs Shoo</p>
            </div>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div>
              <img src={img2} alt="a-man" />

              <p>Mr Sham</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div>
              <img src={img3} alt="a-woman" />

              <p>Mrs Shoo</p>
            </div>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div>
              <img src={img4} alt="a-man" />

              <p>Mr Sham</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
