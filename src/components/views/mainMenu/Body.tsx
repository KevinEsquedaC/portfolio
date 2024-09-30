// Importaciones MUI
import Typography from "@mui/material/Typography";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";
import MiniProyectsCatalog from "./MiniProyectsCatalog";

/**
 * @constant Body
 * @description Se muestra el cuerpo de la vista principal del proyecto.
 * @returns El cuerpo como un JSX.Element.
 */
const Body = () => {
  return (
    <div style={{ height: '80vh' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Reveal width="fit-content">
          <Typography variant="h2" sx={{ width: '100%', fontWeight: 'bold' }}>Índice</Typography>
        </Reveal>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Reveal width="fit-content">
          <Typography variant="h4">Previsualización de mini-proyectos</Typography>
        </Reveal>
      </div>
      <br /><br />
      <div>
        <MiniProyectsCatalog />
      </div>
    </div>
  );
};

export default Body;