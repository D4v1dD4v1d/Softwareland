import './App.css';
import Titulo from './components/titulo'; 
import Parrafo from './components/parrafo'; 
import Imagen from './components/imagen'; 
import Contador from './components/contador';
import Color from './components/colorSitio';
import ModalButton from './components/ModalButton';
import ToastButton from './components/Toast';
import CustomCarousel from './components/CustomCarousel';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <ToastButton/>
        <ModalButton/>
        <CustomCarousel/>
    </div>
  );
}

export default App;
