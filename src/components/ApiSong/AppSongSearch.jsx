import { useEffect, useState } from "react";
import { helperHttp } from './../../helpers/helperHttp';
import Loader from '../../shared/Loader';
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Message from "../../shared/Message";
import './AppSongSearch.css';

// NOTE - Flujo
// SongSearch => SongForm - SonDetails
// SongDetails => SongLyrics - SonArtists

const AppSongSearch = () => {
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (search === null) return;

		const fetchData = async () => {
			const { artist, song } = search;

			const urlArtists = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
			const urlSongs = `https://api.lyrics.ovh/v1/${artist}/${song}`;
			// console.log(urlSongs);

			setLoading(true);

			const [artistRes, songRes] = await Promise.all([
				helperHttp().get(urlArtists),
				helperHttp().get(urlSongs),
			]);
			// console.log(artistRes, songRes);

			setBio(artistRes);
			setLyric(songRes);

			setLoading(false);
		};

		fetchData();
	}, [search]);

	const handleSearch = (data) => {
		// maneja el envío de formulario
		setSearch(data);
	};

	if (loading) return <Loader />;

	const renderSongDetails = () => {
		if (!lyric || !bio) {
			return <Message msg="No hay resultados" bgColor="#dc3545" />;
		}

		return <SongDetails search={search} lyric={lyric} bio={bio} />;
	};

	return (
		<div className="app-song-search">
			<h2>SEARCH SONG</h2>
			<article className="song-search-body">
				<SongForm handleSearch={handleSearch} />
				{renderSongDetails()}
			</article>
		</div>
	);
};

export default AppSongSearch;
