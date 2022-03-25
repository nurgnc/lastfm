// redux
import { useDispatch } from "react-redux";
import { keepArtistInfo } from "../store/artists";
// route link
import { Link } from "react-router-dom";
// css
import { ArtistCardContent } from "../styles/ArtistCard.styled";

function ArtistCard({ name, playcount, listeners, image }) {
  const dispatch = useDispatch();
  const img = image[2]["#text"];
  let artistName = name;
  return (
    <ArtistCardContent>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <span>Artist</span>
        <Link
          to={`/detail/${name}`}
          onClick={() => dispatch(keepArtistInfo(artistName, image))}
        >
          <h3>{name}</h3>
        </Link>
      </div>
      <div>
        <p>listeners : {listeners}</p>
        <p>playcount : {playcount}</p>
      </div>
    </ArtistCardContent>
  );
}

export default ArtistCard;
