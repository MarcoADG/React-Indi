import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div className="image-container">
              <img
                className="img-nav"
                src="https://art.pixilart.com/804d3ce72947ffe.png"
                alt="Home"
              />
              <span className="image-text">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/games">
            <div className="image-container">
              <img
                className="img-nav"
                src="https://art.pixilart.com/804d3ce72947ffe.png"
                alt="Game"
              />
              <span className="image-text2">Games</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
