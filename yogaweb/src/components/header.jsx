import React from 'react';
import './container.css';

const Header = ({ children, ...props }) => (
  <div className="header" {...props}>
    {children}
  </div>
);

export default Header;