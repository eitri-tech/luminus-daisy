import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface ButtonProps extends CommonProps {
  onClick?: () => void;
  linkToModal?: string;
}

class Button extends Component<ButtonProps> {

  clickHandle = () => {
    const { onClick, linkToModal } = this.props;
    if (onClick) {
      onClick();
    }
    if (linkToModal) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const modal: any = window.document.getElementById(linkToModal);
        if (modal) {
          modal.showModal();
        }
      } catch (error) {
        console.error('Error opening modal:', error);
      }
    }
  };

  render() {
    const { 
      children, 
      className = "", 
      ...rest 
    } = this.props;

    return (
      <button 
        data-e="Button" 
        type="button" 
        data-element="Button" 
        onClick={this.clickHandle} 
        className={`btn ${className}`} 
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
