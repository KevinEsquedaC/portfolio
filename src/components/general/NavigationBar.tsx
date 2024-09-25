// Importación de SVG
import { motion } from "framer-motion";
import DrawSVG from "../../functions/general/DrawSVG";

/**
 * @constant NavigationBar
 * @description Barra de navegación mostrada en la parte superior de la página.
 * @returns Devuelve la barra de navegación como un JSX.Element.
 */
const NavigationBar = ({ }) => {

  function handleOpenMenu() {
    console.log('Le diste clic al menu');
  };

  return (
    <>
      <motion.div style={{ width: "50px", height: "50px" }} onClick={handleOpenMenu} whileHover={{ scale: [null, 1.2], cursor: 'pointer' }} transition={{ duration: 0.3 }}>
        <motion.svg width="50" height="50" viewBox="0 0 45 35" initial="hidden" animate="visible" stroke={"#FFFFFF"} whileHover={{ stroke: "#1cff64" }}>
          <motion.line x1="10" y1="10" x2="35" y2="10" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1} />
          <motion.line x1="10" y1="18" x2="35" y2="18" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={1.5} />
          <motion.line x1="10" y1="26" x2="35" y2="26" strokeWidth="3.5" strokeLinecap="round" variants={DrawSVG} custom={2} />
        </motion.svg>      </motion.div>
      <motion.div style={{ width: "50px", height: "50px" }} onClick={handleOpenMenu} whileHover={{ scale: [null, 1.3, 1.1], cursor: 'pointer' }} transition={{ duration: 0.3 }}>
        <motion.svg width="50" height="50" viewBox="0 0 45 35" initial="hidden" fill={'none'} animate="visible" stroke={"#FFFFFF"} whileHover={{ stroke: "#1cff64" }}>

        </motion.svg>
      </motion.div>
    </>
  );
};

export default NavigationBar;