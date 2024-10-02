// Importaciones MUI y i18next
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

/**
 * @constant Body
 * @description Muestra el cuerpo de la vista del mini-proyecto de la calculadora.
 * @returns El cuerpo como un JSX.Element.
 */
const Body = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        <Grid item md={5} sx={{ height: '100%', alignItems: 'center', display: 'flex' }}>
          <Stack>
            <Typography variant="h2" className="glowSubtitle">{t("calculator.title")}</Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>{t("calculator.desc")}</Typography>
          </Stack>
        </Grid>
        <Grid item md={7}>

        </Grid>
      </Grid>
    </div>
  );
};

export default Body
