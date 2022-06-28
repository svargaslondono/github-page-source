import React from "react";
import "common/Footer.scss";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <em>
        {"\u27C1"} {t("footer.disclaimer")} {"\u2665"}
      </em>
    </footer>
  );
}

export default Footer;
