import React from "react";
// incluyo el archivo de estilos
import '../stylesheets/Testimonio.css';
// export en esta posicion para exportar mas de un elemento 
// se agrega entre parentesis props para recibir valores y usarlos en componentes
export function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}
