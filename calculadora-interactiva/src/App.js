import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

import { useState } from 'react';
// mathjs se instala usando npm install mathjs desde la terminal
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));  
    }else{
      alert("Por favor ingrese valores");
    }
  };

  return (
    <div className='App'>
      {/* LOGO APLICACION */}
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' 
        />
      </div>
      {/* Contenedor de la calculadora */}
      <div className='contenedor-calculadora' >
        {/* Pantalla de la calculadora */}
        <Pantalla input={input} />
        {/* Botones de la calculadora */}
        <div className='fila'>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          {/* No es necesario haber escrito Clear aqui, pero para usar props y la chingada. Unicamente si es un valor fijo,
          en el otro caso porque son valores distintos entonces se hace de la forma en que se hace */}
          <BotonClear manejarClear={ () => setInput('') } >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
