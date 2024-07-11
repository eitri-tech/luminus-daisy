import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface BadgeProps extends CommonProps {
  
}

class Badge extends Component<BadgeProps> {
  render() {
    const { children, className } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div className={`badge ${className}`}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

export default Badge;
