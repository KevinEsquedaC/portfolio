// Importaciones React y MUI
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importación de componentes
import SideBar from "./components/general/SideBar";

// Importación de vistas
import MainMenu from "./pages/MainMenu";
import Calculator from "./pages/Calculator";

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
        <Grid item sm={1} md={0.5}>
          <SideBar handleOpenMenu={handleOpenMenu} openSideBar={openSideBar} />
        </Grid>
        <Grid item sm={11} md={11.5} sx={{ overflowY: 'auto', zIndex: openSideBar ? 20 : 40, transition: 'all 0.5s ease' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;