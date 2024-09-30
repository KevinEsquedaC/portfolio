// Importación de componentes
import Title from "../components/views/mainMenu/Title";

/**
 * @constant MainMenu
 * @description Menu principal motrado al iniciar la aplicación.
 * @returns El menú principal como un JSX.Element.
 */
const MainMenu = () => {

  return (
    <div style={{ paddingInlineStart: 50 }}>
      <Title />
    </div>
  );
};

export default MainMenu;