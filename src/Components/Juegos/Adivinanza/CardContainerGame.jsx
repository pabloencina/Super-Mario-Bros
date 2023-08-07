import { Col, Container, Row } from "react-bootstrap";
import CardGameById from "./CardGameById";
import { useState } from "react";

const CardContainerGame = ({ character, randomCharacter }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClickName = (characterName) => {
    setSelectedCharacter(characterName);
  };

  return (
    <Container>
      <Container className="game__btn_toast_rules"></Container>

      <Row>
        <Col>
          <CardGameById
            key={character.id}
            character={character}
            handleCardClickName={handleCardClickName}
            randomCharacter={randomCharacter}
            selectedCharacter={selectedCharacter}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardContainerGame;
