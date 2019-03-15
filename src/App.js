import React, { Component } from "react";
import front from "./front.svg";
import back from "./back.svg";
import ReactCardFlip from "react-card-flip";
import Div100vh from "react-div-100vh";

const Front = () => <img className="App-logo" alt="" src={front} />;
const Back = () => <img className="App-logo" alt="" src={back} />;

class App extends Component {
  state = {
    isFlipped: false,
    neverFlipped: true
  };

  componentDidMount() {
    const { neverFlipped } = this.state;
    setTimeout(() => {
      if (neverFlipped) this.flip(null);
    }, 2137);
  }

  flip = e => {
    if (e) e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
      neverFlippd: false
    }));
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <Div100vh className="App">
        <div
          onTouchMove={e => e.preventDefault()}
          onMouseEnter={this.flip}
          onClick={this.flip}
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
  }
}

export default App;
