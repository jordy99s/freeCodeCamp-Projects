import React from 'react';
import '../stylesheets/Boton.css';

// para no usar la palabra props dentro del boton, dentro de la funcion pongo la variable a necesitar
// en este caso uso texto
function Boton({ texto, esBotonDeClic, manejarClic }) {
	return (
		// si esBotonDeClic es verdadera, retorna boton-clic, sino, boton-reiniciar
		<button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClic} >
			{texto}
		</button>
	);
}

export default Boton;