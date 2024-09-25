// Importaciones React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importación de componentes
import App from './App.tsx'

// Importación de estilos
import './themes/DarkModeTheme.css'

/**
 * @description Renderiza la aplicación a nivel raíz.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
