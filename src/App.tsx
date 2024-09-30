// Importaciones React y MUI
import { useState } from "react";
import Grid from "@mui/material/Grid";

// Importación de componentes
import SideBar from "./components/general/SideBar";
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
      <Grid container sx={{ height: '100vh' }}>
        <Grid item lg={openSideBar ? 2 : 0.5} sx={{ transition: 'all 0.5s' }}>
          <SideBar handleOpenMenu={handleOpenMenu} openSideBar={openSideBar} />
        </Grid>
        <Grid item lg={openSideBar ? 10 : 11.5} sx={{ overflowY: 'hidden', transition: 'all 0.5s' }}>
          <MainMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;