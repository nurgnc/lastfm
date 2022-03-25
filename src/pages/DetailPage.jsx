// fetching
import { useQuery } from "react-query";
import { fetchTopAlbums, fetchTopTracks } from "../api";
// redux store
import { useSelector } from "react-redux";
// location
import { useLocation } from "react-router-dom";
// components
import { AlbumsAndTracksCard } from "../components";
// css
import { Container, Grid, Margin } from "../styles/baseStyles";
import { ArtistCardContent } from "../styles/ArtistCard.styled";

function DetailPage() {
  const { artist } = useSelector((state) => state);
  const location = useLocation();
  const artistName = location.pathname.split("/")[2];

  const { data: topAlbums } = useQuery(
    ["topAlbums", artistName],
    () => fetchTopAlbums(artistName),
    {
      select: (data) => data.data.topalbums.album,
    }
  );

  const { data: topTracks } = useQuery(
    ["topTracks", artistName],
    () => fetchTopTracks(artistName),
    {
      select: (data) => data.data.toptracks.track,
    }
  );

  console.log(artist);
  return (
    <Container>
      {artist?.map((item, index) => (
        <ArtistCardContent justify="flex-start" key={index}>
          <Margin mr="15px">
            <img src={item.image["#text"]} alt={item.artistName} />
          </Margin>
          <div>
            <h2>{item.artistName}</h2>
          </div>
        </ArtistCardContent>
      ))}
      <Grid col={2}>
        <div>
          <h2>Top Albums</h2>
          {topAlbums?.map((item, index) => (
            <AlbumsAndTracksCard
              key={index}
              artist={item.artist}
              name={item.name}
              playcount={item.playcount}
              image={item.image}
            />
          ))}
        </div>
        <div>
          <h2>Top Tracks</h2>
          {topTracks?.map((item, index) => (
            <AlbumsAndTracksCard
              key={index}
              artist={item.artist}
              name={item.name}
              playcount={item.playcount}
              listeners={item.listeners}
              image={item.image}
            />
          ))}
        </div>
      </Grid>
    </Container>
  );
}

export default DetailPage;
