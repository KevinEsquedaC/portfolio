// Importaciones MUI
import Typography from "@mui/material/Typography";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";

/**
 * @const Title 
 * @description Título mostrado en la página principal.
 * @returns El título como un JSX.Element.
 */
const Title = () => {
  return (
    <div style={{ height: '100vh', alignItems: 'center', display: 'flex' }}>
      <div>
        <Reveal width="fit-content">
          <Typography variant="h1" className="glowTitle" sx={{ fontWeight: 'bold' }}>Hola Mundo!!!</Typography>
        </Reveal>
        <Reveal width="fit-content">
          <Typography variant="h4">Bienvenido a la página principal de este proyecto.</Typography>
        </Reveal>
        <br />
        <Reveal width="fit-content">
          <Typography variant="body1">En este proyecto realizaré pruebas de React, Material UI, Framer Motion y más.</Typography>
        </Reveal>
        <Reveal width="fit-content">
          <Typography variant="body1" sx={{ maxWidth: '600px', textAlign: 'justify' }}>Esto para poder conocer más el funcionamiento y comportamiento de ciertos componentes de una manera interactiva, juganto con los elementos y animaciones que puedo utilizar.</Typography>
        </Reveal>
      </div>
    </div>
  );
};

export default Title;