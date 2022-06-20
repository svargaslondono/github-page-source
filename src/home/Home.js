import React from "react";
import profilePic from "../prof-1.png";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <h1 className="Home__title">Hi! My name is Sebastian.</h1>
      <div className="Home__description">
        <p>I'm a web developer with a keen eye for detail.</p>
        <p>
          Check out my{" "}
          <a
            className="Home__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/svargaslondono/">
            LinkedIn profile
          </a>{" "}
          and my{" "}
          <a
            className="Home__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/svargaslondono">
            GitHub repos
          </a>
        </p>
        <img src={profilePic} className="Home__logo" alt="logo" />
      </div>
    </div>
  );
}

export default Home;
