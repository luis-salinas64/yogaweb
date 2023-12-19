import React from 'react';
import '../components/container.css';
import Cert1 from '../assets/ProfesorayMaestra.jpg';
import Cert2 from '../assets/AlianzaProfesora.jpg';
import volver from '../assets/volver-flecha.png';

const Certificados = ({ description, href }) => {


  return (
    <>
    <a style={{display:'flex',justifyContent:'center'}} href='/'>
    <img className='cerrar-btn' src={volver} alt='Cerrar'/>  </a>
  
      <a className='certificado' href={href}>
        {description}
        
        <img className='imgcert' src={Cert1} alt="cert1" />

        <img className='imgcert' src={Cert2} alt="cert2" />

      </a>
      </>
  )

};

export default Certificados;