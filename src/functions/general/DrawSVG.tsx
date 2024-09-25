/**
 * @constant DrawSVG
 * @description Constante que realiza el dibujado de los SVG.
 * @returns El estilo de dibujo para los componentes SVG.
 */
const DrawSVG = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 1.5,
          bounce: 0
        },
        opacity: {
          delay,
          duration: 0.01
        }
      }
    };
  }
};

export default DrawSVG;