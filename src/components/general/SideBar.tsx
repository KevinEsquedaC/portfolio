// Importaciones Framer Motion y MUI
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

// Importación de funciones
import DrawSVG from "../../functions/general/DrawSVG";

// Props
interface SideBarProps {
  openSideBar: boolean
  handleOpenMenu(): void
};

/**
 * @constant SideBar
 * @description Barra de navegación mostrada en la parte lateral izquierda de la página.
 * @returns Devuelve la barra de navegación como un JSX.Element.
 */
const SideBar = ({ handleOpenMenu, openSideBar }: SideBarProps) => {

  return (
    <div style={{ backdropFilter: 'blur(30px)', boxShadow: '0px 0px 20px rgba(20, 110, 255, 0.30)', height: '100%' }}>
      <Stack sx={{ width: '100%', display: 'flex', alignItems: openSideBar ? 'end' : 'center' }}>
        <motion.div style={{ width: "40px", height: "40px" }} onClick={handleOpenMenu} transition={{ duration: 0.3 }}>
          <motion.svg width="40" height="40" viewBox="0 0 45 35" initial="hidden" animate="visible" stroke={"#FFFFFF"} whileHover={{ stroke: "#006aff", scale: [null, 1.2], cursor: 'pointer' }}>
            <motion.line x1="10" y1="10" x2="35" y2={openSideBar ? "30" : "10"} strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1} />
            <motion.line x1="10" y1={openSideBar ? "30" : "18"} x2="35" y2={openSideBar ? "10" : "18"} strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1.5} />
            <motion.line x1="10" y1={openSideBar ? "10" : "26"} x2="35" y2={openSideBar ? "30" : "26"} strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
          </motion.svg>
        </motion.div>
        {
          openSideBar
            ? <></>
            : <motion.div style={{ width: "40px", height: "100px" }} transition={{ duration: 0.3 }}>
              <motion.svg width="40" height="150" viewBox="0 0 45 165" initial="hidden" animate="visible" stroke={"#FFFFFF"} whileHover={{ stroke: "#006aff" }}>

                <motion.line x1="10" y1="10" x2="35" y2="10" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1} />
                <motion.line x1="22.5" y1="10" x2="10" y2="18" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1.5} />
                <motion.line x1="22.5" y1="10" x2="35" y2="18" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1.5} />

                <motion.line x1="10" y1="26" x2="35" y2="26" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="35" y1="26" x2="35" y2="35" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="22" y1="26" x2="22" y2="35" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="10" y1="26" x2="10" y2="35" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />

                <motion.line x1="35" y1="45" x2="10" y2="50" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="10" y1="50" x2="35" y2="55" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />

                <motion.line x1="10" y1="65" x2="35" y2="65" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />

                <motion.line x1="10" y1="75" x2="35" y2="75" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="35" y1="75" x2="10" y2="85" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
                <motion.line x1="10" y1="85" x2="35" y2="85" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />

              </motion.svg>
            </motion.div>
        }
      </Stack>
    </div>
  );
};

export default SideBar;