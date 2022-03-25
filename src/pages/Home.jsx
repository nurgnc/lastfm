import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchTopArtists } from "../api";
// components
import { ArtistCard } from "../components";
// css
import { Container, Grid } from "../styles/baseStyles";

function Home() {
  const [page, setPage] = useState(1);

  const { data } = useQuery("topArtists", fetchTopArtists, {
    select: (data) => data.data.artists,
  });

  useEffect(() => {}, [page]);
  return (
    <Container>
      <h1>Top Artist List</h1>
      <Grid col={2}>
        {data?.artist.map((item, index) => (
          <ArtistCard
            key={index}
            name={item.name}
            playcount={item.playcount}
            listeners={item.listeners}
            image={item.image}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
