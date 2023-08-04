import { Col, Container, Row } from "react-bootstrap";
import CardGameById from "./CardGameById";
import { useState } from "react";

const CardContainerGame = ({ character, randomCharacter }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClickName = (characterName) => {
    console.log("Personaje clicked:", characterName);
    setSelectedCharacter(characterName);
  };
  return (
    <Container>
      {selectedCharacter === randomCharacter.name ? (
        <span className="game__container_message_win">
          <p className="game__message_win">
            FELICITACIONES !!! TU PUNTUACIÓN ES DE:{" "}
          </p>
        </span>
      ) : null}
      <Container className="game__btn_toast_rules"></Container>

      <Row>
        <Col>
          <CardGameById
            key={character.id}
            character={character}
            handleCardClickName={handleCardClickName}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardContainerGame;
