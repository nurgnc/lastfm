import { useQuery } from "react-query";
import { fetchTopArtists } from "../api";

function Home() {
  const { data } = useQuery("topArtists", fetchTopArtists);

  console.log(data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
