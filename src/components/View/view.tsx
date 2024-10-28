import React, { Component } from 'react';
import CommonProps from '../commonProps';
import ColorUtils from '../../utilities/ColorUtils';

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

    let classNameText = ""
    if(className && ColorUtils.classNameHaveBgColor(className)){
      classNameText = className;
    }else{
      classNameText = "";
    }

    return (
      <div id={id} data-e="View" className={`${classNameText} ${className} ${onClick ? 'cursor-pointer' : ''}`} onClick={handleClick}>
        {children}
      </div>
    );
  }
}

export default View;
