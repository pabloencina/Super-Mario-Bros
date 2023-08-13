import { Button, Card, Col, Container, Row } from "react-bootstrap";
//import questionBox from "../../Images/signo-de-pregunta.png";
import questionBox from "../../../Images/signo-de-pregunta.png";
import { Link } from "react-router-dom";
import { useClicks } from "../../Context/ClicContext";

const CardGameInWhite = ({
  handleCardClick,
  selectedCharacter,
  randomCharacter,
}) => {
  const { totalClicks, incrementTotalClicks } = useClicks();
  const message =
    selectedCharacter === randomCharacter.name
      ? totalClicks === 1
        ? "FELICITACIONES!!! OBTUVISTE:"
        : totalClicks >= 2 && totalClicks <= 5
        ? "LO HAS HECHO BIEN. OBTUVISTE:"
        : totalClicks >= 5 && totalClicks <= 7
        ? "LO HAS HECHO BIEN. OBTUVISTE:"
        : totalClicks >= 7 && totalClicks <= 10
        ? "LO HAS HECHO BIEN. OBTUVISTE:"
        : "SIGUE INTENTÁNDOLO!!! OBTUVISTE:"
      : "";

  const points =
    selectedCharacter === randomCharacter.name &&
    (totalClicks === 1
      ? 100
      : totalClicks >= 2 && totalClicks <= 5
      ? 75
      : totalClicks >= 5 && totalClicks <= 7
      ? 50
      : totalClicks >= 7 && totalClicks <= 10
      ? 25
      : 0);

  return (
    <Container className="game__container">
      <Button
        className="game__button_card"
        onClick={() => {
          handleCardClick();
          incrementTotalClicks();
        }}
      >
        <Card className="game__card_container">
          {selectedCharacter === randomCharacter.name ? (
            <span className="game__container__message_win">
              <p className="game__message_win">{message}</p>
              <p className="game__message-point">{points} PUNTOS</p>
              <div className="game__container_btn-game">
                {/* <Button className="game__btn-game"> */}
                <Link
                  onClick={() => window.location.reload()}
                  to="/juegos/adivinanza"
                  className="game__btn-game"
                >
                  {/* <Button
                    onClick={() => window.location.reload()}
                    className="game__btn-game"
                  > */}
                  ¿SEGUIR JUGANDO?
                  {/* </Button> */}
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
