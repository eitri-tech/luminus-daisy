import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface ViewProps extends CommonProps { 
  onClick?: () => void;
}

class View extends Component<ViewProps> {
  render() {
    const { id, children, className = "", onClick } = this.props;

    function handleClick(){
      if (onClick) {
        onClick();
      }
    }

    return (
      <div id={id} data-e="View" className={`${className} ${onClick ? 'cursor-pointer' : ''}`} onClick={handleClick}>
        {children}
      </div>
    );
  }
}

export default View;
