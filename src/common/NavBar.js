import React from "react";
import { ReactComponent as Logo } from "base-logo.svg";
import { useTranslation } from "react-i18next";
import "common/NavBar.scss";

const languages = {
  es: "Español",
  en: "English",
};

function Navbar() {
  const { i18n } = useTranslation();

  return (
    <header className="Navbar">
      <Logo className="Navbar__logo" />
      {Object.keys(languages)
        .filter((key) => key !== i18n.language)
        .map((key) => (
          <button
            key={key}
            className="Navbar__language"
            onClick={() => i18n.changeLanguage(key)}>
            {languages[key]}
          </button>
        ))}
    </header>
  );
}

export default Navbar;
