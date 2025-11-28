import recentWork1 from "./assets/Recent-work-1.jpeg";
import recentWork2 from "./assets/Recent-work-2.jpeg";

export function RecentWork() {
  return (
    <>
      <div className="recent-work-intro">
        <h1 className="recent-work-h1">Recent Work</h1>

        <p className="recent-work-para">
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* first image and description  */}

      <div className="recent-work-img-and-text">
        <div className="recent-work-img">
          <img src={recentWork1} alt="profit-calculator" />
        </div>

        <div>
          <h2 className="recent-work-h2">Profit calculator</h2>

          <p>
            Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>

          <button className="recent-work-btn">Know more </button>
        </div>
      </div>

      <div className="recent-work-img-and-text">
        <div className="recent-work-img">
          <img src={recentWork2} alt="dice-game" />
        </div>

        <div>
          <h2 className="recent-work-h2">Profit calculator</h2>

          <p>
            Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>

          <button className="recent-work-btn">Know more </button>
        </div>
      </div>
    </>
  );
}
