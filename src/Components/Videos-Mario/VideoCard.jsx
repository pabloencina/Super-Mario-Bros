import { Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import luma from "../../Images/Images-Characters-Mario/Luma-character.png";

const VideoCard = ({ video }) => {
  const windowWidth = window.innerWidth;

  // Definir el ancho del video utilizando un condicional ternario
  const videoWidth =
    windowWidth >= 700 && windowWidth <= 1000
      ? "320px"
      : windowWidth >= 350 && windowWidth <= 700
      ? "360px"
      : windowWidth >= 1000
      ? "520px"
      : "100%";

  return (
    <Card className="videos__container_youTube">
      <Container className="videos__container_reactPLayer">
        <ReactPlayer
          className="videos__youTube"
          url={video.id_video}
          width={videoWidth}
          height="auto"
        >
          {video.id_video}
        </ReactPlayer>
      </Container>

      <Container className="videoName__container">
        <p className="videoName__name">
          {video.name}

          <span>
            {""}
            <img className="videoName__image_luma" src={luma} alt="Luma" />
          </span>
        </p>
      </Container>
    </Card>
  );
};

export default VideoCard;
