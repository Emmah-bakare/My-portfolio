import "./case-study.css";
import firstImage from "./assets/first-img-casestudy.jpeg";
import secondImage from "./assets/second-img-casestudy.jpeg";
import thirdImage from "./assets/third-img-casestudy.jpeg";

export function CaseStudies() {
  return (
    <>
      <body className="casestudy-body">
        <header className="intro-text">
          <h1 className="intro-heading">Case Studies</h1>
          <p className="intro-para">
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        {/* first section  */}

        <section className="casestudy-first-sec">
          <div className="casestudy-text">
            <div className="casestudy-first-sec-industry">Design</div>
            <div>
              <h2 className="casestudy-h2">Sunnyside</h2>
              <p className="casestudy-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="first-sec-button">View case study</button>
            </div>
          </div>

          <div>
            <img
              className="casestudy-img"
              src={firstImage}
              alt="first-portfolio-sample"
            />
          </div>
        </section>

        {/* second section  */}

        <section className="casestudy-second-sec">
          <div>
            <img
              className="casestudy-img"
              src={thirdImage}
              alt="third-portfolio-sample"
            />
          </div>

          <div className="casestudy-text">
            <div className="casestudy-second-sec-industry">Social media</div>
            <div>
              <h2 className="casestudy-h2">Meet</h2>
              <p className="casestudy-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="second-sec-button">View case study</button>
            </div>
          </div>
        </section>

        {/* third section  */}

        <section className="casestudy-third-sec">
          <div className="casestudy-text">
            <div className="casestudy-third-sec-industry">Interior Decor</div>
            <div>
              <h2 className="casestudy-h2">Room</h2>
              <p className="casestudy-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="third-sec-button">View case study</button>
            </div>
          </div>

          <div>
            <img
              className="casestudy-img"
              src={secondImage}
              alt="second-portfolio-sample"
            />
          </div>
        </section>
      </body>
    </>
  );
}
