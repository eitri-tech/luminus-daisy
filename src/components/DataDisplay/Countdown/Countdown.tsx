import React, { Component } from "react";
import CommonProps from "../../commonProps";

interface CountdownProps extends CommonProps {
  counter: number;
}

class Countdown extends Component<CountdownProps> {
  render() {
    const { counter, className = "" } = this.props;

    return (
      <span className={`countdown ${className}`}>
        <span style={{ "--value": `${counter}` } as never}></span>
      </span>
    );
  }
}

export default Countdown;
