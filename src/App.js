import React, { Component } from "react";
import front from "./front.svg";
import back from "./back.svg";
import ReactCardFlip from "react-card-flip";

const Front = () => <img className="App-logo" alt="" src={front} />;
const Back = () => <img className="App-logo" alt="" src={back} />;

class App extends Component {
  state = {
    isFlipped: false
  };

  flipOn = () => {
    this.setState({ isFlipped: true });
  };

  flipOff = () => {
    this.setState({ isFlipped: false });
  };

  flip = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <div className="App">
        <div
          onMouseEnter={this.flipOn}
          onMouseLeave={this.flipOff}
          onClick={this.flip}
        >
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="horizontal"
          >
            <Front key="front" />
            <Back key="back" />
          </ReactCardFlip>
        </div>
      </div>
    );
  }
}

export default App;
