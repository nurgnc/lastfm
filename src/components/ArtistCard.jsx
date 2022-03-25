import { ArtistCardContent } from "../styles/ArtistCard.styled";

function ArtistCard({ name, playcount, listeners, image }) {
  const img = image[2]["#text"];
  return (
    <ArtistCardContent>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <span>Artist</span>
        <h3>{name}</h3>
      </div>
      <div>
        <p>listeners : {listeners}</p>
        <p>playcount : {playcount}</p>
      </div>
    </ArtistCardContent>
  );
}

export default ArtistCard;
