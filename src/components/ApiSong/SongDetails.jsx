import PropTypes from "prop-types";
import Message from './../../shared/Message';
import SongArtist from "./children/SongArtist";
import SongLyrics from "./children/SongLyrics";

const SongDetails = ({ search = {}, lyric = {}, bio = {} }) => {
	if (!lyric || !bio) return null;

	const renderLyric = () => {
		if (lyric.error || lyric.err || lyric.name === "AbortError") {
			return (
				<Message
					msg={ `Error: no existe la canción "${search.song}"` }
					bgColor="#dc3545"
				/>
			);
		}

		return <SongLyrics lyric={ search.song } title={ search.artist } />;
	};

	const renderArtist = () => {
		if (!bio.artists) {
			return (
				<Message
						msg={ `Error: no existe el Interprete "${search.artist}"` }
						bgColor="#dc3545"
					/>
			);
		}

		return <SongArtist artist={ bio.artists[ 0 ] } />;
	};

	return (
		<div className="details">
			{ renderLyric() }
			{ renderArtist() }
		</div>
	);
};

SongDetails.propTypes = {
	search: PropTypes.object,
	lyric: PropTypes.object,
	bio: PropTypes.object,
};

export default SongDetails;
