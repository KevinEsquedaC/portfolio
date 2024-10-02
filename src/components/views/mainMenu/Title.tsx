// Importaciones MUI y i18next
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";

/**
 * @const Title 
 * @description Título mostrado en la página principal.
 * @returns El título como un JSX.Element.
 */
const Title = () => {

  const { t } = useTranslation();

  return (
    <div style={{ height: '100vh', alignItems: 'center', display: 'flex' }}>
      <div>
        <Reveal width="fit-content">
          <Typography variant="h1" className="glowTitle" sx={{ fontWeight: 'bold' }}>{t('mainMenu.title.title')}</Typography>
        </Reveal>
        <Reveal width="fit-content">
          <Typography variant="h4">{t('mainMenu.title.welcome')}</Typography>
        </Reveal>
        <br />
        <Reveal width="fit-content">
          <Typography variant="body1">{t('mainMenu.title.desc1')}</Typography>
        </Reveal>
        <Reveal width="fit-content">
          <Typography variant="body1" sx={{ maxWidth: '600px', textAlign: 'justify' }}>{t('mainMenu.title.desc2')}</Typography>
        </Reveal>
      </div>
    </div>
  );
};

export default Title;