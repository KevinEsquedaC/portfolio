// Importaciones React y MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// Importación de tipos
import { MiniProyectCatalogType } from "../../../types/MiniProyectCatalogType";

// Importación de funciones
import Reveal from "../../../functions/general/Reveal";

/**
 * @constant MiniProjectsCatalog
 * @description Catálogo con mini proyectos mostrados por medio de cards.
 * @returns Devuelve el catálogo como un JSX.Element. 
 */
const MiniProjectsCatalog = () => {

  const navigate = useNavigate();
  const { i18n } = useTranslation();

  /**
   * @constant miniProyectsArray
   * @description Arreglo que contiene todos los mini proyectos.
   */
  const miniProyectsArray = [
    { id: 1, es: { title: "Calculadora", desc: "Calculadora funcional" }, en: { title: "Calculator", desc: "Functional Calculator" }, url: "/calculator" },
  ];

  /**
   * @function handleChangePage
   * @description Función que redirige al usuario al proyecto seleccionado
   * @param url URL a donde será dirigido el usuario
   */
  function handleChangePage(url: string) {
    navigate(url);
  };

  return (
    <div>
      <Grid container sx={{ width: '100%' }} spacing={2}>
        {miniProyectsArray.map((proyect: MiniProyectCatalogType) => {

          const language = i18n.language;
          const content = proyect[language as 'es' | 'en'];

          return (
            <Grid key={proyect.id} item xs={12} sm={6} md={4} xl={3}>
              <Reveal>
                <Card onClick={() => handleChangePage(proyect.url)} sx={{ "&:hover": { cursor: "pointer", transform: "scale(1.05)" }, transition: "all 0.5s" }}>
                  <CardMedia sx={{ height: 140 }} />
                  <Divider sx={{ mx: 1 }} />
                  <CardContent>
                    <Typography variant="h5">{content.title}</Typography>
                    <Typography variant="body1">{content.desc}</Typography>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          )
        }
        )}
      </Grid>
    </div>
  );
};

export default MiniProjectsCatalog;