import { Col, Container, Row } from "react-bootstrap";
import ToastRulesOfTheGame from "./ToastRulesOfTheGame";
import CardContainerGame from "./CardContainerGame";

const CardContainerRandomName = ({ charactersData }) => {
  const randomIndex = Math.floor(Math.random() * charactersData.length);
  const randomCharacter = charactersData[randomIndex];

  return (
    <Container>
      <Container></Container>
      <div className="game__container_title">
        <p className="game__title">
          HOLA AMIGUITO!!! ¿QUIERES JUGAR CONMIGO A UN JUEGO MUY DIVERTIDO?
        </p>
      </div>
      <Container className="game__btn_toast_rules">
        <ToastRulesOfTheGame />
      </Container>
      <div className="game__container_title">
        <p className="game__title">
          {`¿DÓNDE SE ENCUENTRA `}
          <span className="game__span_name">
            {randomCharacter.name.toLocaleUpperCase()}
          </span>
          ?
        </p>
      </div>

      <Row>
        {charactersData.map((character) => {
          return (
            <Col key={character.id} md={4} className="">
              <CardContainerGame
                key={character.id}
                character={character}
                randomCharacter={randomCharacter}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainerRandomName;
