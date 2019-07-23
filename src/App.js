import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "150px", margin: "0 auto" }}>
        <img
          style={{ width: "500px", height: "200px" }}
          src={logo}
          alt="borderlands logo."
        />
      </div>
    </div>
  );
}

export default App;
