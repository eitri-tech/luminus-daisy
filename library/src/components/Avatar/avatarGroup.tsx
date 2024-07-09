import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface AvatarGroupProps extends CommonProps {}

class AvatarGroup extends Component<AvatarGroupProps> {
  render() {
    const { children, className } = this.props;
    return (
      <div className={`avatar-group ${className}`}>
        {children}
      </div>
    );
  }
}

export default AvatarGroup;
