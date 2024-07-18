import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface ModalProps extends CommonProps {
  backdrop?:boolean
}

class Modal extends Component<ModalProps> {
  render() {
    const { 
      id,
      className = "", 
      children,
      backdrop = true
    } = this.props;

    return (
      <dialog id={id} className={`modal ${className}`}>
        <div className="modal-box">
          {children}
        </div>
        {
          backdrop && (
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          )
        }
      </dialog>
    );
  }
}

export default Modal;
