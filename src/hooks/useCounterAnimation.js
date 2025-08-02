import { useEffect, useState, useRef } from 'react';

const useCounterAnimation = ({ count, speed, isDecimal = false, locale = 'es-AR', delay = 50 }) => {
  const timer = useRef({ start: Date.now() });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    timer.current.start = Date.now();
    setCounter(0);
  }, [count]);

  useEffect(() => {
    // console.log({counter});
    if (counter < count) {
      // milisegundos actual - inicio de animación
      const timeElapsed = Date.now() - timer.current.start;
      // tiempo esperado para cada numero de count
      const timePerNum = speed / count;
      // número decimal o redondeado entero
      const newCount = isDecimal ? timeElapsed / timePerNum : Math.round(timeElapsed / timePerNum);
      // console.log(count,newCount, counter);
      setTimeout(() => {// tiempo de retraso para animación
        // si newCount es mayor se asigna count y no entra en la condición
        setCounter(Math.min(newCount + 1, count));
      }, delay);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, count, isDecimal, speed]);

  const options = isDecimal ? { minimumFractionDigits: 2, maximumFractionDigits: 2 } : {};

  return Intl.NumberFormat(locale, options).format(counter);
};

export default useCounterAnimation;
