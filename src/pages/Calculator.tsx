// Importación de componentes
import Body from "../components/views/calculator/Body";

/**
 * @constant Calculator
 * @description Vista donde se muestra el mini-proyecto de una calculadora.
 * @returns Mini-Proyecto Calculadora como un JSX.Element.
 */
const Calculator = () => {
  return (
    <div style={{ paddingInline: 50 }}>
      <Body />
    </div>
  );
};

export default Calculator;