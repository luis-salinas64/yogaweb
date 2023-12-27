import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './screens/home.jsx';
import Horarios from "./screens/daysHs.jsx";
import Certificados from "./screens/certificados.jsx";
import Tipos from "./screens/tipos.jsx";
import Tarifas from "./screens/tarifas.jsx";
import './components/container.css';

function App() {

  return (
    <Container >

      <Header />

      <BrowserRouter >
        <Routes>

          <Route path="/" element={<Home />} /> 
          <Route path="/daysHs" element={<Horarios/>} />
          <Route path="/certificados" element={<Certificados/>} />
          <Route path="/tipos" element={<Tipos/>} />
          <Route path="/tarifas" element={<Tarifas/>} />

        </Routes>
      </BrowserRouter>
      

      <Footer />
      

    </Container >

  );
}

export default App;
