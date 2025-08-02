import { useRef } from 'react';
import useIntersectionElements from '../../hooks/useIntersectionElement';
import './intersectionElements.css';

/**
 * IntersectionElement Component
 * Utilizes the useIntersectionElements hook to observe two elements and display their visibility status.
 * @returns {JSX.Element} - A React component displaying visibility status of elements.
 */
const IntersectionElements = () => {
  const [ registerElementRef, isVisibleMap ] = useIntersectionElements();

  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);

  registerElementRef(elementRef1);
  registerElementRef(elementRef2);

  const isVisible1 = isVisibleMap.get(elementRef1.current);
  const isVisible2 = isVisibleMap.get(elementRef2.current);

  return (
    <div className="container">
      <div className="isVisible">
        <span>
          {
            isVisible1
              ? "Intersection Element 1 IN VIEWPORT"
              : " Intersection Element 1 NOT IN VIEWPORT"
          }
        </span>
        <span>-</span>
        <span>
          {
            isVisible2
              ? "Intersection Element 2 IN VIEWPORT"
              : " Intersection Element 2 NOT IN VIEWPORT"
          }
        </span>
      </div>

      <div className="space"></div>
      {/* <div className="section"></div> */ }

      <div className="box" ref={ elementRef1 }>
        <img src="https://placeimg.com/200/200/animals" alt="animals" />
      </div>
      <div className="box" ref={ elementRef2 }>
        <img src="https://placeimg.com/200/200/nature" alt="nature" />
      </div>
    </div>
  );
};

export default IntersectionElements;

// https://dev.to/producthackers/intersection-observer-using-react-49ko