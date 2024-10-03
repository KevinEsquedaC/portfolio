// Importaciones MUI y i18next
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

// Importación de componentes
import Calculator from "./Calculator";

/**
 * @constant Body
 * @description Muestra el cuerpo de la vista del mini-proyecto de la calculadora.
 * @returns El cuerpo como un JSX.Element.
 */
const Body = () => {

  const { t } = useTranslation();

  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={2} sx={{ height: '100vh', width: '100%' }}>
        <Grid item xs={12} md={5} sx={{ height: { md: '100%' }, alignItems: { md: 'center' }, display: { md: 'flex' } }}>
          <Stack sx={{ width: '100%', display: { xs: 'flex', md: '' }, justifyContent: { xs: 'center', md: '' } }}>
            <Typography variant="h2" className="glowSubtitle" sx={{ textAlign: { xs: 'center', md: 'justify' } }}>{t("calculator.title")}</Typography>
            <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'justify' } }}>{t("calculator.desc")}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: '80%', md: '100%' } }}>
          <Calculator />
        </Grid>
      </Grid>
    </div>
  );
};

export default Body
