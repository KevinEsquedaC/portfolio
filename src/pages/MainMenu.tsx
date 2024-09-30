// Importación de componentes
import Body from "../components/views/mainMenu/Body";
import Title from "../components/views/mainMenu/Title";

/**
 * @constant MainMenu
 * @description Menu principal motrado al iniciar la aplicación.
 * @returns El menú principal como un JSX.Element.
 */
const MainMenu = () => {

  return (
    <div style={{ paddingInline: 50 }}>
      <Title />
      <br />
      <Body />
    </div>
  );
};

export default MainMenu;