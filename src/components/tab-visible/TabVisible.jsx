import { useEffect } from 'react';
import { usePageVisibility } from '../../hooks/usePageVisibility';

const TabVisible = () => {
  const isVisible = usePageVisibility();

  useEffect(() => {
    if (isVisible) {
      // El usuario está en la pestaña activa
      document.title = 'Estas aquí';
      // Realiza las acciones necesarias
    } else {
      // El usuario no está en la pestaña activa
      document.title = 'Te fuiste';
      // Realiza las acciones necesarias (por ejemplo, pausar animaciones o actualizaciones)
    }
  }, [ isVisible ]);

  return <div>{ isVisible ? "Visible" : "No visible" }</div>;
};

export default TabVisible;