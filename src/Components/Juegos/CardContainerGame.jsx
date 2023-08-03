import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardGameById from "./CardGameById";
import ToastRulesOfTheGame from "./ToastRulesOfTheGame";

const CardContainerGame = ({ charactersData }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClickName = (characterName) => {
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
          HOLA AMIGUITO!!! ¿QUIERES JUGAR CONMIGO A UN JUEGO MUY DIVERTIDO?
        </p>
      </div>
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
          </span>
        ) : null}
      </Container>
      <Container className="game__btn_toast_rules">
        <ToastRulesOfTheGame />
      </Container>
      <Row>
        {charactersData.map((character) => {
          return (
            <Col key={character.id} md={4} className="">
              <CardGameById
                key={character.id}
                charactersData={charactersData}
                character={character}
                handleCardClickName={handleCardClickName}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainerGame;
