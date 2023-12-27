import React from 'react';
import '../components/container.css';
import Whatsapp from '../assets/whatsapp.png';
import volver from '../assets/proximo.png';
import tarifas from '../data/dataTarifas.json';


const Tarifas = ({ children, ...props }) => {



    return (

        <div className='lugares'>
            <a style={{ display: 'flex', justifyContent: 'center' }} href='/'><img className='cerrar-btn' src={volver} alt='cerrar' /></a>

            {tarifas.map(item => (
                <div className='tarifas'key={item.id}>
                    <h3>{item.name}</h3>
                    <h3>{item.value}</h3>
                </div>
            ))},

            <a href="https://wa.me/5491165550149">
                <img className='whatsapp-icon' src={Whatsapp} alt='whatsapp' />
            </a>
        </div>
    )
};


export default Tarifas;