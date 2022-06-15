//Esto es lo que le da estilo a la pagina -- Llamamos al App.css
import './App.css';
// uso de { } para indicar que mas de un componente se esta exportando. Se eliminan si solo se requiere exportar un componente por defecto
import { Testimonio } from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
// export default Nombre solo si se quiere exportar un elemento en especifico