import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that observes multiple elements and updates their visibility status in a Map.
 * @param {IntersectionObserverInit} options - Configuration options for the IntersectionObserver.
 * @returns {[function, Map]} - A function to register element refs and a Map indicating visibility status.
 */
const useIntersectionElements = (options) => {
  const elementRefs = useRef([]);
  const [isVisibleMap, setIsVisibleMap] = useState(new Map());

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      setIsVisibleMap(prevMap => new Map(prevMap).set(entry.target, entry.isIntersecting));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentElementRefs = elementRefs.current;

    currentElementRefs.forEach((element) => {
      if (element && element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      currentElementRefs.forEach((element) => {
        if (element && element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elementRefs, options]);

  const registerElementRef = (ref) => {
    elementRefs.current.push(ref);
  };

  return [registerElementRef, isVisibleMap];
};

export default useIntersectionElements;