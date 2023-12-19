import React from 'react';
import '../components/container.css';
import volver from '../assets/volver-flecha.png';
import Whatsapp from '../assets/whatsapp.png';
import SimpleMap from '../components/simpleMap.jsx';

const Horarios = ({ children, ...props }) => (
  <div className='lugares'>

    <a style={{ display: 'flex', justifyContent: 'center' }} href='/'><img className='cerrar-btn' src={volver} alt='cerrar' /></a>

    <div className="info">

      <div className="info-container" style={{ flex: '0 0 60%' }}>

        <h3 >Hary Yoga</h3>
        <h4 >Aconcagua 3252</h4>
        <h4 >Remedios de Escalada</h4>

        <ul className='ulStyle'>
          <li className='info-text'>Martes : 9:00 hs - 10:30 hs - 18:00 hs</li>
          <li className='info-text'>Jueves : 9:00 hs - 10:30 hs - 18:00 hs</li>
          <li className='info-text'>Clases Virtuales (Consultar horarios)</li>
          <li className='info-text'>Clases a Domicilio (Consultar horarios)</li>
        </ul>
      </div>

      <div className="map-container" style={{ flex: '0 0 40%' }}>
        <SimpleMap address="Aconcagua 3252, Remedios de Escalada,Buenos Aires,Argentina"
          text="Hary Yoga" />
      </div>
    </div>

    <div className="info">
      <div className="info-container" style={{ flex: '0 0 60%' }}>

        <h3 style={{ lineHeight: '3px' }}>Espacio Ed</h3>
        <h4 style={{ lineHeight: '3px' }}>Viamonte 310</h4>
        <h4 style={{ lineHeight: '3px' }}>Lomas de Zamora</h4>

        <ul className='ulStyle'>
          <li className='info-text'>Miercoles : 18:00 hs </li>
        </ul>
      </div>
      <div className="map-container" style={{ flex: '0 0 40%' }}>
        <SimpleMap address="Viamonte 310,Lomas de Zamora,Buenos Aires,Argentina"
          text="Espacio ED" />
      </div>
    </div>

    <div className="info">
      <div className="info-container" style={{ flex: '0 0 60%' }}>

        <h3 style={{ lineHeight: '3px' }}>Consultorios Banfield</h3>
        <h4 style={{ lineHeight: '3px' }}>Cochabamba 427</h4>
        <h4 style={{ lineHeight: '3px' }}>Banfield</h4>

        <ul className='ulStyle'>
          <li className='info-text'>Lunes : 10:30hs - 13:30hs </li>
          <li className='info-text'>Miercoles : 10:30hs - 13:30hs </li>
        </ul>
      </div>
      <div className="map-container" style={{ flex: '0 0 40%' }}>
        <SimpleMap address="Cochabamba 427,Banfield,Buenos Aires,Argentina"
          text="Consultorios Banfield" />
      </div>
    </div>
    <a href="https://wa.me/5491165550149">
      <img className='whatsapp-icon' src={Whatsapp} alt='whatsapp' />
    </a>
  </div>
);


export default Horarios;