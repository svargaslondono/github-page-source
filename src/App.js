import React from "react";
import Home from "home/Home";
import NavBar from "common/NavBar";
import Footer from "common/Footer";
import "App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home className="App__content" />
      <Footer />
    </div>
  );
}

export default App;
