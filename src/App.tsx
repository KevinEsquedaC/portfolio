// Importación de componentes
import NavigationBar from "./components/general/NavigationBar";

/**
 * @function App
 * @description App utilizada como portafolio (Frontend).
 * @returns Devuelve todos los componentes de la App.
 */
function App() {

  return (
    <div style={{padding: '8px'}}>
      <NavigationBar />
      <h1>Hola mundo!!!</h1>
    </div>
  );
};

export default App;