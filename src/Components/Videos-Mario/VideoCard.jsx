import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import Mario from "../../Images/mario-logo.png";
import luma from "../../Images/Images-Characters-Mario/Luma-character.png";

const VideoCard = ({ video }) => {
  const [showLetter, setShowLetter] = useState(false);

  const handleCardClick = () => {
    setShowLetter(!showLetter);
  };

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
      {!showLetter ? (
        <Button
          className="videos__container_btn"
          onClick={handleCardClick}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className="videos__container_letters">
            <p className="videos__letters">{video.letter}</p>
            <p className="videos__text_mario">
              AMIGUITO!!! HAZ CLIC EN LA LETRA PARA AYUDARME A DESCUBRIR QUE HAY
              DETRÁS.
            </p>
            <div className="videos__container_image_mario">
              <img className="videos__image_mario" src={Mario} alt="Mario" />
            </div>
          </div>
        </Button>
      ) : (
        <Button
          onClick={handleCardClick}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className="videos__container_word_image">
            <div className="videos__container_letters">
              <p className="videos__text">{video.word}</p>
              <div className="videos__container_image">
                <img className="videos__image" src={video.image} alt="" />
              </div>
            </div>
            <p className="videos__text">{video.wordEnglish}</p>
          </div>
        </Button>
      )}
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
