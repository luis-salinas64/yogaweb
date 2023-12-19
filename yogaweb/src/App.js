import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './screens/home.jsx';
import Horarios from "./screens/daysHs.jsx";
import Certificados from "./screens/certificados.jsx";
import './components/container.css';

function App() {

  return (
    <Container >

      <Header />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} /> 
          <Route path="/daysHs" element={<Horarios/>} />
          <Route path="/certificados" element={<Certificados/>} />

        </Routes>
      </BrowserRouter>
      

      <Footer />
      

    </Container >

  );
}

export default App;
