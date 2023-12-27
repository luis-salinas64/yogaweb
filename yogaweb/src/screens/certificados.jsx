import React from 'react';
import '../components/container.css';
import Cert1 from '../assets/ProfesorayMaestra.jpg';
import Cert2 from '../assets/AlianzaProfesora.jpg';
import volver from '../assets/proximo.png';

const Certificados = ({ description, href }) => {


  return (
    <div className='lugares'>
    <a style={{display:'flex',justifyContent:'center'}} href='/'>
    <img className='cerrar-btn' src={volver} alt='Cerrar'/>  </a>
  
      <a className='certificado' href={href}>
        {description}
        
        <img className='imgcert' src={Cert1} alt="cert1" />

        <img className='imgcert' src={Cert2} alt="cert2" />

      </a>
      </div>
  )

};

export default Certificados;