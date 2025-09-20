import { Link } from "react-router-dom";
import shadowclues from "./assets/Shadow Clues.png";
import download from "./assets/download.svg";

export default function ShadowCluesApp() {
  const width = window.innerWidth;
  return (
    <Link to="/shadowclues">
      <div className="app">
        <div className="in">
          <img src={shadowclues} />
          <div className="info">
            <h2>Shadow Clues</h2>
            <p>Late Night Mystery</p>
          </div>
        </div>
        {width > 618 ? (
          <Link
            style={{
              width: "25%",
            }}
            to="/shadowclues"
          >
            <img className="download" src={download} />
          </Link>
        ) : null}
      </div>
    </Link>
  );
}
