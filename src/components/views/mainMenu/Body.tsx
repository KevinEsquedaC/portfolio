// Importaciones MUI y i18next
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";
import MiniProjectsCatalog from "./MiniProjectsCatalog";

/**
 * @constant Body
 * @description Se muestra el cuerpo de la vista principal del proyecto.
 * @returns El cuerpo como un JSX.Element.
 */
const Body = () => {

  const { t } = useTranslation();

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Reveal width="fit-content">
          <Typography variant="h3" className="glowSubtitle" sx={{ width: '100%', fontWeight: 'bold' }}>{t('mainMenu.body.miniProjects.title.title')}</Typography>
        </Reveal>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Reveal width="fit-content">
          <Typography variant="h4">{t('mainMenu.body.miniProjects.title.desc')}</Typography>
        </Reveal>
      </div>
      <br /><br />
      <div>
        <MiniProjectsCatalog />
      </div>
    </div>
  );
};

export default Body;