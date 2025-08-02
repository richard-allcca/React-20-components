import PropTypes from 'prop-types';

const SongLyrics = ({ title, lyric }) => {
  return (
    <section className="lyrics">
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </section>
  );
};

SongLyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyric: PropTypes.string.isRequired
};

export default SongLyrics;
