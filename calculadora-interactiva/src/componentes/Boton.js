import React from 'react';
import '../stylesheets/Boton.css';

function Boton(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	};

	return ( 
		// LAS `` nos sirve para crear una cadena de caracteres que pueda contener codigo de javascript
		// trimEnd remueve espacios de una cadena de caracteres
		<div 
			className={ `boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd() }
			onClick={ () => props.manejarClic(props.children) } > 
			{ props.children }
		</div>
	);
}

export default Boton;