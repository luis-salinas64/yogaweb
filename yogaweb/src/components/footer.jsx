import React from 'react';
import './container.css';
import ig from '../assets/instagram.png';


const Footer = ({ children, ...props }) => (
  <div className="footer" {...props}>
    {children}
    <p>Hari Yoga</p>
    <p>Aconcagua 3252 - Remedios de Escalada</p>
    <p>Buenos Aires - Argentina</p>
    
    <img className='igIcon'src={ig} alt='ig'/>
    
    
  </div>
);

export default Footer;