import axios from "axios";

const base = axios.create({ baseURL: "http://ws.audioscrobbler.com/2.0" });
const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
const format = "format=json";

const fetchTopArtists = () =>
  base.get(`/?method=chart.gettopartists&api_key=${apiKey}&${format}`);

const fetchTopAlbums = (artistName) =>
  base.get(
    `/?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&${format}`
  );

const fetchTopTracks = (artistName) =>
  base.get(
    `/?method=chart.gettoptracks&artist=${artistName}&api_key=${apiKey}&${format}`
  );

export { fetchTopArtists, fetchTopAlbums, fetchTopTracks };
