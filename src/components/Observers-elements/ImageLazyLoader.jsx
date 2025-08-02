import { useEffect, useRef } from 'react';
import { useContentObserver } from '../../hooks/useContentObserver';
import './ImageLazyLoader.css';
/**
 * ImageLazyLoader Component
 * Utilizes the useContentObserver hook to lazy load images when they are fully visible in the viewport.
 * @returns {JSX.Element} - A React component for lazy loading images.
 */
const ImageLazyLoader = () => {
  const containerRef = useRef(null);
  const [observer, setElements, entries] = useContentObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll('.img');
      setElements(images);
    }
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        // Cambia el src del lazyImage al data-src
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy');
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  return (
    <>
      <h1>UserObserver hook example ⬇️</h1>
      <div className="content-observer" ref={containerRef}>
        <img
          className="img lazy"
          src="https://placeimg.com/500/500/animals"
          data-src="https://res.cloudinary.com/thouma/image/upload/v1632788548/dev-master_xqpsns.jpg"
          alt="Dev"
        />
        <img
          className="img lazy"
          src="https://placeimg.com/500/500/animals"
          data-src="https://res.cloudinary.com/thouma/image/upload/v1632788548/dev-master_xqpsns.jpg"
          alt="Dev"
        />
      </div>
    </>
  );
};

export default ImageLazyLoader;


// Para un solo elemento
// https://dev.to/producthackers/intersection-observer-using-react-49ko