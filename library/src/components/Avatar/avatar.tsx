import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface AvatarProps extends CommonProps {}

class Avatar extends Component<AvatarProps> {
  render() {
    const { children, className } = this.props;
    return (
      <div className={`avatar ${className}`}>
        {children}
      </div>
    );
  }
}

export default Avatar;
