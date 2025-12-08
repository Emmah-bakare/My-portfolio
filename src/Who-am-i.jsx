import "./who-am-i.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import aboutmeImg from "./assets/imageportfolio.jpg";

export default function WhoamI() {
  return (
    <>
      <body className="about-me-body">
        <nav>
          <Navbar />
          <Link to="/">
            <button className="home-btn">❮</button>
          </Link>
        </nav>
        <header className="intro-text">
          <h1 className="intro-heading">Who am I?</h1>
        </header>

        <section className="about-me-section">
          <div className="img-and-para">
            <div>
              <img className="about-me-Img" src={aboutmeImg} />
            </div>

            <div className="about-me-para">
              <p>
                An avenger-level designer ready to deliver precise designs that
                stops you in your tracks. Not even Thanos can stop that. Don't
                believe me? Hold my beer 🍺.
              </p>

              <p>
                I’ve always been the person who pauses on a beautiful interface
                and thinks, “wait… how did they build this?”🤯 That curiosity
                pulled me into frontend development but my dedication made me
                indispensable to my returning clients.
              </p>

              <p>
                I’ve gone from just admiring great interfaces to creating my
                own, caring deeply about the small details that make a big
                difference. For me, design isn’t just about looking good; it’s
                about how it makes people feel 😇. That idea runs through
                everything I build — from Sunnyside (a bright, interactive
                layout for a design studio) and Dice (a simple but addictive
                game), to Room (a furniture experience built to attract clicks
                and keep attention) and a profit calculator that feels
                intuitive, not overwhelming.
              </p>

              <p>
                With my background in content writing, I’m always thinking about
                the story your product tells and how words and visuals can
                communicate it audibly. When we work together, my goal is
                simple: to help your product feel clear, welcoming, and
                genuinely enjoyable to use.
              </p>

              <p>
                Ready to warm your way to the hearts of your clients? Hire me
                💁🏼.
              </p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
