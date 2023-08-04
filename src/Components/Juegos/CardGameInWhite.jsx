import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import questionBox from "../../Images/signo-de-pregunta.png";
import { Link } from "react-router-dom";

const CardGameInWhite = ({
  handleCardClick,
  selectedCharacter,
  randomCharacter,
}) => {
  return (
    <Container className="game__container">
      <Button className="game__button_card" onClick={handleCardClick}>
        <Card className="game__card_container">
          {selectedCharacter === randomCharacter.name ? (
            <span className="game__container_message_win">
              <p className="game__message_win">
                FELICITACIONES !!! TU PUNTUACIÓN ES DE:
              </p>
              <p className="game__message-point">10 puntos</p>
              <div className="game__container_btn-game">
                {/* <Button className="game__btn-game"> */}
                <Link to="/juegos" className="game__btn-game">
                  <Button
                    onClick={() => window.location.reload()}
                    className="game__btn-game"
                  >
                    ¿QUIERES SEGUIR JUGANDO?
                  </Button>
                </Link>
                {/* </Button> */}
              </div>
            </span>
          ) : (
            <Row sm={12} className="">
              <Col md={6} className="game__container_image_questionBox">
                <img
                  src={questionBox}
                  alt="menu"
                  className="game__image_questionBox"
                />
              </Col>

              <div className="">
                <div md={6}></div>
              </div>
            </Row>
          )}
        </Card>
      </Button>
    </Container>
  );
};

export default CardGameInWhite;
