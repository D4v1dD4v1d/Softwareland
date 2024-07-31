import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'; 
import Parrafo from './components/Parrafo'; 
import Imagen from './components/Imagen'; 
import Contador from './components/Contador';
import Color from './components/ColorSitio';
import ModalButton from './components/ModalButton';
import ToastButton from './components/Toast';
import CustomCarousel from './components/CustomCarousel';
import CustomTable from './components/CustomTable';
import FormularioRegistro from './components/FormularioRegistro';
import RandomUser from './components/ConsultaAPI';
import BeerList from './components/Cervezas';

import './App.css';

function App() {
  return (
    <div className="App">
      <BeerList/>
    </div>
  );
}

export default App;
