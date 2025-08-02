/**
 * ProgressBar Component
 *
 * A React component that renders a progress bar which updates its value based on user interaction.
 * Users can click and drag on the progress bar to set the progress percentage.
 */
import { useRef, useState } from 'react';
import './ProgressBar.css';

/**
 * ProgressBar Component
 *
 * @returns {JSX.Element} The rendered progress bar component.
 */
const ProgressBar = () => {
  // State to store the current progress percentage.
  const [progress, setProgress] = useState(0);

  // Ref to access the progress bar DOM element.
  const progressBarRef = useRef(null);

  /**
   * Updates the progress percentage based on the X position of the mouse.
   *
   * @param {number} xPos - The X position of the mouse.
   */
  const updateProgress = (xPos) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();

    if (xPos <= rect.right) {
      const x = xPos - rect.left; // X position within the element.
      const width = rect.width;
      const newProgress = (x / width) * 100;
      setProgress(newProgress);
    }
  };

  /**
   * Handles mouse movement to update progress.
   *
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseMove = (e) => {
    updateProgress(e.pageX);
  };

  /**
   * Handles mouse up event to stop tracking mouse movement.
   */
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  /**
   * Handles mouse down event to start tracking mouse movement.
   *
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseDown = (e) => {
    updateProgress(e.pageX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className='ctn'
      ref={progressBarRef}
      onMouseDown={handleMouseDown}
    >
      {/* Input element to display and control the progress percentage */}
      <input
        type="range"
        min={1}
        max="100"
        step={1}
        value={progress}
        className="progressInput"
        onChange={(e) => setProgress(e.target.value)}
      />
    </div>
  );
};

export default ProgressBar;
