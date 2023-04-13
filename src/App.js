import logo from "./yoga_logo.png";
import "./App.css";
import ButtonText from "./discoverText";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Discover Yoga</h2>
        <div className="wordContainer">
          <h3>Discover:</h3>
          <ButtonText />
        </div>
        <a
          className="App-link"
          href="https://www.yogabasics.com/practice/yoga-for-beginners/yoga-poses-beginners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Yoga
        </a>
      </header>
    </div>
  );
}

export default App;
