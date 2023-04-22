import React, { useState } from 'react';

const Modal = ({ show, onClose, children }: any) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal">
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;