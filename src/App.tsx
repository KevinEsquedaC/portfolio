// Importaciones React y MUI
import { useState } from "react";
import Grid from "@mui/material/Grid";

// Importación de componentes
import SideBar from "./components/general/SideBar";

// Importación de vistas
import MainMenu from "./pages/MainMenu";


/**
 * @function App
 * @description App utilizada como portafolio (Frontend).
 * @returns Devuelve todos los componentes de la App.
 */
function App() {

  const [openSideBar, setOpenSideBar] = useState(false);

  function handleOpenMenu() {
    setOpenSideBar(!openSideBar)
  };

  return (
    <div>
      <SideBar handleOpenMenu={handleOpenMenu} openSideBar={openSideBar} />
      <Grid container sx={{ maxHeight: '100vh', width: '100%', zIndex: 20 }}>
        <Grid item md={0.5} />
        <Grid item md={11.5} sx={{ overflowY: 'auto' }}>
          <MainMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;