import React from "react";
import Hero from "home/Hero";
import "home/Home.scss";

import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <Hero />
      <div className="Home__content">
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
      </div>
    </div>
  );
}

export default Home;
