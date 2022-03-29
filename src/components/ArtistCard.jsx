// redux
import { useDispatch } from "react-redux";
import { keepArtistInfo } from "../store/artists";
// route link
import { Link } from "react-router-dom";
// css
import { ArtistCardContent, ArtistTitle } from "../styles/ArtistCard.styled";

function ArtistCard({ name, playcount, listeners, image }) {
  const dispatch = useDispatch();
  const img = image[2]["#text"];
  let artistName = name;
  return (
    <ArtistCardContent justify="space-around">
      <div>
        <Link
          to={`/detail/${name}`}
          onClick={() => dispatch(keepArtistInfo(artistName, image[2]))}
        >
          <img src={img} alt={name} />
        </Link>
      </div>
      <div>
        <ArtistTitle>Artist</ArtistTitle>
        <Link
          to={`/detail/${name}`}
          onClick={() => dispatch(keepArtistInfo(artistName, image[2]))}
        >
          <h3>{name}</h3>
        </Link>
      </div>
      <div>
        {listeners && <p>listeners : {listeners}</p>}
        {playcount && <p>playcount : {playcount}</p>}
      </div>
    </ArtistCardContent>
  );
}

export default ArtistCard;
