// Importaciones MUI
import Box from "@mui/material/Box";

// Importación de componentes
import Body from "../components/views/calculator/Body";

/**
 * @constant Calculator
 * @description Vista donde se muestra el mini-proyecto de una calculadora.
 * @returns Mini-Proyecto Calculadora como un JSX.Element.
 */
const Calculator = () => {
  return (
    <Box sx={{ pr: { md: '50px' }, pl: { xs: '50px' }, m: 0 }} >
      <Body />
    </Box >
  );
};

export default Calculator;