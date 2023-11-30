import React from 'react';
import '../components/container.css';
import logoEscuela from '../assets/logoEscuela.png';

const Certificados = ({ children, ...props }) => (
  <div className="certificados" {...props}>
    {children}
    <image src={logoEscuela} alt="logoEscuela" />
    <image src={logoEscuela} alt="logoEscuela" />
  </div>
);

export default Certificados;