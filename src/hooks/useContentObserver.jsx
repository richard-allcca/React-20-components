import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook that observes elements and provides their intersection entries for further processing.
 * @param {IntersectionObserverInit} options - Configuration options for the IntersectionObserver.
 * @returns {[IntersectionObserver, function, Array]} - The observer instance,
 * a function to set elements, and the intersection entries.
 */
export function useContentObserver(options) {
  const [ elements, setElements ] = useState([]);
  const [ entries, setEntries ] = useState([]);

  const observerRef = useRef(new IntersectionObserver((observerEntries) => {
    // console.log(observerEntries[0].boundingClientRect.y);
    setEntries(observerEntries);
  }, options));

  useEffect(() => {
    const currentObserver = observerRef.current;
    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element));
    }

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [ elements ]);


  return [ observerRef.current, setElements, entries ];
}

