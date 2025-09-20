import { Link } from "react-router-dom";
import routinacci from "./assets/Routinacci.png";
import download from "./assets/download.svg";

export default function RoutinacciApp() {
  const width = window.innerWidth;
  return (
    <Link to="https://phibonacci.app">
      <div className="app">
        <div className="in">
          <img src={routinacci} />

          <div className="info">
            <h2>Routinacci</h2>
            <p>
              Boost focus, track progress, and get motivated with Routinacci’s
              Golden Ratio planning.
            </p>
          </div>
        </div>
        {width > 618 ? (
          <Link
            style={{
              width: "25%",
            }}
            to="https://apps.apple.com/app/routinacci/id6751642703"
          >
            <img className="download" src={download} />
          </Link>
        ) : null}
      </div>
    </Link>
  );
}
