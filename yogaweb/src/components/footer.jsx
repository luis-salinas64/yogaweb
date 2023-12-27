import React from 'react';
import './container.css';
import ig from '../assets/instagram.png';


const Footer = ({ children, ...props }) => (
  <div className="footer" {...props}>
    {children}
    <p>Hari Yoga</p>
    <p>Aconcagua 3252 - Remedios de Escalada</p>
    <p>Buenos Aires - Argentina</p>
    
    <a style={{display:'flex', justifyContent:'center'}}href="https://www.instagram.com/hari._.yoga_/"><img className='igIcon'src={ig} alt='ig'/></a>
    
    
  </div>
);

export default Footer;