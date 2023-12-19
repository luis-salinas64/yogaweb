import React from 'react';
import './container.css';
import Logo from '../assets/portada_hari2.1.jpg';

const Header = ({ children, ...props }) => (
  <div className="header" {...props}>
    {children}
    
      <img className='img-header'src={Logo} alt='Logo' />
    
  </div>
);

export default Header;