import logo from "./assets/logo.svg"; // assets contains all the images to use hence put all images in assets and input them like this
import "./home.css"; // the file containing the styles for the html in the code in this file

// sample code, you can remove everything in return statement and put your own html
export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> an save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
