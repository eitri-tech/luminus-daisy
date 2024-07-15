import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface BadgeProps extends CommonProps {
  
}

class Badge extends Component<BadgeProps> {
  render() {
    const { children, className = "", id } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div data-e="Badge" id={id} className={`badge ${className}`}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

export default Badge;
