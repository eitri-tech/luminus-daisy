import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface AvatarGroupProps extends CommonProps {}

class AvatarGroup extends Component<AvatarGroupProps> {
  render() {
    const { children, className = "", id } = this.props;
    return (
      <div data-e="AvatarGroup" id={id} className={`avatar-group ${className}`}>
        {children}
      </div>
    );
  }
}

export default AvatarGroup;
