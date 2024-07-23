import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface LoadingProps extends CommonProps {
  size?: string
  color?: string
}

class Loading extends Component<LoadingProps> {
  render() {
    const { size = '',   className="" , color=''} = this.props;

    return (
      <span className={`loading ${className} ${size} ${color}`}></span>
    );
  }
}

export default Loading;
