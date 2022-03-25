// css
import { CardContent } from "../styles/AlbumsAndTracks.styled";

function AlbumsAndTracksCard({ name, playcount, listeners, image }) {
  const img = image[2]["#text"];

  return (
    <CardContent>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        {listeners && <p>{listeners} listeners</p>}
        <p>{playcount} play</p>
      </div>
    </CardContent>
  );
}

export default AlbumsAndTracksCard;
