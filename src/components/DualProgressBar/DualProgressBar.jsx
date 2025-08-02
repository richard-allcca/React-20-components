import React, { useState } from 'react';
import './DualProgressBar.css';

/**
 * Componente de barra de progreso dual que permite seleccionar un rango entre dos valores
 * @param {number} min - Valor mínimo del rango
 * @param {number} max - Valor máximo del rango
 */
const DualProgressBar = ({ min, max }) => {
  // Estado para almacenar los valores mínimo y máximo seleccionados
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  /**
   * Maneja el arrastre de los controles deslizantes
   * @param {Event} event - Evento del mouse
   * @param {string} type - Tipo de control (min o max)
   */
  const handleDrag = (event, type) => {
    // Obtiene las dimensiones y posición del elemento padre
    const rect = event.target.parentElement.getBoundingClientRect();
    // Calcula la nueva posición dentro de los límites de la barra
    const newPosition = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    // Convierte la posición en píxeles a un valor dentro del rango min-max
    const newValue = Math.round((newPosition / rect.width) * (max - min) + min);

    // Actualiza el valor correspondiente según el tipo de control, respetando las restricciones
    if (type === 'min' && newValue < maxValue) {
      setMinValue(newValue);
    } else if (type === 'max' && newValue > minValue) {
      setMaxValue(newValue);
    }
  };

  /**
   * Inicia el proceso de arrastre para un control
   * @param {Event} event - Evento del mouse
   * @param {string} type - Tipo de control (min o max)
   */
  const startDrag = (event, type) => {
    event.preventDefault();

    // Define manejadores para los eventos de movimiento y liberación del mouse
    const moveHandler = (e) => handleDrag(e, type);
    const upHandler = () => {
      // Limpia los event listeners cuando se suelta el botón del mouse
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    };

    // Agrega event listeners para seguir el movimiento del mouse
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
  };

  // Calcula porcentajes para posicionar los elementos visuales
  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="dual-progress-bar">
      {/* Contenedor principal de la barra de progreso */}
      <div className="progress-track">
        {/* Sección coloreada que representa el rango seleccionado */}
        <div
          className="progress-range"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        ></div>
      </div>
      {/* Control deslizante para el valor mínimo */}
      <div
        className="thumb min"
        style={{ left: `${minPercent}%` }}
        onMouseDown={(event) => startDrag(event, 'min')}
      ></div>
      {/* Control deslizante para el valor máximo */}
      <div
        className="thumb max"
        style={{ left: `${maxPercent}%` }}
        onMouseDown={(event) => startDrag(event, 'max')}
      ></div>
    </div>
  );
};

export default DualProgressBar;