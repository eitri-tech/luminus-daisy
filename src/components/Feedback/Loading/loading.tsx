import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface LoadingProps extends CommonProps {
  name: string;
}

class Loading extends Component<LoadingProps> {
  render() {
    const {name, id,  className="" } = this.props;

    return (
      <span id={id} data-e="Loading" name={name} className={`loading ${className}`}></span>
    );
  }
}

export default Loading;
