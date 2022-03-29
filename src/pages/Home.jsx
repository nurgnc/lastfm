import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTopArtists } from "../api";
// components
import { ArtistCard } from "../components";
// css
import { Container, Grid } from "../styles/baseStyles";

function Home() {
  // const [page, setPage] = useState(1);

  const { data } = useInfiniteQuery(
    ["topArtists"],
    ({ pageParam = 1 }) => fetchTopArtists(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.data.artists["@attr"].perPage;
        console.log("lastPage", allPages);
      },
    },
    {
      // select: (data) => data.data.artists.artist,
    }
  );

  const handleScroll = (e) => {
    let fetching = false;
    const { scrollHeight, scrollTop, clientHeight } =
      e?.target.scrollingElement;
    if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
      fetching = true;
      // console.log("hi");
      // setPage(page + 1);
      fetching = false;
    }
  };

  console.log(data);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <h1>Top Artist List</h1>
      <Grid col={2}>
        {/* {data?.data.artists.artist.map((item, index) => (
          <ArtistCard
            key={index}
            name={item.name}
            playcount={item.playcount}
            listeners={item.listeners}
            image={item.image}
          />
        ))} */}
      </Grid>
    </Container>
  );
}

export default Home;
