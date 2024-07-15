import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface AvatarProps extends CommonProps {}

class Avatar extends Component<AvatarProps> {
  render() {
    const { children, className = "", id } = this.props;
    return (
      <div data-e="Avatar" id={id} className={`avatar ${className}`}>
        {children}
      </div>
    );
  }
}

export default Avatar;
