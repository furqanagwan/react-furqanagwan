import React from "react";
import Header from "../Components/Header.js";
import Avatar from "../Components/Avatar.js";
import Title from "../Components/Text.js";
import "../CSS/index.css";

export default function App() {
  return (
      <div className="App">
        <div className="App-Background">
          <Header />
          <Avatar />
          <Title />
        </div>
      </div>
  );
}
