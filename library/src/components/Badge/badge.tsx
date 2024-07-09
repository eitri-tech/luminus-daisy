import React, { Component } from 'react';
import CommonProps from '../commonProps'

interface BadgeProps extends CommonProps {}

class Badge extends Component<BadgeProps> {
  render() {
    const { children, className } = this.props;
    const isReactComponent:boolean = React.isValidElement(children)
    if(isReactComponent){
      return (
        <div className={`badge ${className}`}>  
          {children}
        </div>
      );
    }
    return (
      <span className={`badge ${className}`}>  
        {children}
      </span>
    );
    
  }
}

export default Badge;
