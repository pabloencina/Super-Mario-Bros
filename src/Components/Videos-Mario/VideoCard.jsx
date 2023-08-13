import { Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import luma from "../../Images/Images-Characters-Mario/Luma-character.png";

const VideoCard = ({ video }) => {
  const windowWidth = window.innerWidth;

  // Definir el ancho del video utilizando un condicional ternario
  const videoWidth =
    windowWidth >= 750 && windowWidth <= 1000
      ? "100%"
      : windowWidth >= 350 && windowWidth <= 450
      ? "100%"
      : windowWidth >= 450 && windowWidth <= 750
      ? "100%"
      : windowWidth >= 1000
      ? "100%"
      : "100%";

  return (
    <Card className="videos__container_youTube">
      <Container className="videos__container_reactPLayer">
        <ReactPlayer
          className="videos__youTube"
          url={video.id_video}
          width={videoWidth}
          height="auto"
          key={video.id_video}
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
