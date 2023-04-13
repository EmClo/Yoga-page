import "./NavBar.css";
import Logo from "./yoga_logo.png";

function NavBar() {
  return (
    <nav className="nav">
      <a href="https://emclo.github.io/Yoga-page/" className="nav-title">
        <img className="nav-logo" src={Logo} alt="Yoga pose" />
      </a>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Yoga" target="_blank">
            About
          </a>
        </li>
        <li>
          <a href="https://www.puregym.com/classes/yoga/" target="_blank">
            Book
          </a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
