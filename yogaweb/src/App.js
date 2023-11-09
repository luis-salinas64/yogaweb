import Container from "./components/container";
import Header from "./components/header";
import './components/container.css';
import foto from '../src/assets/portada_desenfoque.jpg';
import loto from '../src/assets/loto_dorada.png';
import Map from './screens/map';

function App() {  

  const portada = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'linear-gradient(180deg, #FEF4E5, #FCD9A5)'
  };


  const fraseStile = {
    width: '100%',
    // backgroundColor: '#FCF5F6',    
    textAlign: 'center',
    borderBottom: '1px solid #FACA84',

  };

  const img = {
    width: '100%',
    margin: '10px',
    borderRadius: 3,
    
  };

  const imgfrase = {
    width: '8%',
    margin: '0px',
  };

  const pStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1px',
    padding: '2%',
  };

  const textStyle = {    
    fontFamily: 'Cursive',
    margin: '5px',
    textAlign: 'justify',
  };

  const button = {
    width: '30%',
    backgroundColor: '#FBF0E4',
    fontSize: '15px',
    borderRadius: 5,
  };

  const espaciodir = {
    with: '100%',
    backgroundColor: '#EFE1CD',
    display: 'flex',    
    border: '1px solid #FDC97F',
    justifyContent: 'center',
    alignItems: 'center',

  };

  const mapContainer = {
    width: '40%',
    minHeight: '50px',
    padding: '5px',
  };

  return (
    <Container >
      <Header />
      <div style={fraseStile}>
        <p className="fraseText"
        >Tus acciones de hoy definen tu mañana.</p>

        <img src={loto} alt='loto' style={imgfrase} />

      </div>


      <div style={portada}>
        <div className="titulo">Profesora y Maestra de Yoga</div>
        <div className="titulo"><strong> Karina Manna</strong></div>
        <img src={foto} alt='portada' style={img} />

        <div style={pStyle}>

          <p style={textStyle}>Hola, soy Kari.
            Hace unos años estoy en la búsqueda de saber quién soy y
            cual era mi proposito en este plano.
            En el camino, me encontre con un montón de herramientas y aprendizajes
            que me ayudaron a conocerme, a <strong>valorarme!</strong> y entre otras muchas cosas, a
            <strong> animarme! </strong>
            Hoy soy <strong>Profesora y Maestra de Yoga</strong> y me gustaria compartir
            mis enseñanzas mientras sigo aprendiendo.
            Mi propósito como profe de Yoga es darte las herramientas para que vos también
            aprendas a <strong>conocerte, valorarte y animarte </strong>a este cambio.
            Quiero enseñarte a buscar <strong>el bienestar.</strong>
            Que seas tu propia <strong>medicina</strong>.</p>

          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <button style={button}>Certificados</button>
          </div>
        </div>
      </div>
      <div style={espaciodir}>
        <ul>
          <li style={{fontSize:'12px'}}><strong>Aconcagua 3252</strong></li>
          <li style={{fontSize:'12px'}}>Remedios de Escalada</li>
        </ul>
        <button style={button}>Horarios</button>
        <div style={mapContainer}>
        <Map/>
        </div>
      </div>
    </Container>
  );
}

export default App;
