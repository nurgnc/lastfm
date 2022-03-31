import axios from "axios";

const base = axios.create({ baseURL: "http://ws.audioscrobbler.com/2.0" });
const apiKey = "1d5ee50329838f11f7bb0a07908121fb";
const format = "format=json";

const fetchTopArtists = (pageNum) =>
  base.get(
    `/?method=chart.gettopartists&page=${pageNum}&api_key=${apiKey}&${format}`
  );

const fetchTopAlbums = (artistName) =>
  base.get(
    `/?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&${format}`
  );

const fetchTopTracks = (artistName) =>
  base.get(
    `/?method=artist.gettoptracks&artist=${artistName}&api_key=${apiKey}&${format}`
  );

export { fetchTopArtists, fetchTopAlbums, fetchTopTracks };
