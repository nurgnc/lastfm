// action type
const KEEP_ARTIST_INFO = "KEEP_ARTIST_INFO";

// action creator
const keepArtistInfo = (artistName, image) => ({
  type: KEEP_ARTIST_INFO,
  payload: { artistName, image },
});

// reducer
const artistReducer = (artist = [], action) => {
  switch (action.type) {
    case KEEP_ARTIST_INFO:
      return [action.payload, ...artist];
    default:
      return artist;
  }
};

export { keepArtistInfo };
export default artistReducer;
