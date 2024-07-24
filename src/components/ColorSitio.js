import React from 'react';
import ReactUseEfect, { useState, useEffect } from 'react';

import './css/color.css';
function Color() {
    const [color, setColor] = useState('#FFFFFF'); 

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const CambiarFondo = () => {
    const nuevoColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };
  return(
    <div className='color'>
        <button onClick={CambiarFondo}>Cambiar color de fondo</button>
    </div>
  ); 
}

export default Color;