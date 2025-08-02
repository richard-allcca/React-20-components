// import React from "react";
import PropTypes from 'prop-types';

const SongArtist = ({ artist }) => {
  return (
    <section className="artist">
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear}-{artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre}-{artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web Oficial
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

SongArtist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default SongArtist;
