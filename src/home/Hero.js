import React from "react";
import profilePic from "sq-md.jpg";
import "home/Hero.scss";

import { Trans } from "react-i18next";

function Hero() {
  return (
    <div className="Hero">
      <h1 className="Hero__title">
        <Trans i18nKey="hero.title" >
          Hola!<br/>Mi nombre<br/>es Sebastian
        </Trans>
      </h1>
      <div className="Hero__image">
        <img src={profilePic} alt="logo" />
      </div>
    </div>
  );
}

export default Hero;
