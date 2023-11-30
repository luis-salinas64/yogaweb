import { useState } from "react";
import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";
import './components/container.css';
import Texto from "./components/texto";
import SimpleMap from "../src/apis/simpleMap";
import foto from '../src/assets/portada_desenfoque.jpg';
import loto from '../src/assets/loto_dorada.png';
import logoEscuela from '../src/assets/logoEscuela.png';
import Certificados from "./screens/certificados";

function App() {

  const [modalVisible, setModalVisible] = useState(false);  

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const modalContent = (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        
        <h2>Horarios</h2>
        <p>Martes: 10:30 - 11:30 - 18:00</p>
        <p>Jueves: 10:30 - 11:30 - 16:45 - 18:00</p>

      </div>
    </div>
  );
  

  return (
    <Container >
      <Header />
      <div className="fraseStyle">
        <p className="fraseText"
        >Tus acciones de hoy definen tu mañana.</p>
        <img className='imgFrase'src={loto} alt='loto' />
      </div>


      <div className="portada">
        <div className="titulo">Profesora y Maestra de Yoga</div>
        <img src={logoEscuela} alt='logoEscuela'style={{width:'10%'}}/>
        <div className="titulo"><strong> Karina Manna</strong></div>
        <img className='img' src={foto} alt='portada' />

        <div className="pStyle">

          <Texto/>

          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <button className="button">Ver mas</button>
          </div>
        </div>
      </div>
    <div style={{display:'flex', width:'100%'}}>
      <div className="espacio">
        <ul>
          <li className="location"><strong>Aconcagua 3252</strong></li>
          <li className="location">Remedios de Escalada</li>
        </ul>
        <button style={{          
          display:'flex',alignItems: 'center', justifyContent: 'center', borderRadius: '5px', width:'45%',
          marginLeft:'23%', height:'30%'}}
          onClick={toggleModal}>
          
          <h5>Horarios</h5></button>
          </div>
          {modalVisible && modalContent}
        <div className="mapContainer">
          <SimpleMap />
        </div>
        </div>
      <Footer />
    </Container>
  );
}

export default App;
