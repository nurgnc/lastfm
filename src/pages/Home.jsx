import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTopArtists } from "../api";
// components
import { ArtistCard } from "../components";
// css
import { Container, Grid } from "../styles/baseStyles";

function Home() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["topArtists"],
    ({ pageParam = 1 }) => fetchTopArtists(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.data.artists["@attr"].perPage;
        const nextPage = parseInt(lastPage.data.artists["@attr"].page) + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  const handleScroll = async (e) => {
    let fetching = false;
    const { scrollHeight, scrollTop, clientHeight } =
      e?.target.scrollingElement;
    if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
      fetching = true;
      if (hasNextPage) await fetchNextPage();
      fetching = false;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage]);

  return (
    <Container>
      <h1>Top Artist List</h1>
      <Grid col={2}>
        {data?.pages.map((page) =>
          page.data.artists.artist.map((item, index) => (
            <ArtistCard
              key={index}
              name={item.name}
              playcount={item.playcount}
              listeners={item.listeners}
              image={item.image}
            />
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Home;
