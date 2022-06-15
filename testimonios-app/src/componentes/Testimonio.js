import React from "react";
// incluyo el archivo de estilos
import '../stylesheets/Testimonio.css';
// export en esta posicion para exportar mas de un elemento 
export function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require("../imagenes/testimonio-emma.png")}
        alt="Foto de Emma" />
      <div className="contenedor-text-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Sofware en Spotify</p>
        <p className="texto-testimonio">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}
