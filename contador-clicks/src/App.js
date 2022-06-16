import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

import { useState } from 'react';

function App() {

  // useSate es un Hook -- Verificar correcta importacion del hook
  // useState funciona para cambiar el estado de un componente en especifico
  const [numClics, setNumClics] = useState(0);

  // funcion flecha
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador =  () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      {/* CONTENEDOR IMAGEN */}
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      {/* CONTENEDOR PRINCIPAL */}
      <div className='contenedor-principal'>
        {/* CONTADOR */}
        <Contador numClics={numClics} />
        {/* BOTONES */}
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
