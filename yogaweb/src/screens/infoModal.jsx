// import React, { useState } from 'react';
import '../components/container.css'; 

const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>        
        
        {children}
      </section>
    </div>
  );
};

export default Modal;
