import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardGameById from "./CardGameById";
import ToastRulesOfTheGame from "./ToastRulesOfTheGame";

const CardContainerGame = ({ charactersData }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClick = (characterName) => {
    console.log("Personaje clickeado:", characterName);
    setSelectedCharacter(characterName);
  };

  const randomIndex = Math.floor(Math.random() * charactersData.length);
  const randomCharacter = charactersData[randomIndex];
  console.log(randomCharacter.name, selectedCharacter);
  return (
    <Container>
      <div className="game__container_title">
        <p className="game__title">
          {`¿DÓNDE SE ENCUENTRA `}
          <span className="game__span_name">
            {randomCharacter.name.toLocaleUpperCase()}
          </span>
          ?
        </p>
      </div>
      <Container>
        {selectedCharacter === randomCharacter.name ? (
          <span className="game__message_win">
            <p>FELICITACIONES !!! TU PUNTUACIÓN ES DE: </p>
            {console.log(232323)}
          </span>
        ) : null}
        <ToastRulesOfTheGame />
      </Container>
      <Row>
        {charactersData.map((card) => {
          return (
            <Col key={card.id} md={4} className="">
              <CardGameById
                key={card.id}
                charactersData={charactersData}
                onClick={() => handleCardClick(card.name)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainerGame;
