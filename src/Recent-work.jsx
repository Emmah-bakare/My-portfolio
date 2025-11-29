import recentWork1 from "./assets/Recent-work-1.jpeg";
import recentWork2 from "./assets/Recent-work-2.jpeg";
import "./recent-work.css";

export function RecentWork() {
  const buttonStyling = {
    textAlign: "left",
    justifyContent: "left",
    justifySelf: "left",
    justifyItems: "left",
  };
  return (
    <>
      <body className="recent-work-body">
        <div className="recent-work-intro">
          <h1 className="recent-work-h1">Recent Work</h1>

          <p className="recent-work-intro-para">
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
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
              <h2 className="recent-work-h2">Dice game</h2>

              <p className="recent-work-para">
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
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
              <h2 className="recent-work-h2">Profit calculator</h2>

              <p className="recent-work-para">
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
              </p>

              <button className="recent-work-btn">Know more </button>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
