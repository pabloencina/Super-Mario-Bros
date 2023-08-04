import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CardGameInWhite from "./CardGameInWhite";
import CardGameImage from "./CardGameImage";

const CardGameById = ({
  handleCardClickName,
  character,
  randomCharacter,
  selectedCharacter,
}) => {
  const [showNewCard, setShowNewCard] = useState(false);

  const handleCardClick = () => {
    setShowNewCard(!showNewCard);
  };

  return (
    <Container className="game__container">
      <Button className="game__button_card">
        <Card className="game__card_container">
          {!showNewCard ? (
            <CardGameInWhite
              handleCardClick={handleCardClick}
              randomCharacter={randomCharacter}
              selectedCharacter={selectedCharacter}
            />
          ) : (
            <CardGameImage
              handleCardClick={handleCardClick}
              handleCardClickName={handleCardClickName}
              character={character}
            />
          )}
        </Card>
      </Button>
    </Container>
  );
};

export default CardGameById;
