import React from "react";
import { ReactComponent as Logo } from "../base-logo.svg";
import "./NavBar.scss";

function Navbar() {
  return (
    <header className="Navbar">
      <Logo className="Navbar__logo" />
    </header>
  );
}

export default Navbar;
