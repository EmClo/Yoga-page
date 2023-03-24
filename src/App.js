import logo from "./yoga_logo.png";
import "./App.css";
import Button from "./Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Discover Yoga</h2>
        <h3>Discover: Relaxation</h3>
        <Button message="something" />
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
