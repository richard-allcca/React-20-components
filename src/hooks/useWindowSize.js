import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Función para obtener el tamaño inicial de la ventana
    const handleInitialResize = () => {
      handleResize();
      window.removeEventListener('resize', handleInitialResize);
    };

    // Verificar el tamaño inicial de la ventana en la carga de la página
    handleInitialResize();
    window.addEventListener('resize', handleResize);

    // Verificar el tamaño inicial de la ventana solo en resize de la página
    // window.addEventListener('resize', handleInitialResize);
    // window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isWindowWidthDefined = windowSize.width !== undefined;

  const isMobile = isWindowWidthDefined && windowSize.width < 578;
  const isTablet = isWindowWidthDefined && windowSize.width >= 578 && windowSize.width < 992;
  const isDesktop = isWindowWidthDefined && windowSize.width >= 992;

  return { isMobile, isTablet, isDesktop };
};

export default useWindowSize;
