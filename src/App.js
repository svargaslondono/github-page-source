import React from "react";
import profilePic from "./prof-1.png";
import NavBar from "./common/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="App__title">Hi! My name is Sebastian.</h1>

      <div className="App__description">
        <p>I'm a web developer with a keen eye for detail.</p>
        <p>
          Check out my{" "}
          <a
            className="App__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/svargaslondono/">
            LinkedIn profile
          </a>{" "}
          and my{" "}
          <a
            className="App__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/svargaslondono">
            GitHub repos
          </a>
        </p>
        <img src={profilePic} className="App__logo" alt="logo" />
      </div>

      <footer className="App__footer">
        <em>
          {"\u27C1"} This site is under construction. A lot more love is being
          added. {"\u2665"}
        </em>
      </footer>
    </div>
  );
}

export default App;
