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
      <Grid container sx={{ maxHeight: '100vh', width: '100%' }}>
        <Grid item md={0.5}>
          <SideBar handleOpenMenu={handleOpenMenu} openSideBar={openSideBar} />
        </Grid>
        <Grid item md={11.5} sx={{ overflowY: 'auto', zIndex: openSideBar ? 20 : 40, transition: 'all 0.5s ease' }}>
          <MainMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;