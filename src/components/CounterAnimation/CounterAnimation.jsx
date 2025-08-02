import useCounterAnimation from './../../hooks/useCounterAnimation';
import './CounterAnimation.css';

const CounterAnimation = () => {
  const counter = useCounterAnimation({
    count: 356.68,
    speed: 1000,
    isDecimal: true,
    locale: 'es-AR',
    delay: 100
  });

  return (
    <div className="counter-animation">
      <div>Counter Animation</div>
      <hr />
      <p>{ counter }</p>
    </div>
  );
};

export default CounterAnimation;