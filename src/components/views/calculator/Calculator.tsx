// Importaciones MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

/**
 * @constant Calculator
 * @description Calculadora funcional.
 * @returns Calculadora como un JSX.Element.
 */
const Calculator = () => {

  const calculatorButtonsArray = [
    { id: 1, name: 'AC', label: 'AC' },
    { id: 2, name: 'Delete', label: 'DEL' },
    { id: 3, name: 'Percent', label: '%' },
    { id: 4, name: 'Divider', label: '/' },
    { id: 5, name: '7', label: '7' },
    { id: 6, name: '8', label: '8' },
    { id: 7, name: '9', label: '9' },
    { id: 8, name: 'Multi', label: 'x' },
    { id: 9, name: '4', label: '4' },
    { id: 10, name: '5', label: '5' },
    { id: 11, name: '6', label: '6' },
    { id: 12, name: 'Minus', label: '-' },
    { id: 13, name: '1', label: '1' },
    { id: 14, name: '2', label: '2' },
    { id: 15, name: '3', label: '3' },
    { id: 16, name: 'Plus', label: '+' },
    { id: 17, name: '0', label: '0' },
    { id: 18, name: '00', label: '00' },
    { id: 19, name: 'Dot', label: '.' },
    { id: 20, name: 'Equal', label: '=' }
  ];

  return (
    <Paper sx={{ height: { xs: '100%', md: '80%' }, width: { xs: '80%', lg: '60%' }, display: 'flex', position: 'relative', maxHeight: '500px' }} elevation={0}>
      <Grid container sx={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sx={{ p: 2, maxHeight: '132px' }}>
          <Paper sx={{ height: '100px', backgroundColor: 'var(--Dark)' }} elevation={0}>

          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Grid container sx={{ height: '100%' }}>
            {
              calculatorButtonsArray.map((calculatorButton) => (
                <Grid key={calculatorButton.id} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button variant="contained">{calculatorButton.label}</Button>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Calculator;