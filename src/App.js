import React, { useState, useEffect } from "react";
import front from "./front.svg";
import back from "./back.svg";
import ReactCardFlip from "react-card-flip";
import Div100vh from "react-div-100vh";

const Front = () => <img className="App-logo" alt="" src={front} />;
const Back = () => <img className="App-logo" alt="" src={back} />;

export default () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [neverFlipped, setNeverFlipped] = useState(true);

  const flip = e => {
    if (e) e.preventDefault();
    setNeverFlipped(false);
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setTimeout(() => {
      if (neverFlipped) flip(null);
    }, 2137);
  });

  return (
    <Div100vh className="App">
      <div
        onTouchMove={e => e.preventDefault()}
        onMouseEnter={flip}
        onClick={flip}
      >
        <ReactCardFlip
          flipSpeedFrontToBack={2.5}
          flipSpeedBackToFront={2.5}
          infinite={true}
          isFlipped={isFlipped}
        >
          <Front key="front" />
          <Back key="back" />
        </ReactCardFlip>
      </div>
    </Div100vh>
  );
};
