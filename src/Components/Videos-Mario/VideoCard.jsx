import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import Mario from "../../Images/mario-logo.png";

const VideoCard = ({ video }) => {
  const [showLetter, setShowLetter] = useState(false);
  //const [randomWordIndex, setRandomWordIndex] = useState(0);

  const handleCardClick = () => {
    setShowLetter(!showLetter);
    // if (!showLetter) {
    //   const randomText = Math.floor(Math.random() * videosData.length);
    //   setRandomWordIndex(randomText);
    // }
  };
  //console.log(videosData[randomWordIndex].text);
  //const randomText = Math.floor(Math.random() * videosData.length);
  //console.log(randomText);
  //const randomWord = videosData[randomText];
  //console.log(randomWord.text);

  return (
    <Card className="videos__container_youtube">
      {!showLetter ? (
        <Button
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
      <ReactPlayer
        className="videos__youtube"
        url={video.id_video}
        width="500px"
        height="auto"
      >
        {video.id_video}
      </ReactPlayer>
      <Container className="videoName__container">
        <p className="videoName__name">{video.name}</p>
      </Container>
    </Card>
  );
};

export default VideoCard;
