import './App.css';
import Titulo from './components/titulo'; 
import Parrafo from './components/parrafo'; 
import Imagen from './components/imagen'; 
import Contador from './components/contador';
import Color from './components/colorSitio';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Parrafo/>
      <Imagen/>
      <Contador/>
      <Color/>
    </div>
  );
}

export default App;
