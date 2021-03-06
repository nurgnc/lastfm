import axios from "axios";

const base = axios.create({ baseURL: "https://ws.audioscrobbler.com/2.0" });
const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
const format = "format=json";

const fetchTopArtists = (pageNum) =>
  base.get(
    `/?method=chart.gettopartists&page=${pageNum}&api_key=${apiKey}&${format}`
  );

const fetchTopAlbums = (artistName, pageNum) =>
  base.get(
    `/?method=artist.gettopalbums&artist=${artistName}&page=${pageNum}&api_key=${apiKey}&${format}`
  );

const fetchTopTracks = (artistName, pageNum) =>
  base.get(
    `/?method=artist.gettoptracks&artist=${artistName}&page=${pageNum}&api_key=${apiKey}&${format}`
  );

export { fetchTopArtists, fetchTopAlbums, fetchTopTracks };
