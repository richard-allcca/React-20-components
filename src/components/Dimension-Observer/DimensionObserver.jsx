import { useRef } from 'react';
import { useComponentDimensions } from '../../hooks/useComponentDimension';
import './DimensionObserver.css';

const DimensionObserver = () => {
  const ref = useRef();
  const { width, height } = useComponentDimensions(ref);

  return (
    <div className='dimension-observer' ref={ref} >
      <span>width: {width}</span>
      <span>height: {height}</span>
    </div>
  );
};

export default DimensionObserver;