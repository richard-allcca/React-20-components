import PropTypes from 'prop-types';
import { useRef, useState } from "react";
import './Audio.css';

function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <h2>Audio Player</h2>
      <audio ref={audioRef} src={audioSrc} />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default AudioPlayer;
