import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface ModalProps extends CommonProps {
  
}

class Modal extends Component<ModalProps> {
  render() {
    const { 
      id,
      className = "", 
      children
    } = this.props;

    return (
      <dialog id={id} className={`modal ${className}`}>
        <div className="modal-box">
          {children}
        </div>
      </dialog>
    );
  }
}

export default Modal;
