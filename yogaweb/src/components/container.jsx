import React from 'react';
import './container.css';

const Container = ({ children, ...props }) => (
  <div className="container" {...props}>
    {children}
  </div>
);

export default Container;