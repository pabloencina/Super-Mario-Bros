import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import imagePreguntados from "../../../Images/Image-preguntados.png";

function AskedCard({ askCard, isActive, handleClickQuestionButton }) {
  if (!isActive) {
    return null;
  }

  return (
    <Container className="game-preguntados-card__container__general">
      <Card className="game-preguntados-card__container__card">
        <div className="game-preguntados-card__container__image">
          <Card.Img
            className="game-preguntados-card__image"
            variant="top"
            src={imagePreguntados}
          />
        </div>
        <Card.Body>
          <div className="game-preguntados-card__container__title">
            <Card.Title className="game-preguntados-card__title">
              {askCard.title}
            </Card.Title>
          </div>
          <div className="game-preguntados-card__container__text">
            <Card.Text className="game-preguntados-card__text">
              {askCard.question}
            </Card.Text>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {askCard.answers.map((answer, index) => (
            <ListGroup.Item key={index}>
              <div className="game-preguntados-card__container__btn">
                <Button
                  style={{
                    backgroundColor: "#43b047",
                    border: "none",
                    fontFamily: "Monospace",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                  onClick={() => handleClickQuestionButton(index)}
                  className={`game-preguntados-card__btn__answer${index + 1}`}
                >
                  {answer.answer}
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default AskedCard;
