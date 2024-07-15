import React, { Component } from 'react';
import CommonProps from '../commonProps';

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
    const { children, className = "", id } = this.props;

    return (
      <button data-e="Button" id={id} type="button" data-element="Button" onClick={this.clickHandle} className={`btn ${className}`}>
        {children}
      </button>
    );
  }
}

export default Button;
