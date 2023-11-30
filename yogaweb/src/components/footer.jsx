import React from 'react';
import './container.css';

const Footer = ({ children, ...props }) => (
  <div className="footer" {...props}>
    {children}
  </div>
);

export default Footer;