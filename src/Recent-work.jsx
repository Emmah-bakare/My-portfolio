import { Link } from "react-router-dom";
import recentWork1 from "./assets/Recent-work-1.jpeg";
import recentWork2 from "./assets/Recent-work-2.jpeg";
import "./recent-work.css";
import Navbar from "./Navbar";

export default function RecentWork() {
  const buttonStyling = {
    textAlign: "left",
    justifyContent: "left",
    justifySelf: "left",
    justifyItems: "left",
  };
  return (
    <>
      <body className="recent-work-body">
        <nav>
          <Navbar />
          <Link to="/">
            <button className="home-btn">❮</button>
          </Link>
        </nav>

        <div className="recent-work-intro">
          <h1 className="recent-work-h1">Recent Work</h1>

          <p className="recent-work-intro-para">
            I like to let my work do most of the talking, so here are a few
            recent projects that say a lot about how I design and build. Scroll
            through, click around, and imagine what we could create for your
            idea next.
          </p>
        </div>

        {/* first image and description  */}

        <section className="recent-work-section">
          <div className="recent-work-img-and-text">
            <div>
              <img
                className="recent-work-img-1"
                src={recentWork1}
                alt="profit-calculator"
              />
            </div>

            <div className="recent-work-txt">
              <h2 className="recent-work-h2">Profit calculator</h2>

              <p className="recent-work-para">
                A smart profit calculator that helps users see exactly how much
                they can earn based on the amount they invest.
              </p>

              <button style={buttonStyling} className="recent-work-btn">
                Know more{" "}
              </button>
            </div>
          </div>

          <div className="recent-work-img-and-text">
            <div>
              <img
                className="recent-work-img-2"
                src={recentWork2}
                alt="dice-game"
              />
            </div>

            <div className="recent-work-txt">
              <h2 className="recent-work-h2">Dice game</h2>

              <p className="recent-work-para">
                A two–player dice game built for tension and fun, where every
                roll feels like a risk. Players can choose to roll or skip
              </p>

              <button className="recent-work-btn">Know more </button>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
