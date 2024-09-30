// Importaciones React y Framer Motion
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Props
interface Props {
  children: JSX.Element
};

/**
 * @description Animación de revelación de elementos.
 * @param {JSX.Element} children Elemento al cual se le aplicará la animación.
 * @returns Animación aplicada en el elemento dado.
 */
const Reveal = ({ children }: Props) => {

  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  /**
   * @description Este useEffect se utiliza para que cuando el elemento children se encuentre a la vista, se ejecute la animación.
   */
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width: "fit-content" }}>
      <motion.div variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
      }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          top: 4,
          left: 0,
          right: 0,
          bottom: 4,
          zIndex: 20,
          position: "absolute",
          background: "#0059ff",
        }}
      />
    </div>
  );
};

export default Reveal;