import React from "react";
import profilePic from "prof-1.png";
import "home/Home.scss";

import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <h1 className="Home__title">{t("home.title")}</h1>
      <div className="Home__description">
        <p>{t("home.description")}</p>
        <p>
          <Trans
            i18nKey="home.links"
            components={[
              <a
                className="Home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/svargaslondono/">
                {" "}
              </a>,
              <a
                className="Home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/svargaslondono">
                {" "}
              </a>,
            ]}
          />
        </p>
        <img src={profilePic} className="Home__logo" alt="logo" />
      </div>
    </div>
  );
}

export default Home;
