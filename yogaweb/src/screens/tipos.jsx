import React from 'react';
import { useState } from 'react';
import '../components/container.css';
import Modal from './infoModal';
import volver from '../assets/proximo.png';
import Whatsapp from '../assets/whatsapp.png';
import infoIcon from '../assets/pregunta.png';
import lista from '../data/dataTipos.json';


const Tipos = ({ children, ...props }) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState([]);

  const openModal = (description) => {
    setSelectedDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (

    <div className='lugares'>

      <a style={{ display: 'flex', justifyContent: 'center' }} href='/'><img className='cerrar-btn' src={volver} alt='cerrar' /></a>

      <div className='tipos'>

        {lista.map(item => (
          <div key={item.id}>
             
             <div className={item.name === 'Que es Yoga' ? 'item-tipoPpal' : 'item-tipo'}>
              <h3>{item.name}</h3>
              <img src={infoIcon} alt='info' className='info-icon'
                onClick={() => openModal(item.description)} />
            </div>
          </div>
        ))}

      </div>
      {showModal && (
        <Modal show={showModal} handleClose={closeModal}>
          <button onClick={closeModal}>X</button>

          <div className="description-container">
            {selectedDescription.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* <p>{selectedDescription}</p> */}
        </Modal>
      )}
      <a href="https://wa.me/5491165550149">
        <img className='whatsapp-icon' src={Whatsapp} alt='whatsapp' />
      </a>
    </div>
  )
};


export default Tipos;