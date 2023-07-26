import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CardGameInWhite from "./CardGameInWhite";
import CardGameImage from "./CardGameImage";
//import { useParams } from "react-router-dom";

const CardContainer = ({ charactersData }) => {
  const [showNewCard, setShowNewCard] = useState(false);

  const handleCardClick = () => {
    setShowNewCard(!showNewCard);
  };
  // const { id } = useParams();

  // const cardImage = charactersData.find((char) => char.id === parseInt(id));

  // if (!cardImage) {
  //   return <div>No se encontró la tarjeta</div>;
  // }

  return (
    <Container className="game__container">
      <Button className="game__button_card">
        <Card className="game__card_container">
          {!showNewCard ? (
            <CardGameInWhite handleCardClick={handleCardClick} />
          ) : (
            <CardGameImage
              handleCardClick={handleCardClick}
              charactersData={charactersData}
            />
          )}
        </Card>
      </Button>
    </Container>
  );
};

export default CardContainer;
