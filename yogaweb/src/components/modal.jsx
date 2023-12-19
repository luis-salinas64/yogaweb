import React from 'react';
import './container.css';

const Modal = ({ children, ...props }) => (
  <div className="modal" {...props}>
    {children}
  </div>
);

export default Modal;