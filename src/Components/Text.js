import React from "react";
import Typing from "react-typing-animation";

export default class Title extends React.Component {
  render() {
    return (
      <div className="Title-Container">
        <Typing speed={200} className="IntroText">
          <span>Hi, my name is Furqan</span>
        </Typing>
        <Typing speed={150} className="SubText">
          <span>Software Developer</span>
        </Typing>
      </div>
    );
  }
}
