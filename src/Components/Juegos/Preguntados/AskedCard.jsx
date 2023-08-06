import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import imagePreguntados from "../../../Images/Image-preguntados.png";

function AskedCard({ askCard }) {
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
          <ListGroup.Item>
            <div className="game-preguntados-card__container__btn">
              <Button className="game-preguntados-card__btn__answer1">
                {askCard.answers[0].answer}
              </Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="game-preguntados-card__container__btn">
              <Button className="game-preguntados-card__btn__answer2">
                {askCard.answers[2].answer}
              </Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="game-preguntados-card__container__btn">
              <Button className="game-preguntados-card__btn__answer3">
                {askCard.answers[4].answer}
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default AskedCard;
