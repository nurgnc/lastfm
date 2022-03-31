import { useEffect } from "react";
// fetching
import { useInfiniteQuery } from "react-query";
import { fetchTopAlbums, fetchTopTracks } from "../api";
// redux store
import { useSelector } from "react-redux";
// location
import { useLocation } from "react-router-dom";
// components
import { AlbumsAndTracksCard, ScrollToTop } from "../components";
// css
import { Container, Grid, Margin, Flex } from "../styles/baseStyles";
import { ArtistCardContent } from "../styles/ArtistCard.styled";
// loading gif
import loading from "../assets/loading.svg";

function DetailPage() {
  const { artist } = useSelector((state) => state);
  const location = useLocation();
  const artistName = location.pathname.split("/")[2];

  const {
    data: topAlbums,
    hasNextPage,
    fetchNextPage,
    status,
  } = useInfiniteQuery(
    ["topAlbums", artistName],
    ({ pageParam = 1 }) => fetchTopAlbums(artistName, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.data.topalbums["@attr"].perPage;
        const nextPage = parseInt(lastPage.data.topalbums["@attr"].page) + 2;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  const {
    data: topTracks,
    hasNextPage: hasNextPageTrack,
    fetchNextPage: fetchNextPageTrack,
    status: statusTrack,
  } = useInfiniteQuery(
    ["topTracks", artistName],
    () => fetchTopTracks(artistName),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.data.toptracks["@attr"].perPage;
        const nextPage = parseInt(lastPage.data.toptracks["@attr"].page) + 1;
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
      if (hasNextPage && hasNextPageTrack) {
        await fetchNextPage();
        await fetchNextPageTrack();
      }
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
      <Grid col={2} resCol={2}>
        <div>
          <h2>Top Albums</h2>
          {topAlbums?.pages.map((page) =>
            page.data.topalbums.album.map((item, index) => (
              <AlbumsAndTracksCard
                key={index}
                artist={item.artist}
                name={item.name}
                playcount={item.playcount}
                image={item.image}
              />
            ))
          )}
        </div>
        <div>
          <h2>Top Tracks</h2>
          {topTracks?.pages.map((page) =>
            page.data.toptracks.track.map((item, index) => (
              <AlbumsAndTracksCard
                key={index}
                artist={item.artist}
                name={item.name}
                playcount={item.playcount}
                listeners={item.listeners}
                image={item.image}
              />
            ))
          )}
        </div>
      </Grid>
      {(status !== "loading" || statusTrack !== "loading") && (
        <Flex flexDirection="row" justify="center">
          <img src={loading} alt="loading" />
        </Flex>
      )}
      <ScrollToTop />
    </Container>
  );
}

export default DetailPage;
