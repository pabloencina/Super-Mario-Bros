import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const AlphabetGameCard = ({ video }) => {
  const [showLetter, setShowLetter] = useState(false);

  const handleCardClick = () => {
    setShowLetter(!showLetter);
  };
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
            {/* <p className="videos__text_mario">
              AMIGUITO!!! HAZ CLIC EN LA LETRA PARA AYUDARME A DESCUBRIR QUE HAY
              DETRÁS.
            </p> */}
            {/* <div className="videos__container_image_mario">
              <img className="videos__image_mario" src={Mario} alt="Mario" />
            </div> */}
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
    </Card>
  );
};

export default AlphabetGameCard;
