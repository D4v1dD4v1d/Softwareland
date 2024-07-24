import React from 'react';
import './css/imagen.css';
import cardenalImage from './cardenal.jpeg';
function imagen() {
  return(
    <div className='imagen'>
        <img src={cardenalImage} alt='Cardenal'></img>
    </div>
  ); 
}

export default imagen;
