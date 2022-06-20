import React from "react";
import profilePic from "./prof-1.png";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="App__content">
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
      </section>
      <Footer />
    </div>
  );
}

export default App;
