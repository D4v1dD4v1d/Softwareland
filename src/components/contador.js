import React from 'react';
import ReactUseState, { useState,useEffect } from 'react';
import './css/contador.css';
function Contador() {
    var [contador,incrementar] =useState(0);
    const incremento=()=>{
        incrementar(++contador);
    }
     
  return(
    <div className='contador'>
        <h1>contador {contador}</h1>
        <button onClick={incremento}>Incrementar</button>
    </div>
  ); 
}

export default Contador;