// Importaciones MUI
import Typography from "@mui/material/Typography";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";

/**
 * @const Title 
 * @description Título mostrado en la página principal
 * @returns El título como un JSX.Element
 */
const Title = () => {
  return (
    <div style={{ height: '100vh', alignItems: 'center', display: 'flex' }}>
      <div>
        <Reveal>
          <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Hola Mundo!!!</Typography>
        </Reveal>
        <Reveal>
          <Typography variant="h5">Bienvenido a la página principal de este proyecto.</Typography>
        </Reveal>
        <Reveal>
          <Typography variant="body1">En este proyecto realizaré pruebas de React, Material UI, Framer Motion y más.</Typography>
        </Reveal>
        <Reveal>
          <Typography variant="body1" sx={{ maxWidth: '600px', textAlign: 'justify' }}>Esto para poder conocer más el funcionamiento y comportamiento de ciertos componentes de una manera interactiva, juganto con los elementos y animaciones que puedo utilizar.</Typography>
        </Reveal>
      </div>
    </div>
  );
};

export default Title;