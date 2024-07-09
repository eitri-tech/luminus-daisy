import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface AlertProps extends CommonProps {}

class Alert extends Component<AlertProps> {
  render() {
    const { children, className } = this.props;
    return (
      <div role="alert" className={`alert ${className}`}>
        {children}
      </div>
    );
  }
}

export default Alert;
