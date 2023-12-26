import React from 'react';
import '../components/container.css';
import Texto from '../components/texto';
import ShortButton from '../components/shortButton';
import BigButton from '../components/bigButton';
import foto from '../assets/kari2.jpg';
import loto from '../assets/loto_dorada.png';
import logoEscuela from '../assets/logoEscuela.png';
import Whatsapp from '../assets/whatsapp.png';



function Home() {

  const horarios = 'Espacios y Horarios';
  const certificados = '+ info';
  const tipos = 'Métodos y Estilos';


  return (
    <>
      <div className="fraseStyle">
        <p className="fraseText"
        >Tus acciones de hoy definen tu mañana.</p>
        <img className='imgFrase' src={loto} alt='loto' />
      </div>

      <div className="portada">
        <div className="titulo">Profesora y Maestra de Yoga</div>

        <div className="nombre">Karina Manna</div>

        <img className='img' src={foto} alt='portada' />

        <div className="pStyle">

          <Texto />

          <div className="logo-info">
            <img className="logoEscuela" src={logoEscuela} alt='logoEscuela' />
            <ShortButton description={certificados} href='/certificados' />
          </div>

        </div>

      </div>
      <div style={{ display: 'flex', width: '100%', flexDirection:'column' }}>

        < BigButton description={horarios} href='/daysHs' />

        < BigButton description={tipos} href='/tipos' />

        <a href="https://wa.me/5491165550149">
          <img className='whatsapp-icon' src={Whatsapp} alt='whatsapp' />
        </a>

      </div>
    </>
  );

};

export default Home;